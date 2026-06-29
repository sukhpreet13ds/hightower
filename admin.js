'use strict';

const $ = (id) => document.getElementById(id);
const api = (path, opts = {}) =>
    fetch('/api/' + path, { credentials: 'same-origin', ...opts });

function esc(s) {
    return (s == null ? '' : String(s)).replace(/[&<>"']/g, c =>
        ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function toast(msg, isErr) {
    const t = document.createElement('div');
    t.className = 'toast' + (isErr ? ' err' : '');
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2600);
}

function showLoader(id) {
    const list = $(id);
    if (list) list.innerHTML = '<div class="loader-container"><div class="loader"></div></div>';
}

const FORM_LABELS = {
    hero: 'Hero Form', consultation: 'Consultation', 'get-started': 'Get Started', contact: 'Contact Us',
};

/* ---------------- Auth ---------------- */
async function checkAuth() {
    const r = await api('admin/me');
    if (r.ok) { showDashboard(); } else { showLogin(); }
}

function showLogin() { $('login-view').classList.remove('hidden'); $('dashboard-view').classList.add('hidden'); }
function showDashboard() {
    $('login-view').classList.add('hidden');
    $('dashboard-view').classList.remove('hidden');
    loadSubmissions();
}

$('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    $('login-error').textContent = '';
    const r = await api('admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: $('login-username').value, password: $('login-password').value }),
    });
    const data = await r.json();
    if (r.ok) { showDashboard(); }
    else { $('login-error').textContent = data.error || 'Login failed'; }
});

$('logout-btn').addEventListener('click', async () => {
    await api('admin/logout', { method: 'POST' });
    showLogin();
});

/* ---------------- Tabs ---------------- */
document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const tab = btn.dataset.tab;
        $('tab-submissions').classList.toggle('hidden', tab !== 'submissions');
        $('tab-blogs').classList.toggle('hidden', tab !== 'blogs');
        $('tab-news').classList.toggle('hidden', tab !== 'news');
        $('tab-newsletter').classList.toggle('hidden', tab !== 'newsletter');
        if (tab === 'submissions') loadSubmissions();
        else if (tab === 'blogs') loadBlogs();
        else if (tab === 'news') loadNews();
        else if (tab === 'newsletter') loadNewsletter();
    });
});

/* ---------------- Submissions ---------------- */
$('sub-refresh').addEventListener('click', loadSubmissions);
$('sub-filter').addEventListener('change', loadSubmissions);

async function loadSubmissions() {
    showLoader('submissions-list');
    const type = $('sub-filter').value;
    const r = await api('admin/submissions?type=' + encodeURIComponent(type));
    if (!r.ok) return showLogin();
    const { submissions, unread } = await r.json();

    const badge = $('unread-badge');
    if (unread > 0) { badge.textContent = unread; badge.classList.remove('hidden'); }
    else badge.classList.add('hidden');

    const list = $('submissions-list');
    $('submissions-empty').classList.toggle('hidden', submissions.length > 0);
    list.innerHTML = submissions.map(s => {
        const rows = [];
        if (s.email) rows.push(`<div class="row"><b>Email:</b> ${esc(s.email)}</div>`);
        if (s.phone) rows.push(`<div class="row"><b>Phone:</b> ${esc(s.phone)}</div>`);
        if (s.case_type) rows.push(`<div class="row"><b>Case type:</b> ${esc(s.case_type)}</div>`);
        const when = new Date(s.created_at).toLocaleString();
        return `
        <div class="sub-card ${s.is_read ? '' : 'unread'}">
            <span class="tag">${esc(FORM_LABELS[s.form_type] || s.form_type)}</span>
            <h4>${esc(s.name || 'Unknown')}</h4>
            ${rows.join('')}
            ${s.message ? `<div class="msg">${esc(s.message)}</div>` : ''}
            <div class="time">${esc(when)}</div>
            <div class="actions">
                ${s.is_read ? '' : `<button class="link-btn" data-read="${s.id}">Mark read</button>`}
                <button class="del-btn" data-del="${s.id}">Delete</button>
            </div>
        </div>`;
    }).join('');

    list.querySelectorAll('[data-read]').forEach(b =>
        b.addEventListener('click', async () => {
            await api('admin/submissions/' + b.dataset.read + '/read', { method: 'POST' });
            loadSubmissions();
        }));
    list.querySelectorAll('[data-del]').forEach(b =>
        b.addEventListener('click', async () => {
            if (!confirm('Delete this submission?')) return;
            await api('admin/submissions/' + b.dataset.del, { method: 'DELETE' });
            toast('Submission deleted');
            loadSubmissions();
        }));
}

/* ---------------- Blogs ---------------- */
async function loadBlogs() {
    showLoader('blogs-list');
    const r = await api('admin/blogs');
    if (!r.ok) return showLogin();
    const blogs = await r.json();
    const list = $('blogs-list');
    $('blogs-empty').classList.toggle('hidden', blogs.length > 0);
    list.innerHTML = blogs.map(b => `
        <div class="blog-card-admin">
            <div class="thumb" style="background-image:url('${b.image ? esc(b.image) : 'assets/hh-blog1.jpg'}')"></div>
            <div class="body">
                <h4>${esc(b.title)}</h4>
                <p class="excerpt">${esc(b.excerpt || (b.content || '').slice(0, 120))}</p>
                <div class="meta">
                    <span class="status-pill ${b.published ? 'pub' : 'draft'}">${b.published ? 'Published' : 'Draft'}</span>
                    &nbsp; ${esc(new Date(b.created_at).toLocaleDateString())}
                    ${b.author ? ' · ' + esc(b.author) : ''}
                </div>
                <div class="actions">
                    <button class="link-btn" data-edit="${b.id}">Edit</button>
                    <button class="del-btn" data-del="${b.id}">Delete</button>
                </div>
            </div>
        </div>`).join('');

    list.querySelectorAll('[data-edit]').forEach(btn =>
        btn.addEventListener('click', () => openPostModal('blogs', blogs.find(x => x.id == btn.dataset.edit))));
    list.querySelectorAll('[data-del]').forEach(btn =>
        btn.addEventListener('click', async () => {
            if (!confirm('Delete this blog post?')) return;
            await api('admin/blogs/' + btn.dataset.del, { method: 'DELETE' });
            toast('Blog deleted');
            loadBlogs();
        }));
}

/* ---- Rich text editor ---- */
const editor = $('blog-content-editor');

// Convert stored content into editor HTML. Plain-text (legacy) posts get
// their blank-line paragraphs turned into <p>; HTML content loads as-is.
function contentToHtml(content) {
    const c = content || '';
    if (/<[a-z][\s\S]*>/i.test(c)) return c; // already HTML
    return c.split(/\n\s*\n/).filter(Boolean)
        .map(p => '<p>' + p.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\n/g, '<br>') + '</p>')
        .join('');
}

document.querySelectorAll('.editor-toolbar [data-cmd]').forEach(btn => {
    btn.addEventListener('click', () => {
        editor.focus();
        const cmd = btn.dataset.cmd;
        if (cmd === 'createLink') {
            const url = prompt('Link URL:', 'https://');
            if (url) document.execCommand('createLink', false, url);
        } else if (cmd === 'formatBlock') {
            document.execCommand('formatBlock', false, btn.dataset.val);
        } else {
            document.execCommand(cmd, false, null);
        }
    });
});

// Insert table
$('tb-table').addEventListener('click', () => {
    const rows = parseInt(prompt('Number of rows (including header):', '3'), 10);
    const cols = parseInt(prompt('Number of columns:', '3'), 10);
    if (!rows || !cols) return;
    let html = '<table class="blog-table"><thead><tr>';
    for (let c = 0; c < cols; c++) html += '<th>Heading</th>';
    html += '</tr></thead><tbody>';
    for (let r = 0; r < rows - 1; r++) {
        html += '<tr>';
        for (let c = 0; c < cols; c++) html += '<td>Cell</td>';
        html += '</tr>';
    }
    html += '</tbody></table><p><br></p>';
    editor.focus();
    document.execCommand('insertHTML', false, html);
});

// Insert image (upload then embed)
$('tb-image').addEventListener('click', () => $('tb-image-input').click());
$('tb-image-input').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData();
    fd.append('file', file);
    const r = await api('admin/upload', { method: 'POST', body: fd });
    const data = await r.json();
    if (r.ok) {
        editor.focus();
        document.execCommand('insertHTML', false,
            `<img src="${data.url}" alt="" style="max-width:100%;height:auto;border-radius:8px;margin:14px 0;">`);
        toast('Image inserted');
    } else { toast(data.error || 'Upload failed', true); }
    e.target.value = '';
});

/* ---- Post editor modal (Blogs & News) ---- */
let activePostType = 'blogs';

function openPostModal(type, post) {
    activePostType = type;
    $('blog-error').textContent = '';
    $('blog-form').reset();
    $('blog-image').value = '';
    $('blog-logo').value = '';
    if (post) {
        $('blog-modal-title').textContent = type === 'blogs' ? 'Edit Blog' : 'Edit News';
        $('blog-id').value = post.id;
        $('blog-title').value = post.title || '';
        $('blog-excerpt').value = post.excerpt || '';
        $('blog-tags').value = post.tags || '';
        editor.innerHTML = contentToHtml(post.content);
        $('blog-author').value = post.author || '';
        $('blog-published').value = String(post.published);
        togglePreview('blog-current-image', 'blog-image-preview', post.image);
        togglePreview('blog-current-logo', 'blog-logo-preview', post.logo);
    } else {
        $('blog-modal-title').textContent = type === 'blogs' ? 'New Blog' : 'New News';
        $('blog-id').value = '';
        editor.innerHTML = '';
        $('blog-current-image').classList.add('hidden');
        $('blog-current-logo').classList.add('hidden');
    }
    $('blog-modal').classList.remove('hidden');
}
function togglePreview(wrapId, imgId, src) {
    if (src) { $(wrapId).classList.remove('hidden'); $(imgId).src = src; }
    else $(wrapId).classList.add('hidden');
}
function closeBlogModal() { $('blog-modal').classList.add('hidden'); }

$('new-blog-btn').addEventListener('click', () => openPostModal('blogs', null));
$('new-news-btn').addEventListener('click', () => openPostModal('news', null));
$('blog-modal-close').addEventListener('click', closeBlogModal);
$('blog-cancel').addEventListener('click', closeBlogModal);

$('blog-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    $('blog-error').textContent = '';
    const id = $('blog-id').value;
    const fd = new FormData();
    fd.append('title', $('blog-title').value);
    fd.append('excerpt', $('blog-excerpt').value);
    fd.append('tags', $('blog-tags').value);
    fd.append('content', editor.innerHTML.trim());
    fd.append('author', $('blog-author').value);
    fd.append('published', $('blog-published').value);
    if ($('blog-image').files[0]) fd.append('image', $('blog-image').files[0]);
    if ($('blog-logo').files[0]) fd.append('logo', $('blog-logo').files[0]);

    const r = await api(`admin/${activePostType}` + (id ? '/' + id : ''), {
        method: id ? 'PUT' : 'POST',
        body: fd,
    });
    const data = await r.json();
    if (r.ok) {
        closeBlogModal();
        toast(id ? `${activePostType === 'blogs' ? 'Blog' : 'News'} updated` : `${activePostType === 'blogs' ? 'Blog' : 'News'} created`);
        if (activePostType === 'blogs') loadBlogs(); else loadNews();
    }
    else { $('blog-error').textContent = data.error || 'Save failed'; }
});

/* ---------------- News ---------------- */
async function loadNews() {
    showLoader('news-list');
    const r = await api('admin/news');
    if (!r.ok) return showLogin();
    const news = await r.json();
    const list = $('news-list');
    $('news-empty').classList.toggle('hidden', news.length > 0);
    list.innerHTML = news.map(n => `
        <div class="blog-card-admin">
            <div class="thumb" style="background-image:url('${n.image ? esc(n.image) : 'assets/hh-blog1.jpg'}')"></div>
            <div class="body">
                <h4>${esc(n.title)}</h4>
                <p class="excerpt">${esc(n.excerpt || (n.content || '').slice(0, 120))}</p>
                <div class="meta">
                    <span class="status-pill ${n.published ? 'pub' : 'draft'}">${n.published ? 'Published' : 'Draft'}</span>
                    &nbsp; ${esc(new Date(n.created_at).toLocaleDateString())}
                    ${n.author ? ' · ' + esc(n.author) : ''}
                </div>
                <div class="actions">
                    <button class="link-btn" data-edit="${n.id}">Edit</button>
                    <button class="del-btn" data-del="${n.id}">Delete</button>
                </div>
            </div>
        </div>`).join('');

    list.querySelectorAll('[data-edit]').forEach(btn =>
        btn.addEventListener('click', () => openPostModal('news', news.find(x => x.id == btn.dataset.edit))));
    list.querySelectorAll('[data-del]').forEach(btn =>
        btn.addEventListener('click', async () => {
            if (!confirm('Delete this news post?')) return;
            await api('admin/news/' + btn.dataset.del, { method: 'DELETE' });
            toast('News deleted');
            loadNews();
        }));
}

/* ---------------- Newsletter ---------------- */
$('newsletter-refresh').addEventListener('click', loadNewsletter);

async function loadNewsletter() {
    showLoader('newsletter-list');
    const r = await api('admin/newsletter');
    if (!r.ok) return showLogin();
    const subscribers = await r.json();
    const list = $('newsletter-list');
    $('newsletter-empty').classList.toggle('hidden', subscribers.length > 0);
    list.innerHTML = subscribers.map(s => {
        const when = new Date(s.created_at).toLocaleString();
        return `
        <div class="sub-card">
            <h4>${esc(s.email)}</h4>
            <div class="time">Subscribed on: ${esc(when)}</div>
            <div class="actions">
                <button class="del-btn" data-del-newsletter="${s.id}">Delete</button>
            </div>
        </div>`;
    }).join('');

    list.querySelectorAll('[data-del-newsletter]').forEach(b =>
        b.addEventListener('click', async () => {
            if (!confirm('Delete this subscriber?')) return;
            await api('admin/newsletter/' + b.dataset.delNewsletter, { method: 'DELETE' });
            toast('Subscriber deleted');
            loadNewsletter();
        }));
}

checkAuth();

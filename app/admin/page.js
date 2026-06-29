'use client';
import Script from 'next/script';

export default function AdminPage() {
  return (
    <>
      <link rel="stylesheet" href="/admin.css?v=2" />

      {/* LOGIN */}
      <div id="login-view" className="login-wrap">
        <form id="login-form" className="login-card">
          <h1 className="login-brand">Hightower &amp; Hightower</h1>
          <p className="login-sub">Admin Panel</p>
          <label>Username
            <input type="text" id="login-username" autoComplete="username" required />
          </label>
          <label>Password
            <input type="password" id="login-password" autoComplete="current-password" required />
          </label>
          <button type="submit" className="btn-primary">Sign In</button>
          <p id="login-error" className="form-error"></p>
        </form>
      </div>

      {/* DASHBOARD */}
      <div id="dashboard-view" className="dash hidden">
        <aside className="sidebar">
          <div className="sidebar-brand">
            <img src="/assets/h&h-logo.svg" alt="Hightower & Hightower" className="sidebar-logo" />
          </div>
          <nav>
            <button className="nav-item active" data-tab="submissions">
              Submissions <span id="unread-badge" className="badge hidden">0</span>
            </button>
            <button className="nav-item" data-tab="blogs">Blogs</button>
            <button className="nav-item" data-tab="news">News</button>
            <button className="nav-item" data-tab="newsletter">Newsletter</button>
          </nav>
          <button id="logout-btn" className="logout">Log out</button>
        </aside>

        <main className="content">
          {/* SUBMISSIONS TAB */}
          <section id="tab-submissions" className="tab">
            <div className="content-head">
              <h2>Form Submissions</h2>
              <div className="filters">
                <select id="sub-filter">
                  <option value="all">All forms</option>
                  <option value="hero">Hero form</option>
                  <option value="consultation">Consultation / Modal</option>
                  <option value="get-started">Get Started</option>
                  <option value="contact">Contact Us</option>
                </select>
                <button id="sub-refresh" className="btn-ghost">Refresh</button>
              </div>
            </div>
            <div id="submissions-list" className="cards"></div>
            <p id="submissions-empty" className="empty hidden">No submissions yet.</p>
          </section>

          {/* BLOGS TAB */}
          <section id="tab-blogs" className="tab hidden">
            <div className="content-head">
              <h2>Blog Posts</h2>
              <button id="new-blog-btn" className="btn-primary">+ New Blog</button>
            </div>
            <div id="blogs-list" className="cards"></div>
            <p id="blogs-empty" className="empty hidden">No blogs yet. Create your first post.</p>
          </section>

          {/* NEWS TAB */}
          <section id="tab-news" className="tab hidden">
            <div className="content-head">
              <h2>News Posts</h2>
              <button id="new-news-btn" className="btn-primary">+ New News</button>
            </div>
            <div id="news-list" className="cards"></div>
            <p id="news-empty" className="empty hidden">No news yet. Create your first news post.</p>
          </section>

          {/* NEWSLETTER TAB */}
          <section id="tab-newsletter" className="tab hidden">
            <div className="content-head">
              <h2>Newsletter Subscribers</h2>
              <button id="newsletter-refresh" className="btn-ghost">Refresh</button>
            </div>
            <div id="newsletter-list" className="cards"></div>
            <p id="newsletter-empty" className="empty hidden">No newsletter subscribers yet.</p>
          </section>
        </main>
      </div>

      {/* BLOG EDITOR MODAL */}
      <div id="blog-modal" className="modal hidden">
        <div className="modal-box">
          <button className="modal-x" id="blog-modal-close">&times;</button>
          <h3 id="blog-modal-title">New Blog</h3>
          <form id="blog-form">
            <input type="hidden" id="blog-id" />
            <label>Title (H1 heading) *
              <input type="text" id="blog-title" required placeholder="e.g. What Evidence Strengthens Your Injury Case?" />
            </label>
            <label>Short excerpt (shown on cards)
              <textarea id="blog-excerpt" rows="2" placeholder="One or two sentences shown in the news cards…"></textarea>
            </label>

            <label>Tags / Categories
              <input type="text" id="blog-tags" placeholder="e.g. car accident, ocala lawyer, wrongful death claim" />
            </label>
            <p className="field-hint">Separate tags with commas. They appear as “Post Tags” at the end of the article.</p>

            <label style={{ marginBottom: '6px' }}>Full content (article body)</label>
            <div className="editor-toolbar">
              <button type="button" data-cmd="bold" title="Bold"><b>B</b></button>
              <button type="button" data-cmd="italic" title="Italic"><i>I</i></button>
              <button type="button" data-cmd="formatBlock" data-val="H2" title="Heading">H2</button>
              <button type="button" data-cmd="formatBlock" data-val="P" title="Normal text">¶</button>
              <button type="button" data-cmd="insertUnorderedList" title="Bulleted list">• List</button>
              <button type="button" data-cmd="insertOrderedList" title="Numbered list">1. List</button>
              <button type="button" data-cmd="createLink" title="Insert link">🔗 Link</button>
              <button type="button" id="tb-image" title="Insert image">🖼 Image</button>
              <button type="button" id="tb-table" title="Insert table">▦ Table</button>
              <button type="button" data-cmd="removeFormat" title="Clear formatting">⌫ Clear</button>
            </div>
            <div id="blog-content-editor" className="rich-editor" contentEditable={true}
              data-placeholder="Write the full article here. Use the toolbar to add headings, lists, tables and images…"></div>
            <input type="file" id="tb-image-input" accept="image/*" style={{ display: 'none' }} />

            <div className="grid-2">
              <label>Author
                <input type="text" id="blog-author" placeholder="Daniel L. Hightower" />
              </label>
              <label>Status
                <select id="blog-published">
                  <option value="1">Published (visible on site)</option>
                  <option value="0">Draft (hidden)</option>
                </select>
              </label>
            </div>
            <div className="grid-2">
              <div>
                <label>Featured image
                  <input type="file" id="blog-image" accept="image/*" />
                </label>
                <div id="blog-current-image" className="current-image hidden">
                  <img id="blog-image-preview" alt="current" />
                  <span>Current — choose a file to replace.</span>
                </div>
              </div>
              <div>
                <label>Source / publication logo
                  <input type="file" id="blog-logo" accept="image/*" />
                </label>
                <div id="blog-current-logo" className="current-image hidden">
                  <img id="blog-logo-preview" alt="current logo" />
                  <span>Current — choose a file to replace.</span>
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn-ghost" id="blog-cancel">Cancel</button>
              <button type="submit" className="btn-primary">Save Blog</button>
            </div>
            <p id="blog-error" className="form-error"></p>
          </form>
        </div>
      </div>

      {/* SUBMISSION EDIT MODAL */}
      <div id="sub-modal" className="modal hidden">
        <div className="modal-box">
          <button className="modal-x" id="sub-modal-close">&times;</button>
          <h3>Edit Submission</h3>
          <form id="sub-form">
            <input type="hidden" id="sub-id" />
            <label>Name
              <input type="text" id="sub-name" />
            </label>
            <div className="grid-2">
              <label>Email
                <input type="text" id="sub-email" />
              </label>
              <label>Phone
                <input type="text" id="sub-phone" />
              </label>
            </div>
            <label>Case type
              <input type="text" id="sub-case-type" />
            </label>
            <label>Message
              <textarea id="sub-message" rows="4"></textarea>
            </label>
            <div className="modal-actions">
              <button type="button" className="btn-ghost" id="sub-cancel">Cancel</button>
              <button type="submit" className="btn-primary">Save Changes</button>
            </div>
            <p id="sub-error" className="form-error"></p>
          </form>
        </div>
      </div>

      <Script src="/admin.js?v=2" strategy="afterInteractive" />
    </>
  );
}

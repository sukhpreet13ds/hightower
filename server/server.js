'use strict';

const path = require('node:path');
const crypto = require('node:crypto');
const express = require('express');
const multer = require('multer');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 5702;
const HOST = process.env.HOST || '0.0.0.0';   // bind all interfaces so a forwarded port is reachable
const ROOT = path.join(__dirname, '..');
const UPLOAD_DIR = path.join(ROOT, 'data', 'uploads');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ----------------------------------------------------------------------------
 * Auth — simple in-memory session tokens stored in an httpOnly cookie.
 * -------------------------------------------------------------------------- */
const sessions = new Map(); // token -> { username, created }

function parseCookies(req) {
  const header = req.headers.cookie || '';
  return Object.fromEntries(
    header.split(';').map(c => {
      const i = c.indexOf('=');
      return [c.slice(0, i).trim(), decodeURIComponent(c.slice(i + 1))];
    }).filter(p => p[0])
  );
}

function requireAuth(req, res, next) {
  const token = parseCookies(req).hh_session;
  if (token && sessions.has(token)) {
    req.admin = sessions.get(token);
    return next();
  }
  return res.status(401).json({ error: 'Not authenticated' });
}

/* ----------------------------------------------------------------------------
 * File uploads (blog images)
 * -------------------------------------------------------------------------- */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || '.jpg';
    const safe = crypto.randomBytes(8).toString('hex');
    cb(null, `blog-${safe}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (/^image\//.test(file.mimetype)) cb(null, true);
    else cb(new Error('Only image files are allowed'));
  },
});

/* ============================================================================
 * PUBLIC API
 * ========================================================================== */

// Save any front-end form (hero / consultation modal / get-started / contact).
app.post('/api/submissions', (req, res) => {
  const b = req.body || {};
  const formType = String(b.form_type || 'contact').slice(0, 40);

  const firstName = (b.first_name || '').toString().trim() || null;
  const lastName = (b.last_name || '').toString().trim() || null;
  let name = (b.name || '').toString().trim() || null;
  if (!name && (firstName || lastName)) {
    name = [firstName, lastName].filter(Boolean).join(' ');
  }

  const email = (b.email || '').toString().trim() || null;
  const phone = (b.phone || '').toString().trim() || null;
  const caseType = (b.case_type || '').toString().trim() || null;
  const message = (b.message || '').toString().trim() || null;
  const consent = b.consent ? 1 : 0;

  if (!name && !email && !phone) {
    return res.status(400).json({ error: 'Please provide a name, email or phone.' });
  }

  const stmt = db.prepare(`
    INSERT INTO submissions
      (form_type, first_name, last_name, name, email, phone, case_type, message, consent, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);
  const info = stmt.run(
    formType, firstName, lastName, name, email, phone, caseType, message, consent,
    new Date().toISOString()
  );
  res.json({ ok: true, id: Number(info.lastInsertRowid) });
});

// Published blogs (supports ?limit=3 for the home page news section).
app.get('/api/blogs', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit, 10) || 100, 100);
  const rows = db.prepare(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM blogs WHERE published = 1
    ORDER BY datetime(created_at) DESC, id DESC
    LIMIT ?
  `).all(limit);
  res.json(rows);
});

// A single published blog (for blog-detail.html).
app.get('/api/blogs/:id', (req, res) => {
  const row = db.prepare(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM blogs WHERE id = ? AND published = 1
  `).get(Number(req.params.id));
  if (!row) return res.status(404).json({ error: 'Not found' });
  res.json(row);
});

/* ============================================================================
 * ADMIN API
 * ========================================================================== */

app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  const row = db.prepare('SELECT * FROM admins WHERE username = ?').get(String(username || ''));
  if (!row || row.password !== String(password || '')) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = crypto.randomBytes(24).toString('hex');
  sessions.set(token, { username: row.username, created: Date.now() });
  res.setHeader('Set-Cookie',
    `hh_session=${token}; HttpOnly; SameSite=Lax; Path=/; Max-Age=86400`);
  res.json({ ok: true, username: row.username });
});

app.post('/api/admin/logout', requireAuth, (req, res) => {
  const token = parseCookies(req).hh_session;
  sessions.delete(token);
  res.setHeader('Set-Cookie', 'hh_session=; HttpOnly; Path=/; Max-Age=0');
  res.json({ ok: true });
});

app.get('/api/admin/me', requireAuth, (req, res) => {
  res.json({ username: req.admin.username });
});

// ---- Submissions (leads + contact) ----
app.get('/api/admin/submissions', requireAuth, (req, res) => {
  const type = req.query.type;
  let rows;
  if (type && type !== 'all') {
    rows = db.prepare('SELECT * FROM submissions WHERE form_type = ? ORDER BY id DESC').all(type);
  } else {
    rows = db.prepare('SELECT * FROM submissions ORDER BY id DESC').all();
  }
  const unread = db.prepare('SELECT COUNT(*) AS c FROM submissions WHERE is_read = 0').get().c;
  res.json({ submissions: rows, unread });
});

app.post('/api/admin/submissions/:id/read', requireAuth, (req, res) => {
  db.prepare('UPDATE submissions SET is_read = 1 WHERE id = ?').run(Number(req.params.id));
  res.json({ ok: true });
});

app.delete('/api/admin/submissions/:id', requireAuth, (req, res) => {
  db.prepare('DELETE FROM submissions WHERE id = ?').run(Number(req.params.id));
  res.json({ ok: true });
});

// ---- Blogs (full CRUD, admin sees unpublished too) ----
app.get('/api/admin/blogs', requireAuth, (req, res) => {
  const rows = db.prepare('SELECT * FROM blogs ORDER BY id DESC').all();
  res.json(rows);
});

const blogUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'logo', maxCount: 1 },
]);

function uploadedPath(req, field) {
  const f = req.files && req.files[field] && req.files[field][0];
  return f ? `/uploads/${f.filename}` : null;
}

app.post('/api/admin/blogs', requireAuth, blogUpload, (req, res) => {
  const b = req.body || {};
  const title = (b.title || '').toString().trim();
  if (!title) return res.status(400).json({ error: 'Title (H1 heading) is required' });

  const image = uploadedPath(req, 'image') || ((b.image_url || '').toString().trim() || null);
  const logo = uploadedPath(req, 'logo') || ((b.logo_url || '').toString().trim() || null);

  const info = db.prepare(`
    INSERT INTO blogs (title, excerpt, content, image, logo, tags, author, published, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    title,
    (b.excerpt || '').toString().trim() || null,
    (b.content || '').toString().trim() || null,
    image,
    logo,
    (b.tags || '').toString().trim() || null,
    (b.author || '').toString().trim() || null,
    b.published === '0' ? 0 : 1,
    new Date().toISOString()
  );
  res.json({ ok: true, id: Number(info.lastInsertRowid) });
});

app.put('/api/admin/blogs/:id', requireAuth, blogUpload, (req, res) => {
  const id = Number(req.params.id);
  const existing = db.prepare('SELECT * FROM blogs WHERE id = ?').get(id);
  if (!existing) return res.status(404).json({ error: 'Not found' });

  const b = req.body || {};
  const title = (b.title || '').toString().trim() || existing.title;
  const image = uploadedPath(req, 'image') || ((b.image_url || '').toString().trim() || existing.image);
  const logo = uploadedPath(req, 'logo') || ((b.logo_url || '').toString().trim() || existing.logo);

  db.prepare(`
    UPDATE blogs SET title = ?, excerpt = ?, content = ?, image = ?, logo = ?, tags = ?, author = ?, published = ?
    WHERE id = ?
  `).run(
    title,
    (b.excerpt || '').toString().trim() || null,
    (b.content || '').toString().trim() || null,
    image,
    logo,
    (b.tags || '').toString().trim() || null,
    (b.author || '').toString().trim() || null,
    b.published === '0' ? 0 : 1,
    id
  );
  res.json({ ok: true });
});

// Inline upload used by the blog editor to drop images into the article body.
app.post('/api/admin/upload', requireAuth, upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file' });
  res.json({ ok: true, url: `/uploads/${req.file.filename}` });
});

app.delete('/api/admin/blogs/:id', requireAuth, (req, res) => {
  db.prepare('DELETE FROM blogs WHERE id = ?').run(Number(req.params.id));
  res.json({ ok: true });
});

/* ----------------------------------------------------------------------------
 * Static hosting: uploaded images + the existing website
 * -------------------------------------------------------------------------- */
app.use('/uploads', express.static(UPLOAD_DIR));
app.use(express.static(ROOT));

// Multer / generic error handler.
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(400).json({ error: err.message });
});

app.listen(PORT, HOST, () => {
  const os = require('node:os');
  const lan = [].concat(...Object.values(os.networkInterfaces()))
    .filter(i => i.family === 'IPv4' && !i.internal).map(i => i.address);
  console.log(`Hightower site listening on ${HOST}:${PORT}`);
  console.log(`  Local:   http://localhost:${PORT}`);
  lan.forEach(ip => console.log(`  Network: http://${ip}:${PORT}`));
  console.log(`  Admin:   http://localhost:${PORT}/admin.html`);
});

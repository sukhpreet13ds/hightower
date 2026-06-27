'use strict';

const path = require('node:path');
const fs = require('node:fs');
const { DatabaseSync } = require('node:sqlite');

const DATA_DIR = path.join(__dirname, '..', 'data');
fs.mkdirSync(path.join(DATA_DIR, 'uploads'), { recursive: true });

const db = new DatabaseSync(path.join(DATA_DIR, 'hightower.db'));

db.exec(`
  CREATE TABLE IF NOT EXISTS submissions (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    form_type   TEXT    NOT NULL,           -- hero | consultation | get-started | contact
    first_name  TEXT,
    last_name   TEXT,
    name        TEXT,
    email       TEXT,
    phone       TEXT,
    case_type   TEXT,
    message     TEXT,
    consent     INTEGER DEFAULT 0,
    is_read     INTEGER DEFAULT 0,
    created_at  TEXT    NOT NULL
  );

  CREATE TABLE IF NOT EXISTS blogs (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT    NOT NULL,           -- the H1 heading
    excerpt     TEXT,
    content     TEXT,                       -- HTML (may contain tables / inline images)
    image       TEXT,                       -- /uploads/xxxx.jpg  (or external url) — featured image
    logo        TEXT,                       -- /uploads/xxxx.png  — source / publication logo
    tags        TEXT,                       -- comma-separated tags / categories
    author      TEXT,
    published   INTEGER DEFAULT 1,
    created_at  TEXT    NOT NULL
  );

  CREATE TABLE IF NOT EXISTS admins (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    username    TEXT    UNIQUE NOT NULL,
    password    TEXT    NOT NULL
  );
`);

// Lightweight migration: add columns to an existing blogs table if missing.
const blogCols = db.prepare('PRAGMA table_info(blogs)').all().map(c => c.name);
if (!blogCols.includes('logo')) db.exec('ALTER TABLE blogs ADD COLUMN logo TEXT');
if (!blogCols.includes('tags')) db.exec('ALTER TABLE blogs ADD COLUMN tags TEXT');

// Seed a default admin account if none exists.
const adminCount = db.prepare('SELECT COUNT(*) AS c FROM admins').get().c;
if (adminCount === 0) {
  db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)')
    .run('admin', 'hightower123');
  console.log('[db] Seeded default admin -> username: admin  password: hightower123');
}

module.exports = db;

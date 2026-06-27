import path from 'node:path';
import fs from 'node:fs';
import { DatabaseSync } from 'node:sqlite';

// Reuse the same SQLite file the Express version used (self-hosted, persistent FS).
const DATA_DIR = path.join(process.cwd(), 'data');
fs.mkdirSync(DATA_DIR, { recursive: true });

function init() {
  const db = new DatabaseSync(path.join(DATA_DIR, 'hightower.db'));

  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      form_type   TEXT    NOT NULL,
      first_name  TEXT, last_name TEXT, name TEXT,
      email       TEXT, phone TEXT, case_type TEXT, message TEXT,
      consent     INTEGER DEFAULT 0,
      is_read     INTEGER DEFAULT 0,
      created_at  TEXT    NOT NULL
    );
    CREATE TABLE IF NOT EXISTS blogs (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      title       TEXT    NOT NULL,
      excerpt     TEXT, content TEXT, image TEXT, logo TEXT, tags TEXT,
      author      TEXT,
      published   INTEGER DEFAULT 1,
      created_at  TEXT    NOT NULL
    );
    CREATE TABLE IF NOT EXISTS admins (
      id          INTEGER PRIMARY KEY AUTOINCREMENT,
      username    TEXT UNIQUE NOT NULL,
      password    TEXT NOT NULL
    );
  `);

  // migrations for older DBs
  const blogCols = db.prepare('PRAGMA table_info(blogs)').all().map(c => c.name);
  if (!blogCols.includes('logo')) db.exec('ALTER TABLE blogs ADD COLUMN logo TEXT');
  if (!blogCols.includes('tags')) db.exec('ALTER TABLE blogs ADD COLUMN tags TEXT');

  const adminCount = db.prepare('SELECT COUNT(*) AS c FROM admins').get().c;
  if (adminCount === 0) {
    db.prepare('INSERT INTO admins (username, password) VALUES (?, ?)')
      .run('admin', 'hightower123');
    console.log('[db] Seeded default admin -> admin / hightower123');
  }
  return db;
}

// Cache across hot-reloads / route invocations in a single Node process.
const g = globalThis;
const db = g.__hhDb || (g.__hhDb = init());

export default db;

import mysql from 'mysql2/promise';

const cfg = {
  host: process.env.MYSQL_HOST || '195.35.6.136',
  user: process.env.MYSQL_USER || 'HighTower',
  password: process.env.MYSQL_PASSWORD || 'HighTower@13DS',
  database: process.env.MYSQL_DATABASE || 'HighTower',
  waitForConnections: true,
  connectionLimit: 10,
  charset: 'utf8mb4',
};

// Cache the pool + schema-ready promise across hot reloads / route invocations.
const g = globalThis;
const pool = g.__hhPool || (g.__hhPool = mysql.createPool(cfg));

async function initSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS submissions (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      form_type   VARCHAR(40) NOT NULL,
      first_name  VARCHAR(255), last_name VARCHAR(255), name VARCHAR(255),
      email       VARCHAR(255), phone VARCHAR(64), case_type VARCHAR(128),
      message     TEXT,
      consent     INT DEFAULT 0,
      is_read     INT DEFAULT 0,
      created_at  VARCHAR(40) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      title       VARCHAR(512) NOT NULL,
      excerpt     TEXT, content MEDIUMTEXT,
      image       VARCHAR(1024), logo VARCHAR(1024), tags TEXT,
      author      VARCHAR(255),
      published   INT DEFAULT 1,
      created_at  VARCHAR(40) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS news (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      title       VARCHAR(512) NOT NULL,
      excerpt     TEXT, content MEDIUMTEXT,
      image       VARCHAR(1024), logo VARCHAR(1024), tags TEXT,
      author      VARCHAR(255),
      published   INT DEFAULT 1,
      created_at  VARCHAR(40) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id          INT AUTO_INCREMENT PRIMARY KEY,
      username    VARCHAR(191) UNIQUE NOT NULL,
      password    VARCHAR(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
  `);
  const [rows] = await pool.query('SELECT COUNT(*) AS c FROM admins');
  if (rows[0].c === 0) {
    await pool.query('INSERT INTO admins (username, password) VALUES (?, ?)', ['admin', 'hightower123']);
    console.log('[db] Seeded default admin -> admin / hightower123');
  }
}

function ready() {
  if (!g.__hhReady) g.__hhReady = initSchema();
  return g.__hhReady;
}

/** Run a SELECT, return all rows. */
export async function all(sql, params = []) {
  await ready();
  const [rows] = await pool.query(sql, params);
  return rows;
}

/** Run a SELECT, return the first row (or undefined). */
export async function get(sql, params = []) {
  const rows = await all(sql, params);
  return rows[0];
}

/** Run an INSERT/UPDATE/DELETE. Returns { lastInsertRowid, changes }. */
export async function run(sql, params = []) {
  await ready();
  const [res] = await pool.query(sql, params);
  return { lastInsertRowid: res.insertId, changes: res.affectedRows };
}

export default { all, get, run };

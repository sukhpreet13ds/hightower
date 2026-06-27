import { DatabaseSync } from 'node:sqlite';
import { all, run } from '../lib/db.js';

const SQLITE = '/Users/prabhatjain/hightower/data/hightower.db';
const s = new DatabaseSync(SQLITE);

const tables = {
  admins:      ['id', 'username', 'password'],
  blogs:       ['id','title','excerpt','content','image','logo','tags','author','published','created_at'],
  news:        ['id','title','excerpt','content','image','logo','tags','author','published','created_at'],
  submissions: ['id','form_type','first_name','last_name','name','email','phone','case_type','message','consent','is_read','created_at'],
};

await all('SELECT 1'); // triggers MySQL schema creation

// disable FK checks just in case, clear children-safe
for (const [t, cols] of Object.entries(tables)) {
  let rows = [];
  try { rows = s.prepare(`SELECT ${cols.join(',')} FROM ${t}`).all(); }
  catch (e) { console.log(`(sqlite has no ${t}, skipping)`); continue; }

  await run(`DELETE FROM ${t}`);
  const ph = cols.map(() => '?').join(',');
  for (const r of rows) {
    await run(`INSERT INTO ${t} (${cols.join(',')}) VALUES (${ph})`, cols.map(c => r[c]));
  }
  const [{ c }] = await all(`SELECT COUNT(*) AS c FROM ${t}`);
  console.log(`${t}: sqlite ${rows.length} -> mysql ${c}`);
}
process.exit(0);

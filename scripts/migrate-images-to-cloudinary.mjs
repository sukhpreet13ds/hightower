import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs';
import path from 'node:path';
import { all, run } from '../lib/db.js';

cloudinary.config({
  cloud_name: 'deqetry9x',
  api_key: '238637548611451',
  api_secret: 'ZFKbeAKPR9GEpQGHRhNgZyETyBY',
  secure: true,
});

const UP = '/Users/prabhatjain/hightower/data/uploads';
const FOLDER = 'hightower';

async function up(localPath) {
  const res = await cloudinary.uploader.upload(localPath, { folder: FOLDER });
  return res.secure_url;
}

let uploaded = 0, missing = 0;
for (const table of ['blogs', 'news']) {
  const rows = await all(`SELECT id, image, logo FROM ${table}`);
  for (const r of rows) {
    let img = r.image, logo = r.logo, changed = false;
    if (img && img.startsWith('/uploads/')) {
      const fp = path.join(UP, path.basename(img));
      if (fs.existsSync(fp)) { img = await up(fp); uploaded++; changed = true; }
      else { console.log('MISSING file for', table, r.id, r.image); missing++; }
    }
    if (logo && logo.startsWith('/uploads/')) {
      const fp = path.join(UP, path.basename(logo));
      if (fs.existsSync(fp)) { logo = await up(fp); uploaded++; changed = true; }
      else { console.log('MISSING logo for', table, r.id, r.logo); missing++; }
    }
    if (changed) {
      await run(`UPDATE ${table} SET image = ?, logo = ? WHERE id = ?`, [img, logo, r.id]);
      console.log(`${table} #${r.id} -> cloudinary`);
    }
  }
}
console.log(`\nDone. Uploaded ${uploaded} images. Missing files: ${missing}.`);
process.exit(0);

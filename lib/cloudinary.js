import { v2 as cloudinary } from 'cloudinary';
import path from 'node:path';
import fs from 'node:fs';
import crypto from 'node:crypto';

export const cloudinaryEnabled = !!(
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
);

if (cloudinaryEnabled) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
}

const FOLDER = process.env.CLOUDINARY_FOLDER || 'hightower';

/**
 * Save an uploaded image. Uses Cloudinary when configured; otherwise falls back
 * to writing into /public/uploads so local development works without keys.
 * Returns a URL string (Cloudinary https URL, or /uploads/xxx local path).
 */
export async function saveImage(file) {
  if (!file || typeof file.arrayBuffer !== 'function') return null;
  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length === 0) return null;

  if (cloudinaryEnabled) {
    return await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: FOLDER, resource_type: 'image' },
        (err, result) => (err ? reject(err) : resolve(result.secure_url))
      );
      stream.end(buffer);
    });
  }

  // Local fallback — written to data/uploads, served by /uploads/[file] route.
  const dir = path.join(process.cwd(), 'data', 'uploads');
  fs.mkdirSync(dir, { recursive: true });
  const ext = (path.extname(file.name || '') || '.jpg').toLowerCase();
  const fname = `blog-${crypto.randomBytes(8).toString('hex')}${ext}`;
  fs.writeFileSync(path.join(dir, fname), buffer);
  return `/uploads/${fname}`;
}

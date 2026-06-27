import path from 'node:path';
import fs from 'node:fs';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const DIR = path.join(process.cwd(), 'data', 'uploads');

const TYPES = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.avif': 'image/avif',
};

// Serves locally-stored uploads (used when Cloudinary is not configured).
export async function GET(req, { params }) {
  const { file } = await params;
  // prevent path traversal
  const safe = path.basename(file);
  const full = path.join(DIR, safe);
  if (!full.startsWith(DIR) || !fs.existsSync(full)) {
    return new NextResponse('Not found', { status: 404 });
  }
  const buf = fs.readFileSync(full);
  const type = TYPES[path.extname(safe).toLowerCase()] || 'application/octet-stream';
  return new NextResponse(buf, {
    headers: { 'Content-Type': type, 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
}

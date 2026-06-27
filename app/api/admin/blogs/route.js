import { NextResponse } from 'next/server';
import db from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { saveImage } from '@/lib/cloudinary';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const rows = db.prepare('SELECT * FROM blogs ORDER BY id DESC').all();
  return NextResponse.json(rows);
}

export async function POST(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const form = await req.formData();
  const title = (form.get('title') || '').toString().trim();
  if (!title) return NextResponse.json({ error: 'Title (H1 heading) is required' }, { status: 400 });

  const imageFile = form.get('image');
  const logoFile = form.get('logo');
  const image = (imageFile && imageFile.size) ? await saveImage(imageFile)
    : ((form.get('image_url') || '').toString().trim() || null);
  const logo = (logoFile && logoFile.size) ? await saveImage(logoFile)
    : ((form.get('logo_url') || '').toString().trim() || null);

  const info = db.prepare(`
    INSERT INTO blogs (title, excerpt, content, image, logo, tags, author, published, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    title,
    (form.get('excerpt') || '').toString().trim() || null,
    (form.get('content') || '').toString().trim() || null,
    image, logo,
    (form.get('tags') || '').toString().trim() || null,
    (form.get('author') || '').toString().trim() || null,
    form.get('published') === '0' ? 0 : 1,
    new Date().toISOString()
  );
  return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
}

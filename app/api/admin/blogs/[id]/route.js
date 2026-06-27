import { NextResponse } from 'next/server';
import { get, run } from '@/lib/db';
import { requireAuth } from '@/lib/auth';
import { saveImage } from '@/lib/cloudinary';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PUT(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  const existing = await get('SELECT * FROM blogs WHERE id = ?', [Number(id)]);
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  const form = await req.formData();
  const title = (form.get('title') || '').toString().trim() || existing.title;

  const imageFile = form.get('image');
  const logoFile = form.get('logo');
  const image = (imageFile && imageFile.size) ? await saveImage(imageFile)
    : ((form.get('image_url') || '').toString().trim() || existing.image);
  const logo = (logoFile && logoFile.size) ? await saveImage(logoFile)
    : ((form.get('logo_url') || '').toString().trim() || existing.logo);

  await run(`
    UPDATE blogs SET title = ?, excerpt = ?, content = ?, image = ?, logo = ?, tags = ?, author = ?, published = ?
    WHERE id = ?
  `, [
    title,
    (form.get('excerpt') || '').toString().trim() || null,
    (form.get('content') || '').toString().trim() || null,
    image, logo,
    (form.get('tags') || '').toString().trim() || null,
    (form.get('author') || '').toString().trim() || null,
    form.get('published') === '0' ? 0 : 1,
    Number(id),
  ]);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  await run('DELETE FROM blogs WHERE id = ?', [Number(id)]);
  return NextResponse.json({ ok: true });
}

import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { saveImage } from '@/lib/cloudinary';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Inline image upload used by the blog rich-text editor.
export async function POST(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const form = await req.formData();
  const file = form.get('file');
  if (!file || !file.size) return NextResponse.json({ error: 'No file' }, { status: 400 });
  const url = await saveImage(file);
  return NextResponse.json({ ok: true, url });
}

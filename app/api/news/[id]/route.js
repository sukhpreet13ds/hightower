import { NextResponse } from 'next/server';
import db from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  const { id } = await params;
  const row = db.prepare(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM news WHERE id = ? AND published = 1
  `).get(Number(id));
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(row);
}

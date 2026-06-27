import { NextResponse } from 'next/server';
import { get } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  const { id } = await params;
  const row = await get(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM news WHERE id = ? AND published = 1
  `, [Number(id)]);
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(row);
}

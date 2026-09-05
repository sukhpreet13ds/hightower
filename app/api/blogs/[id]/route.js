import { NextResponse } from 'next/server';
import { get } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req, { params }) {
  const { id: param } = await params;
  const isNum = /^\d+$/.test(param);
  const row = isNum
    ? await get(`
        SELECT id, slug, title, excerpt, content, image, logo, tags, author, created_at
        FROM blogs WHERE (id = ? OR slug = ?) AND published = 1
      `, [Number(param), param])
    : await get(`
        SELECT id, slug, title, excerpt, content, image, logo, tags, author, created_at
        FROM blogs WHERE slug = ? AND published = 1
      `, [param]);
  if (!row) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(row);
}

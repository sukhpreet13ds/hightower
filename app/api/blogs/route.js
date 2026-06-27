import { NextResponse } from 'next/server';
import db from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(parseInt(searchParams.get('limit'), 10) || 100, 100);
  const rows = db.prepare(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM blogs WHERE published = 1
    ORDER BY datetime(created_at) DESC, id DESC
    LIMIT ?
  `).all(limit);
  return NextResponse.json(rows);
}

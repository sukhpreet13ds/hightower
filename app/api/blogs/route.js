import { NextResponse } from 'next/server';
import { all } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const limit = Math.min(parseInt(searchParams.get('limit'), 10) || 100, 100);
  const rows = await all(`
    SELECT id, title, excerpt, content, image, logo, tags, author, created_at
    FROM blogs WHERE published = 1
    ORDER BY created_at DESC, id DESC
    LIMIT ${limit}
  `);
  return NextResponse.json(rows);
}

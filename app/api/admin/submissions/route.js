import { NextResponse } from 'next/server';
import { all, get } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const type = searchParams.get('type');
  let rows;
  if (type && type !== 'all') {
    rows = await all('SELECT * FROM submissions WHERE form_type = ? ORDER BY id DESC', [type]);
  } else {
    rows = await all('SELECT * FROM submissions ORDER BY id DESC');
  }
  const unread = (await get('SELECT COUNT(*) AS c FROM submissions WHERE is_read = 0')).c;
  return NextResponse.json({ submissions: rows, unread });
}

import { NextResponse } from 'next/server';
import { all } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const rows = await all('SELECT * FROM newsletter ORDER BY id DESC');
  return NextResponse.json(rows);
}

import { NextResponse } from 'next/server';
import { run } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  await run('UPDATE submissions SET is_read = 1 WHERE id = ?', [Number(id)]);
  return NextResponse.json({ ok: true });
}

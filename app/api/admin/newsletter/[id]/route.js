import { NextResponse } from 'next/server';
import { run } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function DELETE(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  await run('DELETE FROM newsletter WHERE id = ?', [Number(id)]);
  return NextResponse.json({ ok: true });
}

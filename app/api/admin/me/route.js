import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const s = await requireAuth();
  if (!s) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  return NextResponse.json({ username: s.username });
}

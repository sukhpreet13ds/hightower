import { NextResponse } from 'next/server';
import { get } from '@/lib/db';
import { createSession, COOKIE } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let b = {};
  try { b = await req.json(); } catch {}
  const row = await get('SELECT * FROM admins WHERE username = ?', [String(b.username || '')]);
  if (!row || row.password !== String(b.password || '')) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }
  const token = createSession(row.username);
  const res = NextResponse.json({ ok: true, username: row.username });
  res.cookies.set(COOKIE, token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 86400 });
  return res;
}

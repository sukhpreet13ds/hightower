import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { get, run } from '@/lib/db';
import { createSession, COOKIE } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let b = {};
  try { b = await req.json(); } catch {}
  const password = String(b.password || '');
  const row = await get('SELECT * FROM admins WHERE username = ?', [String(b.username || '')]);

  let valid = false;
  if (row) {
    const isHashed = /^\$2[aby]\$/.test(row.password || '');
    if (isHashed) {
      valid = await bcrypt.compare(password, row.password);
    } else if (row.password === password) {
      valid = true;
      // Transparently upgrade a legacy plaintext password to a hash on successful login.
      const newHash = await bcrypt.hash(password, 10);
      await run('UPDATE admins SET password = ? WHERE id = ?', [newHash, row.id]).catch(() => {});
    }
  }

  if (!row || !valid) {
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }
  const token = createSession(row.username);
  const res = NextResponse.json({ ok: true, username: row.username });
  res.cookies.set(COOKIE, token, { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 86400 });
  return res;
}

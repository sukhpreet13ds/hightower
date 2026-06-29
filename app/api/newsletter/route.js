import { NextResponse } from 'next/server';
import { run } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let b = {};
  try { b = await req.json(); } catch { b = {}; }

  const email = (b.email || '').toString().trim();
  if (!email) {
    return NextResponse.json({ error: 'Please provide an email address.' }, { status: 400 });
  }

  try {
    const info = await run(`
      INSERT INTO newsletter (email, created_at)
      VALUES (?, ?)
    `, [email, new Date().toISOString()]);

    return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
  } catch (err) {
    console.error('[Newsletter API Error]:', err);
    if (err.code === 'ER_DUP_ENTRY') {
      return NextResponse.json({ error: 'This email is already subscribed!' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Database error. Please try again.' }, { status: 500 });
  }
}

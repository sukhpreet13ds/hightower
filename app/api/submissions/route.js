import { NextResponse } from 'next/server';
import db from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  let b = {};
  try { b = await req.json(); } catch { b = {}; }

  const formType = String(b.form_type || 'contact').slice(0, 40);
  const firstName = (b.first_name || '').toString().trim() || null;
  const lastName = (b.last_name || '').toString().trim() || null;
  let name = (b.name || '').toString().trim() || null;
  if (!name && (firstName || lastName)) name = [firstName, lastName].filter(Boolean).join(' ');

  const email = (b.email || '').toString().trim() || null;
  const phone = (b.phone || '').toString().trim() || null;
  const caseType = (b.case_type || '').toString().trim() || null;
  const message = (b.message || '').toString().trim() || null;
  const consent = b.consent ? 1 : 0;

  if (!name && !email && !phone) {
    return NextResponse.json({ error: 'Please provide a name, email or phone.' }, { status: 400 });
  }

  const info = db.prepare(`
    INSERT INTO submissions
      (form_type, first_name, last_name, name, email, phone, case_type, message, consent, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(formType, firstName, lastName, name, email, phone, caseType, message, consent,
    new Date().toISOString());

  return NextResponse.json({ ok: true, id: Number(info.lastInsertRowid) });
}

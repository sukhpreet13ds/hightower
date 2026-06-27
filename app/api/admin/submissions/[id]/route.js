import { NextResponse } from 'next/server';
import { get, run } from '@/lib/db';
import { requireAuth } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PUT(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  const existing = await get('SELECT * FROM submissions WHERE id = ?', [Number(id)]);
  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  let b = {};
  try { b = await req.json(); } catch {}

  const name = b.name !== undefined ? (String(b.name).trim() || null) : existing.name;
  const email = b.email !== undefined ? (String(b.email).trim() || null) : existing.email;
  const phone = b.phone !== undefined ? (String(b.phone).trim() || null) : existing.phone;
  const caseType = b.case_type !== undefined ? (String(b.case_type).trim() || null) : existing.case_type;
  const message = b.message !== undefined ? (String(b.message).trim() || null) : existing.message;

  await run(`
    UPDATE submissions SET name = ?, email = ?, phone = ?, case_type = ?, message = ?
    WHERE id = ?
  `, [name, email, phone, caseType, message, Number(id)]);
  return NextResponse.json({ ok: true });
}

export async function DELETE(req, { params }) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { id } = await params;
  await run('DELETE FROM submissions WHERE id = ?', [Number(id)]);
  return NextResponse.json({ ok: true });
}

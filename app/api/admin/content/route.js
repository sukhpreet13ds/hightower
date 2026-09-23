import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { getSectionContent, saveSectionContent } from '@/lib/content';
import { CONTENT_SECTIONS, CONTENT_FIELDS } from '@/lib/content-defaults';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const section = searchParams.get('section');
  if (!CONTENT_SECTIONS.includes(section)) {
    return NextResponse.json({ error: 'Unknown section' }, { status: 400 });
  }
  const values = await getSectionContent(section);
  return NextResponse.json({ section, fields: CONTENT_FIELDS[section], values });
}

export async function PUT(req) {
  if (!(await requireAuth())) return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  let b = {};
  try { b = await req.json(); } catch {}
  const section = b.section;
  if (!CONTENT_SECTIONS.includes(section)) {
    return NextResponse.json({ error: 'Unknown section' }, { status: 400 });
  }
  const values = await saveSectionContent(section, b.values || {});
  return NextResponse.json({ ok: true, values });
}

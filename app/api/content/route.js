import { NextResponse } from 'next/server';
import { getSectionContent } from '@/lib/content';
import { CONTENT_SECTIONS } from '@/lib/content-defaults';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Public, read-only: lets client components (e.g. Footer) fetch editable
// site copy without needing admin auth.
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const section = searchParams.get('section');
  if (!CONTENT_SECTIONS.includes(section)) {
    return NextResponse.json({ error: 'Unknown section' }, { status: 400 });
  }
  const values = await getSectionContent(section);
  return NextResponse.json(values);
}

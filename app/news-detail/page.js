import { redirect } from 'next/navigation';
import { get } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const id = sp?.id;
  const slug = sp?.slug || id;
  if (slug) {
    const isNum = /^\d+$/.test(slug);
    const post = isNum
      ? await get('SELECT slug, id FROM news WHERE (id = ? OR slug = ?) AND published = 1', [Number(slug), slug])
      : await get('SELECT slug, id FROM news WHERE slug = ? AND published = 1', [slug]);
    if (post) {
      redirect(`/news/${post.slug || post.id}`);
    }
  }
  redirect('/news');
}

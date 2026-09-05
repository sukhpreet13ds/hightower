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
      ? await get('SELECT slug, id FROM blogs WHERE (id = ? OR slug = ?) AND published = 1', [Number(slug), slug])
      : await get('SELECT slug, id FROM blogs WHERE slug = ? AND published = 1', [slug]);
    if (post) {
      redirect(`/blogs/${post.slug || post.id}`);
    }
  }
  redirect('/blogs');
}

'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Modals from './Modals';
import SiteScripts from './SiteScripts';

/**
 * Wraps the website chrome (header + mobile menu, modals, behaviour script).
 * The admin panel (/admin) has its own UI, so it is rendered WITHOUT the
 * public-site header/modals/script — keeping the two navbars separate.
 */
export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname && pathname.startsWith('/admin');

  if (isAdmin) return <>{children}</>;

  return (
    <>
      <Header />
      {children}
      <Modals />
      <SiteScripts />
    </>
  );
}

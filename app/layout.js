import Header from '@/components/Header';
import Modals from '@/components/Modals';
import SiteScripts from '@/components/SiteScripts';

export const metadata = {
  title: 'Hightower & Hightower',
  icons: { icon: '/assets/hh-fav.webp', apple: '/assets/hh-fav.webp' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/style/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
        />
      </head>
      <body>
        <Header />
        {children}
        <Modals />
        <SiteScripts />
      </body>
    </html>
  );
}

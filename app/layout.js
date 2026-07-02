import Script from "next/script";
import SiteChrome from '@/components/SiteChrome';

export const metadata = {
  title: 'Hightower & Hightower',
  icons: { icon: '/assets/hh-fav.webp', apple: '/assets/hh-fav.webp' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <meta property="og:title" content="Hightower & Hightower" />
        <meta property="og:description" content="For nearly 50 years, the Hightower family has stood beside injured Floridians, battling insurance companies so you can focus on what matters: healing. Your consultation is free, and you pay nothing unless we make a recovery for you." />
        <meta property="og:image" content="https://hightowerandhightower.netlify.app/assets/thumbnail-hightower.png" />
        <meta property="og:url" content="https://hightowerandhightower.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Hightower & Hightower" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hightower & Hightower" />
        <meta name="twitter:description" content="For nearly 50 years, the Hightower family has stood beside injured Floridians, battling insurance companies so you can focus on what matters: healing. Your consultation is free, and you pay nothing unless we make a recovery for you." />
        <meta name="twitter:image" content="https://hightowerandhightower.netlify.app/assets/thumbnail-hightower.png" />
      </head>
      <body suppressHydrationWarning>
        <SiteChrome>{children}</SiteChrome>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.bbb = window.bbb || [];
              window.bbb.push(["bbbid", "central-florida"]);
              window.bbb.push(["bid", "235974524"]);
              window.bbb.push(["chk", "EEB70DA886"]);
              window.bbb.push(["pos", "bottom-right"]);
            `
          }}
        />
        <script
          async
          src="https://seal-centralflorida.bbb.org/badge/badge.min.js"
          type="text/javascript"
        />
        <script
          async
          src="https://seal-centralflorida.bbb.org/inc/legacy.js"
          type="text/javascript"
        />
      </body>
    </html>
  );
}

'use client';

import Script from 'next/script';

/**
 * Loads the original site behaviour script (menus, accordions, marquees,
 * modals, form submissions, dynamic blogs) after hydration. The script's main
 * block listens for DOMContentLoaded — since we load it after that event has
 * already fired, we re-dispatch a synthetic DOMContentLoaded so it initialises.
 */
export default function SiteScripts() {
  return (
    <Script
      src="/script/script.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (document.readyState !== 'loading') {
          document.dispatchEvent(new Event('DOMContentLoaded'));
        }
      }}
    />
  );
}

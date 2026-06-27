/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { unoptimized: true },
  // Keep every existing internal ".html" link working against the new routes.
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/:path*.html', destination: '/:path*' },
    ];
  },
};
export default nextConfig;

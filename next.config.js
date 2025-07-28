/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'randomuser.me'],
  },
  experimental: {
    typedRoutes: true,
  },
  // GitHub Pages 部署設定
  basePath: process.env.NODE_ENV === 'production' ? '/official' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/official/' : '',
}

module.exports = nextConfig
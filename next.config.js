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
  // 自訂網域部署設定 - 不需要 basePath 和 assetPrefix
}

module.exports = nextConfig
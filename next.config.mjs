/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false, // 確保網址一致性
  images: {
    unoptimized: true,
  },
  experimental: {
    typedRoutes: true,
  },
  // 處理可能的重複網址問題
  async redirects() {
    return [
      // 重定向 www 到非 www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.yu-design.tw',
          },
        ],
        destination: 'https://yu-design.tw/:path*',
        permanent: true,
      },
      // 移除尾隨斜線
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
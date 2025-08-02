import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - 頁面不存在',
  description: '抱歉，您尋找的頁面不存在。',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-9xl font-black text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          頁面不存在
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          抱歉，您尋找的頁面可能已被移除、更名或暫時無法使用。
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            返回首頁
          </Link>
          <Link
            href="/#works"
            className="inline-block px-6 py-3 border border-black text-black rounded-lg hover:bg-gray-100 transition-colors"
          >
            查看作品
          </Link>
        </div>
      </div>
    </div>
  )
}
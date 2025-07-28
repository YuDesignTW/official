import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/contexts/query-provider'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  title: 'Yuga - 從設計到行銷，讓您的點子發光',
  description: '結合設計思維、AI/No‑Code 產品開發與行銷策略，幫助台灣品牌從零到一創造獨一無二的產品',
  keywords: ['設計顧問', 'AI產品開發', 'No-Code開發', '行銷策略', '品牌設計', '產品管理'],
  authors: [{ name: 'Yuga' }],
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Yuga - 從設計到行銷，讓您的點子發光',
    description: '結合設計思維、AI/No‑Code 產品開發與行銷策略，幫助台灣品牌從零到一創造獨一無二的產品',
    type: 'website',
    locale: 'zh_TW',
    url: 'https://yuga.dev',
    siteName: 'Yuga',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yuga - 從設計到行銷，讓您的點子發光',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuga - 從設計到行銷，讓您的點子發光',
    description: '結合設計思維、AI/No‑Code 產品開發與行銷策略，幫助台灣品牌從零到一創造獨一無二的產品',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body className={`${notoSansTC.variable} font-sans antialiased`}>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  )
}
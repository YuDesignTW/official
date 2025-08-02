import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/seo/structured-data'
import { GoogleAnalytics } from '@/components/analytics/google-analytics'

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-tc',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yu-design.tw'),
  title: {
    default: 'Yu Design - UI/UX 設計顧問 | AI 產品開發 | 行銷策略規劃',
    template: '%s | Yu Design'
  },
  description: '專業 UI/UX 設計顧問服務，結合 AI 與 No-Code 技術協助企業數位轉型。提供產品設計、品牌策略、行銷規劃等全方位解決方案，幫助台灣品牌從零到一打造成功產品。',
  keywords: ['UI/UX 設計', '設計顧問', 'AI 產品開發', 'No-Code 開發', '數位轉型', '品牌設計', '產品設計', '行銷策略', '台灣設計師', 'Yu Design'],
  authors: [{ name: 'Yuga', url: 'https://yu-design.tw' }],
  creator: 'Yuga',
  publisher: 'Yu Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Yu Design - UI/UX 設計顧問 | AI 產品開發 | 行銷策略規劃',
    description: '專業 UI/UX 設計顧問服務，結合 AI 與 No-Code 技術協助企業數位轉型。提供產品設計、品牌策略、行銷規劃等全方位解決方案。',
    type: 'website',
    locale: 'zh_TW',
    url: 'https://yu-design.tw',
    siteName: 'Yu Design',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Yu Design - 專業設計顧問服務',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yu Design - UI/UX 設計顧問 | AI 產品開發',
    description: '專業 UI/UX 設計顧問服務，結合 AI 與 No-Code 技術協助企業數位轉型。',
    images: ['/images/og-image.png'],
    creator: '@yudesign',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verified-via-godaddy', // 已透過 GoDaddy 完成驗證
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={`${notoSansTC.variable} font-sans antialiased`}>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        )}
        {children}
      </body>
    </html>
  )
}
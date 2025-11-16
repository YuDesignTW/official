import './globals.css'
import { HydrationProvider } from '../../components/yulab/hydration-provider'
import Script from 'next/script'

export const metadata = {
  title: '有料研究室 | YU LAB',
  description: 'AI 幫你整合「有料的行銷」',
}

export default function YulabLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <HydrationProvider>
      {/* 使用 Script 元件預載資源 */}
      <Script
        id="preload-resources"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // 預載關鍵圖片
            const images = [
              '/images/yulab/hero_left.png',
              '/images/yulab/hero_right.png',
              '/images/yulab/logo_l.png',
              '/images/yulab/logo_r.png',
              '/images/yulab/logo_cn.png',
              '/images/yulab/whyus.png'
            ];
            images.forEach(src => {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = src;
              document.head.appendChild(link);
            });
          `,
        }}
      />
      {children}
    </HydrationProvider>
  )
}

'use client'

import Image from 'next/image'
import { RefObject } from 'react'

interface FooterProps {
  footerSectionRef?: RefObject<HTMLElement>
}

export function Footer({ footerSectionRef }: FooterProps) {
  return (
    <footer ref={footerSectionRef} className="relative py-12 sm:py-16 lg:py-20 bg-black overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* 左側 logo_l.png - 貼齊左側，手機版縮小 */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/yulab/logo_l.png"
            alt="Logo Left"
            width={400}
            height={400}
            className="object-contain w-24 sm:w-40 md:w-56 lg:w-80 xl:w-96 h-auto opacity-70 sm:opacity-100"
          />
        </div>

        {/* 中央 logo.png */}
        <div className="relative z-10">
          <Image
            src="/images/yulab/logo.png"
            alt="YU MARKET Logo"
            width={300}
            height={100}
            className="object-contain w-32 sm:w-48 md:w-64 lg:w-80 h-auto"
            quality={100}
          />
        </div>

        {/* 右側 logo_r.png - 貼齊右側，手機版縮小 */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <Image
            src="/images/yulab/logo_r.png"
            alt="Logo Right"
            width={400}
            height={400}
            className="object-contain w-24 sm:w-40 md:w-56 lg:w-80 xl:w-96 h-auto opacity-70 sm:opacity-100"
          />
        </div>
      </div>

      {/* 版權文字 */}
      <div className="relative z-10 text-center mt-8 sm:mt-10 lg:mt-12">
        <p className="text-gray-400 text-xs sm:text-sm">
          © 2025 yu.desigin.tw - yulab. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

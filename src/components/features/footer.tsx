'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { SITE_CONFIG, SERVICES } from '@/lib/constants'
import { cn } from '@/lib/utils'

// 自定義圖示組件
const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.18V11.82c0-3.407.85-6.26 2.495-8.371C5.845 1.205 8.598.024 12.179 0h.007c3.581.024 6.334 1.205 8.184 3.509C21.65 5.56 22.5 8.414 22.5 11.82v.36c0 3.407-.85 6.26-2.495 8.371C18.155 22.795 15.402 23.976 11.821 24h.365zM12 2.25c-2.67 0-4.86.855-6.32 2.471C4.24 6.317 3.75 8.536 3.75 11.82v.36c0 3.284.49 5.503 1.93 7.069C7.14 20.865 9.33 21.72 12 21.72s4.86-.855 6.32-2.471c1.44-1.566 1.93-3.785 1.93-7.069v-.36c0-3.284-.49-5.503-1.93-7.069C16.86 3.105 14.67 2.25 12 2.25zm4.7 9.61c-.045 3.8-2.905 5.89-5.68 5.89-1.575 0-2.945-.645-3.86-1.815l1.06-1.08c.66.825 1.56 1.275 2.8 1.275 1.995 0 3.43-1.425 3.43-3.39 0-1.965-1.435-3.39-3.43-3.39-1.24 0-2.14.45-2.8 1.275l-1.06-1.08c.915-1.17 2.285-1.815 3.86-1.815 2.775 0 5.635 2.09 5.68 5.89z"/>
  </svg>
)

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

const socialIcons = {
  threads: ThreadsIcon,
  medium: MediumIcon,
  linkedin: Linkedin,
  email: Mail,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* 品牌資訊 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="inline-block">
              <h3 className="text-2xl font-bold">{SITE_CONFIG.name}</h3>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            
            {/* 社群媒體連結 */}
            <div className="flex gap-3 pt-4">
              {Object.entries(SITE_CONFIG.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons]
                return Icon ? (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      'w-12 h-12 rounded-lg',
                      'bg-gray-800 border border-gray-700',
                      'flex items-center justify-center',
                      'text-gray-300 hover:text-white',
                      'hover:bg-primary hover:border-primary transition-all duration-300',
                      'hover:scale-110 hover:shadow-lg'
                    )}
                    aria-label={platform}
                  >
                    {platform === 'threads' || platform === 'medium' ? (
                      <Icon />
                    ) : (
                      <Icon size={20} strokeWidth={1.5} />
                    )}
                  </motion.a>
                ) : null
              })}
            </div>
          </motion.div>


          {/* 服務項目與聯繫資訊 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* 服務項目 */}
            <div>
              <h4 className="font-bold text-lg mb-4">服務項目</h4>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    客製化方案
                  </a>
                </li>
              </ul>
            </div>

            {/* 聯絡資訊 */}
            <div>
              <h4 className="font-bold text-lg mb-4">聯絡資訊</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} />
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-400">
                  <MapPin size={18} className="mt-1" />
                  <span>
                    台北市內湖區內湖路三段
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 底部版權資訊 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>
            &copy; {currentYear} {SITE_CONFIG.name}. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* 背景裝飾 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </footer>
  )
}
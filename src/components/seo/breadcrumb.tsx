'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * SEO 友善的麵包屑導航
 * 包含結構化資料標記
 */
export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  // 生成 JSON-LD 結構化資料
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '首頁',
        item: 'https://yu-design.tw'
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: item.href ? `https://yu-design.tw${item.href}` : undefined
      }))
    ]
  }

  return (
    <>
      {/* JSON-LD 結構化資料 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 視覺化麵包屑 */}
      <nav 
        aria-label="麵包屑導航" 
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <Link 
          href="/" 
          className="flex items-center text-gray-600 hover:text-black transition-colors"
          aria-label="回到首頁"
        >
          <Home size={16} />
          <span className="ml-1">首頁</span>
        </Link>
        
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight size={16} className="text-gray-400" />
            {item.href ? (
              <Link 
                href={item.href}
                className="text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-black font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
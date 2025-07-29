'use client'

import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { ProjectBlock } from '@/lib/constants'

interface ProjectDetailPageProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    tags: readonly string[]
    duration: string
    role: string
    detailBlocks: readonly ProjectBlock[]
  }
}

/**
 * 專案詳細頁面組件 - 完整頁面版本
 */
export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {/* 返回按鈕 - 固定在左上角 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link 
          href="/#works"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group bg-white md:bg-transparent px-3 py-2 md:px-0 md:py-0 rounded-full md:rounded-none shadow-md md:shadow-none"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">返回</span>
        </Link>
      </motion.div>

      {/* 頁面內容 */}
      <div>
        {/* 渲染內容區塊 */}
        {project.detailBlocks.map((block, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
          >
            <ProjectBlock block={block} index={index} project={project} />
          </motion.div>
        ))}


        {/* Let's Talk 聯絡區塊 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: project.detailBlocks.length * 0.15 }}
          className="bg-gray-50 py-32"
        >
          <div className="px-8 md:px-16 lg:px-36">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-8 mt-4">
                Let&apos;s Talk
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
                將您的想法轉化為現實。<br />
                我專注於創造不只是美觀，更能驅動業務成長的設計解決方案。
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="mailto:hello@yudesign.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
                >
                  開始對話
                </Link>
                <Link
                  href="/#works"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
                >
                  查看更多作品
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

/**
 * 單一內容區塊組件
 */
function ProjectBlock({ 
  block, 
  index, 
  project 
}: { 
  block: ProjectBlock; 
  index: number;
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    tags: readonly string[]
    duration: string
    role: string
    detailBlocks: readonly ProjectBlock[]
  }
}) {
  switch (block.type) {
    case 'hero':
      return (
        <div className="relative min-h-[80vh] flex items-center justify-center px-8 md:px-16 lg:px-36 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-[1.1] mb-10 mt-4"
              >
                {block.title}
              </motion.h1>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-xl md:text-2xl text-primary font-medium mb-12"
              >
                {block.subtitle}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mb-16"
              >
                {block.description}
              </motion.p>
              
              {/* 專案資訊 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid md:grid-cols-3 gap-8 max-w-3xl"
              >
                <div>
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">專案時長</h4>
                  <p className="text-lg text-gray-800 font-medium">{project.duration}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">角色</h4>
                  <p className="text-lg text-gray-800 font-medium">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 mb-3 uppercase tracking-wider">標籤</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
        </div>
      )

    case 'text':
      return (
        <div className="px-8 md:px-16 lg:px-36 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-10 mt-4">
                {block.title}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {block.content}
              </p>
            </div>
          </div>
        </div>
      )

    case 'image':
      return (
        <div className={`${index === 1 ? 'px-0' : 'px-8 md:px-16 lg:px-36'} py-8`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
              />
            </div>
            {block.caption && (
              <p className="text-center text-gray-500 mt-6 text-sm">
                {block.caption}
              </p>
            )}
          </div>
        </div>
      )

    case 'video':
      return (
        <div className="px-8 md:px-16 lg:px-36 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-black">
              <video
                src={block.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                controls
                className="w-full h-full object-cover"
                onError={(e) => console.error('Video error:', e)}
                onLoadStart={() => console.log('Video loading started:', block.src)}
                onCanPlay={() => console.log('Video can play:', block.src)}
              >
                <source src={block.src} type="video/mp4" />
                <source src={block.src.replace('.mp4', '.webm')} type="video/webm" />
                您的瀏覽器不支援影片播放。請嘗試更新瀏覽器或使用其他瀏覽器。
              </video>
            </div>
            {block.caption && (
              <p className="text-center text-gray-500 mt-6 text-sm">
                {block.caption}
              </p>
            )}
            {/* 除錯資訊 - 開發時可見 */}
            {process.env.NODE_ENV === 'development' && (
              <p className="text-xs text-gray-400 mt-2 text-center">
                Video path: {block.src}
              </p>
            )}
          </div>
        </div>
      )

    case 'link-preview':
      return (
        <div className="px-8 md:px-16 lg:px-36 py-8">
          <div className="max-w-4xl mx-auto">
            <motion.a
              href={block.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {block.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    {block.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {block.domain}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      )

    case 'results':
      return (
        <div className="bg-gray-50">
          <div className="px-8 md:px-16 lg:px-36 py-16">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-16 mt-4">
                {block.title}
              </h3>
              <div className="grid md:grid-cols-3 gap-12">
                {block.metrics.map((metric, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                  >
                    <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
                      {metric.value}
                    </div>
                    <p className="text-gray-600 text-lg">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )

    case 'services':
      return (
        <div className="bg-gray-50">
          <div className="px-8 md:px-16 lg:px-36 py-16">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-6 mt-4">
                {block.title}
              </h3>
              <h4 className="text-xl md:text-2xl text-primary font-medium mb-8">
                {block.subtitle}
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto">
                {block.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {block.services.map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-gray-800 font-medium text-lg">
                      {service.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )

    case 'gallery':
      // 檢查是否為 product 圖片（product-1.jpg, product-2.jpg）
      const isProductGallery = block.images.some(img => img.src.includes('product-1.jpg') || img.src.includes('product-2.jpg'))
      // 檢查是否為行銷圖片（product-mkt-1.jpg, product-mkt-2.jpg, product-mkt-3.jpg）
      const isMarketingGallery = block.images.some(img => img.src.includes('product-mkt-'))
      
      return (
        <div className="px-8 md:px-16 lg:px-36 py-8">
          <div className="max-w-7xl mx-auto">
            {isProductGallery ? (
              // Product 圖片使用 2:1 寬度比例佈局
              <div className="grid grid-cols-3 gap-6">
                {block.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-50 ${
                      index === 0 ? 'col-span-2' : 'col-span-1'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              // 其他圖片使用原本的佈局
              <div className={`grid gap-6 ${
                isMarketingGallery 
                  ? 'grid-cols-1' // 行銷圖片垂直排列
                  : block.images.length === 2 
                    ? 'md:grid-cols-2' 
                    : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {block.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative overflow-hidden rounded-xl ${
                      isMarketingGallery ? '' : 'aspect-[4/3]'
                    }`}
                  >
                    {isMarketingGallery ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={0}
                        style={{ height: 'auto' }}
                        className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      )

    case 'quote':
      return (
        <div className="px-8 md:px-16 lg:px-36 py-12">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl text-gray-700 font-light italic leading-relaxed mb-6">
                &ldquo;{block.content}&rdquo;
              </p>
              {block.author && (
                <cite className="text-lg text-gray-500 not-italic">
                  — {block.author}
                </cite>
              )}
            </blockquote>
          </div>
        </div>
      )

    default:
      return null
  }
}
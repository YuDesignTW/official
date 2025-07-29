'use client'

import Image from 'next/image'
import { Eye } from 'lucide-react'
import type { ProjectBlock } from '@/lib/constants'

type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  image: string
  tags: string[]
  duration: string
  role: string
  detailBlocks: ProjectBlock[]
}

interface ProjectPreviewProps {
  project: Project
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* 預覽標題 */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <Eye size={20} className="text-primary" />
          <h2 className="text-xl font-semibold text-gray-900">專案預覽</h2>
        </div>
      </div>

      {/* 預覽內容 */}
      <div className="max-h-[800px] overflow-y-auto">
        {/* 渲染內容區塊 */}
        {project.detailBlocks.map((block, index) => (
          <div key={index}>
            <PreviewBlock block={block} project={project} />
          </div>
        ))}

      </div>
    </div>
  )
}

/**
 * 預覽區塊組件
 */
function PreviewBlock({ 
  block, 
  project 
}: { 
  block: ProjectBlock;
  project: Project;
}) {
  switch (block.type) {
    case 'hero':
      return (
        <div className="relative bg-gradient-to-br from-primary/10 to-primary/5 p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4 font-display leading-[1.1]">
              {block.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
              {block.subtitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {block.description}
            </p>
            
            {/* 專案資訊 */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div>
                <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">專案時長</h4>
                <p className="text-base text-gray-800 font-medium">{project.duration}</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">角色</h4>
                <p className="text-base text-gray-800 font-medium">{project.role}</p>
              </div>
              <div>
                <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">標籤</h4>
                <div className="flex flex-wrap justify-center gap-2">
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
            </div>
          </div>
        </div>
      )

    case 'text':
      return (
        <div className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
              {block.title}
            </h3>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {block.content}
              </p>
            </div>
          </div>
        </div>
      )

    case 'image':
      return (
        <div className="p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                className="object-cover"
              />
            </div>
            {block.caption && (
              <p className="text-center text-gray-500 mt-4 italic">
                {block.caption}
              </p>
            )}
          </div>
        </div>
      )

    case 'video':
      return (
        <div className="p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg bg-black">
              <video
                src={block.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                您的瀏覽器不支援影片播放。
              </video>
            </div>
            {block.caption && (
              <p className="text-center text-gray-500 mt-4 italic">
                {block.caption}
              </p>
            )}
          </div>
        </div>
      )

    case 'link-preview':
      return (
        <div className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {block.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-2">
                    {block.description}
                  </p>
                  <div className="flex items-center text-xs text-gray-400">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    {block.domain}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )

    case 'results':
      return (
        <div className="p-8 md:p-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
              {block.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {block.metrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-black text-primary mb-2 font-display">
                    {metric.value}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )

    case 'services':
      return (
        <div className="p-8 md:p-12 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              {block.title}
            </h3>
            <h4 className="text-lg md:text-xl text-primary font-medium mb-6">
              {block.subtitle}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-8">
              {block.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {block.services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <p className="text-gray-800 font-medium">
                    {service.name}
                  </p>
                </div>
              ))}
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
        <div className="p-8 md:p-12">
          <div className="max-w-6xl mx-auto">
            {isProductGallery ? (
              // Product 圖片使用 2:1 寬度比例佈局
              <div className="grid grid-cols-3 gap-4">
                {block.images.map((image, index) => (
                  <div 
                    key={index} 
                    className={`relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-50 ${
                      index === 0 ? 'col-span-2' : 'col-span-1'
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ) : (
              // 其他圖片使用原本的佈局
              <div className={`grid gap-4 ${
                isMarketingGallery 
                  ? 'grid-cols-1' // 行銷圖片垂直排列
                  : block.images.length === 2 
                    ? 'md:grid-cols-2' 
                    : 'md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {block.images.map((image, index) => (
                  <div 
                    key={index} 
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
                        className="w-full h-auto object-contain"
                      />
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )

    case 'quote':
      return (
        <div className="p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote>
              <p className="text-xl md:text-2xl text-gray-700 font-light italic leading-relaxed mb-4">
                &ldquo;{block.content}&rdquo;
              </p>
              {block.author && (
                <cite className="text-gray-500 not-italic">
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
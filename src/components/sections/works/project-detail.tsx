'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import type { ProjectBlock } from '@/lib/constants'

interface ProjectDetailProps {
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
  } | null
  onClose: () => void
}

/**
 * 專案詳細頁面組件 - Modal 風格
 */
export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (project) {
      setIsVisible(true)
      // 防止背景滾動
      document.body.style.overflow = 'hidden'
    } else {
      setIsVisible(false)
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [project])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) // 等待動畫完成
  }

  if (!project) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* 主要內容 */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* 關閉按鈕 */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-10 h-10 bg-black/10 hover:bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
            >
              <X size={20} className="text-black" />
            </button>

            {/* 滾動內容 */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* 渲染內容區塊 */}
              {project.detailBlocks.map((block, index) => (
                <ProjectBlock key={index} block={block} />
              ))}

              {/* 底部專案資訊 */}
              <div className="p-8 bg-gray-50 border-t">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="font-bold text-black mb-2">專案時長</h4>
                    <p className="text-gray-600">{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">我的角色</h4>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">使用技術</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/**
 * 單一內容區塊組件
 */
function ProjectBlock({ block }: { block: ProjectBlock }) {
  switch (block.type) {
    case 'hero':
      return (
        <div className="relative h-80 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center p-8 text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-black text-black mb-4 font-display">
              {block.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
              {block.subtitle}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {block.description}
            </p>
          </div>
        </div>
      )

    case 'text':
      return (
        <div className="p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-6">
            {block.title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {block.content}
          </p>
        </div>
      )

    case 'image':
      return (
        <div className="p-8 md:p-12">
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
      )

    case 'results':
      return (
        <div className="p-8 md:p-12 bg-gray-50">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-8 text-center">
            {block.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {block.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 font-display">
                  {metric.value}
                </div>
                <p className="text-gray-600 font-medium">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}
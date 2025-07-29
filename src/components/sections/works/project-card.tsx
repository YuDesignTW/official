'use client'

import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    subtitle: string
    description: string
    image: string
    tags: readonly string[]
    duration: string
    role: string
    detailBlocks: readonly any[]
  }
  index: number
  onClick: () => void
}

/**
 * 專案卡片組件
 */
export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
      style={{ 
        animationDelay: `${index * 0.2}s`,
        animation: 'fadeInUp 0.6s ease-out forwards'
      }}
      onClick={onClick}
    >
      {/* 專案圖片 */}
      <div className="relative overflow-hidden mb-6 aspect-[4/3]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* 專案資訊 */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-heading text-black group-hover:text-black/70 transition-colors">
            {project.title}
          </h3>
          <span className="text-mono-number text-sm">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="text-body text-black/60 leading-relaxed">
          {project.description}
        </p>

        {/* 標籤 */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="text-caption text-black/50 bg-black/5 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
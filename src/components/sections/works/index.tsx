'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ProjectCard } from './project-card'
import { ProjectDetail } from './project-detail'
import { PROJECTS } from '@/lib/constants'

/**
 * Works Section - 作品集展示
 */
export function Works() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[number] | null>(null)

  return (
    <section id="works" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 極簡標題 */}
        <div 
          className={`mb-32 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-display text-black leading-none tracking-tighter">
            WORKS
          </h2>
          <div className="w-24 h-px bg-black mt-8" />
          <p className="text-subheading text-black/60 mt-8 max-w-3xl">
            精選專案作品，展現設計到實現的完整過程
          </p>
        </div>

        {/* 專案網格 */}
        <div 
          ref={ref}
          className="grid md:grid-cols-2 gap-12 lg:gap-16"
        >
          {inView && PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* 極簡分隔線 */}
        <div 
          className={`mt-32 h-px bg-black/20 transition-all duration-1500 delay-800 ${
            inView ? 'scale-x-100' : 'scale-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* 專案詳細 Modal */}
      <ProjectDetail 
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
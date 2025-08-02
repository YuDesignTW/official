// 新的 Works 資料管理系統
import { projectMetadata as project1 } from '@/content/works/project-1/metadata'
import { projectMetadata as project2 } from '@/content/works/project-2/metadata'
import { projectMetadata as project3 } from '@/content/works/project-3/metadata'
import { projectContent as project1Content } from '@/content/works/project-1/content'
import { projectContent as project2Content } from '@/content/works/project-2/content'
import { projectContent as project3Content } from '@/content/works/project-3/content'
import type { ProjectBlock } from '@/lib/constants'

export interface ProjectMetadata {
  id: string
  title: string
  subtitle: string
  description: string
  keywords: string[]
  ogImage: string
  publishDate: string
  category: string
  client: string
  duration: string
  role: string
  tags: string[]
  image: string
  featured: boolean
  status: 'published' | 'draft'
  order: number
}

export interface ProjectWithContent extends ProjectMetadata {
  detailBlocks: readonly ProjectBlock[]
}

// 所有專案的 metadata
const allProjects: ProjectMetadata[] = [
  project1,
  project2,
  project3
]

// 獲取所有已發布的專案
export function getPublishedProjects(): ProjectMetadata[] {
  return allProjects
    .filter(project => project.status === 'published')
    .sort((a, b) => a.order - b.order)
}

// 獲取精選專案
export function getFeaturedProjects(): ProjectMetadata[] {
  return getPublishedProjects().filter(project => project.featured)
}

// 根據 ID 獲取專案
export function getProjectById(id: string): ProjectMetadata | undefined {
  return allProjects.find(project => project.id === id && project.status === 'published')
}

// 獲取所有專案 ID (用於 generateStaticParams)
export function getAllProjectIds(): string[] {
  return getPublishedProjects().map(project => project.id)
}

// 獲取相關專案 (排除當前專案)
export function getRelatedProjects(currentId: string, limit: number = 2): ProjectMetadata[] {
  return getPublishedProjects()
    .filter(project => project.id !== currentId)
    .slice(0, limit)
}

// 根據分類獲取專案
export function getProjectsByCategory(category: string): ProjectMetadata[] {
  return getPublishedProjects().filter(project => project.category === category)
}

// 根據標籤獲取專案
export function getProjectsByTag(tag: string): ProjectMetadata[] {
  return getPublishedProjects().filter(project => project.tags.includes(tag))
}

// 根據 ID 獲取完整專案（含內容）
export function getProjectWithContent(id: string): ProjectWithContent | undefined {
  const metadata = getProjectById(id)
  if (!metadata) return undefined

  let content: readonly ProjectBlock[]
  switch (id) {
    case 'project-1':
      content = project1Content
      break
    case 'project-2':
      content = project2Content
      break
    case 'project-3':
      content = project3Content
      break
    default:
      return undefined
  }

  return {
    ...metadata,
    detailBlocks: content
  }
}
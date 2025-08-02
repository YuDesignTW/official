import { MetadataRoute } from 'next'
import { getPublishedProjects } from '@/lib/works'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yu-design.tw'
  
  // 靜態頁面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
  
  // 作品頁面 - 使用新的 works 系統
  const projects = getPublishedProjects()
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/works/${project.id}`,
    lastModified: new Date(project.publishDate),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.8, // 精選作品優先級更高
  }))
  
  return [...staticPages, ...projectPages]
}
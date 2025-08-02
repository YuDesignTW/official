import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getProjectById, getAllProjectIds, getProjectWithContent } from '@/lib/works'
import { ProjectDetailPage } from '@/components/sections/works/project-detail-page'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  // 使用新的 works 系統生成靜態參數
  const projectIds = getAllProjectIds()
  return projectIds.map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const projectMeta = getProjectById(id)
  
  if (!projectMeta) {
    return {
      title: '專案未找到 - Yu Design',
      description: '您尋找的專案不存在或已被移除。',
    }
  }

  return {
    title: projectMeta.title,
    description: projectMeta.description,
    keywords: [...projectMeta.keywords, 'Yu Design', '設計案例', '作品集', 'UI/UX'],
    authors: [{ name: 'Yuga', url: 'https://yu-design.tw' }],
    creator: 'Yuga',
    publisher: 'Yu Design',
    openGraph: {
      title: `${projectMeta.title} | Yu Design`,
      description: projectMeta.description,
      type: 'article',
      publishedTime: projectMeta.publishDate,
      authors: ['Yuga'],
      tags: projectMeta.tags,
      images: [{
        url: projectMeta.ogImage || projectMeta.image,
        width: 1200,
        height: 630,
        alt: projectMeta.title,
      }],
      siteName: 'Yu Design',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${projectMeta.title} | Yu Design`,
      description: projectMeta.description,
      images: [projectMeta.ogImage || projectMeta.image],
      creator: '@yudesign',
    },
    alternates: {
      canonical: `https://yu-design.tw/works/${id}`,
    },
    other: {
      'article:author': 'Yuga',
      'article:section': projectMeta.category,
      'article:tag': projectMeta.tags.join(', '),
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  
  // 使用新的統一內容管理系統
  const project = getProjectWithContent(id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
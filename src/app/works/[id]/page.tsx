import { notFound } from 'next/navigation'
import { PROJECTS } from '@/lib/constants'
import { ProjectDetailPage } from '@/components/sections/works/project-detail-page'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)
  
  if (!project) {
    return {
      title: '專案未找到',
    }
  }

  return {
    title: `${project.title} | YuDesign`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}
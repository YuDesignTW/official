export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  color: 'primary' | 'secondary' | 'accent'
  features: readonly string[]
}

export interface ProcessStep {
  id: number
  title: string
  description: string
}

export interface Result {
  id: string
  number: string
  title: string
  description: string
}

export interface Skill {
  name: string
  level: number
}

export interface Project {
  id: string
  title: string
  description: string
  category: string
  image: string
  tags: string[]
  link?: string
}
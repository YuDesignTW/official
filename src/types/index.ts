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

export interface Testimonial {
  id: number
  content: string
  author: {
    name: string
    title: string
    avatar: string
  }
}

export interface Skill {
  name: string
  level: number
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  service: string
  message: string
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

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime: number
}
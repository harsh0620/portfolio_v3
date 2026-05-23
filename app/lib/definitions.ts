export type HeroData = {
  name: string
  greeting: string
  roles: string[]
  bio: string
  social: {
    github: string
    linkedin: string
    twitter: string
    instagram: string
    resume: string
  }
  image: string
}

export type Stat = {
  value: string
  label: string
}

export type AboutData = {
  title: string
  description: string
  stats: Stat[]
  image: string
  imageDark: string
}

export type Skill = {
  id: number
  name: string
  icon: string
  category: string
}

export type Project = {
  slug: string
  index: number
  title: string
  shortDescription: string
  image: string
  liveLink: string
  codeLink: string
  isWIP: boolean
  tags: string[]
  longDescription: {
    introduction: string
    problemStatement: string
    description: string
    keyFeatures: string[]
    technologies: string[]
    gallery: string[]
  }
}

export type Experience = {
  id: number
  company: string
  link?: string
  role: string
  duration: string
  description: string[]
  isLatest: boolean
}

export type Education = {
  id: number
  institution: string
  degree: string
  cgpa: string
  courses: string
  duration: string
  isLatest: boolean
}

export type NavSection = {
  id: string
  title: string
}

export type ContactInfo = {
  email: string
  address: string
  calendlyLink: string
}

export type NowItem = {
  icon: string
  category: string
  title: string
  description: string
  status: 'in-progress' | 'coming-soon'
  tags?: string[]
  href?: string
}

export type NowData = {
  tagline: string
  items: NowItem[]
}

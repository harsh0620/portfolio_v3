import { projectsData } from '@/app/lib/data'
import { blurDataURL } from '@/app/lib/utils'
import { ImageWithFallback } from '@/app/components/ui/image-with-fallback'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { Footer } from '@/app/components/footer'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import { GalleryLightbox } from '@/app/components/ui/gallery-lightbox'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projectsData.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) return { title: 'Project not found' }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Harsh Chandravanshi`,
      description: project.shortDescription,
      images: [{ url: project.image, alt: project.title }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  if (!project) notFound()

  const { title, shortDescription, image, liveLink, codeLink, tags, isWIP, longDescription } = project

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-24 pb-16">

        {/* Breadcrumb */}
        <AnimateIn direction="up" className="mb-8">
          <div className="flex items-center gap-2 text-body-sm text-neutral-400 dark:text-neutral-500">
            <Link href="/" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/#projects" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
              Projects
            </Link>
            <span>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">{title}</span>
          </div>
        </AnimateIn>

        {/* Back button */}
        <AnimateIn direction="up" delay={0.05} className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-body-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" /> Back to projects
          </Link>
        </AnimateIn>

        {/* Header */}
        <AnimateIn direction="up" delay={0.1} className="mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-display-xl text-neutral-900 dark:text-neutral-50">{title}</h1>
                {isWIP && (
                  <span className="px-2.5 py-0.5 rounded-full text-caption font-semibold bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300">
                    WIP
                  </span>
                )}
              </div>
              <p className="text-body-lg text-neutral-500 dark:text-neutral-400">{shortDescription}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <Link
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo <FiExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FiGithub className="w-4 h-4" /> Code
              </Link>
            </div>
          </div>
        </AnimateIn>

        {/* Hero image */}
        <AnimateIn direction="up" delay={0.15} className="mb-12">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <ImageWithFallback
              src={image}
              alt={title}
              fill
              sizes="(max-width: 895px) calc(100vw - 2rem), 864px"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
          </div>
        </AnimateIn>

        {/* Technology tags */}
        <AnimateIn direction="up" delay={0.2} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-body-sm bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateIn>

        {/* Content */}
        <div className="space-y-10">
          {/* Introduction */}
          <AnimateIn direction="up" delay={0.1}>
            <div className="prose-section">
              <h2 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-3">Introduction</h2>
              <p className="text-body-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {longDescription.introduction}
              </p>
            </div>
          </AnimateIn>

          {/* Problem statement */}
          <AnimateIn direction="up" delay={0.1}>
            <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <h2 className="text-display-sm text-neutral-900 dark:text-neutral-50 mb-3">
                Problem Statement
              </h2>
              <p className="text-body-md text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {longDescription.problemStatement}
              </p>
            </div>
          </AnimateIn>

          {/* Description */}
          <AnimateIn direction="up" delay={0.1}>
            <div>
              <h2 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-3">Overview</h2>
              <p className="text-body-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {longDescription.description}
              </p>
            </div>
          </AnimateIn>

          {/* Key features */}
          {longDescription.keyFeatures.length > 0 && (
            <AnimateIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {longDescription.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-600 flex-shrink-0" />
                      <span className="text-body-md text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          )}

          {/* Technologies */}
          {longDescription.technologies.length > 0 && (
            <AnimateIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-4">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {longDescription.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-body-sm bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          )}

          {/* Gallery */}
          {longDescription.gallery.length > 0 && (
            <AnimateIn direction="up" delay={0.1}>
              <div>
                <h2 className="text-display-md text-neutral-900 dark:text-neutral-50 mb-6">
                  Screenshots
                </h2>
                <GalleryLightbox images={longDescription.gallery} title={title} />
              </div>
            </AnimateIn>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}

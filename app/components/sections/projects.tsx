import { projectsData } from '@/app/lib/data'
import { blurDataURL } from '@/app/lib/utils'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { ImageWithFallback } from '@/app/components/ui/image-with-fallback'
import Link from 'next/link'
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi'
import type { Project } from '@/app/lib/definitions'

function ProjectCard({ project }: { project: Project }) {
  const { slug, title, shortDescription, image, liveLink, codeLink, isWIP, tags } = project

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <Link href={`/projects/${slug}`} className="block relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <ImageWithFallback
          src={image}
          alt={title}
          fill
          sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 3rem), calc(33vw - 2rem)"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
        {isWIP && (
          <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 text-caption font-semibold">
            WIP
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <Link href={`/projects/${slug}`} className="hover:underline underline-offset-2">
            <h3 className="text-display-sm text-neutral-900 dark:text-neutral-50">{title}</h3>
          </Link>
        </div>

        <p className="text-body-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
          {shortDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-caption bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-1 border-t border-neutral-100 dark:border-neutral-800">
          <Link
            href={`/projects/${slug}`}
            className="flex items-center gap-1 text-body-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
          >
            View details <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} live`}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all"
            >
              <FiExternalLink className="w-3.5 h-3.5" />
            </Link>
            <Link
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source code`}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-neutral-50 transition-all"
            >
              <FiGithub className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const sorted = [...projectsData].sort((a, b) => a.index - b.index)

  return (
    <section id="projects" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">
            Featured Projects
          </h2>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project, i) => (
            <AnimateIn key={project.slug} direction="up" delay={i * 0.05}>
              <ProjectCard project={project} />
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}

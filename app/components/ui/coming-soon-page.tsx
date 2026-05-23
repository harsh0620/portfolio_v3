import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { AnimateIn } from './animate-in'
import { Footer } from '@/app/components/footer'

const statusConfig = {
  'in-progress': {
    label: 'In Progress',
    className:
      'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800',
  },
  'coming-soon': {
    label: 'Coming Soon',
    className:
      'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700',
  },
}

interface ComingSoonPageProps {
  icon: string
  category: string
  title: string
  description: string
  status: 'in-progress' | 'coming-soon'
  tags?: string[]
}

export function ComingSoonPage({
  icon,
  category,
  title,
  description,
  status,
  tags,
}: ComingSoonPageProps) {
  const badge = statusConfig[status]

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
            <Link href="/#now" className="hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors">
              Now
            </Link>
            <span>/</span>
            <span className="text-neutral-700 dark:text-neutral-300">{title}</span>
          </div>
        </AnimateIn>

        {/* Back button */}
        <AnimateIn direction="up" delay={0.05} className="mb-16">
          <Link
            href="/#now"
            className="inline-flex items-center gap-2 text-body-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
          >
            <FiArrowLeft className="w-4 h-4" /> Back
          </Link>
        </AnimateIn>

        {/* Hero */}
        <AnimateIn direction="up" delay={0.1} className="text-center mb-16">
          <div className="text-6xl mb-6" role="img" aria-label={category}>
            {icon}
          </div>

          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            {category}
          </p>

          <h1 className="text-display-xl text-neutral-900 dark:text-neutral-50 mb-4">
            {title}
          </h1>

          <span className={`inline-flex text-caption font-medium px-3 py-1.5 rounded-full mb-6 ${badge.className}`}>
            {badge.label}
          </span>

          <p className="text-body-lg text-neutral-500 dark:text-neutral-400 leading-relaxed mx-auto" style={{ maxWidth: '36rem' }}>
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-caption font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </AnimateIn>

        {/* Empty state */}
        <AnimateIn direction="up" delay={0.2}>
          <div className="rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900/50 p-16 flex flex-col items-center gap-3 text-center">
            <span className="text-3xl opacity-40">🚧</span>
            <p className="text-body-md text-neutral-400 dark:text-neutral-600">
              Content is being crafted — check back soon.
            </p>
          </div>
        </AnimateIn>
      </div>

      <Footer />
    </>
  )
}

'use client'

import { nowData } from '@/app/lib/data'
import { AnimateIn } from '@/app/components/ui/animate-in'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

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

export function Now() {
  return (
    <section id="now" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            Right now
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50 mb-4">
            What I&apos;m Up To
          </h2>
          <p className="text-body-lg text-neutral-500 dark:text-neutral-400 mx-auto leading-relaxed" style={{ maxWidth: '36rem' }}>
            {nowData.tagline}
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nowData.items.map((item, i) => {
            const status = statusConfig[item.status]
            const cardClass = `h-full p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col gap-4${item.href ? ' hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-lg dark:hover:shadow-neutral-800/50 transition-all duration-300 hover:-translate-y-1' : ''}`

            const inner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <span style={{ fontSize: '1.75rem', lineHeight: 1 }}>{item.icon}</span>
                  <span className={`text-caption font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${status.className}`}>
                    {status.label}
                  </span>
                </div>

                <div>
                  <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-display-sm text-neutral-900 dark:text-neutral-50">
                    {item.title}
                  </h3>
                </div>

                <p className="text-body-md text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">
                  {item.description}
                </p>

                {item.tags && (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption font-medium px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {item.href && (
                  <div className="flex items-center gap-1 text-body-sm text-neutral-400 dark:text-neutral-500 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    <span>Explore</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </>
            )

            return (
              <AnimateIn key={item.category} direction="up" delay={i * 0.1}>
                {item.href ? (
                  <Link href={item.href} className={cardClass}>
                    {inner}
                  </Link>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </AnimateIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

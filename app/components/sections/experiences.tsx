import { experiencesData } from '@/app/lib/data'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { FiBriefcase, FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export function Experiences() {
  const sorted = [...experiencesData].sort((a, b) => a.id - b.id)

  return (
    <section id="work" className="py-24 lg:py-32">
      <div className="max-w-192 mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            Where I've worked
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">
            Work Experience
          </h2>
        </AnimateIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          <ol className="space-y-10">
            {sorted.map((exp, i) => (
              <AnimateIn key={exp.id} direction="left" delay={i * 0.1}>
                <li className="relative pl-12">
                  {/* Icon dot */}
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                    <FiBriefcase className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
                  </div>

                  <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {exp.link ? (
                        <Link
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-display-sm text-neutral-900 dark:text-neutral-50 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors group"
                        >
                          {exp.company}
                          <FiExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                        </Link>
                      ) : (
                        <h3 className="text-display-sm text-neutral-900 dark:text-neutral-50">
                          {exp.company}
                        </h3>
                      )}
                      {exp.isLatest && (
                        <span className="px-2.5 py-0.5 rounded-full text-caption font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-body-sm-strong text-neutral-500 dark:text-neutral-400 mb-1">
                      {exp.role}
                    </p>
                    <p className="text-caption text-neutral-400 dark:text-neutral-500 mb-4">
                      {exp.duration}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex gap-2 text-body-sm text-neutral-600 dark:text-neutral-400">
                          <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </AnimateIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

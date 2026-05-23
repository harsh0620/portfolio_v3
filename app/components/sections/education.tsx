import { educationData } from '@/app/lib/data'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { FiBook } from 'react-icons/fi'

export function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="max-w-192 mx-auto px-4 sm:px-6">

        <AnimateIn direction="up" className="text-center mb-16">
          <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
            Academic background
          </p>
          <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">Education</h2>
        </AnimateIn>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          <ol className="space-y-10">
            {educationData.map((edu, i) => (
              <AnimateIn key={edu.id} direction="left" delay={i * 0.1}>
                <li className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 flex items-center justify-center">
                    <FiBook className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-300" />
                  </div>

                  <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-display-sm text-neutral-900 dark:text-neutral-50">
                        {edu.institution}
                      </h3>
                      {edu.isLatest && (
                        <span className="px-2.5 py-0.5 rounded-full text-caption font-semibold bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-body-sm-strong text-neutral-500 dark:text-neutral-400 mb-1">
                      {edu.degree}
                    </p>
                    <p className="text-caption text-neutral-400 dark:text-neutral-500 mb-4">
                      {edu.duration} · CGPA: {edu.cgpa}
                    </p>
                    <p className="text-body-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      <span className="font-medium text-neutral-700 dark:text-neutral-300">Coursework:</span>{' '}
                      {edu.courses}
                    </p>
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

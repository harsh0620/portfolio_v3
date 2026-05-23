'use client'

import { aboutData } from '@/app/lib/data'
import { blurDataURL } from '@/app/lib/utils'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { ImageWithFallback } from '@/app/components/ui/image-with-fallback'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function AboutImage() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const src = mounted && resolvedTheme === 'dark' ? aboutData.imageDark : aboutData.image

  return (
    <div className="relative w-full max-w-96 aspect-3/2 mx-auto lg:mx-0">
      {/* Decorative offset block */}
      <div className="absolute -inset-3 rounded-2xl border border-neutral-200 dark:border-neutral-800" />
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <ImageWithFallback
          src={src}
          alt="Harsh Chandravanshi"
          fill
          sizes="(max-width: 1023px) min(calc(100vw - 4rem), 384px), 384px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
        />
      </div>
    </div>
  )
}

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Image */}
          <AnimateIn direction="right" className="order-1 lg:order-1 px-8 lg:px-0">
            <AboutImage />
          </AnimateIn>

          {/* Text */}
          <AnimateIn direction="left" delay={0.1} className="order-2 space-y-8">
            <div>
              <p className="text-caption text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">
                Get to know me
              </p>
              <h2 className="text-display-lg text-neutral-900 dark:text-neutral-50">
                {aboutData.title}
              </h2>
            </div>

            <p className="text-body-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {aboutData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                >
                  <div className="text-display-md text-neutral-900 dark:text-neutral-50">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>
    </section>
  )
}

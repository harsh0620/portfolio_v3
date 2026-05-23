import { heroData } from '@/app/lib/data'
import { blurDataURL } from '@/app/lib/utils'
import { AnimateIn } from '@/app/components/ui/animate-in'
import { TypeWriter } from '@/app/components/ui/type-writer'
import { ImageWithFallback } from '@/app/components/ui/image-with-fallback'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { FiArrowRight, FiDownload } from 'react-icons/fi'

const floatingBadges = [
  { label: 'React', style: 'top-0 -left-8' },
  { label: 'Next.js', style: '-bottom-2 -left-4' },
  { label: 'React Native', style: 'top-10 -right-8' },
  { label: 'Flutter', style: 'bottom-14 -right-6' },
]

export function Hero() {
  const { name, greeting, roles, bio, social, image } = heroData

  return (
    <section className="min-h-screen flex flex-col items-center justify-center pt-16" id="home">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-20 lg:py-28">

          {/* ── Text content ─────────────────────────── */}
          <AnimateIn direction="up" className="space-y-6 order-2 lg:order-1 text-center lg:text-left min-w-0">

            {/* Greeting chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-caption font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {greeting}
            </div>

            {/* Name */}
            <h1 className="text-display-xxl text-neutral-900 dark:text-neutral-50 leading-tight wrap-break-word w-full">
              {name}
            </h1>

            {/* Typewriter */}
            <div className="text-display-sm text-neutral-500 dark:text-neutral-400 min-h-8">
              <TypeWriter strings={roles} />
            </div>

            {/* Bio */}
            <p className="text-body-lg text-neutral-500 dark:text-neutral-400 max-w-112 leading-relaxed mx-auto lg:mx-0">
              {bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <Link href="https://www.fiverr.com/harshchandravan/create-custom-web-applications" className="btn-primary" target='__blank'>
                Hire Me <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Resume <FiDownload className="w-4 h-4" />
              </Link>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-1 justify-center lg:justify-start">
              {[
                { href: social.github, Icon: FaGithub, label: 'GitHub' },
                { href: social.linkedin, Icon: FaLinkedin, label: 'LinkedIn' },
                { href: social.twitter, Icon: FaTwitter, label: 'Twitter' },
                { href: social.instagram, Icon: FaInstagram, label: 'Instagram' },
              ].map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:scale-110 transition-all duration-200"
                >
                  <Icon className="w-4.5 h-4.5" />
                </Link>
              ))}
            </div>
          </AnimateIn>

          {/* ── Profile image ─────────────────────────── */}
          <AnimateIn direction="left" delay={0.15} className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Decorative spinning ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-neutral-300 dark:border-neutral-700 animate-spin-slow" />

              {/* Solid ring */}
              <div className="absolute inset-3 rounded-full border border-neutral-200 dark:border-neutral-800" />

              {/* Image */}
              <div className="absolute inset-5 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <ImageWithFallback
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 639px) 216px, (max-width: 1023px) 280px, 344px"
                  className="object-cover object-top"
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
              </div>

              {/* Floating tech badges */}
              {floatingBadges.map(({ label, style }) => (
                <div
                  key={label}
                  className={`absolute ${style} px-3 py-1.5 rounded-full text-caption font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md whitespace-nowrap`}
                >
                  {label}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-12">
          <div className="flex flex-col items-center gap-2 animate-bounce opacity-50">
            <div className="w-px h-8 bg-neutral-400 dark:bg-neutral-600" />
            <span className="text-caption text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">
              scroll
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

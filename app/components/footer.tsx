import { navSections } from '@/app/lib/data'
import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6">

          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg text-neutral-900 dark:text-neutral-50 hover:opacity-70 transition-opacity"
          >
            Harsh{' '}
            <span className="text-neutral-400 dark:text-neutral-500 font-normal">Chandravanshi</span>
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navSections.map((section) => (
              <Link
                key={section.id}
                href={section.id}
                className="text-body-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-50 transition-colors"
              >
                {section.title}
              </Link>
            ))}
          </nav>

          {/* Tech stack */}
          <p className="text-caption text-neutral-400 dark:text-neutral-500 text-center">
            Built with Next.js, Tailwind CSS, Framer Motion & React Icons
          </p>

          {/* Copyright */}
          <p className="text-caption text-neutral-400 dark:text-neutral-500">
            © {year - 1}–{year} Harsh Chandravanshi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

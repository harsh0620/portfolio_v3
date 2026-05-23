'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import { navSections } from '@/app/lib/data'
import { ThemeToggle } from './theme-toggle'
import { cn } from '@/app/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-neutral-900 dark:text-neutral-50 hover:opacity-70 transition-opacity tracking-tight"
          >
            Harsh <span className="text-neutral-400 dark:text-neutral-500 font-normal">Chandravanshi</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
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

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              className={cn(
                'md:hidden w-9 h-9 rounded-full flex items-center justify-center',
                'bg-neutral-100 dark:bg-neutral-800',
                'text-neutral-600 dark:text-neutral-300',
                'hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors'
              )}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <aside
        className={cn(
          'fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden',
          'bg-white dark:bg-neutral-950',
          'border-l border-neutral-200 dark:border-neutral-800',
          'flex flex-col pt-20 px-4 pb-8',
          'transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
        aria-label="Mobile navigation"
      >
        <nav className="flex flex-col gap-1">
          {navSections.map((section) => (
            <Link
              key={section.id}
              href={section.id}
              onClick={() => setOpen(false)}
              className={cn(
                'py-3 px-4 rounded-xl text-body-md',
                'text-neutral-700 dark:text-neutral-300',
                'hover:bg-neutral-100 dark:hover:bg-neutral-900',
                'hover:text-neutral-900 dark:hover:text-neutral-50',
                'transition-colors'
              )}
            >
              {section.title}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
          <span className="text-caption text-neutral-400 dark:text-neutral-500">Theme</span>
          <ThemeToggle />
        </div>
      </aside>
    </>
  )
}

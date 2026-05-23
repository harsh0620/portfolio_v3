'use client'

import { useState, useEffect } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { cn } from '@/app/lib/utils'

export function GoUpButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
      className={cn(
        'fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full',
        'bg-neutral-900 dark:bg-neutral-100',
        'text-white dark:text-neutral-900',
        'flex items-center justify-center shadow-lg',
        'transition-all duration-300 hover:scale-110',
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      )}
    >
      <FiArrowUp className="w-4 h-4" />
    </button>
  )
}

'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiSun, FiMoon, FiMonitor } from 'react-icons/fi'
import { cn } from '@/app/lib/utils'

const themes = ['light', 'dark', 'system'] as const
type Theme = (typeof themes)[number]

const icons: Record<Theme, React.ReactNode> = {
  light: <FiSun className="w-4 h-4" />,
  dark: <FiMoon className="w-4 h-4" />,
  system: <FiMonitor className="w-4 h-4" />,
}

const labels: Record<Theme, string> = {
  light: 'Switch to dark mode',
  dark: 'Switch to system mode',
  system: 'Switch to light mode',
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div
        className={cn(
          'w-9 h-9 rounded-full bg-neutral-100 dark:bg-neutral-800',
          className
        )}
      />
    )
  }

  const currentTheme = (theme as Theme) ?? 'system'

  const cycle = () => {
    const idx = themes.indexOf(currentTheme)
    setTheme(themes[(idx + 1) % themes.length])
  }

  return (
    <button
      onClick={cycle}
      aria-label={labels[currentTheme]}
      title={labels[currentTheme]}
      className={cn(
        'w-9 h-9 rounded-full flex items-center justify-center',
        'bg-neutral-100 dark:bg-neutral-800',
        'text-neutral-600 dark:text-neutral-300',
        'hover:bg-neutral-200 dark:hover:bg-neutral-700',
        'transition-all duration-200 hover:scale-105',
        className
      )}
    >
      {icons[currentTheme]}
    </button>
  )
}

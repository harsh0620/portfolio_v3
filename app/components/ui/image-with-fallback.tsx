'use client'

import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'
import { cn } from '@/app/lib/utils'

type Props = Omit<ImageProps, 'onError'> & {
  fallbackClassName?: string
}

export function ImageWithFallback({ fallbackClassName, alt, ...props }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={cn(
          'w-full h-full flex items-center justify-center',
          'bg-neutral-100 dark:bg-neutral-800',
          fallbackClassName
        )}
      >
        <span className="text-4xl font-bold text-neutral-300 dark:text-neutral-600 select-none">
          {String(alt ?? '?')[0].toUpperCase()}
        </span>
      </div>
    )
  }

  return (
    <Image
      alt={alt ?? ''}
      {...props}
      onError={() => setError(true)}
    />
  )
}

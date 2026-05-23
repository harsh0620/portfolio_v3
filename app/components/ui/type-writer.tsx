'use client'

import { useState, useEffect } from 'react'

export function TypeWriter({ strings }: { strings: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const current = strings[index % strings.length]

    if (paused) {
      const t = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 2000)
      return () => clearTimeout(t)
    }

    const speed = deleting ? 40 : 80
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.substring(0, text.length + 1)
        setText(next)
        if (next === current) setPaused(true)
      } else {
        const next = current.substring(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIndex((i) => i + 1)
        }
      }
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, paused, index, strings])

  return (
    <span>
      {text}
      <span className="inline-block w-0.5 h-[1em] bg-current ml-0.5 animate-pulse align-middle rounded-full" />
    </span>
  )
}

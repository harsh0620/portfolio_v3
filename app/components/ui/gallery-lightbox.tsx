'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiChevronLeft,
  FiChevronRight,
  FiMaximize2,
} from 'react-icons/fi'
import { blurDataURL } from '@/app/lib/utils'
import { ImageWithFallback } from './image-with-fallback'

interface GalleryLightboxProps {
  images: string[]
  title: string
}

const ZOOM_STEPS = [1, 1.5, 2, 3]

export function GalleryLightbox({ images, title }: GalleryLightboxProps) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [zoomIdx, setZoomIdx] = useState(0)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPos = useRef({ x: 0, y: 0 })

  const scale = ZOOM_STEPS[zoomIdx]

  const resetView = () => {
    setZoomIdx(0)
    setPan({ x: 0, y: 0 })
  }

  const openAt = (i: number) => {
    setIndex(i)
    resetView()
    setOpen(true)
  }

  const close = () => {
    setOpen(false)
    resetView()
  }

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length)
    resetView()
  }, [images.length])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length)
    resetView()
  }, [images.length])

  const zoomIn = () => setZoomIdx((z) => Math.min(z + 1, ZOOM_STEPS.length - 1))
  const zoomOut = () =>
    setZoomIdx((z) => {
      const next = Math.max(z - 1, 0)
      if (next === 0) setPan({ x: 0, y: 0 })
      return next
    })

  // Keyboard shortcuts
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === '=' || e.key === '+') zoomIn()
      if (e.key === '-') zoomOut()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Mouse drag for pan when zoomed
  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return
    isDragging.current = true
    lastPos.current = { x: e.clientX, y: e.clientY }
    e.preventDefault()
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }))
  }

  const onMouseUp = () => {
    isDragging.current = false
  }

  // Scroll wheel zoom
  const onWheel = (e: React.WheelEvent) => {
    e.stopPropagation()
    if (e.deltaY < 0) zoomIn()
    else zoomOut()
  }

  return (
    <>
      {/* ── Thumbnail grid ─────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => openAt(i)}
            className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 group cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
          >
            <ImageWithFallback
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              fill
              sizes="(max-width: 639px) calc(100vw - 2rem), calc(50vw - 3rem)"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
              <FiMaximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 drop-shadow-lg" />
            </div>
          </button>
        ))}
      </div>

      {/* ── Lightbox overlay ───────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-200 flex flex-col bg-black"
          >
            {/* Top bar */}
            <div className="relative z-10 flex items-center justify-between px-4 py-3 shrink-0 bg-linear-to-b from-black/80 to-transparent">
              <span className="text-body-sm text-white/50 tabular-nums">
                {index + 1} / {images.length}
              </span>
              <span className="text-body-sm text-white/50 hidden sm:block truncate max-w-xs">
                {title}
              </span>
              <button
                onClick={close}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Image area */}
            <div
              className="flex-1 flex items-center justify-center relative overflow-hidden"
              onClick={close}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {/* Prev */}
              {images.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Image with pan support */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="select-none"
                  onClick={(e) => e.stopPropagation()}
                  onMouseDown={onMouseDown}
                  onWheel={onWheel}
                  style={{
                    cursor: scale > 1 ? (isDragging.current ? 'grabbing' : 'grab') : 'default',
                  }}
                >
                  <img
                    src={images[index]}
                    alt={`${title} screenshot ${index + 1}`}
                    className="block rounded-md shadow-2xl max-h-[72vh] max-w-[88vw] object-contain"
                    style={{
                      transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                      transformOrigin: 'center',
                      transition: isDragging.current ? 'none' : 'transform 0.2s ease',
                    }}
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next */}
              {images.length > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Next"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom bar — zoom controls + thumbnail strip */}
            <div
              className="relative z-10 flex items-center justify-center gap-3 px-4 py-4 shrink-0 bg-linear-to-t from-black/80 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={zoomOut}
                disabled={zoomIdx === 0}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                aria-label="Zoom out"
              >
                <FiZoomOut className="w-5 h-5" />
              </button>

              <span className="text-body-sm text-white/40 w-12 text-center tabular-nums">
                {Math.round(scale * 100)}%
              </span>

              <button
                onClick={zoomIn}
                disabled={zoomIdx === ZOOM_STEPS.length - 1}
                className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-25 disabled:cursor-not-allowed transition-colors"
                aria-label="Zoom in"
              >
                <FiZoomIn className="w-5 h-5" />
              </button>

              {/* Thumbnail strip */}
              {images.length > 1 && (
                <div className="flex gap-1.5 ml-4 overflow-x-auto max-w-55 sm:max-w-sm">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setIndex(i)
                        resetView()
                      }}
                      className={`relative w-10 h-7 rounded overflow-hidden shrink-0 border-2 transition-all ${
                        i === index
                          ? 'border-white opacity-100'
                          : 'border-transparent opacity-35 hover:opacity-65'
                      }`}
                      aria-label={`Screenshot ${i + 1}`}
                    >
                      <img src={src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

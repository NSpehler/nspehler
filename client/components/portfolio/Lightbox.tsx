"use client"

import { ChevronLeftIcon, ChevronRightIcon, XIcon } from "lucide-react"
import Image from "next/image"
import {
  type CSSProperties,
  type PointerEvent,
  type SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"

import type { Screenshot } from "@/content/types"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

type Props = {
  shots: readonly Screenshot[]
  /** Index of the open shot, or `null` when closed. */
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
  /** Returns the on-screen thumbnail for a shot so the frame can morph from/to it. */
  getThumbRect: (index: number) => DOMRect | null
  /** Same `sizes` as the thumbnails, so the opening frame reuses cached bytes. */
  thumbSizes: string
}

type Rect = { top: number; left: number; width: number; height: number }
type Phase = "closed" | "opening" | "open" | "closing"

const DURATION = 420
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)"
const LIGHTBOX_SIZES = "(min-width: 1536px) 1400px, 100vw"
const CHROME = { x: 20, top: 72, bottom: 88 }
const MD_CHROME = { x: 96, top: 80, bottom: 96 }

/**
 * Screenshot lightbox. The frame morphs from the clicked thumbnail into a
 * centered, fitted view and back, the backdrop blurs the page, and the frame
 * re-fits itself when navigating between shots of different aspect ratios.
 */
export const Lightbox = ({
  shots,
  index,
  onIndexChange,
  onClose,
  getThumbRect,
  thumbSizes,
}: Props) => {
  const reducedMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const swipeStart = useRef<number | null>(null)

  const [seenIndex, setSeenIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<Phase>("closed")
  const [current, setCurrent] = useState(0)
  const [viewport, setViewport] = useState<[number, number] | null>(null)
  const [originRect, setOriginRect] = useState<Rect | null>(null)
  const [revealed, setRevealed] = useState(false)

  /*
   * React to the parent opening a shot. Adjusting state during render is the
   * sanctioned way to derive state from a prop change; this branch only runs
   * on the client after a click, never during SSR.
   */
  if (index !== seenIndex) {
    setSeenIndex(index)
    if (index !== null) {
      setCurrent(index)
      setViewport([window.innerWidth, window.innerHeight])
      if (phase === "closed" || phase === "closing") {
        setOriginRect(toRect(getThumbRect(index)))
        setRevealed(false)
        setPhase("opening")
      }
    }
  }

  useEffect(() => {
    if (phase !== "opening") return
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
    closeButtonRef.current?.focus({ preventScroll: true })
    // Let the browser paint the frame at the thumbnail first, then move it.
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPhase("open")),
    )
    return () => cancelAnimationFrame(frame)
  }, [phase])

  useEffect(() => {
    if (phase !== "open") return
    const onResize = () => setViewport([window.innerWidth, window.innerHeight])
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [phase])

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  const close = useCallback(() => {
    if (phase !== "open") return
    setOriginRect(toRect(getThumbRect(current)))
    setPhase("closing")
    closeTimer.current = setTimeout(
      () => {
        dialogRef.current?.close()
        setPhase("closed")
        onClose()
      },
      reducedMotion ? 0 : DURATION,
    )
  }, [phase, current, getThumbRect, onClose, reducedMotion])

  const go = useCallback(
    (delta: number) => {
      if (phase !== "open" || shots.length < 2) return
      const next = (current + delta + shots.length) % shots.length
      setRevealed(false)
      setCurrent(next)
      onIndexChange(next)
    },
    [phase, current, shots.length, onIndexChange],
  )

  useEffect(() => {
    if (phase !== "open") return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") go(1)
      if (event.key === "ArrowLeft") go(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [phase, go])

  const handleCancel = (event: SyntheticEvent<HTMLDialogElement>) => {
    // Escape: keep the dialog mounted until the closing animation finishes.
    event.preventDefault()
    close()
  }

  const handlePointerDown = (event: PointerEvent) => {
    if (event.pointerType === "touch") swipeStart.current = event.clientX
  }

  const handlePointerUp = (event: PointerEvent) => {
    if (swipeStart.current === null) return
    const delta = event.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(delta) > 48) go(delta < 0 ? 1 : -1)
  }

  const shot = shots[current]
  const neighbours =
    shots.length > 1
      ? [1, -1]
          .map(
            (delta) => shots[(current + delta + shots.length) % shots.length],
          )
          .filter(
            (neighbour, position, list): neighbour is Screenshot =>
              neighbour !== undefined && list.indexOf(neighbour) === position,
          )
      : []

  if (phase === "closed" || !shot || !viewport) {
    return <dialog ref={dialogRef} className="hidden" onCancel={handleCancel} />
  }

  const fitted = fitRect(shot, viewport)
  const settled = phase === "open"
  const target: Rect = settled ? fitted : (originRect ?? shrink(fitted))
  const animate = !reducedMotion
  const frameStyle: CSSProperties = {
    top: target.top,
    left: target.left,
    width: target.width,
    height: target.height,
    borderRadius: settled ? 10 : 12,
    opacity: settled || originRect ? 1 : 0,
    transition: animate
      ? ["top", "left", "width", "height", "border-radius", "opacity"]
          .map((property) => `${property} ${DURATION}ms ${EASE}`)
          .join(", ")
      : "none",
  }
  const fade = cn(
    animate && "transition-opacity duration-300 ease-out",
    settled ? "opacity-100" : "opacity-0",
  )

  return createPortal(
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      aria-label={`${shot.caption}, image ${current + 1} of ${shots.length}`}
      className="text-neutral-900 dark:text-white fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 backdrop:bg-transparent"
    >
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={close}
        className={cn(
          "bg-white/85 dark:bg-black/85 absolute inset-0 cursor-zoom-out backdrop-blur-2xl outline-none",
          animate && "transition-opacity duration-[420ms] ease-out",
          settled ? "opacity-100" : "opacity-0",
        )}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 md:px-8",
          fade,
        )}
      >
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium tabular-nums">
          {current + 1}
          <span className="text-neutral-300 dark:text-neutral-600 mx-1">/</span>
          {shots.length}
        </p>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={close}
          aria-label="Close"
          className={cn(
            "pointer-events-auto inline-flex size-9 items-center justify-center rounded-full",
            controlClass,
          )}
        >
          <XIcon className="size-4" aria-hidden="true" />
        </button>
      </div>

      <figure
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="bg-neutral-100 ring-neutral-900/10 dark:bg-neutral-900 dark:ring-white/10 absolute m-0 overflow-hidden shadow-[0_24px_80px_-24px_rgba(0,0,0,0.35)] ring-1 select-none dark:shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)]"
        style={frameStyle}
      >
        {/* Thumbnail-resolution copy: same srcset as the card, so it is already cached. */}
        <Image
          key={`${shot.image.src}-thumb`}
          src={shot.image}
          alt=""
          aria-hidden="true"
          sizes={thumbSizes}
          placeholder="blur"
          quality={85}
          draggable={false}
          className="absolute inset-0 size-full object-cover object-top"
        />
        <Image
          key={shot.image.src}
          src={shot.image}
          alt={shot.alt ?? shot.caption}
          sizes={LIGHTBOX_SIZES}
          quality={85}
          priority
          draggable={false}
          onLoad={() => setRevealed(true)}
          className={cn(
            "absolute inset-0 size-full object-cover object-top",
            animate && "transition-opacity duration-300 ease-out",
            revealed ? "opacity-100" : "opacity-0",
          )}
        />
        <figcaption className="sr-only">{shot.caption}</figcaption>
        {/* Warm the neighbours with the exact srcset the main image uses, so arrow presses are instant. */}
        {settled &&
          neighbours.map((neighbour) => (
            <Image
              key={`${neighbour.image.src}-preload`}
              src={neighbour.image}
              alt=""
              aria-hidden="true"
              sizes={LIGHTBOX_SIZES}
              quality={85}
              loading="eager"
              className="pointer-events-none absolute inset-0 size-full opacity-0"
            />
          ))}
      </figure>

      <p
        aria-hidden="true"
        className={cn(
          "text-neutral-600 dark:text-neutral-400 pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-7 text-center text-sm md:pb-8",
          fade,
        )}
      >
        {shot.caption}
      </p>

      {shots.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className={cn(navClass, "left-6", fade)}
          >
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className={cn(navClass, "right-6", fade)}
          >
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>,
    document.body,
  )
}

const controlClass =
  "bg-white/70 text-neutral-900 ring-1 ring-neutral-900/10 backdrop-blur transition-colors hover:bg-white dark:bg-black/60 dark:text-white dark:ring-white/15 dark:hover:bg-neutral-900"

const navClass = cn(
  "absolute top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full md:inline-flex",
  controlClass,
)

const toRect = (rect: DOMRect | null): Rect | null =>
  rect
    ? { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
    : null

/** Fallback origin when the thumbnail is off screen: a slightly smaller, centered frame. */
const shrink = (rect: Rect): Rect => ({
  top: rect.top + rect.height * 0.04,
  left: rect.left + rect.width * 0.04,
  width: rect.width * 0.92,
  height: rect.height * 0.92,
})

/** Largest rect with the shot's aspect ratio that fits inside the viewport chrome. */
const fitRect = (shot: Screenshot, [vw, vh]: [number, number]): Rect => {
  const chrome = vw >= 768 ? MD_CHROME : CHROME
  const maxWidth = Math.min(1400, vw - chrome.x * 2)
  const maxHeight = vh - chrome.top - chrome.bottom
  const ratio = shot.image.width / shot.image.height
  let width = maxWidth
  let height = width / ratio
  if (height > maxHeight) {
    height = maxHeight
    width = height * ratio
  }
  return {
    width,
    height,
    left: (vw - width) / 2,
    top: chrome.top + (maxHeight - height) / 2,
  }
}

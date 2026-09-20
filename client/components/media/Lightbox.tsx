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

import { Inline, inlineText } from "@/components/ui/Inline"
import type { Shot } from "@/content/types"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

import { sizes } from "./sizes"

type Rect = { top: number; left: number; width: number; height: number }

export type Thumb = {
  rect: Rect
  angle: number
  radius: number
  sizes: string
}

type Props = {
  shots: readonly Shot[]
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
  getThumb: (index: number) => Thumb | null
}

type Origin = Thumb
type Phase = "closed" | "opening" | "open" | "closing"

const DURATION = 420
const EASE = "cubic-bezier(0.32, 0.72, 0, 1)"
const CHROME = { x: 20, top: 72, bottom: 88 }
const MD_CHROME = { x: 96, top: 80, bottom: 96 }
const LG_CHROME = { x: 96, top: 104, bottom: 96 }
const headerHeight = (vw: number) => (vw >= 1024 ? 104 : 72)

export const Lightbox = ({
  shots,
  index,
  onIndexChange,
  onClose,
  getThumb,
}: Props) => {
  const reducedMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const [seenIndex, setSeenIndex] = useState<number | null>(null)
  const [phase, setPhase] = useState<Phase>("closed")
  const [current, setCurrent] = useState(0)
  const [viewport, setViewport] = useState<[number, number] | null>(null)
  const [origin, setOrigin] = useState<Origin | null>(null)
  const [revealed, setRevealed] = useState(false)

  if (index !== seenIndex) {
    setSeenIndex(index)
    if (index !== null) {
      setCurrent(index)
      setViewport([window.innerWidth, window.innerHeight])
      if (phase === "closed" || phase === "closing") {
        setOrigin(getThumb(index))
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
    setOrigin(getThumb(current))
    setPhase("closing")
    closeTimer.current = setTimeout(
      () => {
        dialogRef.current?.close()
        setPhase("closed")
        onClose()
      },
      reducedMotion ? 0 : DURATION,
    )
  }, [phase, current, getThumb, onClose, reducedMotion])

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
    event.preventDefault()
    close()
  }

  const handlePointerDown = (event: PointerEvent) => {
    if (event.pointerType === "touch")
      swipeStart.current = { x: event.clientX, y: event.clientY }
  }

  const handlePointerUp = (event: PointerEvent) => {
    const start = swipeStart.current
    swipeStart.current = null
    if (!start) return
    const dx = event.clientX - start.x
    const dy = event.clientY - start.y
    if (dy > 64 && dy > Math.abs(dx)) close()
    else if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy))
      go(dx < 0 ? 1 : -1)
  }

  const shot = shots[current]
  const neighbours =
    shots.length > 1
      ? [1, -1]
          .map(
            (delta) => shots[(current + delta + shots.length) % shots.length],
          )
          .filter(
            (neighbour, position, list): neighbour is Shot =>
              neighbour !== undefined && list.indexOf(neighbour) === position,
          )
      : []

  if (phase === "closed" || !shot || !viewport) {
    return <dialog ref={dialogRef} className="hidden" onCancel={handleCancel} />
  }

  const device = shot.kind === "device"
  const fitted = fitRect(shot, viewport)
  const settled = phase === "open"
  const target: Rect = settled ? fitted : (origin?.rect ?? shrink(fitted))
  const animate = !reducedMotion
  const radius = device ? 0 : shot.kind === "phone" ? target.width * 0.12 : 10
  const frameStyle: CSSProperties = {
    top: target.top,
    left: target.left,
    width: target.width,
    height: target.height,
    borderRadius: settled || !origin ? radius : origin.radius,
    rotate: settled || !origin ? "0deg" : `${origin.angle}deg`,
    opacity: settled || origin ? 1 : 0,
    transition: animate
      ? ["top", "left", "width", "height", "border-radius", "rotate", "opacity"]
          .map((property) => `${property} ${DURATION}ms ${EASE}`)
          .join(", ")
      : "none",
  }
  const fade = cn(
    animate && "transition-opacity duration-300 ease-out",
    settled ? "opacity-100" : "opacity-0",
  )
  const fit = device
    ? "object-contain drop-shadow-phone"
    : "object-cover object-top"
  const caption = inlineText(shot.caption)

  return createPortal(
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      aria-label={`${caption}, image ${current + 1} of ${shots.length}`}
      className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-transparent p-0 text-ink backdrop:bg-transparent"
    >
      <button
        type="button"
        aria-label="Close"
        tabIndex={-1}
        onClick={close}
        className={cn(
          "absolute inset-0 cursor-zoom-out outline-none",
          animate &&
            "transition-[background-color,backdrop-filter] duration-[420ms] ease-out",
          settled
            ? "bg-page/85 backdrop-blur-2xl"
            : "bg-page/0 backdrop-blur-[0px]",
        )}
      />

      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-5 py-5 md:px-8",
          fade,
        )}
      >
        <p className="caption tabular-nums">
          {current + 1}
          <span className="mx-1 text-separator">/</span>
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

      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(${headerHeight(viewport[0])}px 0 0 0)` }}
      >
        <figure
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            swipeStart.current = null
          }}
          className={cn(
            "pointer-events-auto absolute m-0 touch-pinch-zoom overflow-hidden select-none",
            !device &&
              "bg-mat shadow-[0_24px_80px_-24px_var(--shot-shadow)] ring-1 ring-bleed",
          )}
          style={frameStyle}
        >
          <Image
            key={`${shot.src.src}-thumb`}
            src={shot.src}
            alt=""
            aria-hidden="true"
            sizes={origin?.sizes ?? sizes.card}
            placeholder="blur"
            quality={85}
            draggable={false}
            className={cn("absolute inset-0 size-full", fit)}
          />
          <Image
            key={shot.src.src}
            src={shot.src}
            alt={shot.alt}
            sizes={sizes.lightbox}
            quality={85}
            loading="eager"
            fetchPriority="high"
            draggable={false}
            onLoad={() => setRevealed(true)}
            className={cn(
              "absolute inset-0 size-full",
              fit,
              animate && "transition-opacity duration-300 ease-out",
              revealed ? "opacity-100" : "opacity-0",
            )}
          />
          <figcaption className="sr-only">{caption}</figcaption>
          {settled &&
            neighbours.map((neighbour) => (
              <Image
                key={`${neighbour.src.src}-preload`}
                src={neighbour.src}
                alt=""
                aria-hidden="true"
                sizes={sizes.lightbox}
                quality={85}
                loading="eager"
                className="pointer-events-none absolute inset-0 size-full opacity-0"
              />
            ))}
        </figure>
      </div>

      <p
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 px-5 pb-7 text-center caption md:pb-8",
          fade,
        )}
      >
        <Inline text={shot.caption} />
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
  "bg-page/70 text-ink ring-1 ring-edge backdrop-blur transition-colors hover:bg-page"

const navClass = cn(
  "absolute top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full md:inline-flex",
  controlClass,
)

const shrink = (rect: Rect): Rect => ({
  top: rect.top + rect.height * 0.04,
  left: rect.left + rect.width * 0.04,
  width: rect.width * 0.92,
  height: rect.height * 0.92,
})

const fitRect = (shot: Shot, [vw, vh]: [number, number]): Rect => {
  const chrome = vw >= 1024 ? LG_CHROME : vw >= 768 ? MD_CHROME : CHROME
  const maxWidth = Math.min(1400, vw - chrome.x * 2)
  const maxHeight = vh - chrome.top - chrome.bottom
  const ratio = shot.src.width / shot.src.height
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

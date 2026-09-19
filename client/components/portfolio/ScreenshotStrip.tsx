"use client"

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import type { Screenshot } from "@/content/types"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

import { Lightbox } from "./Lightbox"
import { ShotButton } from "./ShotButton"
import { useLightbox } from "./useLightbox"

type Props = {
  /** Used for accessible labels. */
  title: string
  shots: readonly Screenshot[]
}

const THUMB_SIZES = "(min-width: 1024px) 320px, (min-width: 640px) 62vw, 82vw"

type Edges = { start: boolean; end: boolean }

/**
 * Horizontal, snap-scrolling gallery under Work / Project entries. The edges
 * fade into the page background while there is more to scroll, and arrows
 * appear on hover for mouse users. Each frame opens the lightbox.
 */
export const ScreenshotStrip = ({ title, shots }: Props) => {
  const reducedMotion = useReducedMotion()
  const scroller = useRef<HTMLUListElement>(null)
  const [edges, setEdges] = useState<Edges>({ start: true, end: true })
  const [frameHeight, setFrameHeight] = useState(0)
  const lightbox = useLightbox()

  useEffect(() => {
    const el = scroller.current
    if (!el) return

    const measure = () => {
      const max = el.scrollWidth - el.clientWidth
      setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft >= max - 1 })
      const frame = el.querySelector("img")
      if (frame) setFrameHeight(frame.getBoundingClientRect().height)
    }

    const observer = new ResizeObserver(measure)
    observer.observe(el)
    el.addEventListener("scroll", measure, { passive: true })
    return () => {
      observer.disconnect()
      el.removeEventListener("scroll", measure)
    }
  }, [])

  const scrollByItem = (direction: -1 | 1) => {
    const el = scroller.current
    const item = el?.querySelector("li")
    if (!el || !item) return
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0
    el.scrollBy({
      left: direction * (item.offsetWidth + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <div className="group/strip relative -mx-5 md:-mr-8 md:ml-0">
      <ul
        ref={scroller}
        aria-label={`${title} screenshots`}
        className="grid snap-x snap-mandatory scroll-px-5 [scrollbar-width:none] auto-cols-[82%] grid-flow-col gap-4 overflow-x-auto overflow-y-hidden px-5 pb-1 sm:auto-cols-[62%] md:scroll-px-0 md:auto-cols-[calc(50%-0.5rem)] md:pr-8 md:pl-0 [&::-webkit-scrollbar]:hidden"
      >
        {shots.map((shot, position) => (
          <li key={shot.image.src} className="snap-start">
            <figure className="grid gap-2">
              <ShotButton
                ref={lightbox.registerThumb(position)}
                shot={shot}
                sizes={THUMB_SIZES}
                label={`${title}: ${shot.caption}`}
                onOpen={() => lightbox.open(position)}
              />
              <figcaption className="text-sm text-neutral-500 dark:text-neutral-400">
                {shot.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <EdgeFade side="left" visible={!edges.start} />
      <EdgeFade side="right" visible={!edges.end} />

      {frameHeight > 0 && (
        <>
          <ArrowButton
            direction={-1}
            visible={!edges.start}
            top={frameHeight / 2}
            onClick={() => scrollByItem(-1)}
          />
          <ArrowButton
            direction={1}
            visible={!edges.end}
            top={frameHeight / 2}
            onClick={() => scrollByItem(1)}
          />
        </>
      )}

      <Lightbox
        shots={shots}
        index={lightbox.index}
        onIndexChange={lightbox.open}
        onClose={lightbox.close}
        getThumbRect={lightbox.getThumbRect}
        thumbSizes={THUMB_SIZES}
      />
    </div>
  )
}

type EdgeFadeProps = {
  side: "left" | "right"
  visible: boolean
}

const EdgeFade = ({ side, visible }: EdgeFadeProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute inset-y-0 w-14 from-white to-transparent transition-opacity duration-300 ease-out motion-reduce:transition-none md:w-20 dark:from-black",
      side === "left" ? "left-0 bg-gradient-to-r" : "right-0 bg-gradient-to-l",
      visible ? "opacity-100" : "opacity-0",
    )}
  />
)

type ArrowButtonProps = {
  direction: -1 | 1
  visible: boolean
  top: number
  onClick: () => void
}

const ArrowButton = ({
  direction,
  visible,
  top,
  onClick,
}: ArrowButtonProps) => {
  const Icon = direction === -1 ? ChevronLeftIcon : ChevronRightIcon
  return (
    <button
      type="button"
      onClick={onClick}
      tabIndex={-1}
      aria-hidden={!visible}
      aria-label={
        direction === -1 ? "Previous screenshots" : "Next screenshots"
      }
      style={{ top }}
      className={cn(
        "absolute hidden size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-neutral-900 shadow-sm ring-1 ring-neutral-900/10 backdrop-blur transition-[opacity,background-color] duration-300 ease-out hover:bg-white motion-reduce:transition-none md:inline-flex dark:bg-black/70 dark:text-white dark:ring-white/15 dark:hover:bg-neutral-900",
        direction === -1 ? "left-3" : "right-3",
        visible
          ? "opacity-0 group-hover/strip:opacity-100 focus-visible:opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  )
}

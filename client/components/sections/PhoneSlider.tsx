"use client"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { type ReactNode, useEffect, useRef, useState } from "react"

import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { vt } from "@/components/motion/names"
import type { Screen } from "@/content/types"
import { screenShot } from "@/lib/collectShots"
import { morph } from "@/lib/easing"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

type Props = {
  screens: readonly Screen[]
  slug: string
  intro: ReactNode
}

const DURATION = 500

const tilts = [
  "-rotate-[0.7deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.4deg]",
  "rotate-[0.8deg]",
  "-rotate-[0.6deg]",
  "rotate-[0.4deg]",
  "-rotate-[0.8deg]",
  "rotate-[0.6deg]",
  "-rotate-[0.5deg]",
  "rotate-[0.7deg]",
]

export const PhoneSlider = ({ screens, slug, intro }: Props) => {
  const viewport = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const animation = useRef<number | null>(null)
  const reducedMotion = useReducedMotion()
  const [edges, setEdges] = useState({ start: true, end: false })

  useEffect(() => {
    const element = viewport.current
    if (!element) return
    const update = () => {
      const max = element.scrollWidth - element.clientWidth
      setEdges({
        start: element.scrollLeft <= 1,
        end: element.scrollLeft >= max - 1,
      })
    }
    const stop = () => {
      if (animation.current) cancelAnimationFrame(animation.current)
      animation.current = null
      element.style.scrollSnapType = ""
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(element)
    element.addEventListener("scroll", update, { passive: true })
    element.addEventListener("wheel", stop, { passive: true })
    element.addEventListener("pointerdown", stop)
    return () => {
      observer.disconnect()
      element.removeEventListener("scroll", update)
      element.removeEventListener("wheel", stop)
      element.removeEventListener("pointerdown", stop)
    }
  }, [])

  const go = (direction: -1 | 1) => {
    const element = viewport.current
    const first = track.current?.firstElementChild
    if (!element || !(first instanceof HTMLElement) || !track.current) return
    const gap = parseFloat(getComputedStyle(track.current).columnGap) || 0
    const step = first.offsetWidth + gap
    const max = element.scrollWidth - element.clientWidth
    const index = Math.round(element.scrollLeft / step)
    const target = Math.min(max, Math.max(0, (index + direction) * step))
    if (reducedMotion) {
      element.scrollLeft = target
      return
    }
    if (animation.current) cancelAnimationFrame(animation.current)
    const from = element.scrollLeft
    let started: number | null = null
    element.style.scrollSnapType = "none"
    const tick = (now: number) => {
      started ??= now
      const progress = Math.min(1, (now - started) / DURATION)
      element.scrollLeft = from + (target - from) * morph(progress)
      if (progress < 1) {
        animation.current = requestAnimationFrame(tick)
      } else {
        animation.current = null
        element.style.scrollSnapType = ""
      }
    }
    animation.current = requestAnimationFrame(tick)
  }

  const buttons = (className: string) => (
    <div className={cn("flex items-center gap-3", className)}>
      {(
        [
          [-1, edges.start, "Previous screenshots", ArrowLeftIcon],
          [1, edges.end, "Next screenshots", ArrowRightIcon],
        ] as const
      ).map(([direction, disabled, label, Icon]) => (
        <button
          key={label}
          type="button"
          onClick={() => go(direction)}
          disabled={disabled}
          aria-label={label}
          className="flex size-11 items-center justify-center rounded-full bg-raised text-ink inset-ring inset-ring-control transition-opacity duration-200 disabled:cursor-default disabled:opacity-35 motion-reduce:transition-none"
        >
          <Icon aria-hidden="true" className="size-4" />
        </button>
      ))}
    </div>
  )

  return (
    <>
      <div className="flex flex-col gap-3.5 md:flex-row md:items-end md:justify-between md:gap-10">
        <div className="flex flex-col gap-3.5 md:max-w-[560px] md:gap-4">
          {intro}
        </div>
        {buttons("hidden md:flex")}
      </div>
      <div
        ref={viewport}
        className="-mx-5 snap-x snap-mandatory scroll-pl-5 [scrollbar-width:none] overflow-x-auto overflow-y-hidden overscroll-x-contain pt-[18px] pb-6 pl-5 md:-mr-16 md:-ml-4 md:scroll-pl-4 md:pt-6 md:pb-8 md:pl-4 [&::-webkit-scrollbar]:hidden"
      >
        <div ref={track} className="flex w-max gap-3.5 md:gap-6">
          {screens.map((screen, index) => {
            const shot = (
              <Shot
                shot={screenShot(screen)}
                sizes={sizes.slide}
                className={cn("w-full rounded-[11.2%/5.16%]", tilts[index])}
                imageClassName="aspect-[232/504] w-full rounded-[inherit] object-cover shadow-shot-xs md:shadow-slide"
              />
            )
            return (
              <figure
                key={screen.title}
                className="flex w-44 shrink-0 snap-start flex-col gap-3 md:w-[232px]"
              >
                {index === 0 ? (
                  <Morph name={vt.visual(slug)}>{shot}</Morph>
                ) : (
                  shot
                )}
                <figcaption className="flex flex-col gap-[3px]">
                  <span className="text-[13px] font-medium md:text-sm">
                    {screen.title}
                  </span>
                  <span className="text-xs/[1.45] text-body md:text-[13px]/[1.45]">
                    {screen.subtitle}
                  </span>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
      {buttons("md:hidden")}
    </>
  )
}

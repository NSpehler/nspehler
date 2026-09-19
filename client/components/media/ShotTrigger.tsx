"use client"

import type { ReactNode } from "react"

import { inlineText } from "@/components/ui/Inline"
import type { Shot } from "@/content/types"
import { cn } from "@/lib/utils"

import { useLightbox } from "./LightboxProvider"

type Props = {
  shot: Shot
  sizes: string
  className?: string
  children: ReactNode
}

export const ShotTrigger = ({ shot, sizes, className, children }: Props) => {
  const { shots, open, register } = useLightbox()
  const index = shots.findIndex(({ src }) => src.src === shot.src.src)
  return (
    <button
      type="button"
      ref={register(index, sizes)}
      onClick={() => open(index)}
      aria-label={`Open ${inlineText(shot.caption)}`}
      className={cn(
        "block cursor-zoom-in p-0 text-left outline-offset-4",
        className,
      )}
    >
      {children}
    </button>
  )
}

"use client"

import Link from "next/link"
import { type ComponentProps, useRef } from "react"
import { preload } from "react-dom"

import type { Href } from "@/content/types"

export type Warm = { src: string; srcSet?: string; sizes?: string }

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: Href
  warm?: Warm
}

export const WarmLink = ({
  warm,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: Props) => {
  const warmed = useRef(false)

  const warmUp = () => {
    if (!warm || warmed.current) return
    warmed.current = true
    preload(warm.src, {
      as: "image",
      imageSrcSet: warm.srcSet,
      imageSizes: warm.sizes,
      fetchPriority: "low",
    })
  }

  return (
    <Link
      {...props}
      onMouseEnter={(event) => {
        warmUp()
        onMouseEnter?.(event)
      }}
      onFocus={(event) => {
        warmUp()
        onFocus?.(event)
      }}
      onTouchStart={(event) => {
        warmUp()
        onTouchStart?.(event)
      }}
    />
  )
}

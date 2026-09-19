import Image from "next/image"

import type { Shot as ShotData } from "@/content/types"

import { ShotTrigger } from "./ShotTrigger"

type Props = {
  shot: ShotData
  sizes: string
  preload?: boolean
  eager?: boolean
  className?: string
  imageClassName?: string
}

export const Shot = ({
  shot,
  sizes,
  preload = false,
  eager = false,
  className,
  imageClassName,
}: Props) => (
  <ShotTrigger shot={shot} sizes={sizes} className={className}>
    <Image
      src={shot.src}
      alt={shot.alt}
      sizes={sizes}
      placeholder="blur"
      quality={85}
      preload={preload}
      loading={eager || preload ? "eager" : undefined}
      decoding={preload ? "sync" : undefined}
      fetchPriority={preload ? "high" : undefined}
      className={imageClassName}
    />
  </ShotTrigger>
)

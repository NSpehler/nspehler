import { getImageProps, type StaticImageData } from "next/image"

import { sizes } from "@/components/media/sizes"
import type { Project } from "@/content/types"

import type { Warm } from "./WarmLink"

export const warm = (src: StaticImageData, size: string): Warm => {
  const { props } = getImageProps({ src, alt: "", sizes: size, quality: 85 })
  return { src: props.src, srcSet: props.srcSet, sizes: props.sizes }
}

export const leadWarm = ({ lead }: Project): Warm =>
  lead.type === "triptych"
    ? warm(lead.shots[1].src, sizes.device)
    : warm(lead.shot.src, lead.frame === "mat" ? sizes.lead : sizes.bleed)

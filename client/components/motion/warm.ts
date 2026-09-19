import { getImageProps } from "next/image"

import { sizes } from "@/components/media/sizes"
import type { Project } from "@/content/types"

import type { Warm } from "./WarmLink"

export const leadWarm = ({ lead }: Project): Warm => {
  const [src, size] =
    lead.type === "triptych"
      ? [lead.shots[1].src, sizes.device]
      : [lead.shot.src, lead.frame === "mat" ? sizes.lead : sizes.bleed]
  const { props } = getImageProps({ src, alt: "", sizes: size, quality: 85 })
  return { src: props.src, srcSet: props.srcSet, sizes: props.sizes }
}

import Image from "next/image"

import { site } from "@/content/site"
import { cn } from "@/lib/utils"

type Props = {
  size: number
  className?: string
}

export const Avatar = ({ size, className }: Props) => (
  <Image
    src={site.avatar.src}
    alt={site.avatar.alt}
    width={size}
    height={size}
    sizes={`${size}px`}
    className={cn(
      "shrink-0 rounded-full object-cover shadow-avatar",
      className,
    )}
  />
)

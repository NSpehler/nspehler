import Image from "next/image"

import type { Screenshot } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  shot: Screenshot
  /** `sizes` attribute forwarded to `next/image`. */
  sizes: string
  priority?: boolean
  className?: string
  imageClassName?: string
}

/**
 * A 16:10 frame around a screenshot. The <img> itself carries the aspect
 * ratio (not an absolutely positioned child) so scroll containers measure the
 * height correctly in every engine, Safari included.
 */
export const ProjectMedia = ({
  shot,
  sizes,
  priority = false,
  className,
  imageClassName,
}: Props) => (
  <span
    className={cn(
      "bg-neutral-100 dark:bg-neutral-900 relative block overflow-hidden rounded-xl",
      className,
    )}
  >
    <Image
      src={shot.image}
      alt={shot.alt ?? shot.caption}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      quality={85}
      className={cn(
        "block aspect-[16/10] w-full object-cover object-top",
        imageClassName,
      )}
    />
    {/* Hairline drawn above the image so the frame reads on any screenshot. */}
    <span
      aria-hidden="true"
      className="ring-neutral-900/10 dark:ring-white/10 pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset"
    />
  </span>
)

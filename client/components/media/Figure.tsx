import type { ReactNode } from "react"

import { Inline } from "@/components/ui/Inline"
import type { Inline as InlineText } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  caption: InlineText
  className?: string
  children: ReactNode
}

export const Figure = ({ caption, className, children }: Props) => (
  <figure className={cn("flex flex-col gap-3", className)}>
    {children}
    <figcaption className="caption">
      <Inline
        text={caption}
        linkClassName="text-ink underline decoration-separator underline-offset-[3px]"
      />
    </figcaption>
  </figure>
)

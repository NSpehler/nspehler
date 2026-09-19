import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  children: ReactNode
  aside?: ReactNode
  as?: "span" | "h2" | "p"
  className?: string
}

export const Eyebrow = ({
  children,
  aside,
  as: Tag = "span",
  className,
}: Props) =>
  aside === undefined ? (
    <Tag className={cn("eyebrow", className)}>{children}</Tag>
  ) : (
    <div className={cn("flex justify-between eyebrow", className)}>
      <Tag>{children}</Tag>
      <span>{aside}</span>
    </div>
  )

import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
  children: ReactNode
}

export const Mat = ({ className, children }: Props) => (
  <div className={cn("mat", className)}>{children}</div>
)

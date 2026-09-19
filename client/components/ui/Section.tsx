import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Eyebrow } from "./Eyebrow"

type Props = {
  label: ReactNode
  labelAs?: "span" | "h2"
  rule?: boolean
  wide?: boolean
  id?: string
  ariaLabel?: string
  className?: string
  children: ReactNode
}

export const Section = ({
  label,
  labelAs = "span",
  rule = true,
  wide = false,
  id,
  ariaLabel,
  className,
  children,
}: Props) => (
  <section
    id={id}
    aria-label={ariaLabel}
    className={cn(
      rule ? "ruled" : "mt-14 md:mt-24",
      "grid gap-y-4 lg:grid-cols-12 lg:items-start lg:gap-x-8",
      className,
    )}
  >
    <Eyebrow as={labelAs} className="lg:col-span-3">
      {label}
    </Eyebrow>
    <div
      className={cn("lg:col-start-5", wide ? "lg:col-span-8" : "lg:col-span-7")}
    >
      {children}
    </div>
  </section>
)

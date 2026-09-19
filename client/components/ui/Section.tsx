import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

import { Eyebrow } from "./Eyebrow"

type Props = {
  label: ReactNode
  labelAs?: "span" | "h2"
  rule?: boolean
  width?: "text" | "wide" | "full"
  id?: string
  ariaLabel?: string
  className?: string
  children: ReactNode
}

const widths = {
  text: "lg:col-span-7 lg:col-start-5",
  wide: "lg:col-span-8 lg:col-start-5",
  full: "lg:col-span-9 lg:col-start-4",
}

export const Section = ({
  label,
  labelAs = "span",
  rule = true,
  width = "text",
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
    <div className={widths[width]}>{children}</div>
  </section>
)

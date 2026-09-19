import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Status = ({ children }: Props) => (
  <span className="flex items-center gap-2.5 text-ink">
    <span
      aria-hidden="true"
      className="relative size-2 shrink-0 rounded-full bg-accent"
    >
      <span className="absolute inset-0 animate-beacon rounded-full bg-accent" />
    </span>
    {children}
  </span>
)

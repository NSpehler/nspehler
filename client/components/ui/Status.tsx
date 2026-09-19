import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Status = ({ children }: Props) => (
  <span className="flex items-center gap-2.5 text-ink">
    <span
      aria-hidden="true"
      className="size-2 shrink-0 rounded-full bg-accent shadow-halo"
    />
    {children}
  </span>
)

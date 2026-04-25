import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <main className="py-8 lg:py-12">{children}</main>
)

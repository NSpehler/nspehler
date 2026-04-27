import type { ReactNode } from "react"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <main id="main" tabIndex={-1} className="py-8 md:py-12">
    {children}
  </main>
)

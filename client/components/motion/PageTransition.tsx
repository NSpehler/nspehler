import { type ReactNode, ViewTransition } from "react"

import { PAGE } from "./names"

type Props = {
  children: ReactNode
}

export const PageTransition = ({ children }: Props) => (
  <ViewTransition enter={PAGE} exit={PAGE} update="none" default="none">
    <div data-page>{children}</div>
  </ViewTransition>
)

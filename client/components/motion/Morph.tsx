import { type ReactNode, ViewTransition } from "react"

type Props = {
  name: string
  children: ReactNode
}

export const Morph = ({ name, children }: Props) => (
  <ViewTransition name={name} share="morph" default="none">
    {children}
  </ViewTransition>
)

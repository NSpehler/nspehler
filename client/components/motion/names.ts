import type { ViewTransitionProps } from "react"

export const vt = {
  frame: (slug: string) => `project-${slug}-frame`,
  visual: (slug: string) => `project-${slug}-visual`,
  header: "site-header",
}

export const NAV = {
  forward: ["nav-forward"],
  back: ["nav-back"],
  switch: ["nav-switch"],
}

export const PAGE: NonNullable<ViewTransitionProps["enter"]> = {
  "nav-forward": "page-forward",
  "nav-back": "page-back",
  default: "page-fade",
}

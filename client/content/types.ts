import type { StaticImageData } from "next/image"

export type Screenshot = {
  /** Static import, so Next.js knows the dimensions and can blur-up. */
  image: StaticImageData
  /** Shown under the frame and in the lightbox. */
  caption: string
  /** Defaults to the caption. */
  alt?: string
}

/** A line on the Work or Projects page. */
export type Entry = {
  title: string
  url: string
  year: number
  description: string
  highlights?: readonly string[]
  screenshots?: readonly Screenshot[]
}

/** A featured card on the home page. */
export type Showcase = {
  title: string
  url: string
  year: number
  kind: "Marketing website" | "Web app" | "Mobile + web"
  headline: string
  stack: readonly string[]
  /** First screenshot doubles as the cover. */
  screenshots: readonly Screenshot[]
  /** Spans both columns of the grid. */
  wide?: boolean
}

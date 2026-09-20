import type { Route } from "next"
import type { StaticImageData } from "next/image"

import type { Slug } from "./projects/slugs"

export type Href = Route | `/projects/${Slug}` | `/${string}.pdf`
export type Link = { label: string; href: Href }
export type Inline = string | readonly (string | Link)[]
export type TwoTone = readonly [string, string?]
export type Pair = { label: string; value: string }
export type Picture = { src: StaticImageData; alt: string }
export type ShotKind = "shot" | "phone" | "device"
export type Shot = Picture & { caption: Inline; kind?: ShotKind }
export type Fact = Pair | { label: string; links: readonly Link[] }
export type CardItem = { title: string; body: string }
export type Frame = "mat" | "bleed"

export type Video = {
  src: string
  poster: Picture
  title: string
  duration: string
}

export type Block =
  | {
      type: "chapter"
      number?: number
      name: string
      headline: TwoTone
      body: string
    }
  | { type: "figure"; frame: Frame; shot: Shot }
  | { type: "figures"; frame: Frame | "tall"; shots: readonly [Shot, Shot] }
  | {
      type: "phones"
      shots: readonly [Shot, Shot] | readonly [Shot, Shot, Shot, Shot]
    }
  | {
      type: "cards"
      heading: string
      columns: 2 | 3
      items: readonly CardItem[]
    }
  | { type: "quote"; text: string; name: string; role: string }
  | { type: "ledger"; rows: readonly Pair[] }

export type Lead =
  | Extract<Block, { type: "figure" }>
  | {
      type: "triptych"
      shots: readonly [Picture, Picture, Picture]
      caption: Inline
    }

export type Card = {
  image: Picture
  frame: "web" | "phones"
  description: string
  type: string
  stack: readonly string[]
}

export type Project = {
  slug: Slug
  name: string
  year: string
  subtitle: string
  facts: readonly Fact[]
  card: Card
  lead: Lead
  overview: readonly [string, string]
  video?: Video
  blocks: readonly Block[]
}

export type Screen = Picture & { title: string; subtitle: string }
export type ProjectRow = {
  year: number
  name: string
  description: string
  tag: string
}
export type ExperienceRow = {
  year: number
  name: string
  description: string
  role: string
}
export type Service = { title: string; body: string; examples: string }

export type Site = {
  name: string
  url: string
  email: string
  description: string
  twitter: string
  location: { latitude: number; longitude: number }
  status: string
  avatar: Picture
  nav: readonly Link[]
  social: readonly Link[]
  cta: { headline: TwoTone; book: Link }
}

export type HomeContent = {
  title: string
  description: string
  hero: { headline: TwoTone; previously: string }
  featured: { project: Slug; grid: readonly Slug[] }
  nowBuilding: {
    slug: Slug
    body: string
    website: Link
    screens: readonly Screen[]
  }
  more: { range: string; rows: readonly ProjectRow[] }
  about: { role: string; paragraphs: readonly [string, string] }
}

export type AboutContent = {
  title: string
  description: string
  intro: { headline: string; body: Inline }
  services: readonly Service[]
  experience: { range: string; rows: readonly ExperienceRow[] }
  companies: readonly string[]
  research: { eyebrow: string; title: string; body: string; cta: string }
}

export type ResearchContent = {
  title: string
  description: string
  eyebrow: string
  headline: string
  body: string
  specs: readonly string[]
  pdf: `/${string}.pdf`
  published: string
  covers: readonly [Picture, Picture, Picture]
  framework: { aside: string; items: readonly CardItem[] }
}

export type ContactContent = {
  title: string
  description: string
  headline: TwoTone
  services: string
  emailPrompt: string
  calLink: string
}

import type { Project } from "../types"
import { abax } from "./abax"
import { alma } from "./alma"
import { analog } from "./analog"
import { backMarketPro } from "./back-market-pro"
import { goalgetr } from "./goalgetr"
import { intigriti } from "./intigriti"
import { nucase } from "./nucase"
import { paperdrop } from "./paperdrop"
import { payfit } from "./payfit"
import { type Slug, slugs } from "./slugs"
import { smartvatten } from "./smartvatten"

export { slugs, type Slug }

export const projects = {
  payfit,
  smartvatten,
  goalgetr,
  paperdrop,
  nucase,
  intigriti,
  abax,
  "back-market-pro": backMarketPro,
  alma,
  analog,
} satisfies { [S in Slug]: Project & { slug: S } }

export const isSlug = (value: string): value is Slug =>
  (slugs as readonly string[]).includes(value)

export const nextProject = (slug: Slug): Project =>
  projects[slugs[(slugs.indexOf(slug) + 1) % slugs.length] ?? slugs[0]]

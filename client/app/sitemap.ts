import type { MetadataRoute } from "next"

import { slugs } from "@/content/projects"
import { site } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...site.nav.map(({ href }) => href),
    ...slugs.map((slug) => `/projects/${slug}`),
  ]
  return paths.map((path) => ({ url: new URL(path, site.url).href }))
}

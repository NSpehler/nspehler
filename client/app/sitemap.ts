import type { MetadataRoute } from "next"

import { slugs } from "@/content/projects"
import { site } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = site.nav.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: "monthly" as const,
    priority: href === "/" ? 1 : 0.7,
  }))
  const projects = slugs.map((slug) => ({
    url: `${site.url}/projects/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))
  return [...pages, ...projects]
}

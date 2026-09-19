import type { MetadataRoute } from "next"

import { site } from "@/content/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return site.navigation.map(({ href }) => ({
    url: new URL(href, site.url).toString(),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }))
}

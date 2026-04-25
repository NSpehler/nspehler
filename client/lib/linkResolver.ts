type Link = {
  _modelApiKey: string
  slug?: string | null
}

/**
 * Converts a DatoCMS link object into a Next.js URL.
 *
 * Individual `project` and `work` records don't have their own pages on the
 * site, so they resolve to their respective listing pages.
 */
export const linkResolver = (link: Link | null | undefined): string => {
  if (!link?._modelApiKey) return "/"

  switch (link._modelApiKey) {
    case "home":
      return "/"
    case "project":
      return "/projects"
    case "work":
      return "/work"
    default:
      return link.slug ? `/${link.slug}` : "/"
  }
}

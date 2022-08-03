export const linkResolver = (link) => {
  if (!link) return null

  if (!link.slug || link._modelApiKey === "home") {
    return `/`
  }

  return `/${link.slug}`
}

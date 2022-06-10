export const linkResolver = (link) => {
  if (!link) return null

  if (!link.slug || link.model.apiKey === "home") {
    return `/`
  }

  return `/${link.slug}`
}

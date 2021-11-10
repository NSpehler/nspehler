export const linkResolver = (link) => {
  if (!link || !link.slug) return null

  if (link.model.apiKey === "home") {
    return `/`
  }

  return `/${link.slug}`
}

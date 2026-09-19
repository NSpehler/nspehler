import { site } from "@/content/site"
import type { Project } from "@/content/types"

type Node = Record<string, unknown>

const personId = `${site.url}/#person`
const websiteId = `${site.url}/#website`

const person: Node = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  url: site.url,
  image: `${site.url}${site.avatar.src.src}`,
  jobTitle: "Full-stack developer",
  email: `mailto:${site.email}`,
  sameAs: site.social.map(({ href }) => href),
}

const website: Node = {
  "@type": "WebSite",
  "@id": websiteId,
  name: site.name,
  url: site.url,
  description: site.description,
  publisher: { "@id": personId },
}

export const graph = (...nodes: readonly Node[]) => ({
  "@context": "https://schema.org",
  "@graph": [person, website, ...nodes],
})

export const projectNode = ({
  slug,
  name,
  subtitle,
  year,
  card,
}: Project): Node => ({
  "@type": "CreativeWork",
  name,
  description: subtitle,
  url: `${site.url}/projects/${slug}`,
  image: `${site.url}${card.image.src.src}`,
  dateCreated: year.replace(/\D+/g, " ").trim().split(" ")[0],
  author: { "@id": personId },
})

export const pageNode = (
  type: "ProfilePage" | "ContactPage" | "CollectionPage",
  path: string,
  name: string,
  description: string,
): Node => ({
  "@type": type,
  url: `${site.url}${path}`,
  name,
  description,
  isPartOf: { "@id": websiteId },
  mainEntity: { "@id": personId },
})

export const articleNode = (
  path: string,
  name: string,
  description: string,
  published: string,
): Node => ({
  "@type": "ScholarlyArticle",
  url: `${site.url}${path}`,
  name,
  description,
  datePublished: published,
  author: { "@id": personId },
  isPartOf: { "@id": websiteId },
})

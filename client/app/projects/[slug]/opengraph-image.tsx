import { notFound } from "next/navigation"

import { isSlug, projects, slugs } from "@/content/projects"
import { site } from "@/content/site"
import { ogImage, size } from "@/lib/og"

export { size }
export const alt = `A project by ${site.name}`
export const contentType = "image/png"

export const generateStaticParams = () => slugs.map((slug) => ({ slug }))

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  if (!isSlug(slug)) notFound()
  const { name, subtitle } = projects[slug]
  return ogImage({ title: name, subtitle })
}

import { notFound } from "next/navigation"

import { StructuredData } from "@/components/StructuredData"
import { isSlug, nextProject, projects, slugs } from "@/content/projects"
import { graph, projectNode } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

export const dynamicParams = false

export const generateStaticParams = () => slugs.map((slug) => ({ slug }))

export const generateMetadata = async ({
  params,
}: PageProps<"/projects/[slug]">) => {
  const { slug } = await params
  if (!isSlug(slug)) return {}
  const { name, subtitle } = projects[slug]
  return pageMetadata({
    title: name,
    description: subtitle,
    path: `/projects/${slug}`,
    type: "article",
  })
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params
  if (!isSlug(slug)) notFound()
  const project = projects[slug]
  const next = nextProject(slug)
  return (
    <>
      <StructuredData
        id={`project-${slug}`}
        data={graph(projectNode(project))}
      />
      <h1 className="sr-only">{project.name}</h1>
      <p className="sr-only">Next project: {next.name}</p>
    </>
  )
}

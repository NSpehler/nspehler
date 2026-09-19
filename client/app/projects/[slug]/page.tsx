import { notFound } from "next/navigation"

import { Breadcrumb } from "@/components/layout/Breadcrumb"
import { LightboxProvider } from "@/components/media/LightboxProvider"
import { PageTransition } from "@/components/motion/PageTransition"
import { Blocks } from "@/components/project/Blocks"
import { LeadVisual } from "@/components/project/LeadVisual"
import { NextProject } from "@/components/project/NextProject"
import { Overview } from "@/components/project/Overview"
import { ProjectHero } from "@/components/project/ProjectHero"
import { StructuredData } from "@/components/StructuredData"
import { isSlug, nextProject, projects, slugs } from "@/content/projects"
import { collectShots } from "@/lib/collectShots"
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
  return (
    <PageTransition>
      <StructuredData
        id={`project-${slug}`}
        data={graph(projectNode(project))}
      />
      <LightboxProvider shots={collectShots(project)}>
        <Breadcrumb />
        <ProjectHero project={project} />
        <LeadVisual lead={project.lead} slug={slug} />
        <Overview project={project} />
        <Blocks blocks={project.blocks} />
        <NextProject project={nextProject(slug)} />
      </LightboxProvider>
    </PageTransition>
  )
}

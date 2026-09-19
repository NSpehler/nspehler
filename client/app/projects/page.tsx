import { List, StructuredData } from "@/components/utils"
import { projectEntries, projects } from "@/content/projects"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata(projects)

export default function ProjectsPage() {
  return (
    <>
      <StructuredData id="projects" data={projects.structuredData} />
      <h1 className="sr-only">{projects.title}</h1>
      <div className="md:grid md:grid-cols-3 md:items-start md:gap-8">
        <div className="prose prose-xl dark:prose-invert">
          <p>{projects.intro}</p>
        </div>
        <div className="col-span-2">
          <List items={projectEntries} />
        </div>
      </div>
    </>
  )
}

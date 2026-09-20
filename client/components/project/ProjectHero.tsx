import { FactList } from "@/components/ui/FactList"
import type { Project } from "@/content/types"

type Props = {
  project: Project
}

export const ProjectHero = ({ project }: Props) => (
  <section className="grid gap-y-8 pt-8 md:pt-12 lg:grid-cols-12 lg:items-start lg:gap-x-8">
    <div className="flex flex-col gap-4 md:gap-5 lg:col-span-8">
      <h1 className="text-display">{project.name}</h1>
      <p className="text-subtitle text-balance text-body">{project.subtitle}</p>
    </div>
    <FactList
      facts={[{ label: "Year", value: project.year }, ...project.facts]}
      className="grid grid-cols-2 gap-x-6 gap-y-3.5 lg:col-span-3 lg:col-start-10 lg:grid-cols-1"
    />
  </section>
)

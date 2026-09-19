import { ArrowLink } from "@/components/ui/ArrowLink"
import type { Fact, Project } from "@/content/types"

type Props = {
  project: Project
}

const Item = ({ fact }: { fact: Fact }) => (
  <div className="flex flex-col gap-[3px]">
    <dt className="caption">{fact.label}</dt>
    <dd>
      {"value" in fact ? (
        fact.value
      ) : (
        <span className="flex gap-4">
          {fact.links.map((link) => (
            <ArrowLink
              key={link.label}
              link={link}
              icon="up-right"
              iconClassName="size-[13px]"
              className="gap-1.5"
            />
          ))}
        </span>
      )}
    </dd>
  </div>
)

export const ProjectHero = ({ project }: Props) => (
  <section className="grid gap-y-8 pt-8 md:pt-12 lg:grid-cols-12 lg:items-start lg:gap-x-8">
    <div className="flex flex-col gap-4 md:gap-5 lg:col-span-8">
      <h1 className="text-display">{project.name}</h1>
      <p className="text-subtitle text-balance text-body">{project.subtitle}</p>
    </div>
    <dl className="grid grid-cols-2 gap-x-6 gap-y-3.5 text-[15px] lg:col-span-3 lg:col-start-10 lg:grid-cols-1">
      <Item fact={{ label: "Year", value: project.year }} />
      {project.facts.map((fact) => (
        <Item key={fact.label} fact={fact} />
      ))}
    </dl>
  </section>
)

import { Anchor } from "@/components/ui/Anchor"
import { Eyebrow } from "@/components/ui/Eyebrow"
import type { ProjectRow } from "@/content/types"

type Props = {
  range: string
  rows: readonly ProjectRow[]
}

export const ProjectRows = ({ range, rows }: Props) => (
  <section
    id="more-projects"
    aria-label="More projects"
    className="mt-18 md:mt-30"
  >
    <Eyebrow aside={range} className="pb-3.5 md:pb-5">
      More projects
    </Eyebrow>
    <div className="divide-y divide-hairline border-y border-hairline">
      {rows.map(({ year, name, description, tag, href }) => (
        <Anchor
          key={name}
          href={href}
          className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3.5 gap-y-1 py-3.5 transition-colors duration-150 motion-reduce:transition-none md:h-16 md:grid-cols-12 md:items-center md:gap-x-8 md:py-0"
        >
          <span className="caption md:col-start-1 md:text-[13px]">{year}</span>
          <span className="col-start-2 text-base font-medium md:col-span-3 md:col-start-2 md:text-[17px]">
            {name}
          </span>
          <span className="col-span-2 col-start-2 text-sm/[1.45] text-body md:col-span-6 md:col-start-5 md:text-[17px]/[normal]">
            {description}
          </span>
          <span className="col-start-3 row-start-1 caption md:col-span-2 md:col-start-11 md:text-right">
            {tag}
          </span>
        </Anchor>
      ))}
    </div>
  </section>
)

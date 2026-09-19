import { Eyebrow } from "@/components/ui/Eyebrow"
import { about } from "@/content/about"

export const Experience = () => (
  <section aria-label="Experience" className="mt-18 md:mt-30">
    <Eyebrow aside={about.experience.range} className="pb-4 md:pb-6">
      Experience
    </Eyebrow>
    <div className="divide-y divide-hairline border-y border-hairline">
      {about.experience.rows.map(({ year, name, description, role }) => (
        <div
          key={name}
          className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3.5 gap-y-1 py-3.5 md:h-16 md:grid-cols-12 md:items-center md:gap-x-8 md:py-0"
        >
          <span className="caption md:col-start-1 md:text-[13px]">{year}</span>
          <span className="col-start-2 text-base font-medium md:col-span-3 md:col-start-2 md:text-[17px]">
            {name}
          </span>
          <span className="col-span-2 col-start-2 text-sm/[1.45] text-body md:col-span-5 md:col-start-5 md:text-base/[normal]">
            {description}
          </span>
          <span className="col-start-3 row-start-1 caption md:col-span-3 md:col-start-10 md:text-right">
            {role}
          </span>
        </div>
      ))}
    </div>
  </section>
)

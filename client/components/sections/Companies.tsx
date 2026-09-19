import { Fragment } from "react"

import { Section } from "@/components/ui/Section"
import { about } from "@/content/about"

export const Companies = () => (
  <Section label="Companies I’ve built for" width="full" ariaLabel="Companies">
    <p className="text-subtitle leading-[1.45] font-medium text-pretty">
      {about.companies.map((company, index) => (
        <Fragment key={company}>
          {index > 0 && <span className="text-separator"> / </span>}
          {company}
        </Fragment>
      ))}
    </p>
  </Section>
)

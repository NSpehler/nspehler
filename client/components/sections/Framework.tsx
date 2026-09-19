import { CardGrid } from "@/components/ui/CardGrid"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { research } from "@/content/research"

export const Framework = () => (
  <section
    aria-label="The framework"
    className="flex flex-col gap-6 border-t border-hairline pt-6 md:gap-8 md:pt-8"
  >
    <Eyebrow aside={research.framework.aside}>The framework</Eyebrow>
    <CardGrid items={research.framework.items} columns={4} large />
  </section>
)

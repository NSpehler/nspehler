import { Headline } from "@/components/ui/Headline"
import { Section } from "@/components/ui/Section"
import type { Block } from "@/content/types"

type Props = {
  block: Extract<Block, { type: "chapter" }>
}

export const Chapter = ({ block: { number, name, headline, body } }: Props) => (
  <Section
    label={number ? `${String(number).padStart(2, "0")} · ${name}` : name}
    ariaLabel={name}
  >
    <div className="flex flex-col gap-4">
      <Headline text={headline} className="text-chapter" />
      <p className="text-base/[1.6] text-pretty text-body md:text-lg/[1.6]">
        {body}
      </p>
    </div>
  </Section>
)

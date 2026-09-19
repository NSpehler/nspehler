import { CardGrid } from "@/components/ui/CardGrid"
import { Section } from "@/components/ui/Section"
import type { Block } from "@/content/types"

type Props = {
  block: Extract<Block, { type: "cards" }>
}

export const Cards = ({ block: { heading, columns, items } }: Props) => (
  <Section label={heading} labelAs="h2" width="wide" ariaLabel={heading}>
    <CardGrid items={items} columns={columns} />
  </Section>
)

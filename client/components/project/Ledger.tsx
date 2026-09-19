import { Section } from "@/components/ui/Section"
import type { Block } from "@/content/types"

type Props = {
  block: Extract<Block, { type: "ledger" }>
}

export const Ledger = ({ block: { rows } }: Props) => (
  <Section label="Tech stack" labelAs="h2" width="wide" ariaLabel="Tech stack">
    <div className="divide-y divide-hairline border-b border-hairline lg:-mt-4">
      {rows.map(({ label, value }) => (
        <div
          key={label}
          className="grid gap-y-1 py-3 md:grid-cols-8 md:items-baseline md:gap-x-8 md:py-4"
        >
          <span className="caption md:col-span-2 md:text-[13px]">{label}</span>
          <span className="text-base/6 md:col-span-6">{value}</span>
        </div>
      ))}
    </div>
  </Section>
)

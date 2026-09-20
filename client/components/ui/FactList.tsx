import type { Fact } from "@/content/types"
import { cn } from "@/lib/utils"

import { ArrowLink } from "./ArrowLink"

type Props = {
  facts: readonly Fact[]
  className?: string
}

const Item = ({ fact }: { fact: Fact }) => (
  <div className="flex flex-col gap-[3px]">
    <dt className="caption">{fact.label}</dt>
    <dd>
      {"value" in fact ? (
        fact.value
      ) : (
        <span className="flex flex-wrap gap-x-4 gap-y-1">
          {fact.links.map((link) => (
            <ArrowLink
              key={link.label}
              link={link}
              icon="up-right"
              iconClassName="size-[13px]"
              className="gap-1.5 whitespace-nowrap"
            />
          ))}
        </span>
      )}
    </dd>
  </div>
)

export const FactList = ({ facts, className }: Props) => (
  <dl className={cn("text-[15px]", className)}>
    {facts.map((fact) => (
      <Item key={fact.label} fact={fact} />
    ))}
  </dl>
)

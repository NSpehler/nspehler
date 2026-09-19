import type { Entry } from "@/content/types"

import { ListItem } from "./ListItem"

type Props = {
  items: readonly Entry[]
}

export const List = ({ items }: Props) => (
  <ul className="divide-neutral-200 dark:divide-neutral-800 divide-y md:-mt-8">
    {items.map((item) => (
      <ListItem key={item.title} item={item} />
    ))}
  </ul>
)

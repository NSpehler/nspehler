import type { Entry } from "@/content/types"

import { ListItem } from "./ListItem"

type Props = {
  items: readonly Entry[]
}

export const List = ({ items }: Props) => (
  <ul className="divide-y divide-neutral-200 md:-mt-8 dark:divide-neutral-800">
    {items.map((item) => (
      <ListItem key={item.title} item={item} />
    ))}
  </ul>
)

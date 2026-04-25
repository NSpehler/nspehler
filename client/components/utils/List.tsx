import type { ComponentProps } from "react"

import { ListItem } from "@/components/utils"

type Item = ComponentProps<typeof ListItem>["item"] & { id?: string }

type Props = {
  items: Item[]
}

export const List = ({ items }: Props) => (
  <ul className="divide-y divide-gray-200 lg:-mt-8 dark:divide-gray-700">
    {items?.map((item) => (
      <ListItem key={item.id ?? item.link} item={item} />
    ))}
  </ul>
)

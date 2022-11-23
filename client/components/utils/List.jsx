import React from "react"

import { ListItem } from "@/components/utils"

export const List = ({ items }) => (
  <ul className="divide-y divide-gray-200 dark:divide-gray-600 lg:-mt-8">
    {items?.map((item, index) => (
      <ListItem item={item} key={index} />
    ))}
  </ul>
)

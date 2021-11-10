import * as React from "react"

import { ListItem } from "./"

export const List = ({ items }) => (
  <ul className="divide-y divide-gray-200 dark:divide-gray-600 lg:-mt-8">
    {items.map((item, index) => (
      <ListItem item={item} key={index} />
    ))}
  </ul>
)

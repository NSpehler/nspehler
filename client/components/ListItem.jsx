import React from "react"
import { StructuredText } from "react-datocms"

export const ListItem = ({ item }) => (
  <li className="py-8">
    <div className="flex items-baseline justify-between space-x-3">
      <a
        href={item.link}
        className="inline-flex text-xl font-medium text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 mb-2 transition-all"
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
      <h4 className="text-xl text-gray-300 dark:text-gray-500 font-medium">
        {item._createdAt.split("-")[0]}
      </h4>
    </div>
    {item.content.value && (
      <div className="prose prose-lg dark:prose-light">
        <StructuredText data={item.content} />
      </div>
    )}
  </li>
)

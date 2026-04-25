import { stripStega } from "@datocms/content-link"
import { isEmptyDocument } from "datocms-structured-text-utils"
import { type CdaStructuredTextValue, StructuredText } from "react-datocms"

type Item = {
  title: string
  link: string
  _createdAt: string
  content: CdaStructuredTextValue | null
}

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => (
  <li className="py-8">
    <div className="flex items-baseline justify-between space-x-3">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2 inline-flex text-xl font-medium text-gray-900 transition-all hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
      >
        {item.title}
      </a>
      <h4 className="text-xl font-medium text-gray-300 dark:text-gray-500">
        {item._createdAt.split("-")[0]}
      </h4>
    </div>
    {item.content && !isEmptyDocument(stripStega(item.content)) && (
      <div
        className="prose prose-lg dark:prose-invert"
        data-datocms-content-link-group
      >
        <StructuredText data={item.content} />
      </div>
    )}
  </li>
)

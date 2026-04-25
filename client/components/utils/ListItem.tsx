import { stripStega } from "@datocms/content-link"
import { isEmptyDocument } from "datocms-structured-text-utils"
import { ArrowUpRightIcon } from "lucide-react"
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
  <li className="grid gap-2 py-8">
    <div className="flex items-baseline justify-between gap-3">
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-xl font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
      >
        {item.title}
        <ArrowUpRightIcon
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
      <span className="shrink-0 text-xl font-medium text-gray-300 tabular-nums dark:text-gray-500">
        {item._createdAt.split("-")[0]}
      </span>
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

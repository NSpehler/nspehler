import { ArrowUpRightIcon } from "lucide-react"

import { ScreenshotStrip } from "@/components/portfolio"
import type { Entry } from "@/content/types"

type Props = {
  item: Entry
}

export const ListItem = ({ item }: Props) => (
  <li className="grid gap-2 py-8">
    <div className="flex items-baseline justify-between gap-3">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 text-xl font-medium text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
      >
        {item.title}
        <ArrowUpRightIcon
          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </a>
      <span className="shrink-0 text-xl font-medium text-neutral-300 tabular-nums dark:text-neutral-500">
        {item.year}
      </span>
    </div>
    <div className="prose prose-lg dark:prose-invert">
      <p>{item.description}</p>
      {item.highlights && (
        <ul>
          {item.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
    </div>
    {item.screenshots && (
      <div className="mt-4">
        <ScreenshotStrip title={item.title} shots={item.screenshots} />
      </div>
    )}
  </li>
)

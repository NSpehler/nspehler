"use client"

import { LogOutIcon, SquarePenIcon } from "lucide-react"
import { usePathname } from "next/navigation"

type Props = {
  editingUrl?: string | null
}

export const Preview = ({ editingUrl }: Props) => {
  const pathname = usePathname()

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-5 pb-4">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-neutral-200 bg-white py-1.5 pr-1.5 pl-5 text-neutral-900 shadow-xl dark:border-neutral-800 dark:bg-black dark:text-white">
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-neutral-900 opacity-60 dark:bg-white" />
          <span className="relative inline-flex size-2 rounded-full bg-neutral-900 dark:bg-white" />
        </span>
        <p className="text-sm font-medium">Live preview</p>
        <div className="flex shrink-0 items-center gap-1">
          {editingUrl && (
            <a
              href={editingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex size-8 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="sr-only">Edit</span>
              <SquarePenIcon className="size-4" aria-hidden="true" />
            </a>
          )}
          <a
            href={`/api/draft-mode/disable?redirect=${pathname}`}
            className="inline-flex size-8 items-center justify-center rounded-full transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <span className="sr-only">Exit preview</span>
            <LogOutIcon className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

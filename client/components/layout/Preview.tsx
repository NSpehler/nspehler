"use client"

import { LogOutIcon, SquarePenIcon, ZapIcon } from "lucide-react"
import { usePathname } from "next/navigation"

type Props = {
  editingUrl?: string | null
}

export const Preview = ({ editingUrl }: Props) => {
  const pathname = usePathname()

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pb-2 sm:pb-5">
      <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 rounded-lg bg-gray-500 p-2 shadow-lg sm:gap-3 sm:p-3">
          <span className="flex shrink-0 rounded-lg bg-gray-600 p-2">
            <ZapIcon className="size-6 text-white" aria-hidden="true" />
          </span>
          <p className="min-w-0 flex-1 truncate font-medium text-white">
            Live preview
          </p>
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {editingUrl && (
              <a
                href={editingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-600"
              >
                <span className="sr-only">Edit</span>
                <SquarePenIcon
                  className="size-6 text-white"
                  aria-hidden="true"
                />
              </a>
            )}
            <a
              href={`/api/draft-mode/disable?redirect=${pathname}`}
              className="inline-flex size-10 items-center justify-center rounded-md hover:bg-gray-600"
            >
              <span className="sr-only">Exit preview</span>
              <LogOutIcon className="size-6 text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

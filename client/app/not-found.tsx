import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="grid items-start justify-items-start gap-6 py-12 lg:py-24">
      <div className="grid gap-3">
        <p className="text-sm font-medium text-gray-500 tabular-nums dark:text-gray-400">
          404
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-gray-900 lg:text-5xl dark:text-white">
          Page not found
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Sorry, that page doesn&apos;t exist or has moved.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900"
      >
        <ArrowLeftIcon className="size-4" aria-hidden="true" />
        Back to home
      </Link>
    </div>
  )
}

import { ArrowLeftIcon } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="grid items-start justify-items-start gap-6 py-12 md:py-24">
      <div className="grid gap-3">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium tabular-nums">
          404
        </p>
        <h1 className="text-neutral-900 dark:text-white text-4xl font-medium tracking-tight md:text-5xl">
          Page not found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-lg">
          Sorry, that page doesn&apos;t exist or has moved.
        </p>
      </div>
      <Link
        href="/"
        className="border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-100 dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:bg-neutral-900 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
      >
        <ArrowLeftIcon className="size-4" aria-hidden="true" />
        Back to home
      </Link>
    </div>
  )
}

import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

import { NAV } from "@/components/motion/names"

export const Breadcrumb = () => (
  <div className="flex justify-between pt-6 eyebrow md:pt-8">
    <Link
      href="/"
      transitionTypes={NAV.back}
      className="group flex items-center gap-2 text-label transition-colors duration-150 hover:text-ink motion-reduce:transition-none"
    >
      <ArrowLeftIcon
        aria-hidden="true"
        className="size-3.5 transition-transform duration-150 ease-out group-hover:-translate-x-0.5 motion-reduce:transition-none"
      />
      Projects
    </Link>
  </div>
)

import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

import { showcase } from "@/content/showcase"

import { ProjectCard } from "./ProjectCard"

/**
 * Featured grid for the home page. Wide entries span both columns, the rest
 * sit side by side. Covers open the lightbox.
 */
export const SelectedWork = () => (
  <section
    aria-labelledby="selected-work"
    className="border-neutral-200 dark:border-neutral-800 mt-12 border-t pt-8 md:mt-16 md:pt-12"
  >
    <div className="mb-8 flex items-baseline justify-between gap-6 md:mb-10">
      <div className="grid gap-1">
        <h2
          id="selected-work"
          className="text-neutral-900 dark:text-white text-xl font-medium"
        >
          Selected work
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Websites and products I built end to end, from content model to
          launch.
        </p>
      </div>
      <Link
        href="/work"
        className="group text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white inline-flex shrink-0 items-center gap-1 text-sm font-medium transition-colors"
      >
        All work
        <ArrowRightIcon
          className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
      </Link>
    </div>

    <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-14">
      {showcase.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          priority={index === 0}
        />
      ))}
    </div>
  </section>
)

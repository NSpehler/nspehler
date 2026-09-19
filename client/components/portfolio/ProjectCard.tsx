"use client"

import { ArrowUpRightIcon } from "lucide-react"

import type { Showcase } from "@/content/types"
import { cn } from "@/lib/utils"

import { Lightbox } from "./Lightbox"
import { ShotButton } from "./ShotButton"
import { useLightbox } from "./useLightbox"

type Props = {
  project: Showcase
  priority?: boolean
}

const WIDE_SIZES = "(min-width: 1024px) 960px, 100vw"
const HALF_SIZES = "(min-width: 1024px) 464px, (min-width: 768px) 50vw, 100vw"

/**
 * Featured project card. The cover opens the full screenshot set in the
 * lightbox; the title links out to the live site.
 */
export const ProjectCard = ({ project, priority = false }: Props) => {
  const wide = Boolean(project.wide)
  const sizes = wide ? WIDE_SIZES : HALF_SIZES
  const lightbox = useLightbox()
  const [cover] = project.screenshots
  if (!cover) return null

  return (
    <article
      className={cn("grid content-start gap-4", { "md:col-span-2": wide })}
    >
      <ShotButton
        ref={lightbox.registerThumb(0)}
        shot={cover}
        sizes={sizes}
        priority={priority}
        label={`${project.title} screenshots`}
        onOpen={() => lightbox.open(0)}
      />

      <div className={cn("grid gap-1.5", { "md:grid-cols-3 md:gap-8": wide })}>
        <div className="flex items-baseline justify-between gap-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300 inline-flex items-center gap-1 text-xl font-medium transition-colors"
          >
            {project.title}
            <ArrowUpRightIcon
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              aria-hidden="true"
            />
          </a>
          <span className="text-neutral-300 dark:text-neutral-500 shrink-0 text-xl font-medium tabular-nums">
            {project.year}
          </span>
        </div>

        <div className={cn("grid gap-2.5", { "md:col-span-2": wide })}>
          <p
            className={cn(
              "text-neutral-600 dark:text-neutral-400 leading-snug text-pretty",
              wide ? "text-lg" : "text-base",
            )}
          >
            {project.headline}
          </p>
          <ul className="text-neutral-500 flex flex-wrap items-center gap-x-2 text-sm">
            <li>{project.kind}</li>
            {project.stack.map((item) => (
              <li key={item} className="flex items-center gap-x-2">
                <span
                  aria-hidden="true"
                  className="text-neutral-300 dark:text-neutral-700"
                >
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Lightbox
        shots={project.screenshots}
        index={lightbox.index}
        onIndexChange={lightbox.open}
        onClose={lightbox.close}
        getThumbRect={lightbox.getThumbRect}
        thumbSizes={sizes}
      />
    </article>
  )
}

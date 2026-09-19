"use client"

import type { ComponentProps, Ref } from "react"

import { cn } from "@/lib/utils"

import { ProjectMedia } from "./ProjectMedia"

type Props = ComponentProps<typeof ProjectMedia> & {
  ref?: Ref<HTMLButtonElement>
  onOpen: () => void
  label: string
}

/** A screenshot thumbnail that opens the lightbox. */
export const ShotButton = ({
  ref,
  onOpen,
  label,
  className,
  ...media
}: Props) => (
  <button
    ref={ref}
    type="button"
    onClick={onOpen}
    aria-label={`Open ${label}`}
    className={cn(
      "group/shot focus-visible:ring-neutral-900 focus-visible:ring-offset-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-black block w-full cursor-zoom-in rounded-xl text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-4",
      className,
    )}
  >
    <ProjectMedia
      {...media}
      imageClassName="transition-transform duration-700 ease-out group-hover/shot:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover/shot:scale-100"
    />
  </button>
)

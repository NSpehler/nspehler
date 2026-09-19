import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  DownloadIcon,
} from "lucide-react"
import type { ComponentProps } from "react"

import type { Link } from "@/content/types"
import { cn } from "@/lib/utils"

import { Anchor } from "./Anchor"

type Icon = "right" | "up-right" | "left" | "download"

type Props = Omit<ComponentProps<typeof Anchor>, "href" | "children"> & {
  link: Link
  icon?: Icon
  iconClassName?: string
}

const icons = {
  right: [ArrowRightIcon, "group-hover:translate-x-0.5"],
  "up-right": [
    ArrowUpRightIcon,
    "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  ],
  left: [ArrowLeftIcon, "group-hover:-translate-x-0.5"],
  download: [DownloadIcon, "group-hover:translate-y-0.5"],
} as const

export const ArrowLink = ({
  link,
  icon,
  iconClassName = "size-4",
  className,
  ...props
}: Props) => {
  const kind: Icon =
    icon ?? (/^[a-z]+:/i.test(link.href) ? "up-right" : "right")
  const [Glyph, nudge] = icons[kind]
  return (
    <Anchor
      href={link.href}
      className={cn(
        "group inline-flex items-center font-medium transition-colors duration-150 motion-reduce:transition-none",
        className,
      )}
      {...props}
    >
      {kind === "download" && (
        <Glyph
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none",
            nudge,
            iconClassName,
          )}
        />
      )}
      {link.label}
      {kind !== "download" && (
        <Glyph
          aria-hidden="true"
          className={cn(
            "shrink-0 transition-transform duration-150 ease-out motion-reduce:transition-none",
            nudge,
            iconClassName,
          )}
        />
      )}
    </Anchor>
  )
}

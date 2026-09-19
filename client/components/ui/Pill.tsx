import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"
import type { ComponentProps } from "react"

import type { Link } from "@/content/types"
import { cn } from "@/lib/utils"

import { Anchor } from "./Anchor"

type Props = Omit<ComponentProps<typeof Anchor>, "href" | "children"> & {
  link: Link
  external?: boolean
}

export const Pill = ({
  link,
  external = false,
  className,
  ...props
}: Props) => {
  const Icon = external ? ArrowUpRightIcon : ArrowRightIcon
  return (
    <Anchor
      href={link.href}
      className={cn(
        "group flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink text-base font-medium text-on-ink transition-colors duration-150 hover:bg-ink-strong hover:text-on-ink motion-reduce:transition-none md:px-[26px]",
        className,
      )}
      {...props}
    >
      {link.label}
      <Icon
        aria-hidden="true"
        className={cn(
          "size-4 transition-transform duration-150 ease-out motion-reduce:transition-none",
          external
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            : "group-hover:translate-x-0.5",
        )}
      />
    </Anchor>
  )
}

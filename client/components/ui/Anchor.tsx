import Link from "next/link"
import type { ComponentProps } from "react"

import type { Href } from "@/content/types"

type Props = Omit<ComponentProps<typeof Link>, "href"> & { href: Href }

const isPlain = (
  href: Href,
): href is `${string}:${string}` | `/${string}.pdf` =>
  /^[a-z][a-z0-9+.-]*:/i.test(href) || href.endsWith(".pdf")

export const Anchor = ({ href, ...props }: Props) => {
  if (!isPlain(href)) return <Link href={href} {...props} />
  const { prefetch, replace, scroll, transitionTypes, onNavigate, ...rest } =
    props
  void prefetch
  void replace
  void scroll
  void transitionTypes
  void onNavigate
  const mail = href.startsWith("mailto:")
  return (
    <a
      href={href}
      target={mail ? undefined : "_blank"}
      rel={mail ? undefined : "noreferrer"}
      {...rest}
    />
  )
}

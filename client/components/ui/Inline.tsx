import type { Inline as InlineText } from "@/content/types"

import { Anchor } from "./Anchor"

type Props = {
  text: InlineText
  linkClassName?: string
}

export const inlineText = (text: InlineText) =>
  typeof text === "string"
    ? text
    : text
        .map((part) => (typeof part === "string" ? part : part.label))
        .join("")

export const Inline = ({ text, linkClassName = "text-ink" }: Props) =>
  typeof text === "string"
    ? text
    : text.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <Anchor key={index} href={part.href} className={linkClassName}>
            {part.label}
          </Anchor>
        ),
      )

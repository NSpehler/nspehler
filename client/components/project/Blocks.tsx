import type { Block } from "@/content/types"

import { Cards } from "./Cards"
import { Chapter } from "./Chapter"
import { Figures } from "./Figures"
import { Ledger } from "./Ledger"
import { Phones } from "./Phones"
import { Quote } from "./Quote"

type Props = {
  blocks: readonly Block[]
}

const isVisual = (block: Block | undefined) =>
  block?.type === "figure" ||
  block?.type === "figures" ||
  block?.type === "phones"

const spacing = (previous: Block | undefined) => {
  if (isVisual(previous)) return "mt-6 md:mt-8"
  if (previous?.type === "chapter") return "mt-8 md:mt-12"
  return "mt-14 md:mt-24"
}

export const Blocks = ({ blocks }: Props) =>
  blocks.map((block, index) => {
    const className = spacing(blocks[index - 1])
    switch (block.type) {
      case "chapter":
        return <Chapter key={index} block={block} />
      case "figure":
      case "figures":
        return <Figures key={index} block={block} className={className} />
      case "phones":
        return <Phones key={index} block={block} className={className} />
      case "cards":
        return <Cards key={index} block={block} />
      case "quote":
        return <Quote key={index} block={block} />
      case "ledger":
        return <Ledger key={index} block={block} />
      default:
        return block satisfies never
    }
  })

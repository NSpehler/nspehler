import type { TwoTone } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  text: TwoTone
  as?: "h1" | "h2" | "p"
  className?: string
}

export const Headline = ({
  text: [first, second],
  as: Tag = "h2",
  className,
}: Props) => (
  <Tag className={cn("text-balance two-tone", className)}>
    {first}
    {second && (
      <>
        {" "}
        <span>{second}</span>
      </>
    )}
  </Tag>
)

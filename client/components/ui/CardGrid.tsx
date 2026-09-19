import type { CardItem } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  items: readonly CardItem[]
  columns: 2 | 3 | 4
  large?: boolean
  className?: string
}

const grids = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
}

export const CardGrid = ({
  items,
  columns,
  large = false,
  className,
}: Props) => (
  <div className={cn("grid gap-x-8 gap-y-10", grids[columns], className)}>
    {items.map(({ title, body }, index) => (
      <div
        key={title}
        className="flex flex-col gap-2.5 border-t border-ink pt-4"
      >
        <span className="caption">{String(index + 1).padStart(2, "0")}</span>
        <h3
          className={cn(
            "font-medium",
            large ? "mt-1 text-[20px] tracking-[-0.01em]" : "text-[17px]",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-[15px] text-body",
            large ? "leading-[1.6]" : "leading-[1.55]",
          )}
        >
          {body}
        </p>
      </div>
    ))}
  </div>
)

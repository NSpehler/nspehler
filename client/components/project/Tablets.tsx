import { Figure } from "@/components/media/Figure"
import { Mat } from "@/components/media/Mat"
import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import type { Block } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  block: Extract<Block, { type: "tablets" }>
  className?: string
}

export const Tablets = ({ block: { shots }, className }: Props) => {
  const single = shots.length === 1
  return (
    <div className={cn("grid gap-8", !single && "md:grid-cols-2", className)}>
      {shots.map((shot) => (
        <Figure key={shot.src.src} caption={shot.caption}>
          <Mat
            className={cn(
              "aspect-[5/4] rounded-[14px] [--inset:80%] md:rounded-mat",
              single && "md:aspect-[1312/760] md:[--inset:62%]",
            )}
          >
            <Shot
              shot={{ ...shot, kind: "tablet" }}
              sizes={single ? sizes.lead : sizes.card}
              className="w-(--inset) rounded-[2.2%/2.93%]"
              imageClassName="aspect-[4/3] w-full rounded-[inherit] object-cover shadow-phone"
            />
          </Mat>
        </Figure>
      ))}
    </div>
  )
}

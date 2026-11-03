import { Figure } from "@/components/media/Figure"
import { Mat } from "@/components/media/Mat"
import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import type { Block } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  block: Extract<Block, { type: "watches" }>
  className?: string
}

export const Watches = ({ block: { shots }, className }: Props) => (
  <div className={cn("grid gap-8 md:grid-cols-3", className)}>
    {shots.map((shot) => (
      <Figure key={shot.src.src} caption={shot.caption}>
        <Mat className="aspect-[5/4] rounded-[14px] [--inset:40%] md:aspect-[4/5] md:rounded-mat md:[--inset:62%]">
          <Shot
            shot={{ ...shot, kind: "watch" }}
            sizes={sizes.watch}
            className="w-(--inset) rounded-[26%/21.3%]"
            imageClassName="aspect-[422/514] w-full rounded-[inherit] object-cover shadow-phone"
          />
        </Mat>
      </Figure>
    ))}
  </div>
)

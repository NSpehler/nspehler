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
        <Mat className="aspect-square rounded-[14px] [--inset:46%] md:aspect-[4/5] md:rounded-mat md:[--inset:56%]">
          <Shot
            shot={{ ...shot, kind: "device" }}
            sizes={sizes.watch}
            className="w-(--inset)"
            imageClassName="h-auto w-full drop-shadow-phone"
          />
        </Mat>
      </Figure>
    ))}
  </div>
)

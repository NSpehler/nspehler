import { Figure } from "@/components/media/Figure"
import { Mat } from "@/components/media/Mat"
import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import type { Block } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  block: Extract<Block, { type: "phones" }>
  className?: string
}

const tilts = [
  "-rotate-[0.6deg]",
  "rotate-[0.5deg]",
  "-rotate-[0.4deg]",
  "rotate-[0.7deg]",
]

export const Phones = ({ block: { shots }, className }: Props) => {
  const pair = shots.length === 2
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 md:gap-8",
        !pair && "lg:grid-cols-4",
        className,
      )}
    >
      {shots.map((shot, index) => (
        <Figure key={shot.src.src} caption={shot.caption}>
          <Mat
            className={cn(
              "aspect-[304/520] rounded-[14px] [--inset:71%] md:rounded-mat",
              pair && "lg:aspect-[8/7] lg:[--inset:37.5%]",
            )}
          >
            <Shot
              shot={{ ...shot, kind: "phone" }}
              sizes={sizes.phone}
              className={cn("w-(--inset) rounded-[13%/6%]", tilts[index])}
              imageClassName="aspect-[240/521] w-full rounded-[inherit] object-cover shadow-phone"
            />
          </Mat>
        </Figure>
      ))}
    </div>
  )
}

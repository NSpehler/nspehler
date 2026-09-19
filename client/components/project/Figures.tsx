import { Figure } from "@/components/media/Figure"
import { Mat } from "@/components/media/Mat"
import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import type { Block, Shot as ShotData } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  block: Extract<Block, { type: "figure" | "figures" }>
  className?: string
}

const landscape = ({ src }: ShotData) => src.width / src.height > 1.4

const Bleed = ({ shot, size }: { shot: ShotData; size: string }) => (
  <Figure caption={shot.caption}>
    <Shot
      shot={shot}
      sizes={size}
      className="w-full rounded-2xl"
      imageClassName="h-auto w-full rounded-[inherit] ring-1 ring-bleed"
    />
  </Figure>
)

const Wide = ({ shot }: { shot: ShotData }) => (
  <Figure caption={shot.caption}>
    <Mat className="aspect-[16/11] rounded-[14px] [--inset:80%] [--shot:16/10] md:aspect-[1312/760] md:rounded-mat md:[--inset:73.17%]">
      <Shot
        shot={shot}
        sizes={sizes.lead}
        className="w-(--inset) rounded-[7px] md:rounded-inset"
        imageClassName="aspect-(--shot) w-full rounded-[inherit] object-cover object-top shadow-shot-xs md:shadow-shot-lg"
      />
    </Mat>
  </Figure>
)

const Half = ({ shot, tall }: { shot: ShotData; tall: boolean }) => (
  <Figure caption={shot.caption}>
    <Mat
      className={cn(
        "rounded-[14px] [--inset:80%] [--shot:16/10] md:rounded-mat",
        tall ? "aspect-[8/7]" : "aspect-[16/11] md:aspect-[16/10]",
      )}
    >
      <Shot
        shot={shot}
        sizes={sizes.card}
        className={cn(
          "rounded-[7px] md:rounded-inset",
          landscape(shot) ? "w-(--inset)" : tall ? "h-[89.6%]" : "h-[80%]",
        )}
        imageClassName={cn(
          "rounded-[inherit] object-cover object-top shadow-shot-xs md:shadow-shot-md",
          landscape(shot) ? "aspect-(--shot) w-full" : "h-full w-auto",
        )}
      />
    </Mat>
  </Figure>
)

export const Figures = ({ block, className }: Props) => {
  if (block.type === "figure") {
    return (
      <div className={className}>
        {block.frame === "bleed" ? (
          <Bleed shot={block.shot} size={sizes.bleed} />
        ) : (
          <Wide shot={block.shot} />
        )}
      </div>
    )
  }
  return (
    <div className={cn("grid gap-8 md:grid-cols-2", className)}>
      {block.shots.map((shot) =>
        block.frame === "bleed" ? (
          <Bleed key={shot.src.src} shot={shot} size={sizes.half} />
        ) : (
          <Half key={shot.src.src} shot={shot} tall={block.frame === "tall"} />
        ),
      )}
    </div>
  )
}

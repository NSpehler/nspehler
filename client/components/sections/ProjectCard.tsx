import Image from "next/image"

import { Mat } from "@/components/media/Mat"
import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { NAV, vt } from "@/components/motion/names"
import { leadWarm } from "@/components/motion/warm"
import { WarmLink } from "@/components/motion/WarmLink"
import { ArrowLink } from "@/components/ui/ArrowLink"
import type { Project } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
  eager?: boolean
}

export const ProjectCard = ({ project, eager = false }: Props) => {
  const { slug, name, year, card } = project
  const href = `/projects/${slug}` as const
  const phones = card.frame === "phones"
  return (
    <article className="flex flex-col gap-3.5 md:gap-[18px]">
      <WarmLink
        href={href}
        transitionTypes={NAV.forward}
        warm={leadWarm(project)}
        aria-label={`${name} case study`}
        className="block"
      >
        <Morph name={vt.frame(slug)}>
          <Mat
            className={cn(
              "aspect-[16/11] rounded-[14px] md:rounded-mat",
              phones
                ? "[--inset:82.5%] [--shot:16/9]"
                : "[--inset:80%] [--shot:16/10]",
            )}
          >
            <Morph name={vt.visual(slug)}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                sizes={sizes.card}
                placeholder="blur"
                quality={85}
                loading={eager ? "eager" : undefined}
                className={cn(
                  "aspect-(--shot) w-(--inset) rounded-[7px] object-cover shadow-shot-xs md:rounded-inset md:shadow-shot-md",
                  !phones && "object-top",
                )}
              />
            </Morph>
          </Mat>
        </Morph>
      </WarmLink>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-baseline justify-between text-lg md:text-[20px]">
          <ArrowLink
            link={{ label: name, href }}
            icon="up-right"
            iconClassName="size-[15px]"
            className="gap-1.5 md:tracking-[-0.01em]"
            transitionTypes={NAV.forward}
          />
          <span className="text-label tabular-nums">{year}</span>
        </div>
        <p className="text-[15px]/[1.45] text-body md:min-h-12 md:text-base/[1.5]">
          {card.description}
        </p>
        <p className="mt-0.5 caption md:mt-1">
          {card.type} · {card.stack.join(", ")}
        </p>
      </div>
    </article>
  )
}

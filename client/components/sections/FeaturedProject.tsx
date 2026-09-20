import Image from "next/image"

import { Mat } from "@/components/media/Mat"
import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { NAV, vt } from "@/components/motion/names"
import { leadWarm } from "@/components/motion/warm"
import { WarmLink } from "@/components/motion/WarmLink"
import { ArrowLink } from "@/components/ui/ArrowLink"
import { FactList } from "@/components/ui/FactList"
import type { Project } from "@/content/types"

type Props = {
  project: Project
}

export const FeaturedProject = ({ project }: Props) => {
  const { slug, name, year, card } = project
  const href = `/projects/${slug}` as const
  return (
    <article className="grid gap-y-5 lg:grid-cols-12 lg:items-center lg:gap-x-8">
      <WarmLink
        href={href}
        transitionTypes={NAV.forward}
        warm={leadWarm(project)}
        aria-label={`${name} case study`}
        className="block lg:col-span-7"
      >
        <Morph name={vt.frame(slug)}>
          <Mat className="aspect-[16/11] rounded-[14px] [--inset:80%] [--shot:16/10] md:rounded-mat lg:aspect-[752/496] lg:[--inset:79.8%]">
            <Morph name={vt.visual(slug)}>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                sizes={sizes.featured}
                placeholder="blur"
                quality={85}
                preload
                fetchPriority="high"
                className="aspect-(--shot) w-(--inset) rounded-[7px] object-cover object-top shadow-shot-xs md:rounded-inset md:shadow-shot-md"
              />
            </Morph>
          </Mat>
        </Morph>
      </WarmLink>
      <div className="flex flex-col gap-5 lg:col-span-5 lg:col-start-8 lg:pl-7">
        <div className="flex flex-col gap-2.5 lg:gap-3">
          <ArrowLink
            link={{ label: name, href }}
            icon="up-right"
            iconClassName="size-5 stroke-[1.75] lg:size-7"
            className="gap-2 text-[28px] tracking-[-0.03em] lg:text-[40px]"
            transitionTypes={NAV.forward}
          />
          <p className="text-[17px]/[1.5] text-body">{card.description}</p>
        </div>
        <FactList
          facts={[
            { label: "Year", value: year },
            { label: "Type", value: card.type },
            { label: "Tech stack", value: card.stack.join(", ") },
          ]}
          className="flex flex-col gap-3.5 border-t border-hairline pt-5"
        />
        <ArrowLink
          link={{ label: "View project", href }}
          className="gap-2 text-[15px]"
          transitionTypes={NAV.forward}
        />
      </div>
    </article>
  )
}

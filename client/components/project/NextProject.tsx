import { ArrowRightIcon } from "lucide-react"
import Image from "next/image"

import { Mat } from "@/components/media/Mat"
import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { NAV, vt } from "@/components/motion/names"
import { leadWarm } from "@/components/motion/warm"
import { WarmLink } from "@/components/motion/WarmLink"
import { Eyebrow } from "@/components/ui/Eyebrow"
import type { Project } from "@/content/types"
import { cn } from "@/lib/utils"

type Props = {
  project: Project
}

const frames = {
  web: "[--inset:80%] [--shot:16/10]",
  phones: "[--inset:82.5%] [--shot:16/9]",
}

export const NextProject = ({ project }: Props) => {
  const { slug, name, card, lead } = project
  return (
    <WarmLink
      href={`/projects/${slug}`}
      transitionTypes={NAV.forward}
      warm={leadWarm(project)}
      className="group ruled flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
    >
      <span className="flex min-w-0 flex-col gap-3">
        <Eyebrow>Next project</Eyebrow>
        <span className="flex items-center gap-3 text-title-lg text-balance lg:gap-4">
          {name}
          <ArrowRightIcon
            aria-hidden="true"
            className="size-7 shrink-0 stroke-[1.5] transition-transform duration-150 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none lg:size-11"
          />
        </span>
      </span>
      <Morph name={vt.frame(slug)}>
        <Mat
          className={cn(
            "aspect-[16/10] w-full rounded-[14px] lg:w-[400px] lg:shrink-0",
            lead.type === "triptych" ? "gap-[4.27%]" : frames[card.frame],
          )}
        >
          {lead.type === "triptych" ? (
            lead.shots.map(({ src }, index) => {
              const device = (
                <Image
                  key={src.src}
                  src={src}
                  alt=""
                  sizes={sizes.deviceThumb}
                  className="h-auto w-[21.65%] drop-shadow-[0_8px_12px_var(--phone-drop)]"
                />
              )
              return index === 1 ? (
                <Morph key={src.src} name={vt.visual(slug)}>
                  {device}
                </Morph>
              ) : (
                device
              )
            })
          ) : (
            <Morph name={vt.visual(slug)}>
              <Image
                src={card.image.src}
                alt=""
                sizes={sizes.thumb}
                placeholder="blur"
                quality={85}
                className={cn(
                  "aspect-(--shot) w-(--inset) rounded-thumb object-cover shadow-shot-xs md:shadow-shot-sm",
                  card.frame === "web" && "object-top",
                )}
              />
            </Morph>
          )}
        </Mat>
      </Morph>
    </WarmLink>
  )
}

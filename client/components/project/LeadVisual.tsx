import { Figure } from "@/components/media/Figure"
import { Mat } from "@/components/media/Mat"
import { Shot } from "@/components/media/Shot"
import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { vt } from "@/components/motion/names"
import type { Slug } from "@/content/projects/slugs"
import type { Lead } from "@/content/types"

type Props = {
  lead: Lead
  slug: Slug
}

const spacing = "mt-10 md:mt-16"

export const LeadVisual = ({ lead, slug }: Props) => {
  if (lead.type === "triptych") {
    return (
      <Figure caption={lead.caption} className={spacing}>
        <Morph name={vt.frame(slug)}>
          <Mat className="aspect-[7/6] gap-[5%] rounded-[14px] md:rounded-mat lg:aspect-[1312/680] lg:gap-[4.27%]">
            {lead.shots.map((picture, index) => {
              const shot = (
                <Shot
                  key={picture.src.src}
                  shot={{ ...picture, caption: lead.caption, kind: "device" }}
                  sizes={sizes.device}
                  preload
                  className="w-[28%] lg:w-[21.65%]"
                  imageClassName="h-auto w-full drop-shadow-phone"
                />
              )
              return index === 1 ? (
                <Morph key={picture.src.src} name={vt.visual(slug)}>
                  {shot}
                </Morph>
              ) : (
                shot
              )
            })}
          </Mat>
        </Morph>
      </Figure>
    )
  }

  if (lead.frame === "bleed") {
    return (
      <Figure caption={lead.shot.caption} className={spacing}>
        <Morph name={vt.frame(slug)}>
          <Shot
            shot={lead.shot}
            sizes={sizes.bleed}
            preload
            className="w-full rounded-2xl"
            imageClassName="h-auto w-full rounded-[inherit] ring-1 ring-bleed"
          />
        </Morph>
      </Figure>
    )
  }

  return (
    <Figure caption={lead.shot.caption} className={spacing}>
      <Morph name={vt.frame(slug)}>
        <Mat className="aspect-[16/11] rounded-[14px] [--inset:80%] [--shot:16/10] md:aspect-[1312/760] md:rounded-mat md:[--inset:73.17%]">
          <Morph name={vt.visual(slug)}>
            <Shot
              shot={lead.shot}
              sizes={sizes.lead}
              preload
              className="w-(--inset) rounded-[7px] md:rounded-inset"
              imageClassName="aspect-(--shot) w-full rounded-[inherit] object-cover object-top shadow-shot-xs md:shadow-shot-lg"
            />
          </Morph>
        </Mat>
      </Morph>
    </Figure>
  )
}

import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"

import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { NAV, vt } from "@/components/motion/names"
import { warm } from "@/components/motion/warm"
import { WarmLink } from "@/components/motion/WarmLink"
import { Section } from "@/components/ui/Section"
import { about } from "@/content/about"
import { research } from "@/content/research"

const [, , cover] = research.covers

export const ResearchTeaser = () => (
  <Section label="Research" width="full" id="research" ariaLabel="Research">
    <WarmLink
      href="/lean-marketing-for-startups"
      transitionTypes={NAV.forward}
      warm={warm(cover.src, sizes.paper)}
      className="group flex flex-col items-start gap-6 transition-colors duration-150 motion-reduce:transition-none md:flex-row md:items-center md:gap-10"
    >
      <Morph name={vt.paper.frame}>
        <span className="mat h-[300px] w-[260px] shrink-0 rounded-mat">
          <Morph name={vt.paper.cover}>
            <Image
              src={cover.src}
              alt={cover.alt}
              sizes="168px"
              className="h-[238px] w-[168px] rounded-sm object-cover shadow-shot-sm"
            />
          </Morph>
        </span>
      </Morph>
      <span className="flex flex-col gap-3 md:max-w-[520px]">
        <span className="caption">{about.research.eyebrow}</span>
        <span className="text-subtitle leading-[normal] font-medium">
          {about.research.title}
        </span>
        <span className="text-[17px]/[1.55] text-body">
          {about.research.body}
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[15px] font-medium">
          {about.research.cta}
          <ArrowUpRightIcon
            aria-hidden="true"
            className="size-3.5 transition-transform duration-150 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          />
        </span>
      </span>
    </WarmLink>
  </Section>
)

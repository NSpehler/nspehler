import { NAV } from "@/components/motion/names"
import { ArrowLink } from "@/components/ui/ArrowLink"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { home } from "@/content/home"
import { projects } from "@/content/projects"

import { PhoneSlider } from "./PhoneSlider"

export const NowBuilding = () => {
  const { slug, body, website, screens } = home.nowBuilding
  const project = projects[slug]
  return (
    <section
      id="now-building"
      aria-label="Now building"
      className="ruled flex flex-col gap-3.5 md:gap-8"
    >
      <PhoneSlider
        screens={screens}
        slug={slug}
        intro={
          <>
            <Eyebrow>Now building</Eyebrow>
            <h2 className="text-headline">{project.name}</h2>
            <p className="text-[15px]/[1.55] text-pretty text-body md:text-[17px]/[1.55]">
              {body}
            </p>
            <div className="flex items-center gap-6 text-[15px]">
              <ArrowLink
                link={{ label: "View project", href: `/projects/${slug}` }}
                icon="right"
                iconClassName="size-[15px]"
                className="gap-1.5"
                transitionTypes={NAV.forward}
              />
              <ArrowLink
                link={website}
                iconClassName="size-3.5"
                className="gap-1.5 text-body hover:text-ink"
              />
            </div>
          </>
        }
      />
    </section>
  )
}

import { NAV } from "@/components/motion/names"
import { ArrowLink } from "@/components/ui/ArrowLink"
import { Headline } from "@/components/ui/Headline"
import { Status } from "@/components/ui/Status"
import { home } from "@/content/home"
import { site } from "@/content/site"

export const Hero = () => (
  <section className="flex flex-col gap-6 pt-10 pb-9 md:gap-10 md:pt-22 md:pb-16">
    <Headline
      as="h1"
      text={home.hero.headline}
      className="max-w-[1240px] text-title"
    />
    <div className="flex flex-col gap-3 text-[15px] md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3 text-body md:flex-row md:items-center md:gap-10">
        <Status>{site.status}</Status>
        <span>{home.hero.previously}</span>
      </div>
      <ArrowLink
        link={site.cta.book}
        icon="right"
        className="gap-2 text-ink"
        transitionTypes={NAV.forward}
      />
    </div>
  </section>
)

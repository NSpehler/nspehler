import { NAV } from "@/components/motion/names"
import { ArrowLink } from "@/components/ui/ArrowLink"
import { Avatar } from "@/components/ui/Avatar"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { about } from "@/content/about"
import { home } from "@/content/home"
import { site } from "@/content/site"

export const AboutTeaser = () => (
  <section
    id="about"
    aria-label="About"
    className="ruled grid gap-y-6 lg:grid-cols-12 lg:items-start lg:gap-x-8"
  >
    <Eyebrow className="lg:col-span-3">About</Eyebrow>
    <div className="flex flex-col gap-4 md:gap-5 lg:col-span-5 lg:col-start-4">
      <div className="flex items-center gap-3 md:gap-3.5">
        <Avatar size={56} className="size-11 md:size-14" />
        <div className="flex flex-col gap-0.5">
          <span className="text-base font-medium md:text-[17px]">
            {site.name}
          </span>
          <span className="text-[13px] text-body md:text-sm">
            {home.about.role}
          </span>
        </div>
      </div>
      <p className="text-[17px]/[1.5] text-pretty md:text-[20px]/[1.5] md:tracking-[-0.01em]">
        {home.about.paragraphs[0]}
      </p>
      <p className="text-[17px]/[1.5] text-pretty text-body md:text-[20px]/[1.5] md:tracking-[-0.01em]">
        {home.about.paragraphs[1]}
      </p>
      <ArrowLink
        link={{ label: "More about me", href: "/about" }}
        icon="right"
        className="gap-2 text-[15px] md:text-base"
        transitionTypes={NAV.forward}
      />
    </div>
    <div className="flex flex-col lg:col-span-3 lg:col-start-10">
      <Eyebrow className="pb-3.5">Experience</Eyebrow>
      <div className="divide-y divide-hairline border-y border-hairline">
        {about.experience.rows.map(({ name, year }) => (
          <div
            key={name}
            className="flex items-baseline justify-between py-[11px] text-[15px]"
          >
            <span className="font-medium">{name}</span>
            <span className="caption">{year}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

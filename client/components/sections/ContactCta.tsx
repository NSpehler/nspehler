import { NAV } from "@/components/motion/names"
import { Headline } from "@/components/ui/Headline"
import { Pill } from "@/components/ui/Pill"
import { site } from "@/content/site"

export const ContactCta = () => (
  <section id="contact" aria-label="Contact" className="ruled">
    <div className="flex flex-col gap-6 pb-12 md:gap-10 md:pt-2 md:pb-18">
      <Headline
        as="p"
        text={site.cta.headline}
        className="text-cta md:max-w-[1000px]"
      />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
        <Pill link={site.cta.book} transitionTypes={NAV.forward} />
        <a
          href={`mailto:${site.email}`}
          className="self-center border-b border-ink pb-0.5 text-base font-medium transition-colors duration-150 hover:border-body motion-reduce:transition-none md:self-auto md:pb-[3px] md:text-[20px]"
        >
          {site.email}
        </a>
      </div>
    </div>
  </section>
)

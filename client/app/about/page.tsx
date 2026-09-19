import { PageTransition } from "@/components/motion/PageTransition"
import { Companies } from "@/components/sections/Companies"
import { ContactCta } from "@/components/sections/ContactCta"
import { Experience } from "@/components/sections/Experience"
import { ResearchTeaser } from "@/components/sections/ResearchTeaser"
import { WhatIDo } from "@/components/sections/WhatIDo"
import { StructuredData } from "@/components/StructuredData"
import { Avatar } from "@/components/ui/Avatar"
import { Inline } from "@/components/ui/Inline"
import { about } from "@/content/about"
import { graph, pageNode } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: about.title,
  description: about.description,
  path: "/about",
})

export default function Page() {
  return (
    <PageTransition>
      <StructuredData
        id="about"
        data={graph(
          pageNode("ProfilePage", "/about", about.title, about.description),
        )}
      />
      <section
        aria-label="Introduction"
        className="flex flex-col gap-6 pt-10 pb-14 md:gap-7 md:pt-20 md:pb-26"
      >
        <Avatar size={64} className="size-14 md:size-16" />
        <div className="flex flex-col gap-6 md:max-w-[1160px] md:gap-7">
          <h1 className="text-intro text-pretty">{about.intro.headline}</h1>
          <p className="text-intro text-pretty text-soft">
            <Inline text={about.intro.body} />
          </p>
        </div>
      </section>
      <WhatIDo />
      <Experience />
      <Companies />
      <ResearchTeaser />
      <ContactCta />
    </PageTransition>
  )
}

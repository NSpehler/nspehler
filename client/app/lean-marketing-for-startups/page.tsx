import { PageTransition } from "@/components/motion/PageTransition"
import { ContactCta } from "@/components/sections/ContactCta"
import { Framework } from "@/components/sections/Framework"
import { ResearchHero } from "@/components/sections/ResearchHero"
import { StructuredData } from "@/components/StructuredData"
import { research } from "@/content/research"
import { articleNode, graph } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

const path = "/lean-marketing-for-startups"

export const metadata = pageMetadata({
  title: research.title,
  description: research.description,
  path,
  type: "article",
})

export default function Page() {
  return (
    <PageTransition>
      <StructuredData
        id="research"
        data={graph(
          articleNode(
            path,
            research.title,
            research.description,
            research.published,
          ),
        )}
      />
      <ResearchHero />
      <Framework />
      <ContactCta />
    </PageTransition>
  )
}

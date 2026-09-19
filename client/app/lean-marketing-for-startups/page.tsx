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
    <>
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
      <h1 className="sr-only">{research.headline}</h1>
    </>
  )
}

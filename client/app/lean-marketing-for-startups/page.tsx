import { StructuredData } from "@/components/utils"
import { research } from "@/content/research"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata(research)

export default function ResearchPage() {
  return (
    <>
      <StructuredData id="research" data={research.structuredData} />
      <h1 className="sr-only">{research.title}</h1>
      <div className="prose prose-xl dark:prose-invert">{research.content}</div>
    </>
  )
}

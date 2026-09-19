import { List, StructuredData } from "@/components/utils"
import { work, workEntries } from "@/content/work"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata(work)

export default function WorkPage() {
  return (
    <>
      <StructuredData id="work" data={work.structuredData} />
      <h1 className="sr-only">{work.title}</h1>
      <div className="md:grid md:grid-cols-3 md:items-start md:gap-8">
        <div className="prose prose-xl dark:prose-invert">
          <p>{work.description}</p>
        </div>
        <div className="col-span-2">
          <List items={workEntries} />
        </div>
      </div>
    </>
  )
}

import { Preview } from "@/components/layout"
import { CalEmbed, StructuredData } from "@/components/utils"
import type { ResultOf } from "@/lib/datocms/graphql"
import type { ContentComponentType } from "@/lib/datocms/realtime/generatePageComponent"
import { notFound } from "next/navigation"
import { StructuredText } from "react-datocms"

import type { PageProps, query } from "./common"

const Content: ContentComponentType<PageProps, ResultOf<typeof query>> = ({
  data,
  isDraftMode,
}) => {
  if (!data.page) notFound()

  return (
    <>
      <StructuredData
        id={`${data.page._modelApiKey}-structured-data`}
        data={data.page.structuredData}
      />
      <h1 className="sr-only">{data.page.title}</h1>
      <div className="grid gap-8 md:gap-12">
        <div
          className="prose prose-xl dark:prose-invert"
          data-datocms-content-link-group
        >
          <StructuredText data={data.page.content} />
        </div>
        <CalEmbed calLink={data.page.meetingLink} />
      </div>
      {isDraftMode && <Preview editingUrl={data.page._editingUrl} />}
    </>
  )
}

export default Content

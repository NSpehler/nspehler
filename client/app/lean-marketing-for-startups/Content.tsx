import { Preview } from "@/components/layout"
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
      <div
        className="prose prose-xl lg:prose-2xl dark:prose-invert"
        data-datocms-content-link-group
      >
        <StructuredText data={data.page.content} />
      </div>
      {isDraftMode && <Preview editingUrl={data.page._editingUrl} />}
    </>
  )
}

export default Content

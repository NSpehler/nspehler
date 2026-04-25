import { Preview } from "@/components/layout"
import { List } from "@/components/utils"
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
      <div className="lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
        <div
          className="prose prose-xl lg:prose-2xl dark:prose-invert"
          data-datocms-content-link-group
        >
          <StructuredText data={data.page.content} />
        </div>
        <div className="col-span-2">
          <List items={data.items} />
        </div>
      </div>
      {isDraftMode && <Preview editingUrl={data.page._editingUrl} />}
    </>
  )
}

export default Content

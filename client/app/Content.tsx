import { Preview } from "@/components/layout"
import type { ResultOf } from "@/lib/datocms/graphql"
import type { ContentComponentType } from "@/lib/datocms/realtime/generatePageComponent"
import { stripStega } from "@datocms/content-link"
import { notFound } from "next/navigation"
import Script from "next/script"
import { StructuredText } from "react-datocms"

import type { PageProps, query } from "./common"

const Content: ContentComponentType<PageProps, ResultOf<typeof query>> = ({
  data,
  isDraftMode,
}) => {
  if (!data.page) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: process.env.NEXT_PUBLIC_APP_NAME,
    email: "nicolas@spehler.com",
    url: process.env.NEXT_PUBLIC_APP_URL,
    image: `${process.env.NEXT_PUBLIC_APP_URL}/nspehler-logo.png`,
    sameAs: data.footer?.social.map((s) => stripStega(s.link)) ?? [],
  }

  return (
    <>
      <Script
        id="person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

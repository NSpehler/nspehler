import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/Layout"
import { Button } from "@/components/Button"
import { createSubscription } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment, researchFragment } from "@/lib/fragments"

const RESEARCH_QUERY = `
  {
    site: _site {
      ...siteFragment
    }
    header {
      ...headerFragment
    }
    footer {
      ...footerFragment
    }
    research {
      ...researchFragment
    }
  }
  ${siteFragment}
  ${headerFragment}
  ${footerFragment}
  ${researchFragment}
`

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      subscription: await createSubscription(preview, {
        query: RESEARCH_QUERY
      }),
      preview
    },
  }
}

export const Work = ({ subscription, preview }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout
        header={data.header}
        footer={data.footer}
        preview={preview}
      >
        <Head>
          {renderMetaTags(data.research.seo.concat(data.site.favicon))}
        </Head>
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <StructuredText data={data.research.content} />
        </div>
        {data.research.downloadTitle && data.research.downloadLink && (
          <Button
            title={data.research.downloadTitle}
            link={data.research.downloadLink.url}
          />
        )}
      </Layout>
    </>
  )
}

export default Work
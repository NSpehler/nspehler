import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/layout"
import { Button } from "@/components/button"
import { request } from "@/lib/datocms"
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

export const getStaticProps = async (context) => {
  const graphqlRequest = {
    query: RESEARCH_QUERY,
    preview: context.preview,
  }

  return {
    props: {
      subscription: context.preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  }
}

export const Work = ({ subscription }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout header={data.header} footer={data.footer}>
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
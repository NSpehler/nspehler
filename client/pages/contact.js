import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/layout"
import { request } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment, contactFragment } from "@/lib/fragments"

const CONTACT_QUERY = `
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
    contact {
      ...contactFragment
    }
  }
  ${siteFragment}
  ${headerFragment}
  ${footerFragment}
  ${contactFragment}
`

export const getStaticProps = async (context) => {
  const graphqlRequest = {
    query: CONTACT_QUERY,
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

export const Contact = ({ subscription }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout header={data.header} footer={data.footer}>
        <Head>
          {renderMetaTags(data.contact.seo.concat(data.site.favicon))}
        </Head>
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <StructuredText data={data.contact.content} />
        </div>
      </Layout>
    </>
  )
}

export default Contact
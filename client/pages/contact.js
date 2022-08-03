import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/layout"
import { createSubscription } from "@/lib/datocms"
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
  return {
    props: {
      subscription: await createSubscription(context, {
        query: CONTACT_QUERY
      })
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
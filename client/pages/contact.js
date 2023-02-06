import React, { useEffect } from "react"
import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import Cal, { getCalApi } from "@calcom/embed-react"

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

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      subscription: await createSubscription(preview, {
        query: CONTACT_QUERY
      }),
      preview
    },
  }
}

export const Contact = ({ subscription, preview }) => {
  const { data } = useQuerySubscription(subscription)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {"styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false});
    })();
  }, [])

  return (
    <>
      <Layout
        header={data.header}
        footer={data.footer}
        preview={preview}
      >
        <Head>
          {renderMetaTags(data.contact.seo.concat(data.site.favicon))}
        </Head>
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <StructuredText data={data.contact.content} />
        </div>
        <Cal
          calLink={data.contact.meetingLink}
          className="w-full h-full overflow-scroll mt-8 lg:mt-12"
        />
      </Layout>
    </>
  )
}

export default Contact
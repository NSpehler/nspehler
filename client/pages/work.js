import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/layout"
import { List } from "@/components/list"
import { createSubscription } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment, workPageFragment, workFragment } from "@/lib/fragments"

const WORK_QUERY = `
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
    workPage {
      ...workPageFragment
    }
    work: allWorks(orderBy: _createdAt_DESC) {
      ...workFragment
    }
  }
  ${siteFragment}
  ${headerFragment}
  ${footerFragment}
  ${workPageFragment}
  ${workFragment}
`

export const getStaticProps = async (context) => {
  return {
    props: {
      subscription: await createSubscription(context, {
        query: WORK_QUERY
      })
    },
  }
}

export const Work = ({ subscription }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout header={data.header} footer={data.footer}>
        <Head>
          {renderMetaTags(data.workPage.seo.concat(data.site.favicon))}
        </Head>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="prose prose-xl lg:prose-2xl dark:prose-light">
            <StructuredText data={data.workPage.content} />
          </div>
          <div className="col-span-2">
            <List items={data.work} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Work
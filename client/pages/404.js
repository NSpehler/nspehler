import { useQuerySubscription } from "react-datocms"
import { Layout } from "@/components/layout"
import { request } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment } from "@/lib/fragments"

const NOT_FOUND_QUERY = `
  {
    header {
      ...headerFragment
    }
    footer {
      ...footerFragment
    }
  }
  ${headerFragment}
  ${footerFragment}
`

export const getStaticProps = async (context) => {
  const graphqlRequest = {
    query: NOT_FOUND_QUERY,
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

export const NotFound = ({ subscription }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout header={data.header} footer={data.footer}>
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <p>Page not found</p>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
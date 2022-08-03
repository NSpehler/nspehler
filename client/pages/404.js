import { useQuerySubscription } from "react-datocms"
import { Layout } from "@/components/layout"
import { createSubscription } from "@/lib/datocms"
import { headerFragment, footerFragment } from "@/lib/fragments"

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
  return {
    props: {
      subscription: await createSubscription(context, {
        query: NOT_FOUND_QUERY
      })
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
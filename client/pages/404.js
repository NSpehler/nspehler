import { useQuerySubscription } from "react-datocms"
import { Layout } from "@/components/Layout"
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

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      subscription: await createSubscription(preview, {
        query: NOT_FOUND_QUERY
      }),
      preview
    },
  }
}

export const NotFound = ({ subscription, preview }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout
        header={data.header}
        footer={data.footer}
        preview={preview}
      >
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <p>Page not found</p>
        </div>
      </Layout>
    </>
  )
}

export default NotFound
import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/Layout"
import { createSubscription } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment, homeFragment } from "@/lib/fragments"

const HOME_QUERY = `
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
    home {
      ...homeFragment
    }
  }
  ${siteFragment}
  ${headerFragment}
  ${footerFragment}
  ${homeFragment}
`

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      subscription: await createSubscription(preview, {
        query: HOME_QUERY
      }),
      preview
    },
  }
}

export const Home = ({ subscription, preview }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout
        header={data.header}
        footer={data.footer}
        preview={preview}
      >
        <Head>
          {renderMetaTags(data.home.seo.concat(data.site.favicon))}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: process.env.NEXT_PUBLIC_APP_NAME,
              email: "nicolas@spehler.com",
              telephone: "+1 (415) 513-0099",
              url: process.env.NEXT_PUBLIC_APP_URL,
              logo: `${process.env.NEXT_PUBLIC_APP_URL}/nspehler-logo.png`,
              sameAs: data.footer.social.map((social) => social.link),
            })}
          </script>
        </Head>
        <div className="prose prose-xl lg:prose-2xl dark:prose-light">
          <StructuredText data={data.home.content} />
        </div>
      </Layout>
    </>
  )
}

export default Home
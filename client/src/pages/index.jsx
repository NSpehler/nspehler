import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout } from "../components/Layout"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.home.seoMetaTags}>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: process.env.GATSBY_APP_NAME,
          email: "nspehler@hey.com",
          telephone: "+1 (415) 513-0099",
          url: process.env.GATSBY_APP_URL,
          logo: `${process.env.GATSBY_APP_URL}/nspehler-logo.png`,
          sameAs: data.footer.social.map((social) => social.link),
        })}
      </script>
    </HelmetDatoCms>
    <div className="prose prose-xl lg:prose-2xl dark:prose-light">
      <StructuredText data={data.home.content} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomeQuery {
    home: datoCmsHome {
      ...Home
    }
    footer: datoCmsFooter {
      ...Footer
    }
  }
`

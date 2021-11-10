import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout } from "../components/Layout"

const IndexPage = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.home.seoMetaTags} />
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
  }
`

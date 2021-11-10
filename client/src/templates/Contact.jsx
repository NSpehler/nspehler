import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout } from "../components"

const Contact = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.contact.seoMetaTags} />
    <div className="prose prose-xl lg:prose-2xl dark:prose-light">
      <StructuredText data={data.contact.content} />
    </div>
  </Layout>
)

export default Contact

export const query = graphql`
  query ContactQuery($slug: String!) {
    contact: datoCmsContact(slug: { eq: $slug }) {
      ...Contact
    }
  }
`

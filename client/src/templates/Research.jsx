import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout, Button } from "../components"

const Research = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.research.seoMetaTags} />
    <div className="prose prose-xl lg:prose-2xl dark:prose-light">
      <StructuredText data={data.research.content} />
    </div>
    {data.research.downloadTitle && data.research.downloadLink && (
      <Button
        title={data.research.downloadTitle}
        link={data.research.downloadLink.url}
      />
    )}
  </Layout>
)

export default Research

export const query = graphql`
  query ResearchQuery($slug: String!) {
    research: datoCmsResearch(slug: { eq: $slug }) {
      ...Research
    }
  }
`

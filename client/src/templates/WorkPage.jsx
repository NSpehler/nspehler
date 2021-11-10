import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout, List } from "../components"

const WorkPage = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.workPage.seoMetaTags} />
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="prose prose-xl lg:prose-2xl dark:prose-light">
        <StructuredText data={data.workPage.content} />
      </div>
      <div className="col-span-2">
        <List items={data.work.nodes} />
      </div>
    </div>
  </Layout>
)

export default WorkPage

export const query = graphql`
  query WorkPageQuery($slug: String!) {
    workPage: datoCmsWorkPage(slug: { eq: $slug }) {
      ...WorkPage
    }
    work: allDatoCmsWork(sort: { fields: meta___createdAt, order: DESC }) {
      nodes {
        ...Work
      }
    }
  }
`

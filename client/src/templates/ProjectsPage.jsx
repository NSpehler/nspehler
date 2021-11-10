import * as React from "react"
import { graphql } from "gatsby"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { StructuredText } from "react-datocms"

import { Layout, List } from "../components"

const ProjectsPage = ({ data, location }) => (
  <Layout location={location}>
    <HelmetDatoCms seo={data.projectsPage.seoMetaTags} />
    <div className="lg:grid lg:grid-cols-3 lg:gap-8">
      <div className="prose prose-xl lg:prose-2xl dark:prose-light">
        <StructuredText data={data.projectsPage.content} />
      </div>
      <div className="col-span-2">
        <List items={data.projects.nodes} />
      </div>
    </div>
  </Layout>
)

export default ProjectsPage

export const query = graphql`
  query ProjectsPageQuery($slug: String!) {
    projectsPage: datoCmsProjectsPage(slug: { eq: $slug }) {
      ...ProjectsPage
    }
    projects: allDatoCmsProject(
      sort: { fields: meta___createdAt, order: DESC }
    ) {
      nodes {
        ...Project
      }
    }
  }
`

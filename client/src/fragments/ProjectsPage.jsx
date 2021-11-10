import { graphql } from "gatsby"

export const ProjectsPage = graphql`
  fragment ProjectsPage on DatoCmsProjectsPage {
    title
    slug
    content {
      value
    }
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
`

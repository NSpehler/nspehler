import { graphql } from "gatsby"

export const Project = graphql`
  fragment Project on DatoCmsProject {
    title
    content {
      value
    }
    link
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
    meta {
      createdAt
    }
  }
`

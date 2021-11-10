import { graphql } from "gatsby"

export const Work = graphql`
  fragment Work on DatoCmsWork {
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

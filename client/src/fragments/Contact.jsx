import { graphql } from "gatsby"

export const Contact = graphql`
  fragment Contact on DatoCmsContact {
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

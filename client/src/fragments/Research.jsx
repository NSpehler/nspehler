import { graphql } from "gatsby"

export const Research = graphql`
  fragment Research on DatoCmsResearch {
    title
    slug
    content {
      value
    }
    downloadTitle
    downloadLink {
      url
    }
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
`

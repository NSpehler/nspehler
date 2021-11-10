import { graphql } from "gatsby"

export const WorkPage = graphql`
  fragment WorkPage on DatoCmsWorkPage {
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

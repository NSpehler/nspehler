import { graphql } from "gatsby"

export const Home = graphql`
  fragment Home on DatoCmsHome {
    content {
      value
    }
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
  }
`

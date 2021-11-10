import { graphql } from "gatsby"

export const Footer = graphql`
  fragment Footer on DatoCmsFooter {
    social {
      title
      link
      icon {
        url
      }
    }
  }
`

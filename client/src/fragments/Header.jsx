import { graphql } from "gatsby"

export const Header = graphql`
  fragment Header on DatoCmsHeader {
    title
    location {
      latitude
      longitude
    }
    links {
      title
      link {
        ... on DatoCmsHome {
          model {
            apiKey
          }
        }
        ... on DatoCmsProjectsPage {
          model {
            apiKey
          }
          slug
        }
        ... on DatoCmsWorkPage {
          model {
            apiKey
          }
          slug
        }
        ... on DatoCmsResearch {
          model {
            apiKey
          }
          slug
        }
        ... on DatoCmsContact {
          model {
            apiKey
          }
          slug
        }
      }
    }
  }
`

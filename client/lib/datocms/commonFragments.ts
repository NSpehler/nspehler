import { graphql } from "@/lib/datocms/graphql"

export const TagFragment = graphql(`
  fragment TagFragment on Tag @_unmask {
    tag
    attributes
    content
  }
`)

const LinkFragment = graphql(`
  fragment LinkFragment on LinkRecord @_unmask {
    __typename
    id
    title
    link {
      ... on HomeRecord {
        _modelApiKey
      }
      ... on ProjectsPageRecord {
        _modelApiKey
        slug
      }
      ... on WorkPageRecord {
        _modelApiKey
        slug
      }
      ... on ResearchRecord {
        _modelApiKey
        slug
      }
      ... on ContactRecord {
        _modelApiKey
        slug
      }
    }
  }
`)

const SocialFragment = graphql(`
  fragment SocialFragment on SocialRecord @_unmask {
    __typename
    id
    title
    link
    icon {
      url
    }
  }
`)

export const HeaderFragment = graphql(
  `
    fragment HeaderFragment on HeaderRecord @_unmask {
      title
      location {
        latitude
        longitude
      }
      links {
        ...LinkFragment
      }
    }
  `,
  [LinkFragment],
)

export const FooterFragment = graphql(
  `
    fragment FooterFragment on FooterRecord @_unmask {
      social {
        ...SocialFragment
      }
    }
  `,
  [SocialFragment],
)

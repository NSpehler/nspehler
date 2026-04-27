import { TagFragment } from "@/lib/datocms/commonFragments"
import { graphql } from "@/lib/datocms/graphql"

export type PageProps = Record<string, never>

export const query = graphql(
  `
    query HomeQuery {
      page: home {
        _modelApiKey
        _editingUrl
        title
        content {
          value
        }
        _seoMetaTags {
          ...TagFragment
        }
        structuredData
      }
    }
  `,
  [TagFragment],
)

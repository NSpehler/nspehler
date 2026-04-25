import { TagFragment } from "@/lib/datocms/commonFragments"
import { graphql } from "@/lib/datocms/graphql"

export type PageProps = Record<string, never>

export const query = graphql(
  `
    query ResearchQuery {
      page: research {
        _modelApiKey
        _editingUrl
        title
        content {
          value
        }
        _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
)

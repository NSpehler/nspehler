import { TagFragment } from "@/lib/datocms/commonFragments"
import { graphql } from "@/lib/datocms/graphql"

export type PageProps = Record<string, never>

export const query = graphql(
  `
    query WorkQuery {
      page: workPage {
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
      items: allWorks(orderBy: _createdAt_DESC) {
        id
        title
        link
        _createdAt
        content {
          value
        }
      }
    }
  `,
  [TagFragment],
)

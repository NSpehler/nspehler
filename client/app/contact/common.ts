import { TagFragment } from "@/lib/datocms/commonFragments"
import { graphql } from "@/lib/datocms/graphql"

export type PageProps = Record<string, never>

export const query = graphql(
  `
    query ContactQuery {
      page: contact {
        _modelApiKey
        _editingUrl
        title
        content {
          value
        }
        meetingLink
        _seoMetaTags {
          ...TagFragment
        }
      }
    }
  `,
  [TagFragment],
)

import { TagFragment } from "@/lib/datocms/commonFragments"
import { graphql } from "@/lib/datocms/graphql"

export type PageProps = Record<string, never>

export const query = graphql(
  `
    query ProjectsQuery {
      page: projectsPage {
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
      items: allProjects(orderBy: _createdAt_DESC) {
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

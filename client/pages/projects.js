import Head from "next/head"
import { renderMetaTags, useQuerySubscription, StructuredText } from "react-datocms"
import { Layout } from "@/components/layout"
import { List } from "@/components/utils"
import { createSubscription } from "@/lib/datocms"
import { siteFragment, headerFragment, footerFragment, projectsPageFragment, projectFragment } from "@/lib/fragments"

const PROJECTS_QUERY = `
  {
    site: _site {
      ...siteFragment
    }
    header {
      ...headerFragment
    }
    footer {
      ...footerFragment
    }
    projectsPage {
      ...projectsPageFragment
    }
    projects: allProjects(orderBy: _createdAt_DESC) {
      ...projectFragment
    }
  }
  ${siteFragment}
  ${headerFragment}
  ${footerFragment}
  ${projectsPageFragment}
  ${projectFragment}
`

export const getStaticProps = async ({ preview = false }) => {
  return {
    props: {
      subscription: await createSubscription(preview, {
        query: PROJECTS_QUERY
      }),
      preview
    },
  }
}

export const Projects = ({ subscription, preview }) => {
  const { data } = useQuerySubscription(subscription)

  return (
    <>
      <Layout
        header={data.header}
        footer={data.footer}
        preview={preview}
      >
        <Head>
          {renderMetaTags(data.projectsPage.seo.concat(data.site.favicon))}
        </Head>
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="prose prose-xl lg:prose-2xl dark:prose-light">
            <StructuredText data={data.projectsPage.content} />
          </div>
          <div className="col-span-2">
            <List items={data.projects} />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Projects
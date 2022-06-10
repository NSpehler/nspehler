import * as React from "react"

import { Layout } from "../components/Layout"

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <div className="prose prose-xl lg:prose-2xl dark:prose-light">
      <p>Page not found</p>
    </div>
  </Layout>
)

export default NotFoundPage

import React from "react"
import Helmet from "react-helmet"

import { Header, Footer } from "./"

export const Layout = ({ location, children }) => {
  return (
    <>
      <Helmet
        bodyAttributes={{
          class: "bg-white dark:bg-black",
        }}
      />
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <Header location={location} />
        <main className="py-8 lg:py-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}

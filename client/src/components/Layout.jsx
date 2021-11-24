import React from "react"
import { HelmetDatoCms } from "gatsby-source-datocms"

import { Header, Footer } from "./"

export const Layout = ({ location, children }) => {
  return (
    <>
      <HelmetDatoCms
        htmlAttributes={{ lang: "en" }}
        bodyAttributes={{
          class: "bg-white dark:bg-black",
        }}
      />
      <div className="max-w-5xl px-4 mx-auto lg:px-8">
        <Header location={location} />
        <main className="py-8 lg:py-12">{children}</main>
        <Footer />
      </div>
    </>
  )
}
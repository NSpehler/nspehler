import React from "react"

import { Header } from "./header"
import { Footer } from "./footer"
import { Preview } from "./preview"

export const Layout = ({ header, footer, preview, children }) => (
  <>
    <div className="max-w-5xl px-4 mx-auto lg:px-8">
      <Header header={header} />
      <main className="py-8 lg:py-12">
        {children}
      </main>
      <Footer footer={footer} />
    </div>
    {preview && <Preview />}
  </>
)
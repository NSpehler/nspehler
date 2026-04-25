import {
  ContentLink,
  Footer,
  Header,
  Layout,
  ThemeProvider,
} from "@/components/layout"
import {
  FooterFragment,
  HeaderFragment,
  TagFragment,
} from "@/lib/datocms/commonFragments"
import { executeQuery } from "@/lib/datocms/executeQuery"
import { generateMetadataFn } from "@/lib/datocms/generateMetadataFn"
import { graphql } from "@/lib/datocms/graphql"
import PlausibleProvider from "next-plausible"
import { draftMode } from "next/headers"
import type { ReactNode } from "react"

import "./globals.css"

const query = graphql(
  `
    query LayoutQuery {
      _site {
        faviconMetaTags {
          ...TagFragment
        }
      }
      header {
        ...HeaderFragment
      }
      footer {
        ...FooterFragment
      }
    }
  `,
  [TagFragment, HeaderFragment, FooterFragment],
)

export const generateMetadata = generateMetadataFn({
  query,
  pickSeoMetaTags: (data) => data._site.faviconMetaTags,
  additionalMetadata: () => ({
    metadataBase: process.env.NEXT_PUBLIC_APP_URL
      ? new URL(process.env.NEXT_PUBLIC_APP_URL)
      : undefined,
    alternates: { canonical: "./" },
  }),
})

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  const { isEnabled: isDraftModeEnabled } = await draftMode()
  const { header, footer } = await executeQuery(query, {
    includeDrafts: isDraftModeEnabled,
  })

  const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC

  const content = (
    <>
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {header && <Header data={header} />}
        <Layout>{children}</Layout>
        {footer && <Footer data={footer} />}
      </div>
      {isDraftModeEnabled && <ContentLink />}
    </>
  )

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {plausibleSrc ? (
            <PlausibleProvider src={plausibleSrc}>{content}</PlausibleProvider>
          ) : (
            content
          )}
        </ThemeProvider>
      </body>
    </html>
  )
}

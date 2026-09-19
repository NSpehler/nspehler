import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next"
import PlausibleProvider from "next-plausible"
import type { ReactNode } from "react"

import { Footer, Header, Layout, ThemeProvider } from "@/components/layout"
import { about } from "@/content/about"
import { site } from "@/content/site"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${about.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "./" },
  openGraph: { type: "website", siteName: site.name, locale: "en" },
  twitter: { card: "summary", site: site.twitter },
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC

  const content = (
    <>
      <Header />
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Layout>{children}</Layout>
        <Footer />
      </div>
    </>
  )

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-neutral-900 dark:focus:bg-black dark:focus:text-white"
        >
          Skip to content
        </a>
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

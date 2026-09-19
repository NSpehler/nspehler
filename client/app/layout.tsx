import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import PlausibleProvider from "next-plausible"
import { Geist, Geist_Mono } from "next/font/google"
import type { ReactNode } from "react"

import { Footer, Header, ThemeProvider } from "@/components/layout"
import { NavigationFlag } from "@/components/motion/NavigationFlag"
import { home } from "@/content/home"
import { site } from "@/content/site"
import { cn } from "@/lib/utils"

import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${home.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "./" },
  openGraph: { type: "website", siteName: site.name, locale: "en" },
  twitter: { card: "summary_large_image", site: site.twitter },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  const plausibleSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SRC

  const content = (
    <div className="mx-auto flex min-h-dvh w-full max-w-page flex-col px-5 md:px-16">
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 outline-none">
        {children}
      </main>
      <Footer />
    </div>
  )

  return (
    <html
      lang="en"
      className={cn(geist.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-sm focus:bg-page focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-ink"
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
        <NavigationFlag />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

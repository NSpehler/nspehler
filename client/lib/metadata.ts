import type { Metadata } from "next"

type Page = {
  title: string
  description: string
  path: string
  type?: "website" | "article"
}

export const pageMetadata = ({
  title,
  description,
  path,
  type = "website",
}: Page): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title, description, url: path, type },
})

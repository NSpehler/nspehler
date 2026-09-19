import type { Metadata } from "next"

type Page = {
  title: string
  description: string
  slug?: string
}

/** Title, description and canonical for a top-level page. */
export const pageMetadata = ({ title, description, slug }: Page): Metadata => ({
  title,
  description,
  alternates: { canonical: slug ? `/${slug}` : "/" },
})

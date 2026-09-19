import type { Metadata } from "next"

import { PageTransition } from "@/components/motion/PageTransition"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Headline } from "@/components/ui/Headline"
import { Pill } from "@/components/ui/Pill"

export const metadata: Metadata = {
  title: "Page not found",
  alternates: null,
}

export default function NotFound() {
  return (
    <PageTransition>
      <section className="flex flex-col gap-6 pt-10 pb-12 md:gap-10 md:pt-22 md:pb-22">
        <Eyebrow>404</Eyebrow>
        <Headline
          as="h1"
          text={[
            "This page doesn’t exist.",
            "The projects are one click away.",
          ]}
          className="max-w-[1000px] text-title"
        />
        <Pill
          link={{ label: "Back to the projects", href: "/" }}
          className="self-start px-[26px]"
        />
      </section>
    </PageTransition>
  )
}

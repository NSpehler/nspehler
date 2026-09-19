"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

type Props = {
  calLink: string
}

export const Booking = ({ calLink }: Props) => {
  const { resolvedTheme } = useTheme()
  const dark = resolvedTheme === "dark"

  useEffect(() => {
    if (!resolvedTheme) return
    void (async () => {
      const cal = await getCalApi()
      cal("ui", {
        theme: dark ? "dark" : "light",
        styles: { branding: { brandColor: dark ? "#ffffff" : "#0a0a0a" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [dark, resolvedTheme])

  return (
    <section
      aria-label="Book a call"
      className="mat min-h-[480px] items-start rounded-mat px-3 py-6 md:px-8 md:py-10 lg:min-h-[600px] lg:items-center"
    >
      <Cal calLink={calLink} className="w-full max-w-[1040px]" />
    </section>
  )
}

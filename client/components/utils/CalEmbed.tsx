"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

type Props = {
  calLink: string
}

export const CalEmbed = ({ calLink }: Props) => {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    if (!resolvedTheme) return
    void (async () => {
      const cal = await getCalApi()
      cal("ui", {
        theme: isDark ? "dark" : "light",
        styles: {
          branding: { brandColor: isDark ? "#ffffff" : "#000000" },
        },
        hideEventTypeDetails: false,
      })
    })()
  }, [isDark, resolvedTheme])

  return <Cal calLink={calLink} className="h-full w-full overflow-scroll" />
}

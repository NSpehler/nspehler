"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { useEffect } from "react"

type Props = {
  calLink: string
}

export const CalEmbed = ({ calLink }: Props) => {
  useEffect(() => {
    void (async () => {
      const cal = await getCalApi()
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
      })
    })()
  }, [])

  return (
    <Cal
      calLink={calLink}
      className="mt-8 h-full w-full overflow-scroll lg:mt-12"
    />
  )
}

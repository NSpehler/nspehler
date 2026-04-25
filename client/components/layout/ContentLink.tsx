"use client"

import { usePathname, useRouter } from "next/navigation"
import { ContentLink as DatoCMSContentLink } from "react-datocms"

/**
 * Enables click-to-edit overlays for DatoCMS content. When viewing draft
 * content, editors can click on any field to jump straight to the
 * corresponding editor in DatoCMS.
 *
 * Inside the Web Previews plugin's Visual mode this component also wires up
 * bidirectional navigation between the preview and the plugin's URL bar.
 *
 * @see https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews
 */
export const ContentLink = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <DatoCMSContentLink
      onNavigateTo={(path: string) => router.push(path)}
      currentPath={pathname}
      enableClickToEdit={{ hoverOnly: true }}
    />
  )
}

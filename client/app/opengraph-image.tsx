import { home } from "@/content/home"
import { site } from "@/content/site"
import { ogImage, size } from "@/lib/og"

export { size }
export const alt = `${site.name}, ${home.title}`
export const contentType = "image/png"

export default function Image() {
  return ogImage({ title: home.title, subtitle: site.description })
}

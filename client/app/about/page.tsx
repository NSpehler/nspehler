import { StructuredData } from "@/components/StructuredData"
import { about } from "@/content/about"
import { graph, pageNode } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: about.title,
  description: about.description,
  path: "/about",
})

export default function Page() {
  return (
    <>
      <StructuredData
        id="about"
        data={graph(
          pageNode("ProfilePage", "/about", about.title, about.description),
        )}
      />
      <h1 className="sr-only">{about.intro.headline}</h1>
    </>
  )
}

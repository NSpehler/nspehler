import { StructuredData } from "@/components/StructuredData"
import { CalEmbed } from "@/components/utils/CalEmbed"
import { contact } from "@/content/contact"
import { graph, pageNode } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: contact.title,
  description: contact.description,
  path: "/contact",
})

export default function Page() {
  return (
    <>
      <StructuredData
        id="contact"
        data={graph(
          pageNode(
            "ContactPage",
            "/contact",
            contact.title,
            contact.description,
          ),
        )}
      />
      <h1 className="sr-only">{contact.title}</h1>
      <CalEmbed calLink={contact.calLink} />
    </>
  )
}

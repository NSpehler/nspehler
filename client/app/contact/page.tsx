import { CalEmbed, StructuredData } from "@/components/utils"
import { contact } from "@/content/contact"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata(contact)

export default function ContactPage() {
  return (
    <>
      <StructuredData id="contact" data={contact.structuredData} />
      <h1 className="sr-only">{contact.title}</h1>
      <div className="grid gap-8 md:gap-12">
        <div className="prose prose-xl dark:prose-invert">
          {contact.content}
        </div>
        <CalEmbed calLink={contact.meetingLink} />
      </div>
    </>
  )
}

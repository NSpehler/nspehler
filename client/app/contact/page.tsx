import { PageTransition } from "@/components/motion/PageTransition"
import { Booking } from "@/components/sections/Booking"
import { StructuredData } from "@/components/StructuredData"
import { Status } from "@/components/ui/Status"
import { contact } from "@/content/contact"
import { site } from "@/content/site"
import { graph, pageNode } from "@/lib/jsonld"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: contact.title,
  description: contact.description,
  path: "/contact",
})

export default function Page() {
  const [first, second] = contact.headline
  return (
    <PageTransition>
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
      <section
        aria-label="Contact"
        className="flex flex-col gap-6 pt-10 pb-9 md:gap-10 md:pt-22 md:pb-14"
      >
        <h1 className="text-title">
          {first}
          <br className="hidden lg:inline" />{" "}
          <span className="text-soft">{second}</span>
        </h1>
        <div className="flex flex-col gap-3 text-[15px]/6 text-body lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-10">
            <Status>{site.status}</Status>
            <span>{contact.services}</span>
          </div>
          <span>
            {contact.emailPrompt}{" "}
            <a
              href={`mailto:${site.email}`}
              className="border-b border-ink font-medium text-ink"
            >
              {site.email}
            </a>
          </span>
        </div>
      </section>
      <Booking calLink={contact.calLink} />
    </PageTransition>
  )
}

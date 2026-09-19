import { person, site } from "./site"

const pdf = "/lean-marketing-for-startups.pdf"

export const research = {
  title: "Lean Marketing for Startups",
  slug: "lean-marketing-for-startups",
  description:
    "The principles of lean production originated from the Japanese automobile industry in the mid-1940s. From there, the lean movement became a revolution.",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Lean Marketing for Startups",
    alternativeHeadline:
      "A research paper on applying lean principles to startup marketing",
    description:
      "How startups can apply the lean methodology to marketing. Reveals a four-step process for successful lean marketing, born from the principles that transformed Japanese automotive manufacturing in the 1940s.",
    url: `${site.url}/lean-marketing-for-startups`,
    image: person.image,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name, url: site.url },
    datePublished: "2015-04-01",
    dateModified: "2015-04-01",
    about: ["Lean marketing", "Startup growth", "Marketing methodology"],
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: `${site.url}${pdf}`,
      encodingFormat: "application/pdf",
      name: "Lean Marketing for Startups (PDF)",
    },
  },
  content: (
    <>
      <p>
        The principles of lean production originated from the Japanese
        automobile industry in the mid-1940s. From there, the lean movement
        became a revolution. It forever transformed the way companies are
        created and managed.
      </p>
      <p>
        Today, marketers discover the power of lean, and understand its
        potential for their field of expertise. Lean marketing is a game changer
        for startups.
      </p>
      <p>
        This research uncovers the process behind this new approach, and the
        four-step process towards successful lean marketing is revealed. If
        properly applied, these steps unlock a world of opportunities for
        startups. The possibilities are endless.
      </p>
      <p>
        <a href={pdf}>Read my research paper</a>
      </p>
    </>
  ),
}

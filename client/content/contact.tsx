import { site, website } from "./site"

export const contact = {
  title: "Contact",
  slug: "contact",
  description:
    "I’m currently open to new client work. Feel free to reach out and I'll be happy to discuss!",
  /** Cal.com event used by the embedded scheduler. */
  meetingLink: "nspehler/meet",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: `${site.url}/contact`,
    description:
      "Open to new client work — web apps, marketing websites, internal tools, or growth engineering. Schedule a meeting or send a message.",
    isPartOf: website,
    mainEntity: {
      "@type": "Person",
      name: site.name,
      email: site.email,
      url: site.url,
      sameAs: ["https://x.com/nspehler"],
    },
  },
  content: (
    <>
      <p>
        I am always open to exploring new project opportunities and discussing
        how we can collaborate to bring your ideas to life.
      </p>
      <p>
        If you want to discuss a potential project together, feel free to
        schedule a meeting below or{" "}
        <a href={`mailto:${site.email}`}>send me a message</a>. I look forward
        hearing from you!
      </p>
      <p>
        You can also find me on <a href="https://x.com/NSpehler">X</a> where I
        regularly tweet about startups, entrepreneurship and technology.
      </p>
    </>
  ),
}

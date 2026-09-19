export const site = {
  name: "Nicolas Spehler",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://nspehler.com",
  email: "nicolas@spehler.com",
  description:
    "Full-stack developer building modern web applications, with a focus on automation, AI and data scraping that drive growth and efficiency.",
  /** Shown next to the name in the header. */
  location: { latitude: -8.6460004, longitude: 115.1162055 },
  twitter: "@NSpehler",
  navigation: [
    { title: "About", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Work", href: "/work" },
    { title: "Research", href: "/lean-marketing-for-startups" },
    { title: "Contact", href: "/contact" },
  ],
  social: [
    { title: "X", href: "https://x.com/NSpehler", icon: "x" },
    { title: "GitHub", href: "https://github.com/NSpehler", icon: "github" },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/nspehler",
      icon: "linkedin",
    },
  ],
} as const

export type SocialIcon = (typeof site.social)[number]["icon"]

/** schema.org Person, reused by every page's structured data. */
export const person = {
  "@type": "Person",
  name: site.name,
  givenName: "Nicolas",
  familyName: "Spehler",
  email: site.email,
  url: site.url,
  image: `${site.url}/nicolas-spehler.png`,
  jobTitle: "Full-Stack Developer & Growth Engineer",
  description: site.description,
  knowsAbout: [
    "Full-stack web development",
    "Growth engineering",
    "Marketing automation",
    "AI",
    "Data scraping",
    "Lean marketing",
  ],
  sameAs: site.social.map(({ href }) => href),
}

export const website = {
  "@type": "WebSite",
  name: site.name,
  url: site.url,
}

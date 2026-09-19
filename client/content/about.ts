import type { AboutContent } from "./types"

export const about = {
  title: "About",
  description:
    "Full-stack developer with 15 years of experience, from leading Growth Engineering teams at Payfit and Alma to building products for Back Market, Intigriti, goalGetr, Nucase and PaperDrop.",
  intro: {
    headline:
      "Hey! I’m Nicolas, a full-stack developer building modern web and mobile applications, with a focus on automation and AI.",
    body: [
      "For the past 15 years I’ve helped companies scale through technology and automation: leading Growth Engineering teams at Payfit and Alma, then as a freelance engineer for Back Market, Intigriti and clients like goalGetr, Nucase and PaperDrop. I’m also building ",
      { label: "Analog", href: "/projects/analog" },
      ", an iPhone app for vinyl collectors.",
    ],
  },
  services: [
    {
      title: "Web apps",
      body: "Products and internal tools, from the first prototype to production.",
      examples: "Nucase, PaperDrop, goalGetr",
    },
    {
      title: "Mobile apps",
      body: "iPhone apps from idea to App Store, with over a dozen published and 400,000+ downloads.",
      examples: "Analog, goalGetr, L&S",
    },
    {
      title: "Marketing websites",
      body: "Fast, modular sites on a headless CMS that marketing teams can run on their own.",
      examples: "Payfit, Intigriti, Alma, Smartvatten",
    },
    {
      title: "Automation & AI",
      body: "Lead generation, internal tools and AI workflows, including 20+ tools built at Payfit.",
      examples: "Payfit, Dolead, Alma",
    },
  ],
  experience: {
    range: "2012–2026",
    rows: [
      {
        year: 2024,
        name: "Intigriti",
        description: "Marketing website and blog, built from the ground up",
        role: "Freelance full-stack engineer",
      },
      {
        year: 2023,
        name: "Back Market Pro",
        description:
          "B2B storefront, custom Stripe checkout, 100+ seller catalog",
        role: "Freelance full-stack engineer",
      },
      {
        year: 2022,
        name: "Alma",
        description: "Lead generation at scale, AI automation and the website",
        role: "Growth Engineering lead",
      },
      {
        year: 2021,
        name: "Dolead",
        description: "Google Ads copy generation with GPT-3",
        role: "Automation & AI",
      },
      {
        year: 2019,
        name: "Payfit",
        description: "Atlas for lead generation and 20+ internal tools",
        role: "Growth Engineering lead",
      },
      {
        year: 2015,
        name: "INSEEC",
        description: "Digital marketing courses and workshops",
        role: "Teaching",
      },
      {
        year: 2012,
        name: "L&S",
        description: "Websites and iOS apps for 50+ companies",
        role: "Web and mobile agency",
      },
    ],
  },
  companies: [
    "Payfit",
    "Alma",
    "Intigriti",
    "Back Market",
    "Smartvatten",
    "Dolead",
    "Lancôme",
    "Nespresso",
    "Groupon",
    "ENGIE",
    "EDF",
    "TomTom",
    "DHL",
    "Bouygues Telecom",
  ],
  research: {
    eyebrow: "Research paper · 2015",
    title: "Lean Marketing for Startups",
    body: "How startups can apply lean principles to marketing, with a four-step process born from the methods that transformed Japanese car manufacturing.",
    cta: "Read the paper (PDF)",
  },
} satisfies AboutContent

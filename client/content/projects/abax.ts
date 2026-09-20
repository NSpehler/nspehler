import blog from "@/images/projects/abax/blog.webp"
import brandPosters from "@/images/projects/abax/brand-posters.webp"
import form from "@/images/projects/abax/form.webp"
import helpCenter from "@/images/projects/abax/help-center.webp"
import helpSearch from "@/images/projects/abax/help-search.webp"
import home from "@/images/projects/abax/home.webp"
import installationGuides from "@/images/projects/abax/installation-guides.webp"
import insurance from "@/images/projects/abax/insurance.webp"
import product from "@/images/projects/abax/product.webp"
import solutions from "@/images/projects/abax/solutions.webp"
import userGuides from "@/images/projects/abax/user-guides.webp"

import type { Project } from "../types"

export const abax = {
  slug: "abax",
  name: "ABAX",
  year: "2023–2025",
  subtitle:
    "ABAX helps businesses across Europe keep track of their vehicles, machinery and tools",
  facts: [
    { label: "Type", value: "Website and Help Center" },
    { label: "Tech stack", value: "Next.js, DatoCMS, Algolia" },
    {
      label: "Website",
      links: [{ label: "abax.com", href: "https://www.abax.com" }],
    },
  ],
  card: {
    image: {
      src: home,
      alt: "abax.com home page: Insights that drive impactful decisions",
    },
    frame: "web",
    description:
      "Telematics for construction and service fleets across Europe, tracking vehicles, machinery and tools",
    type: "Marketing website",
    stack: ["Next.js", "DatoCMS", "Algolia"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "abax.com home page: Insights that drive impactful decisions",
      caption: "Home page",
    },
  },
  overview: [
    "ABAX is a Norwegian telematics company. Its trackers and software follow vehicles, machinery and tools for businesses across Europe, from construction sites to service fleets.",
    "From 2023 to 2025 I was the developer behind their websites: abax.com in twelve languages, the Help Center, and the smaller sites around them. Canoe designed the brand and the pages, and I built everything behind them, from the reusable sections to the forms that feed their pipeline.",
  ],
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Website",
      headline: ["One site for twelve markets,", "built from fifty sections."],
      body: "abax.com runs in twelve languages across Europe, from products and solutions to pricing, insurance, customer stories and the blog. Every page is assembled in DatoCMS from about fifty sections, and editors see each change on the real page before it goes live.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: solutions,
          alt: "Smart Mobility solutions page: save time, money and resources",
          caption: "Solutions",
        },
        {
          src: insurance,
          alt: "Fleet insurance page: ABAX enables usage based insurance premiums",
          caption: "Fleet insurance",
        },
      ],
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: product,
          alt: "Product page: what is included, with reports, route overview and alerts next to the app",
          caption: "What a product includes",
        },
        {
          src: blog,
          alt: "Blog home page with topic filters and search",
          caption: "Blog, by topic",
        },
      ],
    },
    {
      type: "chapter",
      number: 2,
      name: "Form builder",
      headline: ["Multi-step forms,", "assembled in the CMS."],
      body: "Every campaign wanted its own form, so I built a form builder in DatoCMS. Marketing adds the steps, picks the field types, writes the validation and hides the fields it wants to fill in itself. Each step is checked in the browser and again on the server, reports its own event, and the finished lead lands in HubSpot with its consent and campaign data.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: form,
        alt: "A four-step price request: which ABAX services are you looking for, with the steps numbered above",
        caption: "A price request, four steps long",
      },
    },
    {
      type: "chapter",
      number: 3,
      name: "Help Center",
      headline: [
        "Installation and user guides,",
        "searchable in every language.",
      ],
      body: "The Help Center is its own site on the same stack: installation guides with a video for each device, user guides for every part of the platform, and one search bar over both. Support writes the guides in DatoCMS, in the same project as the website.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: helpCenter,
        alt: "ABAX Help Center: installation guides with videos, and step-by-step user guides",
        caption: "Help Center",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: installationGuides,
          alt: "Installation guides, grouped by vehicle type and by equipment",
          caption: "Installation guides",
        },
        {
          src: userGuides,
          alt: "User guides, one for each part of the platform, from ABAX MINI to single sign-on",
          caption: "User guides",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: helpSearch,
        alt: "Searching the Help Center: one query returns user guides and installation guides together",
        caption: "Search across the Help Center",
      },
    },
    {
      type: "cards",
      heading: "What I built",
      columns: 2,
      items: [
        {
          title: "Fifty sections",
          body: "Heroes, feature grids, pricing tables, FAQs and customer stories: every page comes out of the same library.",
        },
        {
          title: "Twelve languages",
          body: "One codebase serves twelve European markets, each with its own content, routes and metadata.",
        },
        {
          title: "Real-time previews",
          body: "Editors see each change on the real page as they type, before anything is published.",
        },
        {
          title: "One search bar",
          body: "One search across the whole site, so products, articles and Help Center pages come back together, in every language.",
        },
      ],
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: brandPosters,
        alt: "Three ABAX brand posters on a concrete wall, with a person walking past",
        caption: [
          "Brand and design by ",
          { label: "Canoe", href: "https://canoe.no" },
        ],
      },
    },
    {
      type: "ledger",
      rows: [
        { label: "Framework", value: "Next.js, React" },
        { label: "Content", value: "DatoCMS, with GraphQL" },
        { label: "Search", value: "Algolia" },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  ],
} satisfies Project

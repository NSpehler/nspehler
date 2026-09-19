import article from "@/images/projects/intigriti/article.webp"
import blog from "@/images/projects/intigriti/blog.webp"
import crowdrecon from "@/images/projects/intigriti/crowdrecon.webp"
import customerStories from "@/images/projects/intigriti/customer-stories.webp"
import home from "@/images/projects/intigriti/home.webp"
import pricing from "@/images/projects/intigriti/pricing.webp"
import programs from "@/images/projects/intigriti/programs.webp"

import type { Project } from "../types"

export const intigriti = {
  slug: "intigriti",
  name: "Intigriti",
  year: "Since 2024",
  subtitle:
    "Intigriti helps companies find vulnerabilities by rewarding the ethical hackers who report them",
  facts: [
    { label: "Type", value: "Marketing website and blog" },
    { label: "Tech stack", value: "Next.js, DatoCMS, Algolia, Stencil.js" },
    {
      label: "Website",
      links: [{ label: "intigriti.com", href: "https://www.intigriti.com" }],
    },
  ],
  card: {
    image: {
      src: home,
      alt: "intigriti.com home page: global crowdsourced security provider",
    },
    frame: "web",
    description:
      "Europe’s leading bug bounty platform, where companies reward ethical hackers for finding vulnerabilities",
    type: "Marketing website",
    stack: ["Next.js", "DatoCMS", "Algolia"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "intigriti.com home page: global crowdsourced security provider",
      caption: "Home page",
    },
  },
  overview: [
    "Intigriti is Europe’s leading bug bounty platform. Companies work with a global community of ethical hackers, who find and report vulnerabilities in exchange for rewards.",
    "Since 2024, I’ve built and maintained Intigriti’s marketing website and blog as a freelance full-stack engineer, with a focus on clean, maintainable code and a CMS the marketing team can run on its own.",
  ],
  blocks: [
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: crowdrecon,
          alt: "CrowdRecon product page",
          caption: "CrowdRecon",
        },
        {
          src: programs,
          alt: "Public bug bounty programs directory",
          caption: "Bug bounty programs",
        },
      ],
    },
    {
      type: "cards",
      heading: "What I built",
      columns: 3,
      items: [
        {
          title: "A modular marketing site",
          body: "Next.js and DatoCMS, built from reusable blocks so pages stay consistent and new ones ship faster.",
        },
        {
          title: "Blog migration and search",
          body: "Moved the company blog to Next.js and added Algolia search, making content far easier to discover.",
        },
        {
          title: "One header, two products",
          body: "Stencil.js Web Components give the website and the Intigriti app the same header and footer.",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: pricing,
        alt: "Intigriti pricing page: Simple and transparent",
        caption: "Pricing",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        { src: blog, alt: "Researchers blog", caption: "Researchers blog" },
        {
          src: article,
          alt: "Blog article: Exploiting web cache poisoning vulnerabilities",
          caption: "Blog article",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: customerStories,
        alt: "Resources: customer stories from Yahoo, Showpad and Intel",
        caption: "Customer stories",
      },
    },
    {
      type: "ledger",
      rows: [
        { label: "Website", value: "Next.js, React" },
        {
          label: "Content",
          value: "DatoCMS, with a library of reusable blocks",
        },
        { label: "Search", value: "Algolia" },
        {
          label: "Components",
          value: "Stencil.js Web Components, shared with the Intigriti app",
        },
      ],
    },
  ],
} satisfies Project

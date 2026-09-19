import ai from "@/images/projects/payfit/ai.webp"
import article from "@/images/projects/payfit/article.webp"
import blog from "@/images/projects/payfit/blog.webp"
import brandBoard from "@/images/projects/payfit/brand-board.webp"
import filmPoster from "@/images/projects/payfit/film-poster.webp"
import home from "@/images/projects/payfit/home.webp"
import identity from "@/images/projects/payfit/identity.webp"
import pricing from "@/images/projects/payfit/pricing.webp"
import simulator from "@/images/projects/payfit/simulator.webp"
import support from "@/images/projects/payfit/support.webp"
import why from "@/images/projects/payfit/why.webp"

import type { Project } from "../types"

export const payfit = {
  slug: "payfit",
  name: "Payfit",
  year: "2026",
  subtitle:
    "Payfit helps small businesses run payroll and HR, from payslips to leave and expenses",
  facts: [
    { label: "Type", value: "Marketing website" },
    { label: "Tech stack", value: "Astro, DatoCMS, AWS Amplify" },
    {
      label: "Website",
      links: [{ label: "payfit.com", href: "https://payfit.com" }],
    },
  ],
  card: {
    image: {
      src: home,
      alt: "payfit.com home page: Payroll and HR, expert support when you need it",
    },
    frame: "web",
    description:
      "Payroll and HR software used by more than 22,000 businesses in France, Spain and the UK",
    type: "Marketing website",
    stack: ["Astro", "DatoCMS", "AWS Amplify"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "payfit.com home page: Payroll and HR, expert support when you need it",
      caption: "Home page",
    },
  },
  overview: [
    "After ten years, Payfit had grown from payroll software into a full payroll and HR service, used by more than 22,000 businesses in France, Spain and the UK. In 2026 it relaunched with a new identity, and a new website to match.",
    "I first worked with Payfit in 2019, leading the Growth Engineering team. For the relaunch, I was part of the team that built the new website with Astro and DatoCMS.",
  ],
  video: {
    src: "https://vvcwfr2nfw2kpgef.public.blob.vercel-storage.com/films/payfit-brand.mp4",
    poster: {
      src: filmPoster,
      alt: "The Payfit brand film: All your people, over a man talking at a table",
    },
    title: "the Payfit brand film",
    duration: "2 minutes",
  },
  blocks: [
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: support,
          alt: "Support page: Payroll that you own, with expert support at every step",
          caption: "Support page",
        },
        {
          src: identity,
          alt: "New identity page: Payfit is evolving, a new identity to help businesses move forward with confidence",
          caption: "New identity",
        },
      ],
    },
    {
      type: "cards",
      heading: "What we built",
      columns: 3,
      items: [
        {
          title: "120+ new components",
          body: "Built for the new identity, from hero sections and key figures to timelines, testimonials and FAQs.",
        },
        {
          title: "Real-time previews",
          body: "Editors see each change on the real page as they type, before anything is published.",
        },
        {
          title: "Visual Editing",
          body: "Editors click any text or image on the page to jump straight to the field that edits it in DatoCMS.",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: ai,
        alt: "Payfit AI page: Your payroll and HR companion, always available",
        caption: "Payfit AI",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: why,
          alt: "Why Payfit: compliant payroll, dedicated experts and one payroll and HR service",
          caption: "Why Payfit",
        },
        {
          src: simulator,
          alt: "Savings simulator: configure a plan and team size, then see the yearly savings and the hours saved per task",
          caption: "Savings simulator",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: pricing,
        alt: "Pricing: compare the Payroll, Advanced payroll and HR+ plans, with totals for the team size",
        caption: "Pricing",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: blog,
          alt: "Blog home page with search and the Managing Payroll topic",
          caption: "Blog",
        },
        {
          src: article,
          alt: "Blog article: Navigating the Maze of Modern Hiring, a guide to the recruitment process in the UK",
          caption: "Blog article",
        },
      ],
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: brandBoard,
        alt: "Payfit’s new identity: the Heartbreak Eighties typeface, neutral, yellow, pink and blue colors, team photography and a line illustration",
        caption: "Type and colors of the new identity",
      },
    },
    {
      type: "ledger",
      rows: [
        { label: "Website", value: "Astro, React" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Content", value: "DatoCMS, with a shared library of blocks" },
        { label: "Languages", value: "English, French and Spanish" },
        { label: "Hosting", value: "AWS Amplify" },
        { label: "Infrastructure", value: "Terraform" },
        { label: "CI", value: "CircleCI" },
      ],
    },
  ],
} satisfies Project

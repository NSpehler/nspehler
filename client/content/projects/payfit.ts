import ai from "@/images/projects/payfit/ai.webp"
import article from "@/images/projects/payfit/article.webp"
import blog from "@/images/projects/payfit/blog.webp"
import brandBoard from "@/images/projects/payfit/brand-board.webp"
import filmPoster from "@/images/projects/payfit/film-poster.webp"
import home from "@/images/projects/payfit/home.webp"
import payslipImage from "@/images/projects/payfit/payslip-generator-image.webp"
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
    { label: "Type", value: "Website and growth tools" },
    { label: "Tech stack", value: "Astro, DatoCMS, Satori, AWS Amplify" },
    {
      label: "Website",
      links: [{ label: "payfit.com", href: "https://payfit.com" }],
    },
  ],
  card: {
    image: {
      src: home,
      alt: "payfit.com home page: payroll, admin and HR handled by Payfit experts, beside a customer portrait and quote",
    },
    frame: "web",
    description:
      "Payroll and HR software used by more than 22,000 businesses in France, Spain and the UK",
    type: "Website and growth tools",
    stack: ["Astro", "DatoCMS", "AWS Amplify"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "payfit.com home page: payroll, admin and HR handled by Payfit experts, beside a customer portrait and quote",
      caption: "Home page",
    },
  },
  overview: [
    "After ten years, Payfit had grown from payroll software into a full payroll and HR service, used by more than 22,000 businesses in France, Spain and the UK. In 2026 it relaunched with a new identity, and rebuilt payfit.com around it.",
    "I first worked with Payfit in 2019, leading the Growth Engineering team. For the relaunch, I was part of the team that built the new website with Astro and DatoCMS.",
  ],
  video: {
    src: "https://vvcwfr2nfw2kpgef.public.blob.vercel-storage.com/videos/payfit-brand.mp4",
    poster: {
      src: filmPoster,
      alt: "The Payfit brand film: two men talking at a table in a restaurant",
    },
    title: "the Payfit brand film",
    duration: "2 minutes",
  },
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Website",
      headline: ["Every page from reusable blocks,", "in three countries."],
      body: "The team builds the site in DatoCMS from about 120 reusable blocks and 20 page models, so a landing page, a pillar page and a collective agreement page are all assembled the same way. One codebase serves France, Spain and the UK, each in its own language.",
    },
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
          src: why,
          alt: "Why Payfit: compliant payroll, dedicated experts and one payroll and HR service",
          caption: "Why Payfit",
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
        caption: [
          "Type and colors of the new identity, by ",
          { label: "KLIMB", href: "https://www.goklimb.com" },
        ],
      },
    },
    {
      type: "chapter",
      number: 2,
      name: "Growth tools",
      headline: [
        "Tools beside the pages,",
        "from a savings calculator to the payslip generator.",
      ],
      body: "Beside the content pages, I worked on the tools the growth team runs on: the savings simulator, the payroll calculators, the demo forms that feed HubSpot, and a customized payslip for each sales email.",
    },
    {
      type: "figures",
      frame: "tall",
      shots: [
        {
          src: simulator,
          alt: "Savings simulator: configure a plan and team size, then see the yearly savings and the hours saved per task",
          caption: "Savings simulator",
        },
        {
          src: payslipImage,
          alt: "A generated French payslip greeting Jérémy, with the September 2026 pay, leave balances and a chart of the taxes",
          caption: "A payslip, personalized for each prospect",
        },
      ],
    },
    {
      type: "ledger",
      rows: [
        { label: "Website", value: "Astro, TypeScript" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Content", value: "DatoCMS, with GraphQL" },
        { label: "Images", value: "Satori and resvg" },
        { label: "Hosting", value: "AWS Amplify, CloudFront, Lambda@Edge" },
        { label: "Infrastructure", value: "Terraform, with Spacelift" },
        { label: "CI", value: "CircleCI, Nx, Yarn" },
        { label: "Tests", value: "Vitest, Playwright" },
      ],
    },
  ],
} satisfies Project

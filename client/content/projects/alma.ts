import article from "@/images/projects/alma/article.webp"
import blog from "@/images/projects/alma/blog.webp"
import consumer from "@/images/projects/alma/consumer.webp"
import demo from "@/images/projects/alma/demo.webp"
import home from "@/images/projects/alma/home.webp"
import product from "@/images/projects/alma/product.webp"
import steps from "@/images/projects/alma/steps.webp"

import type { Project } from "../types"

export const alma = {
  slug: "alma",
  name: "Alma",
  year: "2022–2024",
  subtitle:
    "Alma helps merchants offer installment payments and get paid right away",
  facts: [
    { label: "Type", value: "Website and growth engineering" },
    { label: "Tech stack", value: "Next.js, DatoCMS, Python, LLMs" },
    {
      label: "Website",
      links: [{ label: "almapay.com", href: "https://almapay.com" }],
    },
  ],
  card: {
    image: {
      src: product,
      alt: "almapay.com product page: Boost your sales with payment in installments",
    },
    frame: "web",
    description:
      "Installment payments for more than 25,000 merchants across Europe, online and in store",
    type: "Marketing website",
    stack: ["Next.js", "DatoCMS", "Tailwind CSS"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "almapay.com home page: flexible, guaranteed payment in installments",
      caption: "Home page",
    },
  },
  overview: [
    "Alma is a French fintech that brings installment payments to more than 25,000 merchants across Europe, online and in store.",
    "I led the Growth Engineering team for over two years, from the marketing website to the tools that bring in new merchants and hand them to sales.",
  ],
  blocks: [
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: product,
          alt: "Product page: Boost your sales with payment in installments",
          caption: "Product page",
        },
        {
          src: steps,
          alt: "A seamless buying experience: recap the repayment schedule, verify identity, verify solvency, then accept the contract and pay",
          caption: "The buying experience, in four steps",
        },
      ],
    },
    {
      type: "cards",
      heading: "What we built",
      columns: 2,
      items: [
        {
          title: "A website in ten locales",
          body: "Rebuilt with Next.js and DatoCMS, with one site for eight countries, from France and Spain to Germany and the Netherlands.",
        },
        {
          title: "Calculators for merchants",
          body: "Pricing, ROI and installment calculators, including printable versions with a QR code for their shops.",
        },
        {
          title: "Forms that feed sales",
          body: "Demo requests and sign-ups tracked in Segment and sent to HubSpot, along with where each lead came from.",
        },
        {
          title: "A merchant demo website",
          body: "A demo store where visitors at events like Paris Retail Week and E-Show Madrid could try paying in installments with Alma.",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: consumer,
        alt: "Consumer page for the Alma card: One card. Three times the control.",
        caption: "Consumer page",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: blog,
          alt: "Blog: Reinventing the relationship between merchants and consumers in Europe",
          caption: "Blog",
        },
        {
          src: article,
          alt: "Blog article: Reinventing the relationship between merchants and consumers in Europe",
          caption: "Blog article",
        },
      ],
    },
    {
      type: "chapter",
      name: "Lead generation",
      headline: ["Leads qualified by AI,", "then sent to sales."],
      body: "Beyond the website, we built the tools that keep the sales pipeline full. New leads are enriched with company data, and an LLM reads their website to tell whether it’s an online store, what it sells and whether it already offers installments. Qualified leads reach HubSpot with a score, and conversion values based on past deals go back to the ad platforms.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: demo,
        alt: "Request a demo: a form for contact and company details, next to Alma’s pricing highlights",
        caption: "Demo request",
      },
    },
    {
      type: "ledger",
      rows: [
        {
          label: "Website",
          value: "Next.js, React, Tailwind CSS, Framer Motion",
        },
        { label: "Content", value: "DatoCMS, with a large section library" },
        { label: "Search", value: "Algolia" },
        {
          label: "Growth tools",
          value: "Python, AWS Lambda, Serverless Framework",
        },
        { label: "AI", value: "LLMs, through the OpenAI API" },
        { label: "Data and CRM", value: "Segment, HubSpot, n8n, Retool" },
        {
          label: "Infrastructure",
          value: "Vercel, AWS, Google Cloud, Cloudflare, Terraform",
        },
      ],
    },
  ],
} satisfies Project

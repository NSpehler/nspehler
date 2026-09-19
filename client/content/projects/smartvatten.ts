import advisorAfter from "@/images/projects/smartvatten/advisor-after.webp"
import advisorCompany from "@/images/projects/smartvatten/advisor-company.webp"
import advisorCurrent from "@/images/projects/smartvatten/advisor-current.webp"
import advisorData from "@/images/projects/smartvatten/advisor-data.webp"
import advisorPlans from "@/images/projects/smartvatten/advisor-plans.webp"
import advisorPropertyTypes from "@/images/projects/smartvatten/advisor-property-types.webp"
import article from "@/images/projects/smartvatten/article.webp"
import caseStudies from "@/images/projects/smartvatten/case-studies.webp"
import efficiency from "@/images/projects/smartvatten/efficiency.webp"
import home from "@/images/projects/smartvatten/home.webp"
import hub from "@/images/projects/smartvatten/hub.webp"

import type { Project } from "../types"

export const smartvatten = {
  slug: "smartvatten",
  name: "Smartvatten",
  year: "2025–2026",
  subtitle:
    "Smartvatten helps property owners and water utilities catch leaks early and use less water",
  facts: [
    { label: "Type", value: "Website and sales tool" },
    { label: "Tech stack", value: "Next.js, DatoCMS, MongoDB" },
    {
      label: "Website",
      links: [{ label: "smartvatten.com", href: "https://smartvatten.com" }],
    },
  ],
  card: {
    image: {
      src: home,
      alt: "smartvatten.com home page: Stop guessing. Start controlling.",
    },
    frame: "web",
    description:
      "Water monitoring for property owners and utilities, to catch leaks early and use less water",
    type: "Marketing website",
    stack: ["Next.js", "DatoCMS"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: home,
      alt: "smartvatten.com home page: Stop guessing. Start controlling.",
      caption: "Home page",
    },
  },
  overview: [
    "Smartvatten is a European water intelligence platform for property portfolios and utilities. Its meters, sensors and software show where water goes, so leaks are caught early and consumption comes down.",
    "In 2025 and 2026, I built two products for their teams: the Solutions Advisor, which turns a first sales meeting into a guided assessment, and the new smartvatten.com, which presents the platform to property owners and utilities in six languages.",
  ],
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Solutions Advisor",
      headline: ["A first sales meeting,", "turned into a guided tool."],
      body: "The idea: every first meeting follows the same path, whoever runs it. The Solutions Advisor takes a prospect through the conversation on screen, from who Smartvatten is to what water costs them today, and ends with a tailored plan. A standalone version does the same online and sends the results to sales as a lead.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: advisorCompany,
        alt: "Who is Smartvatten: offices across Northern Europe, with 30,000+ buildings and apartments and 50,000+ leaks detected",
        caption: "Who Smartvatten is, in numbers",
      },
    },
    {
      type: "chapter",
      number: 2,
      name: "Questions",
      headline: [
        "The questions follow SPIN Selling,",
        "from their situation to what they need.",
      ],
      body: "The assessment follows the four steps of SPIN Selling: the situation (portfolio, property types, how data is gathered), the problems (leaks and how they are found), their implications (the yearly cost of repairs) and the need-payoff (the savings they are after). By the time any product appears, prospects have described the problem and its cost in their own words. Each answer comes with a fact from Smartvatten’s own data.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: advisorPropertyTypes,
          alt: "Property type: the share of offices, retail and residential in the portfolio, with a pie chart",
          caption: "Property types in the portfolio",
        },
        {
          src: advisorData,
          alt: "How do you gather your water consumption data, with a fact about manual readings next to the answers",
          caption: "How consumption data is gathered",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Results",
      headline: [
        "What water costs them today,",
        "and what they would save with Smartvatten.",
      ],
      body: "The answers become a map of their portfolio today: manual readings, leaks found late, and what that costs in water, energy and CO₂. A second view connects every property to Smartvatten and puts the savings next to today’s figures.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: advisorCurrent,
          alt: "Current state: properties with manual readings and leaks found late, with today’s water, energy and cost figures",
          caption: "Current state",
        },
        {
          src: advisorAfter,
          alt: "With Smartvatten: the same properties connected to Smartvatten, with the savings next to today’s figures",
          caption: "With Smartvatten",
        },
      ],
    },
    {
      type: "chapter",
      number: 4,
      name: "Proposal",
      headline: ["A plan for their portfolio,", "before the meeting ends."],
      body: "The advisor recommends a plan and the right module for each property type. Every assessment is saved, so the team can pick up the conversation exactly where it ended.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: advisorPlans,
        alt: "Our tailor-made plan for your portfolio: Self-service, Business and Total care",
        caption: "Plans tailored to the portfolio",
      },
    },
    {
      type: "chapter",
      number: 5,
      name: "Website",
      headline: ["One website for the whole platform,", "in six languages."],
      body: "In 2026, I rebuilt smartvatten.com with Next.js and DatoCMS: product pages like the HUB, a page for each solution, case studies filtered by industry and a blog with articles for every audience.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: hub,
          alt: "Smartvatten HUB: Where water data becomes intelligence",
          caption: "Smartvatten HUB",
        },
        {
          src: efficiency,
          alt: "Improve water efficiency: reduce water waste and lower operating costs",
          caption: "Water efficiency",
        },
      ],
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: caseStudies,
          alt: "Case studies, filtered by industry: investors, logistics, offices, hospitality, retail and more",
          caption: "Case studies",
        },
        {
          src: article,
          alt: "Blog article: a sustainability manager’s guide to reducing CO₂ emissions from water use",
          caption: "Blog article",
        },
      ],
    },
    {
      type: "cards",
      heading: "What I built",
      columns: 2,
      items: [
        {
          title: "A library of about 40 reusable sections",
          body: "Heroes, feature grids, pricing tables, FAQs, testimonials and forms, so the team can build a landing page on its own.",
        },
        {
          title: "Real-time previews",
          body: "Editors see each change on the real page as they type, before anything is published.",
        },
        {
          title: "Visual Editing",
          body: "Editors click any text or image on the page to jump straight to the field that edits it in DatoCMS.",
        },
        {
          title: "Forms straight into Salesforce",
          body: "Every form sends its leads to Salesforce, including a step-by-step price request form.",
        },
      ],
    },
    {
      type: "ledger",
      rows: [
        { label: "Framework", value: "Next.js, React, TypeScript" },
        { label: "Styling", value: "Tailwind CSS, Motion, Lottie" },
        { label: "Content", value: "DatoCMS, with GraphQL" },
        { label: "Data", value: "MongoDB" },
        { label: "Charts", value: "Recharts, React Flow" },
        { label: "Forms", value: "Salesforce, HubSpot, Cloudflare Turnstile" },
        {
          label: "Languages",
          value: "English, Norwegian, Swedish, Finnish, Dutch and German",
        },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  ],
} satisfies Project

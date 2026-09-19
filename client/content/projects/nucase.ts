import addTasks from "@/images/projects/nucase/add-tasks.webp"
import ai from "@/images/projects/nucase/ai.webp"
import brand from "@/images/projects/nucase/brand.webp"
import chooseProject from "@/images/projects/nucase/choose-project.webp"
import jobs from "@/images/projects/nucase/jobs.webp"
import phones from "@/images/projects/nucase/phones.webp"
import screens from "@/images/projects/nucase/screens.webp"

import type { Project } from "../types"

export const nucase = {
  slug: "nucase",
  name: "Nucase",
  year: "2024–2026",
  subtitle:
    "Nucase helps homeowners price a renovation from home and get matched with a contractor",
  facts: [
    { label: "Type", value: "Web app" },
    { label: "Tech stack", value: "Next.js, DatoCMS, MongoDB, Clerk" },
    {
      label: "Website",
      links: [{ label: "app.nucase.no", href: "https://app.nucase.no" }],
    },
  ],
  card: {
    image: {
      src: screens,
      alt: "Nucase app: partner sign-up, task estimate and room picker on three phones",
    },
    frame: "phones",
    description:
      "Home renovation platform in Norway, with instant estimates and vetted contractors",
    type: "Web app",
    stack: ["Next.js", "DatoCMS", "MongoDB"],
  },
  lead: {
    type: "figure",
    frame: "bleed",
    shot: {
      src: phones,
      alt: "Nucase on three phones: choosing the areas to renovate, the price estimate by area and the finished report, with the beaver mascots",
      caption: "Areas, price estimate and report, on mobile",
    },
  },
  overview: [
    "Nucase takes the surprises out of planning a home renovation. Homeowners describe their home and the work they want done, get an instant estimate and a detailed report, and their project goes straight to vetted contractors.",
    "SmplCo designed the product and the brand. I built the platform end to end, from the homeowner flow and the AI assistant to the contractor dashboard and the admin tools.",
  ],
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Estimate",
      headline: [
        "Choose the rooms and the work.",
        "The price updates as you go.",
      ],
      body: "Homeowners start with their address and type of home, then pick the areas to renovate from illustrated cards, indoors and out. For each area they choose the work and the materials, and the estimate updates instantly, priced per item, per square meter or per meter.",
    },
    {
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: chooseProject,
          alt: "Choose a project, then the sections to renovate: roof, extension, cladding, foundations and entrance",
          caption: "Choose a project and the areas to renovate",
        },
        {
          src: addTasks,
          alt: "Indoor areas like the kitchen, bathroom and basement, with the work to do in each",
          caption: "Add the work for each area",
        },
      ],
    },
    {
      type: "chapter",
      number: 2,
      name: "AI assistant",
      headline: [
        "Describe the project.",
        "The assistant fills in the estimate.",
      ],
      body: "Homeowners who’d rather explain it in their own words can chat with the Nucase assistant. It adds the right areas, tasks and materials to the estimate and asks for approval before changing anything. The Nucase team decides which tasks it can suggest.",
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: ai,
        alt: "The Nucase assistant, introduced by the beaver mascot",
        caption: "AI assistant",
      },
    },
    {
      type: "chapter",
      number: 3,
      name: "Contractors",
      headline: ["Every request,", "sent to the right contractor."],
      body: "Contractors join Nucase as partners and get their own dashboard with the jobs assigned to them, where they update each job’s status and invite their team. Homeowners who arrive through a contractor’s invite link are assigned to that contractor automatically.",
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: jobs,
        alt: "Your jobs: an entrance renovation of 30 m³ with its price",
        caption: "Your jobs, in the contractor dashboard",
      },
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: brand,
        alt: "The Nucase wordmark with its beaver mascots",
        caption: [
          "Brand and illustrations by ",
          { label: "SmplCo", href: "https://smpl.as" },
        ],
      },
    },
    {
      type: "cards",
      heading: "Behind the scenes",
      columns: 3,
      items: [
        {
          title: "Reports that stay accurate",
          body: "Each estimate becomes a PDF report emailed to the homeowner, and it still renders exactly the same after prices change.",
        },
        {
          title: "An admin console",
          body: "The Nucase team follows every project on a timeline, assigns contractors and exports the full task catalog.",
        },
        {
          title: "A catalog the team runs",
          body: "Areas, tasks, prices and illustrations live in DatoCMS, so the catalog changes without a developer.",
        },
      ],
    },
    {
      type: "ledger",
      rows: [
        { label: "Framework", value: "Next.js, React, TypeScript" },
        { label: "Styling", value: "Tailwind CSS, Headless UI" },
        { label: "Content", value: "DatoCMS, with GraphQL" },
        { label: "Data and files", value: "MongoDB, Vercel Blob" },
        {
          label: "Accounts",
          value: "Clerk, with Organizations for contractors",
        },
        { label: "AI", value: "Vercel AI SDK, OpenAI" },
        {
          label: "Reports and emails",
          value: "React Email, Resend, react-print, DocRaptor",
        },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  ],
} satisfies Project

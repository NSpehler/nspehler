import addTasks from "@/images/projects/nucase/add-tasks.webp"
import ai from "@/images/projects/nucase/ai.webp"
import brand from "@/images/projects/nucase/brand.webp"
import building from "@/images/projects/nucase/building.webp"
import chooseProject from "@/images/projects/nucase/choose-project.webp"
import filmPoster from "@/images/projects/nucase/film-poster.webp"
import house from "@/images/projects/nucase/house.webp"
import jobs from "@/images/projects/nucase/jobs.webp"
import phones from "@/images/projects/nucase/phones.webp"
import relax from "@/images/projects/nucase/relax.webp"
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
      src: screens,
      alt: "Nucase on three phones: the partner sign-up, the work to add for an area with its price, and the areas of a home",
      caption: "Pricing a renovation from your phone",
    },
  },
  overview: [
    "Nucase takes the surprises out of planning a home renovation. Homeowners describe their home and the work they want done, get an instant estimate and a detailed report, and their project goes straight to vetted contractors.",
    "SmplCo designed the product and the brand. I built the platform end to end, from the homeowner flow and the AI assistant to the contractor dashboard and the admin tools.",
  ],
  video: {
    src: "https://vvcwfr2nfw2kpgef.public.blob.vercel-storage.com/videos/nucase-hVXWavgb97nz12jzH11fVk8wn6EYql.mp4",
    poster: {
      src: filmPoster,
      alt: "The Nucase film: the wordmark over a kitchen, surrounded by renovation tasks",
    },
    title: "the Nucase film",
    duration: "1 minute",
  },
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
      type: "figure",
      frame: "bleed",
      shot: {
        src: chooseProject,
        alt: "Choose a project, then the sections to renovate: roof, extension, cladding, foundations and entrance",
        caption: "Picking the areas to renovate",
      },
    },
    {
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: addTasks,
          alt: "Indoor areas like the kitchen, bathroom and basement, with the work to do in each",
          caption: "Adding the work for each room",
        },
        {
          src: house,
          alt: "An illustrated cutaway of a home, room by room, with a beaver mascot on each floor",
          caption: "Every room of the home, ready to renovate",
        },
      ],
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: phones,
        alt: "Nucase on three phones: choosing the areas to renovate, the price estimate by area and the finished report, with the beaver mascots",
        caption: "From the first room to the final report",
      },
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
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: ai,
          alt: "The Nucase assistant, introduced by the beaver mascot",
          caption: "Describing the project to the AI assistant",
        },
        {
          src: relax,
          alt: "The beaver mascot lying back with its hands behind its head",
          caption: "Letting the assistant do the work",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Contractors",
      headline: ["Every request,", "sent to the right contractor."],
      body: "Contractors join Nucase as partners and get their own dashboard with the jobs assigned to them, where they update each job’s status and invite their team. Homeowners who arrive through a contractor’s invite link are assigned to that contractor automatically.",
    },
    {
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: jobs,
          alt: "Your jobs: an entrance renovation of 30 m³ with its price",
          caption: "A new job in the contractor’s dashboard",
        },
        {
          src: building,
          alt: "Beaver mascots building a house, on scaffolding and up on the roof",
          caption: "The right contractor takes it from there",
        },
      ],
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

import advisorAfter from "@/images/projects/paperdrop/advisor-after.webp"
import advisorCurrent from "@/images/projects/paperdrop/advisor-current.webp"
import advisorInvoicing from "@/images/projects/paperdrop/advisor-invoicing.webp"
import advisorReview from "@/images/projects/paperdrop/advisor-review.webp"
import advisorScheduling from "@/images/projects/paperdrop/advisor-scheduling.webp"
import advisorWelcome from "@/images/projects/paperdrop/advisor-welcome.webp"
import dropFile from "@/images/projects/paperdrop/drop-file.webp"
import fieldSettings from "@/images/projects/paperdrop/field-settings.webp"
import formsList from "@/images/projects/paperdrop/forms-list.webp"
import mobilePreview from "@/images/projects/paperdrop/mobile-preview.webp"
import placingFields from "@/images/projects/paperdrop/placing-fields.webp"
import upload from "@/images/projects/paperdrop/upload.webp"

import type { Project } from "../types"

export const paperdrop = {
  slug: "paperdrop",
  name: "PaperDrop",
  year: "2025–2026",
  subtitle:
    "PaperDrop helps UK contractors manage every job, from the schedule to the signed paperwork",
  facts: [
    { label: "Type", value: "Web app and sales tool" },
    { label: "Tech stack", value: "Next.js, React, TypeScript" },
    {
      label: "Website",
      links: [{ label: "paperdrop.com", href: "https://paperdrop.com" }],
    },
  ],
  card: {
    image: {
      src: fieldSettings,
      alt: "PaperDrop Form Builder: field settings on a PDF document",
    },
    frame: "web",
    description:
      "Job management for UK contractors, from scheduling to signed paperwork",
    type: "Web app",
    stack: ["Next.js", "React", "TypeScript"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: fieldSettings,
      alt: "Field settings: a dropdown placed on a PDF document, with its label and options",
      caption: "Field settings on a PDF document",
    },
  },
  overview: [
    "PaperDrop is a job management platform for UK contractors, from scheduling and customers to purchases and the paperwork each job produces.",
    "I built its Form Builder, which turns any PDF certificate into a form engineers fill in on site, and a Solutions Advisor that walks prospects through a first sales conversation.",
  ],
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Form Builder",
      headline: ["Every PDF certificate,", "turned into a form."],
      body: "Contractors run on paperwork: test certificates, inspection reports, safety checklists. Most of it already exists as PDF templates, so the Form Builder starts from those files instead of replacing them. A company uploads its own template, names the form and picks its categories, and a draft is saved automatically.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: formsList,
          alt: "Form builder: forms listed with their status, categories and last update",
          caption: "Forms, by status and category",
        },
        {
          src: dropFile,
          alt: "A new form in the builder, with a drop zone for its PDF template",
          caption: "A new form, waiting for its PDF",
        },
      ],
    },
    {
      type: "chapter",
      number: 2,
      name: "Fields",
      headline: ["Fields dragged onto the page,", "right where they belong."],
      body: "Fields are dragged from a side panel onto the PDF, with guides to line them up: customer details, job details like the address or subject, and fields such as text, dates, dropdowns, checkboxes and signatures. Positions are stored as percentages of the page, so fields stay in place at any size, and each one gets its own label, options, font and size.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: upload,
          alt: "Upload new template: drag and drop a PDF, with the upload progress",
          caption: "Uploading a PDF template",
        },
        {
          src: placingFields,
          alt: "Placing fields on a PDF document, with alignment guides and the fields panel",
          caption: "Placing fields with guides",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Preview",
      headline: ["A mobile preview,", "then one click to publish."],
      body: "Before publishing, the builder shows the form as engineers will see it on their phone. On site, they fill it in and sign on screen, and PaperDrop generates the finished certificate on the original PDF, with the job’s details already in place.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: mobilePreview,
        alt: "Mobile preview of the form, with a signature field, before publishing",
        caption: "The form as engineers see it on their phone",
      },
    },
    {
      type: "chapter",
      number: 4,
      name: "Solutions Advisor",
      headline: ["A first sales conversation,", "built on SPIN Selling."],
      body: "For sales, I built a Solutions Advisor that takes a prospect through six questions about how they schedule jobs, collect payments and handle admin today. The questions follow SPIN Selling, moving from their situation to the problems and what those cost, and each answer comes with a fact about the industry.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: advisorWelcome,
        alt: "Welcome to the PaperDrop Solutions Advisor",
        caption: "Welcome screen",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: advisorScheduling,
          alt: "How do you currently manage job scheduling and work assignments?",
          caption: "How jobs are scheduled today",
        },
        {
          src: advisorInvoicing,
          alt: "How do you handle invoicing and payment collection, with a fact about challenged invoices",
          caption: "A question, with a fact about invoicing",
        },
      ],
    },
    {
      type: "chapter",
      number: 5,
      name: "Results",
      headline: [
        "What their setup costs today,",
        "and what changes with PaperDrop.",
      ],
      body: "The answers become a map of the company today: missed billable hours, scheduling mix-ups and hours of admin, with billing accuracy and lost revenue each month. A second view puts PaperDrop in the middle, with compliance built in, and shows the same figures after.",
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: advisorReview,
          alt: "Review of all your choices before the results",
          caption: "Review of the answers",
        },
        {
          src: advisorCurrent,
          alt: "Current state: finance, field operations and administration, with their problems and today’s figures",
          caption: "Current state",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: advisorAfter,
        alt: "With PaperDrop: the same teams connected to PaperDrop, with compliance and improved figures",
        caption: "With PaperDrop",
      },
    },
    {
      type: "ledger",
      rows: [
        { label: "Web app", value: "Next.js, React, TypeScript" },
        { label: "Styling", value: "Tailwind CSS, Motion" },
        { label: "PDF", value: "pdf-lib, React PDF" },
        { label: "Files", value: "Azure Blob Storage" },
        { label: "Hosting", value: "Vercel, Azure Pipelines" },
      ],
    },
  ],
} satisfies Project

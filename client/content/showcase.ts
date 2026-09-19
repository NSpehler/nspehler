import * as screenshots from "./screenshots"
import type { Showcase } from "./types"

/** Featured work on the home page, in display order. */
export const showcase: readonly Showcase[] = [
  {
    title: "PayFit",
    url: "https://payfit.com",
    year: 2026,
    kind: "Marketing website",
    headline: "Payroll and HR software for SMBs, relaunched on a new identity",
    stack: ["Astro", "DatoCMS", "Vercel"],
    screenshots: screenshots.payfit,
    wide: true,
  },
  {
    title: "Intigriti",
    url: "https://www.intigriti.com",
    year: 2024,
    kind: "Marketing website",
    headline:
      "Europe's leading bug bounty platform, with a blog searched by thousands of ethical hackers",
    stack: ["Next.js", "DatoCMS", "Algolia"],
    screenshots: screenshots.intigriti,
  },
  {
    title: "Smartvatten",
    url: "https://smartvatten.com",
    year: 2026,
    kind: "Marketing website",
    headline:
      "Water intelligence for property owners and utilities, in five languages",
    stack: ["Next.js", "DatoCMS", "Mux"],
    screenshots: screenshots.smartvatten,
  },
  {
    title: "goalGetr",
    url: "https://goalgetr.co",
    year: 2026,
    kind: "Mobile + web",
    headline:
      "Ice hockey training platform: ready-made sessions for coaches, visible progress for players",
    stack: ["Next.js", "DatoCMS", "Clerk"],
    screenshots: screenshots.goalgetr,
  },
  {
    title: "Alma",
    url: "https://almapay.com",
    year: 2022,
    kind: "Marketing website",
    headline:
      "Installment payments for merchants across Europe, one site in ten locales",
    stack: ["Next.js", "DatoCMS", "Tailwind CSS"],
    screenshots: screenshots.alma,
  },
  {
    title: "Nucase",
    url: "https://app.nucase.no",
    year: 2024,
    kind: "Web app",
    headline:
      "Price a renovation from home and get matched with a contractor, for the Norwegian market",
    stack: ["Next.js", "DatoCMS", "MongoDB"],
    screenshots: screenshots.nucase,
    wide: true,
  },
]

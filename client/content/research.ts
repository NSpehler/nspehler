import cover from "@/images/research/cover.webp"
import pageLeft from "@/images/research/page-left.webp"
import pageRight from "@/images/research/page-right.webp"

import type { ResearchContent } from "./types"

export const research = {
  title: "Lean Marketing for Startups",
  description:
    "How startups can apply the principles of lean manufacturing to marketing, in four steps: from cutting waste to growth hacking.",
  eyebrow: "Research paper · April 2015",
  headline: "Lean Marketing for Startups",
  body: "How startups can apply the principles of lean manufacturing to marketing, in four steps: from cutting waste to growth hacking.",
  specs: ["32 pages", "PDF", "Nicolas Spehler"],
  pdf: "/lean-marketing-for-startups.pdf",
  published: "2015-04-01",
  covers: [
    { src: pageLeft, alt: "" },
    { src: pageRight, alt: "" },
    {
      src: cover,
      alt: "Cover of Lean Marketing for Startups, by Nicolas Spehler, April 1, 2015",
    },
  ],
  framework: {
    aside: "Four steps",
    items: [
      {
        title: "Cutting waste",
        body: "Find and remove the seven wastes of marketing, using the Pareto principle and value stream mapping to spot what doesn’t pay off.",
      },
      {
        title: "Stretching limited resources",
        body: "Do more with less: outsource work that adds no value, so the team can focus on what matters to customers.",
      },
      {
        title: "Better measuring ROI",
        body: "Turn marketing from a cost center into a revenue center that can reproduce, predict and scale its results.",
      },
      {
        title: "Unlocking growth hacking",
        body: "Experiment-driven marketing built into the product. It can grow a startup overnight, or backfire in an instant.",
      },
    ],
  },
} satisfies ResearchContent

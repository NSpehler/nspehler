import * as screenshots from "./screenshots"
import { site, website } from "./site"
import type { Entry } from "./types"

export const projectEntries: readonly Entry[] = [
  {
    title: "Analog",
    url: "https://analogapp.co",
    year: 2026,
    description:
      "Analog is an iPhone app for vinyl collectors that identifies what’s playing on your turntable, and turns your record shelf into curated listening sessions. Built with real-time audio recognition, Live Activities, and Analog Studio — an AI-powered playlist builder for records you already own.",
  },
  {
    title: "goalGetr",
    url: "https://goalgetr.co",
    year: 2026,
    description:
      "Helps ice hockey players level up their game — a training platform to track progress, follow structured drills and turn casual practice into measurable improvement.",
    screenshots: screenshots.goalgetr,
  },
  {
    title: "Smartvatten",
    url: "https://advisor.smartvatten.com",
    year: 2025,
    description:
      "Built for Smartvatten, the Solutions Advisor is a sales and lead generation tool that helps prospects find the right water management solutions for their building and converts them into qualified leads.",
  },
  {
    title: "PaperDrop",
    url: "https://paperdrop.com",
    year: 2025,
    description:
      "Helps UK contractors run their business without paperwork. A fully-featured form builder for PaperDrop’s job management platform that turns any PDF template into an interactive form — auto-filled with customer and job data, completed from the field in seconds.",
  },
  {
    title: "Nucase",
    url: "https://app.nucase.no",
    year: 2024,
    description:
      "Nucase is a Norwegian home renovation platform that helps homeowners scope their projects, get matched with vetted contractors and manage every step of the renovation in one place.",
    screenshots: screenshots.nucase,
  },
  {
    title: "CategoryAPI",
    url: "https://categoryapi.com",
    year: 2022,
    description:
      "CategoryAPI is a powerful lead categorization solution that enables businesses to categorize leads across 5,500 categories, in any language. This tool can be accessed via API or through its dashboard, allowing businesses to automate and personalize their lead generation efforts at scale.",
  },
  {
    title: "Portal Monitor",
    url: "https://portalmonitor.io",
    year: 2021,
    description:
      "You invest on real estate portals to generate qualified leads, but they don’t work together. We help you automate your leads so you can focus on closing more deals. Over 250 real estate agencies automate their business with Portal Monitor!",
  },
  {
    title: "Real Estate Jobs",
    url: "https://realestatejobs.io",
    year: 2021,
    description:
      "The leading real estate community in the world. We help you find your next opportunity as an agent or reach new talent to join your agency or organization.",
  },
  {
    title: "Moon",
    url: "https://moon.xyz",
    year: 2018,
    description:
      "Moon.xyz is an influencer marketplace connecting brands and creators reaching over 400 million people—on a mission to make the influencer marketing industry more transparent and accessible.",
  },
  {
    title: "Followed.ai",
    url: "https://followed.ai",
    year: 2018,
    description:
      "Followed.ai is a SaaS platform to unlock the power of Twitter for companies. We use machine learning to identify people that are most likely to interact with brands.",
  },
  {
    title: "AboutYou",
    url: "https://aboutyou.website",
    year: 2016,
    description:
      "AboutYou is a platform allowing anyone to register their own .com domain name and personalize their professional page in just a few minutes using a WYSIWYG editor.",
  },
  {
    title: "Articly",
    url: "https://articly.me",
    year: 2014,
    description:
      "Articly is the first subscription service for SEO articles and content marketing delivered on a weekly basis, with clients ranging from small startups to large corporations such as the Ovation Travel Group. Articly Ltd. was sold to Glean.net in March 2016.",
  },
]

export const projects = {
  title: "Projects",
  slug: "projects",
  description:
    "I'm always working on something new, and here is a collection of my favorite side projects.",
  intro:
    "I'm always working on something new — here's a collection of my favorite projects, from client work to personal experiments.",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${site.url}/projects`,
    description:
      "A collection of side projects and client work, from ice-hockey training apps to home-renovation platforms and growth-engineering tools.",
    isPartOf: website,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projectEntries.map(({ title }, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: title,
      })),
    },
  },
}

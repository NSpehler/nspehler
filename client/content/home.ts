import collection from "@/images/analog/collection.webp"
import drafting from "@/images/analog/drafting.webp"
import nowPlaying from "@/images/analog/now-playing.webp"
import playlists from "@/images/analog/playlists.webp"
import review from "@/images/analog/review.webp"
import sessionLength from "@/images/analog/session-length.webp"
import session from "@/images/analog/session.webp"
import settings from "@/images/analog/settings.webp"
import sides from "@/images/analog/sides.webp"
import vibe from "@/images/analog/vibe.webp"

import type { HomeContent } from "./types"

export const home = {
  title: "Full-stack developer",
  description:
    "Full-stack developer building modern web and mobile applications, with a focus on automation and AI.",
  hero: {
    headline: [
      "Full-stack developer building modern web and mobile applications,",
      "with a focus on automation and AI.",
    ],
    previously:
      "Previously led Growth Engineering at Payfit, Back Market and Alma.",
  },
  featured: [
    "payfit",
    "smartvatten",
    "goalgetr",
    "paperdrop",
    "nucase",
    "intigriti",
    "back-market-pro",
    "alma",
  ],
  nowBuilding: {
    slug: "analog",
    body: "An iPhone app for vinyl collectors. It identifies what’s playing on your turntable and turns your record shelf into curated listening sessions.",
    website: { label: "analogapp.co", href: "https://analogapp.co" },
    screens: [
      {
        src: nowPlaying,
        alt: "Analog app: Now playing",
        title: "Now playing",
        subtitle: "Recognizes the record on your turntable",
      },
      {
        src: playlists,
        alt: "Analog app: Playlists",
        title: "Playlists",
        subtitle: "Built from records you already own",
      },
      {
        src: vibe,
        alt: "Analog app: The vibe",
        title: "The vibe",
        subtitle: "Tap a mood or describe it in your own words",
      },
      {
        src: sessionLength,
        alt: "Analog app: Session length",
        title: "Session length",
        subtitle: "Tell Analog how long you want to listen",
      },
      {
        src: drafting,
        alt: "Analog app: Drafting",
        title: "Drafting",
        subtitle: "Analog Studio picks records from your shelf",
      },
      {
        src: review,
        alt: "Analog app: Review",
        title: "Review",
        subtitle: "Check the draft, then save and start",
      },
      {
        src: collection,
        alt: "Analog app: Collection",
        title: "Collection",
        subtitle: "Your records, synced from Discogs",
      },
      {
        src: session,
        alt: "Analog app: Listening session",
        title: "Listening session",
        subtitle: "What’s playing now and what’s up next",
      },
      {
        src: sides,
        alt: "Analog app: Sides",
        title: "Sides",
        subtitle: "Choose which sides of a record to play",
      },
      {
        src: settings,
        alt: "Analog app: Settings",
        title: "Settings",
        subtitle: "Discogs sync, recommendations and app icons",
      },
    ],
  },
  more: {
    range: "2014–2025",
    rows: [
      {
        year: 2025,
        name: "Smartvatten Solutions Advisor",
        description:
          "Sales and lead generation tool matching buildings to water solutions",
        tag: "Lead gen tool",
      },
      {
        year: 2022,
        name: "CategoryAPI",
        description:
          "Lead categorization across 5,500 categories, in any language",
        tag: "API",
      },
      {
        year: 2021,
        name: "Portal Monitor",
        description:
          "Lead automation across real estate portals, for over 250 agencies",
        tag: "SaaS",
      },
      {
        year: 2021,
        name: "Real Estate Jobs",
        description: "Jobs and community for real estate agents and agencies",
        tag: "Job board",
      },
      {
        year: 2018,
        name: "Moon",
        description: "Influencer marketplace connecting brands and creators",
        tag: "Marketplace",
      },
      {
        year: 2018,
        name: "Followed.ai",
        description:
          "Finds the Twitter users most likely to engage with your brand",
        tag: "SaaS",
      },
      {
        year: 2016,
        name: "AboutYou",
        description: "Your own .com and a professional page, set up in minutes",
        tag: "Site builder",
      },
      {
        year: 2014,
        name: "Articly",
        description:
          "Weekly SEO articles on subscription, sold to Glean.net in 2016",
        tag: "SaaS",
      },
    ],
  },
  about: {
    role: "Full-stack developer",
    paragraphs: [
      "Hey! I’m Nicolas, a full-stack developer with a strong focus on automation and AI to help businesses scale through technology.",
      "I’ve led Growth Engineering teams at Payfit and Alma, and more recently worked as a freelance full-stack engineer for Back Market and Intigriti.",
    ],
  },
} satisfies HomeContent

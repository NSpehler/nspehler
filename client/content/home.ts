import collection from "@/images/analog/collection.webp"
import drafting from "@/images/analog/drafting.webp"
import historyShare from "@/images/analog/history-share.webp"
import history from "@/images/analog/history.webp"
import lockScreen from "@/images/analog/lock-screen.webp"
import nowPlaying from "@/images/analog/now-playing.webp"
import playlists from "@/images/analog/playlists.webp"
import review from "@/images/analog/review.webp"
import session from "@/images/analog/session.webp"
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
  featured: {
    project: "payfit",
    grid: [
      "smartvatten",
      "goalgetr",
      "paperdrop",
      "nucase",
      "intigriti",
      "abax",
      "back-market-pro",
      "alma",
    ],
  },
  nowBuilding: {
    slug: "analog",
    body: "An app for vinyl collectors on iPhone, iPad, Mac and Apple Watch. It identifies the record and the side playing on your turntable, suggests what to play next and turns your record shelf into curated listening sessions.",
    website: { label: "analogapp.co", href: "https://analogapp.co" },
    screens: [
      {
        src: nowPlaying,
        alt: "Analog app: Now playing",
        title: "Now playing",
        subtitle: "Recognizes the record and the side on your turntable",
      },
      {
        src: lockScreen,
        alt: "Analog app: Lock Screen",
        title: "Lock Screen",
        subtitle: "The side and the time left, without unlocking",
      },
      {
        src: session,
        alt: "Analog app: Listening session",
        title: "Listening session",
        subtitle: "What’s playing now and what’s up next",
      },
      {
        src: vibe,
        alt: "Analog app: Choose a vibe",
        title: "Choose a vibe",
        subtitle: "Tap a mood or describe it in your own words",
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
        src: history,
        alt: "Analog app: History",
        title: "History",
        subtitle: "Your time at the turntable and your most played records",
      },
      {
        src: historyShare,
        alt: "Analog app: Share your month",
        title: "Share your month",
        subtitle: "A card made from your most played records",
      },
      {
        src: collection,
        alt: "Analog app: Collection",
        title: "Collection",
        subtitle: "Your records, synced from Discogs",
      },
      {
        src: playlists,
        alt: "Analog app: Playlists",
        title: "Playlists",
        subtitle: "Your saved sessions, ready to play again",
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
        tag: "SaaS",
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

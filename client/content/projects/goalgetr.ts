import brand from "@/images/projects/goalgetr/brand.webp"
import filmPoster from "@/images/projects/goalgetr/film-poster.webp"
import playerCalendar from "@/images/projects/goalgetr/player-calendar.webp"
import playerCard from "@/images/projects/goalgetr/player-card.webp"
import sessionPlanner from "@/images/projects/goalgetr/session-planner.webp"
import team from "@/images/projects/goalgetr/team.webp"
import trainingVideo from "@/images/projects/goalgetr/training-video.webp"

import type { Project } from "../types"

export const goalgetr = {
  slug: "goalgetr",
  name: "goalGetr",
  year: "Since 2025",
  subtitle:
    "goalGetr helps hockey clubs give coaches a ready-made program and players visible progress",
  facts: [
    { label: "Type", value: "Web and mobile app" },
    { label: "Tech stack", value: "Next.js, Expo, DatoCMS, Clerk" },
    {
      label: "Website",
      links: [{ label: "goalgetr.co", href: "https://goalgetr.co" }],
    },
  ],
  card: {
    image: {
      src: team,
      alt: "goalGetr app: team roster, drill video and coach calendar on three phones",
    },
    frame: "phones",
    description:
      "Ice hockey training platform: ready-made sessions for coaches, visible progress for players",
    type: "Mobile + web",
    stack: ["Next.js", "DatoCMS", "Clerk"],
  },
  lead: {
    type: "figure",
    frame: "bleed",
    shot: {
      src: team,
      alt: "goalGetr on three phones: a team roster, a drill with its video and a coach’s calendar",
      caption: "Team, drill and calendar",
    },
  },
  overview: [
    "goalGetr is a youth ice hockey platform used by Norwegian clubs. Coaches pull a ready-made session from the library, players watch the drills before they get to the rink, and parents follow the same progress from home. It reached thousands of users right after launch.",
    "SmplCo designed the product. I’ve built the platform since 2025, from the web and mobile apps to everything behind them.",
  ],
  video: {
    src: "https://vvcwfr2nfw2kpgef.public.blob.vercel-storage.com/films/goalgetr-AFEMBru81QZXu5jfOgLuA3GvrEnFPx.mp4",
    poster: {
      src: filmPoster,
      alt: "The goalGetr brand film, on its first frame",
    },
    title: "the goalGetr brand film",
    duration: "1 minute",
  },
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Coaches",
      headline: ["A ready-made program,", "one session at a time."],
      body: "Coaches pick a session from the library or build their own, with drills drawn on the rink, sets and reps, and the equipment they need. Drills are published in English, Norwegian and Swedish, and can be shared with the team or the whole club.",
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: sessionPlanner,
        alt: "Session planner: a session’s game board on the rink, with its drills and the equipment needed",
        caption: "Session planner",
      },
    },
    {
      type: "chapter",
      number: 2,
      name: "Players",
      headline: [
        "Drills to watch before practice,",
        "and a card that shows progress.",
      ],
      body: "Players see every drill on video before they reach the rink. Their progress feeds a collectible player card, with ratings for skating, shooting and puck handling, badges to unlock and challenges to log against the coaches’ baselines.",
    },
    {
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: trainingVideo,
          alt: "Training video: a Morning Skate session with its video",
          caption: "Training video",
        },
        {
          src: playerCard,
          alt: "Player card with ratings for skating, shooting and puck handling, and badges to unlock",
          caption: "Player card",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Families",
      headline: ["Every practice on the calendar,", "for players and parents."],
      body: "Sessions land in each player’s calendar, across every team they play on. Players and parents answer in one tap, and coaches see who’s coming, split the team into lines and groups, and post the plan for the day.",
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: playerCalendar,
        alt: "Player calendar with practices from three different teams, each with a reply button",
        caption: "Player calendar",
      },
    },
    {
      type: "chapter",
      number: 4,
      name: "Clubs",
      headline: ["One platform,", "a space for every club."],
      body: "Each club gets its own branded space on shared infrastructure, and its players, sessions and progress stay its own. Players join through their club with a magic link, or families sign up directly with a Summer Pass, and both land in the same app.",
    },
    {
      type: "figure",
      frame: "bleed",
      shot: {
        src: brand,
        alt: "The goalGetr wordmark on a dark background",
        caption: [
          "Brand and product design by ",
          { label: "SmplCo", href: "https://smpl.as" },
        ],
      },
    },
    {
      type: "quote",
      text: "“Thanks so much for creating a truly unique training platform. It’s a pleasure to work with people who can bring your ideas to life and even improve them in the process.”",
      name: "Christian Dahl-Andersen",
      role: "Founder, goalGetr",
    },
    {
      type: "cards",
      heading: "Behind the scenes",
      columns: 3,
      items: [
        {
          title: "Six roles, one login",
          body: "Club admins, coaches, players and parents sign in with Clerk, and each role only sees what it should.",
        },
        {
          title: "One core, two apps",
          body: "The web app and the React Native app share the same logic, from schedules and attendance to the scoring formula.",
        },
        {
          title: "800+ end-to-end tests",
          body: "Playwright covers the whole app, the way coaches, players and parents actually use it.",
        },
      ],
    },
    {
      type: "ledger",
      rows: [
        { label: "Web", value: "Next.js, React, TypeScript" },
        { label: "Mobile", value: "React Native, Expo" },
        { label: "Styling", value: "Tailwind CSS, Motion" },
        { label: "Content", value: "DatoCMS, with GraphQL" },
        {
          label: "Accounts",
          value: "Clerk, with organizations for clubs and teams",
        },
        { label: "Data and files", value: "MongoDB, Vercel Blob" },
        { label: "Hosting", value: "Vercel" },
      ],
    },
  ],
} satisfies Project

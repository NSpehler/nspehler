import collection from "@/images/analog/collection.webp"
import deviceCollection from "@/images/analog/device-collection.webp"
import deviceNowPlaying from "@/images/analog/device-now-playing.webp"
import deviceStudio from "@/images/analog/device-studio.webp"
import drafting from "@/images/analog/drafting.webp"
import nowPlaying from "@/images/analog/now-playing.webp"
import playlists from "@/images/analog/playlists.webp"
import review from "@/images/analog/review.webp"
import sessionLength from "@/images/analog/session-length.webp"
import session from "@/images/analog/session.webp"
import settings from "@/images/analog/settings.webp"
import sides from "@/images/analog/sides.webp"
import vibe from "@/images/analog/vibe.webp"

import type { Project } from "../types"

export const analog = {
  slug: "analog",
  name: "Analog",
  year: "2026",
  subtitle:
    "An iPhone app for vinyl collectors: it recognizes what’s spinning and builds sessions from the records you own",
  facts: [
    { label: "Type", value: "iPhone app" },
    { label: "Platform", value: "iPhone, Lock Screen, Dynamic Island" },
    {
      label: "Live",
      links: [
        { label: "analogapp.co", href: "https://analogapp.co" },
        {
          label: "App Store",
          href: "https://apps.apple.com/us/app/analog-vinyl-sessions/id6767884568",
        },
      ],
    },
  ],
  card: {
    image: { src: nowPlaying, alt: "Analog app: Now playing" },
    frame: "phones",
    description:
      "An iPhone app for vinyl collectors: it recognizes what’s spinning and builds sessions from the records you own",
    type: "iPhone app",
    stack: ["iOS"],
  },
  lead: {
    type: "triptych",
    shots: [
      {
        src: deviceCollection,
        alt: "Analog on iPhone: your collection, synced from Discogs",
      },
      {
        src: deviceNowPlaying,
        alt: "Analog on iPhone, now playing Channel Orange by Frank Ocean",
      },
      { src: deviceStudio, alt: "Analog Studio on iPhone: what’s the vibe?" },
    ],
    caption: "Collection, Now playing and Analog Studio on iPhone",
  },
  overview: [
    "Analog brings your Discogs collection to your iPhone, recognizes the record on your turntable, keeps what’s playing on your Lock Screen, and builds listening sessions from the records you already own.",
    "It’s made for physical records: Analog helps you enjoy your collection, but the music still comes from your turntable.",
  ],
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Now playing",
      headline: ["Drop the needle.", "Analog listens along."],
      body: "Analog recognizes the record and the side from your own collection as soon as the music starts. It shows the tracklist, follows what’s playing, and tells you exactly when it’s time to flip.",
    },
    {
      type: "phones",
      shots: [
        {
          src: nowPlaying,
          alt: "Analog app: Now playing: the record, the side and the tracklist",
          caption: "Now playing: the record, the side and the tracklist",
        },
        {
          src: sides,
          alt: "Analog app: Choose which sides of a record to play",
          caption: "Choose which sides of a record to play",
        },
      ],
    },
    {
      type: "chapter",
      number: 2,
      name: "Collection",
      headline: ["Your full Discogs,", "in your pocket."],
      body: "Connect Discogs once and your whole collection syncs over. Search your records, sort by recent additions, favorite the albums you keep coming back to, and choose how Analog suggests what to play next.",
    },
    {
      type: "phones",
      shots: [
        {
          src: collection,
          alt: "Analog app: Your collection, synced from Discogs",
          caption: "Your collection, synced from Discogs",
        },
        {
          src: settings,
          alt: "Analog app: Settings: recommendations and app icons",
          caption: "Settings: recommendations and app icons",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Analog Studio",
      headline: ["Set the mood.", "Analog curates it."],
      body: "Pick an occasion, a mood and genres from your own shelf, or describe the moment in your own words. Set how long you want to listen, and Analog Studio lines up the albums, sides and order for your next session.",
    },
    {
      type: "phones",
      shots: [
        {
          src: vibe,
          alt: "Analog app: 1. Pick the vibe",
          caption: "1. Pick the vibe",
        },
        {
          src: sessionLength,
          alt: "Analog app: 2. Set the length",
          caption: "2. Set the length",
        },
        {
          src: drafting,
          alt: "Analog app: 3. Studio drafts it",
          caption: "3. Studio drafts it",
        },
        {
          src: review,
          alt: "Analog app: 4. Review, save and start",
          caption: "4. Review, save and start",
        },
      ],
    },
    {
      type: "chapter",
      number: 4,
      name: "Sessions",
      headline: ["Every session,", "always at a glance."],
      body: "Save your sessions as playlists and come back to them anytime. While a record plays, the side, the time left and what’s up next stay on your Lock Screen and in the Dynamic Island, without unlocking your iPhone.",
    },
    {
      type: "phones",
      shots: [
        {
          src: playlists,
          alt: "Analog app: Your saved playlists",
          caption: "Your saved playlists",
        },
        {
          src: session,
          alt: "Analog app: A session in progress",
          caption: "A session in progress",
        },
      ],
    },
    {
      type: "cards",
      heading: "Principles",
      columns: 3,
      items: [
        {
          title: "Made for physical records",
          body: "Analog never streams music. It helps you enjoy your collection, and the sound still comes from your turntable.",
        },
        {
          title: "Private by design",
          body: "Analog only listens while it’s identifying a record, and your audio never leaves your iPhone.",
        },
        {
          title: "Free to start",
          body: "Your collection, Now Playing and Live Activities are free. Analog Studio unlocks unlimited curated sessions.",
        },
      ],
    },
  ],
} satisfies Project

import deviceNowPlaying from "@/images/analog/device-now-playing.webp"
import deviceSession from "@/images/analog/device-session.webp"
import deviceStudio from "@/images/analog/device-studio.webp"
import drafting from "@/images/analog/drafting.webp"
import historyShare from "@/images/analog/history-share.webp"
import history from "@/images/analog/history.webp"
import ipadPlayNext from "@/images/analog/ipad-play-next.webp"
import lockScreen from "@/images/analog/lock-screen.webp"
import macNowPlaying from "@/images/analog/mac-now-playing.webp"
import nowPlaying from "@/images/analog/now-playing.webp"
import review from "@/images/analog/review.webp"
import session from "@/images/analog/session.webp"
import vibe from "@/images/analog/vibe.webp"
import videoPoster from "@/images/analog/video-poster.webp"
import watchNowPlaying from "@/images/analog/watch-now-playing.webp"
import watchPlayNext from "@/images/analog/watch-play-next.webp"
import watchTracklist from "@/images/analog/watch-tracklist.webp"

import type { Project } from "../types"

const description =
  "An app for vinyl collectors on iPhone, iPad, Mac and Apple Watch: it knows which record and side are spinning, suggests what to play next and builds sessions from the records you own"

const type = "iPhone, iPad, Mac and Apple Watch app"

export const analog = {
  slug: "analog",
  name: "Analog",
  year: "2026",
  subtitle: description,
  facts: [
    { label: "Type", value: type },
    {
      label: "Tech stack",
      value: "SwiftUI, SwiftData",
    },
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
    description,
    type,
    stack: ["iOS", "macOS", "watchOS"],
  },
  lead: {
    type: "triptych",
    shots: [
      {
        src: deviceSession,
        alt: "Analog on iPhone: a Golden Hour session, with the records up next",
      },
      {
        src: deviceNowPlaying,
        alt: "Analog on iPhone, now playing side A of Channel Orange by Frank Ocean",
      },
      { src: deviceStudio, alt: "Analog Studio on iPhone: what’s the vibe?" },
    ],
    caption: "A session, Now playing and Analog Studio on iPhone",
  },
  overview: [
    "Analog listens to your turntable and knows which record and which side are playing, straight from your Discogs collection. It follows the side track by track on your Lock Screen, your wrist or your Mac’s menu bar, suggests what to play next from your own shelf, and Analog Studio builds listening sessions from the records you already own.",
    "It’s made for physical records: Analog helps you enjoy your collection, but the music still comes from your turntable. I built the native app for iPhone, iPad, Mac and Apple Watch, the server behind Analog Studio and the website at analogapp.co.",
  ],
  video: {
    src: "https://vvcwfr2nfw2kpgef.public.blob.vercel-storage.com/videos/analog-launch.mp4",
    poster: {
      src: videoPoster,
      alt: "The Analog launch video: “Drop the needle. Analog listens.” beside a spinning Analog record",
    },
    title: "the Analog launch video",
    duration: "30 seconds",
  },
  blocks: [
    {
      type: "chapter",
      number: 1,
      name: "Now playing",
      headline: ["Drop the needle.", "Analog listens along."],
      body: "Analog recognizes the record and the side from your Discogs collection as soon as the music starts. It follows the side track by track and tells you when it’s time to flip. The side and the time left stay on your Lock Screen and in the Dynamic Island, on your Apple Watch and in your Mac’s menu bar.",
    },
    {
      type: "phones",
      shots: [
        {
          src: nowPlaying,
          alt: "Analog app: Now playing: Channel Orange, side A and its tracklist",
          caption: "The record, the side and the tracklist",
        },
        {
          src: lockScreen,
          alt: "Analog on the Lock Screen: side A of Channel Orange and the time left",
          caption: "The time left, without unlocking",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: macNowPlaying,
        alt: "Analog on Mac: Channel Orange playing, the cover beside all four sides",
        caption: "The same record on your Mac, every side in view",
      },
    },
    {
      type: "chapter",
      number: 2,
      name: "Analog Studio",
      headline: ["Set the mood.", "Analog curates it."],
      body: "Pick an occasion, a mood and genres from your own shelf, or describe the moment in your own words. Set how long you want to listen, and Analog Studio lines up the albums, sides and order for your next session.",
    },
    {
      type: "phones",
      shots: [
        {
          src: vibe,
          alt: "Analog app: What’s the vibe? Occasions, moods and genres from your collection",
          caption: "1. Pick the vibe",
        },
        {
          src: drafting,
          alt: "Analog app: Analog Studio drafting a session",
          caption: "2. Studio drafts it",
        },
        {
          src: review,
          alt: "Analog app: the Soul in Motion draft, eight records with their sides",
          caption: "3. Review, save and start",
        },
        {
          src: session,
          alt: "Analog app: a Golden Hour session in progress, with the records up next",
          caption: "4. Play the session",
        },
      ],
    },
    {
      type: "chapter",
      number: 3,
      name: "Play Next",
      headline: ["What to play next,", "from your own shelf."],
      body: "Under the record that’s playing, Analog suggests three records from your collection to follow it, and says why its top pick fits. Switch between Balanced, Favorites, Rotation and Surprise, or tap Pick for me when you can’t choose. The suggestions are made on your device with Apple Intelligence, and on Apple Watch they sit a swipe away from the record and its tracklist.",
    },
    {
      type: "tablets",
      shots: [
        {
          src: ipadPlayNext,
          alt: "Analog on iPad: Channel Orange playing, with In Colour by Jamie xx as the top pick to play next",
          caption: "The top pick, and why it fits",
        },
      ],
    },
    {
      type: "watches",
      shots: [
        {
          src: watchNowPlaying,
          alt: "Analog on Apple Watch: Channel Orange, side A, 6:28 left",
          caption: "The side and the time left",
        },
        {
          src: watchPlayNext,
          alt: "Analog on Apple Watch: three records to play next",
          caption: "What to play next",
        },
        {
          src: watchTracklist,
          alt: "Analog on Apple Watch: the tracklist of side A, counting down Sierra Leone",
          caption: "The tracklist, track by track",
        },
      ],
    },
    {
      type: "chapter",
      number: 4,
      name: "History",
      headline: ["Every evening", "adds up."],
      body: "History keeps every record you play: your time at the turntable this month, this year or since your first record, your most played records and each day’s listening. Share your month as a card made from your most played records, or save it to Photos.",
    },
    {
      type: "phones",
      shots: [
        {
          src: history,
          alt: "Analog app: History: 26 hours at the turntable this month, and the most played records",
          caption: "Your time at the turntable",
        },
        {
          src: historyShare,
          alt: "Analog app: your month as a card to share",
          caption: "Share your month as a card",
        },
      ],
    },
    {
      type: "cards",
      heading: "What I built",
      columns: 3,
      items: [
        {
          title: "Recognition",
          body: "Analog identifies the track from a few seconds of sound, then maps it to the right record and side in your Discogs collection and follows the side by its track lengths.",
        },
        {
          title: "Analog Studio",
          body: "Claude drafts each session in four passes on the server. The app proves itself with App Attest, so no API key ever ships in it.",
        },
        {
          title: "Play Next",
          body: "Apple Intelligence picks the suggestions on the device, from your own collection, so Play Next works without a server.",
        },
        {
          title: "One app, every screen",
          body: "Swift 6 and SwiftUI across iPhone, iPad, Mac, Apple Watch and iPhone Duo, with SwiftData and CloudKit keeping playlists, favorites and history in sync.",
        },
        {
          title: "Live Activities",
          body: "ActivityKit keeps the side and the time left on the Lock Screen and in the Dynamic Island, and the Mac’s menu bar draws the same state.",
        },
        {
          title: "The website",
          body: "analogapp.co runs on Next.js and Vercel, with its infrastructure managed in Terraform.",
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
          body: "Analog only listens while it’s identifying a record, and your audio never leaves your device.",
        },
        {
          title: "Free to start",
          body: "Your collection, Now Playing and Live Activities are free. Analog Studio unlocks unlimited curated sessions.",
        },
      ],
    },
  ],
} satisfies Project

import deviceNowPlaying from "@/images/analog/device-now-playing.webp"
import deviceSession from "@/images/analog/device-session.webp"
import deviceStudio from "@/images/analog/device-studio.webp"
import drafting from "@/images/analog/drafting.webp"
import duoCollection from "@/images/analog/duo-collection.webp"
import duoNowPlaying from "@/images/analog/duo-now-playing.webp"
import historyShare from "@/images/analog/history-share.webp"
import history from "@/images/analog/history.webp"
import ipadCollection from "@/images/analog/ipad-collection.webp"
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
      value: "SwiftUI, SwiftData, ShazamKit, Cloudflare Workers",
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
      body: "Analog recognizes the record and the side from your own collection as soon as the music starts. It shows the tracklist, counts down the track that’s playing and tells you when it’s time to flip. The side and the time left stay on your Lock Screen and in the Dynamic Island, without unlocking your iPhone.",
    },
    {
      type: "phones",
      shots: [
        {
          src: nowPlaying,
          alt: "Analog app: Now playing: Channel Orange, side A and its tracklist",
          caption: "Now playing: the record, the side and the tracklist",
        },
        {
          src: lockScreen,
          alt: "Analog on the Lock Screen: side A of Channel Orange and the time left",
          caption: "The side and the time left on your Lock Screen",
        },
      ],
    },
    {
      type: "chapter",
      number: 2,
      name: "Play Next",
      headline: ["What to play next,", "from your own shelf."],
      body: "Under the record that’s playing, Analog suggests three records from your collection to follow it, and says why its top pick fits. Switch between Balanced, Favorites, Rotation and Surprise, or tap Pick for me when you can’t choose. The suggestions are made on your device with Apple Intelligence.",
    },
    {
      type: "tablets",
      shots: [
        {
          src: ipadPlayNext,
          alt: "Analog on iPad: Channel Orange playing, with In Colour by Jamie xx as the top pick to play next",
          caption: "Play Next on iPad",
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
      type: "chapter",
      number: 5,
      name: "Mac",
      headline: ["Now on Mac,", "right in the menu bar."],
      body: "Analog 3.0 brought the app to the Mac. It keeps following the record while you work in other apps, with what’s playing in the menu bar. Your collection, playlists and history come with you through iCloud, and one Analog Studio subscription covers Mac, iPhone and iPad.",
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: macNowPlaying,
        alt: "Analog on Mac: Channel Orange playing, the cover beside all four sides",
        caption: "Now playing on Mac",
      },
    },
    {
      type: "chapter",
      number: 6,
      name: "Apple Watch",
      headline: ["Drop the needle.", "Raise your wrist."],
      body: "On Apple Watch, see the record, the side and the time left at a glance, identify a record from your wrist, and see what to play next. The tracklist follows the side track by track, and a complication keeps the countdown on your watch face.",
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
      number: 7,
      name: "iPad and iPhone Duo",
      headline: ["Bigger screens,", "the whole record."],
      body: "Connect Discogs once and your whole collection syncs to every screen. On iPad, Analog sits beside your turntable with the record next to all its sides and your shelf at a glance. Open iPhone Duo and the record you’re playing sits on one side with its tracklist on the other; half open like a book, your collection spreads across two pages.",
    },
    {
      type: "tablets",
      shots: [
        {
          src: ipadCollection,
          alt: "Analog on iPad: your favorite records in a grid of covers",
          caption: "Your collection on iPad",
        },
      ],
    },
    {
      type: "figures",
      frame: "bleed",
      shots: [
        {
          src: duoNowPlaying,
          alt: "Analog on iPhone Duo, open: the Channel Orange cover on one half, its tracklist on the other",
          caption: "iPhone Duo: the record beside its tracklist",
        },
        {
          src: duoCollection,
          alt: "Analog on iPhone Duo, open: the collection grid beside the vertical toolbar",
          caption: "Your collection on iPhone Duo",
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
          body: "ShazamKit and SoundAnalysis identify the track, then a resolver maps it to the right record and side in your Discogs collection and follows the side by its track lengths.",
        },
        {
          title: "Play Next",
          body: "Apple Intelligence picks the suggestions on the device, from your own collection, so Play Next works without a server.",
        },
        {
          title: "Analog Studio",
          body: "A Cloudflare Worker drafts each session with Claude in four passes. The app proves itself with App Attest, so no API key ever ships in it.",
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
          body: "analogapp.co runs on Next.js and Vercel, with its Cloudflare and Vercel setup managed in Terraform.",
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

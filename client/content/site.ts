import avatar from "@/images/avatar.webp"

import type { Site } from "./types"

export const site = {
  name: "Nicolas Spehler",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://nspehler.com",
  email: "nicolas@spehler.com",
  description:
    "Full-stack developer building modern web and mobile applications, with a focus on automation and AI.",
  twitter: "@NSpehler",
  location: { latitude: -8.6460004, longitude: 115.1162055 },
  status: "Available for new projects",
  avatar: { src: avatar, alt: "Nicolas Spehler" },
  nav: [
    { label: "Projects", href: "/" },
    { label: "About", href: "/about" },
    { label: "Research", href: "/lean-marketing-for-startups" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "X", href: "https://x.com/NSpehler" },
    { label: "GitHub", href: "https://github.com/NSpehler" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nspehler/" },
  ],
  cta: {
    headline: [
      "Let’s work together",
      "on web and mobile apps, marketing websites, internal tools or growth engineering.",
    ],
    book: { label: "Book a call", href: "/contact" },
  },
} satisfies Site

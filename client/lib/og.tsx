import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"

import { site } from "@/content/site"

export const size = { width: 1200, height: 630 }

const font = (file: string) =>
  readFile(new URL(`../assets/fonts/${file}`, import.meta.url))

type Card = {
  title: string
  subtitle: string
}

export const ogImage = async ({ title, subtitle }: Card) => {
  const [regular, medium] = await Promise.all([
    font("Geist-Regular.ttf"),
    font("Geist-Medium.ttf"),
  ])
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#ffffff",
        color: "#0a0a0a",
        fontFamily: "Geist",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#737373" }}>
        {site.name}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 500,
            letterSpacing: "-0.045em",
            lineHeight: 1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            lineHeight: 1.3,
            color: "#6b6b6b",
            letterSpacing: "-0.02em",
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400 },
        { name: "Geist", data: medium, weight: 500 },
      ],
    },
  )
}

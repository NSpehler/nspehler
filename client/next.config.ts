import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin Turbopack's workspace root to this directory so it doesn't walk up
  // and try to resolve modules (like `tailwindcss`) from the repo root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.datocms-assets.com",
      },
    ],
  },
}

export default nextConfig

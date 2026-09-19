import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin Turbopack's workspace root to this directory so it doesn't walk up
  // and try to resolve modules (like `tailwindcss`) from the repo root.
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    // Screenshots are statically imported and served through the optimizer;
    // AVIF first, WebP as the fallback. No remote hosts needed.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ]
  },
}

export default nextConfig

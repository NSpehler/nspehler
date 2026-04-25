/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs")

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL,
  generateRobotsTxt: true,
  exclude: ["*404"],
  transform: async (config, path) => {
    const file = `${config.sourceDir}/server/app${path}.html`
    const noIndexRegex =
      /<meta\s+name=["']?robots["']?\s+content=["']?noindex["']?\s*\/?>/gim
    const canonicalRegex =
      /<link\s+rel=["']?canonical["']?\s+href=["']?([^"']+)["']?\s*\/?>/i

    if (fs.existsSync(file)) {
      try {
        const data = await fs.promises.readFile(file, "utf8")

        if (data.match(noIndexRegex)) {
          console.log(`Ignored noindexed page from sitemap: ${path}`)
          return null
        }

        const canonicalMatch = data.match(canonicalRegex)
        if (canonicalMatch) {
          const canonicalUrl = new URL(canonicalMatch[1])
          const currentPath = new URL(path, process.env.NEXT_PUBLIC_APP_URL)
            .pathname

          if (canonicalUrl.pathname !== currentPath) {
            console.log(`Ignored non-canonical page from sitemap: ${path}`)
            return null
          }
        }
      } catch (error) {
        console.error("err", error)
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    }
  },
}

module.exports = config

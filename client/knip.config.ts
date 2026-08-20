import type { KnipConfig } from "knip"

const config: KnipConfig = {
  /*
   * next-sitemap reads this from the postbuild script instead of importing
   * it, so nothing in the graph points at it.
   */
  entry: ["next-sitemap.config.js"],
}

export default config

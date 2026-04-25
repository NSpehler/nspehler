import { generatePageComponentAndMetadataFn } from "@/lib/datocms/realtime/generatePageComponentAndMetadataFn"
import dynamic from "next/dynamic"

import Content from "./Content"
import { query } from "./common"

const { Page, generateMetadataFn } = generatePageComponentAndMetadataFn({
  query,
  pickSeoMetaTags: ({ page }) => page?._seoMetaTags,
  contentComponent: Content,
  realtimeComponent: dynamic(() => import("./RealTime")),
})

export const generateMetadata = generateMetadataFn
export default Page

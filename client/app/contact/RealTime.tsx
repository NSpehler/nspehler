"use client"

import { generateRealtimeComponent } from "@/lib/datocms/realtime/generateRealtimeComponent"

import Content from "./Content"
import { query } from "./common"

export default generateRealtimeComponent({
  query,
  contentComponent: Content,
})

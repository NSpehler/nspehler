"use client"

import { useEffect } from "react"

export const NavigationFlag = () => {
  useEffect(() => {
    document.documentElement.dataset.navigated = ""
  }, [])
  return null
}

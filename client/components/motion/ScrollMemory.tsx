"use client"

import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"

const positions = new Map<string, number>()
let pending = false
let leaving = false

export const restoreScroll = () => {
  pending = true
}

const leavingFor = (event: MouseEvent) => {
  const link =
    event.target instanceof Element ? event.target.closest("a[href]") : null
  if (!(link instanceof HTMLAnchorElement)) return
  if (link.pathname !== location.pathname) leaving = true
}

export const ScrollMemory = () => {
  const pathname = usePathname()

  useEffect(() => {
    history.scrollRestoration = "manual"
    const onPopState = () => {
      leaving = true
      pending = true
    }
    document.addEventListener("click", leavingFor, true)
    window.addEventListener("popstate", onPopState)
    return () => {
      document.removeEventListener("click", leavingFor, true)
      window.removeEventListener("popstate", onPopState)
    }
  }, [])

  useEffect(() => {
    leaving = false
    const save = () => {
      if (!leaving) positions.set(pathname, window.scrollY)
    }
    save()
    window.addEventListener("scroll", save, { passive: true })
    return () => window.removeEventListener("scroll", save)
  }, [pathname])

  useLayoutEffect(() => {
    if (!pending) return
    pending = false
    const top = positions.get(pathname)
    if (top === undefined) return
    window.scrollTo(0, top)
    const frame = requestAnimationFrame(() => window.scrollTo(0, top))
    return () => cancelAnimationFrame(frame)
  }, [pathname])

  return null
}

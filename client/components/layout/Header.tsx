"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { NAV, vt } from "@/components/motion/names"
import { restoreScroll } from "@/components/motion/ScrollMemory"
import { site } from "@/content/site"
import { formatCoordinates } from "@/lib/coordinates"
import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"

type Underline = { left: number; width: number; visible: boolean }

const HIDDEN: Underline = { left: 0, width: 0, visible: false }

const coordinates = formatCoordinates({
  lat: site.location.latitude,
  lng: site.location.longitude,
})

export const Header = () => {
  const pathname = usePathname()
  const onProject = pathname.startsWith("/projects")

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" || onProject : pathname.startsWith(href)

  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const [underline, setUnderline] = useState<Underline>(HIDDEN)
  const [animate, setAnimate] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reducedMotion = useReducedMotion()
  const animateUnderline = animate && !reducedMotion

  const measure = () => {
    const activeIndex = site.nav.findIndex((item) => isActive(item.href))
    const el = linkRefs.current[activeIndex]
    setUnderline(
      el
        ? { left: el.offsetLeft, width: el.offsetWidth, visible: true }
        : HIDDEN,
    )
  }

  useLayoutEffect(() => {
    measure()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true))
    window.addEventListener("resize", measure)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener("resize", measure)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [menuOpen])

  return (
    <>
      <header
        style={{ viewTransitionName: vt.header }}
        className="sticky top-0 z-50 bg-frost backdrop-blur-frost"
      >
        <div className="column">
          <div className="flex h-[72px] items-center justify-between shadow-[inset_0_-1px_0_var(--color-edge)] lg:h-[104px]">
            <div className="flex min-w-0 flex-col max-lg:pb-1 lg:flex-row lg:items-baseline lg:gap-4">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="truncate text-lg font-medium tracking-[-0.02em] transition-colors duration-150 motion-reduce:transition-none lg:text-[30px]/[1.2] lg:tracking-[-0.025em]"
              >
                {site.name}
              </Link>
              <span className="truncate text-[13px] text-label tabular-nums lg:text-[30px]/[1.2] lg:font-medium lg:text-soft">
                {coordinates}
              </span>
            </div>

            <nav
              aria-label="Main"
              className="relative hidden h-full gap-8 text-base/[1.5] font-medium lg:flex"
            >
              {site.nav.map((item, index) => {
                const active = isActive(item.href)
                return (
                  <Link
                    ref={(el) => {
                      linkRefs.current[index] = el
                    }}
                    key={item.label}
                    href={item.href}
                    transitionTypes={
                      item.href === "/" && onProject ? NAV.back : NAV.switch
                    }
                    onClick={
                      item.href === "/" && onProject ? restoreScroll : undefined
                    }
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center transition-colors duration-150 motion-reduce:transition-none",
                      active ? "text-ink-strong" : "text-label hover:text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute bottom-0 h-px bg-ink-strong",
                  animateUnderline &&
                    "transition-[left,width,opacity] duration-300 ease-out",
                )}
                style={{
                  left: underline.left,
                  width: underline.width,
                  opacity: underline.visible ? 1 : 0,
                }}
              />
            </nav>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              data-open={menuOpen ? "" : undefined}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="group -mr-2.5 flex size-11 items-center justify-center text-ink lg:hidden"
            >
              <span aria-hidden="true" className="relative block h-3 w-[18px]">
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-[3.25px] bg-current transition-transform duration-200 ease-out group-data-open:translate-y-0 group-data-open:rotate-45 motion-reduce:transition-none" />
                <span className="absolute inset-x-0 top-1/2 h-[1.5px] translate-y-[3.25px] bg-current transition-transform duration-200 ease-out group-data-open:translate-y-0 group-data-open:-rotate-45 motion-reduce:transition-none" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <nav
        id="mobile-menu"
        data-open={menuOpen ? "" : undefined}
        inert={!menuOpen}
        aria-label="Navigation"
        className={cn(
          "fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-frost backdrop-blur-frost transition-[opacity,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden",
          menuOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="column flex flex-col gap-5 pt-8 pb-8">
          {site.nav.map((item, index) => {
            const active = isActive(item.href)
            return (
              <li
                key={item.label}
                style={{
                  transitionDelay: menuOpen
                    ? `${60 + index * 40}ms`
                    : undefined,
                }}
                className={cn(
                  "transition-[opacity,translate] duration-500 ease-morph motion-reduce:transition-none",
                  menuOpen ? "opacity-100" : "translate-y-2 opacity-0",
                )}
              >
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block text-[32px] font-medium tracking-[-0.03em] transition-colors",
                    active ? "text-ink-strong" : "text-label hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

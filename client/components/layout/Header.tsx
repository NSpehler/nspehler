"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

import { formatCoordinates } from "@/lib/coordinates"
import { HeaderFragment } from "@/lib/datocms/commonFragments"
import { type FragmentOf, readFragment } from "@/lib/datocms/graphql"
import { linkResolver } from "@/lib/linkResolver"
import { cn } from "@/lib/utils"

type Props = {
  data: FragmentOf<typeof HeaderFragment>
}

type Underline = { left: number; width: number; visible: boolean }
type MobileMenuState = { open: boolean; pathname: string }

const HIDDEN: Underline = { left: 0, width: 0, visible: false }

export const Header = ({ data }: Props) => {
  const header = readFragment(HeaderFragment, data)
  const pathname = usePathname()

  const coordinates = formatCoordinates({
    lat: header.location.latitude,
    lng: header.location.longitude,
  })

  const isActive = (slug: string | null | undefined) =>
    (slug && pathname.includes(slug)) || (!slug && pathname === "/")

  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const [underline, setUnderline] = useState<Underline>(HIDDEN)
  const [animate, setAnimate] = useState(false)
  const [mobileMenu, setMobileMenu] = useState<MobileMenuState>({
    open: false,
    pathname,
  })

  const menuOpen = mobileMenu.open && mobileMenu.pathname === pathname
  const closeMenu = () =>
    setMobileMenu((current) => ({ ...current, open: false }))
  const toggleMenu = () =>
    setMobileMenu((current) =>
      current.open && current.pathname === pathname
        ? { ...current, open: false }
        : { open: true, pathname },
    )

  const measure = () => {
    const activeIndex = header.links.findIndex((item) =>
      isActive("slug" in item.link ? item.link.slug : undefined),
    )
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

  // Escape to close while the menu is open. Scroll lock is handled in CSS
  // via `html:has(#mobile-menu[aria-hidden="false"])` so it self-releases at
  // the md breakpoint without any matchMedia wiring.
  useEffect(() => {
    if (!menuOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [menuOpen])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex flex-col bg-white/40 backdrop-blur-md md:h-auto dark:bg-black/40",
        { "h-dvh": menuOpen },
      )}
    >
      <div className="relative mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col px-5 md:px-8">
        <div
          className={cn(
            "relative shrink-0 border-b transition-colors md:border-b-0",
            {
              "border-neutral-200 dark:border-neutral-800": !menuOpen,
              "border-transparent": menuOpen,
            },
          )}
        >
          <div className="relative z-50 flex items-start justify-between py-5 md:py-8">
            <div className="min-w-0 flex-1 overflow-hidden md:flex md:flex-none md:flex-wrap md:items-center md:gap-4 md:overflow-visible">
              <Link
                href="/"
                onClick={closeMenu}
                className="block text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl dark:text-white"
              >
                {header.title}
              </Link>
              <span className="block truncate text-2xl font-medium text-neutral-300 tabular-nums md:text-3xl dark:text-neutral-600">
                {coordinates}
              </span>
            </div>
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                data-open={menuOpen ? "" : undefined}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="group relative -top-1 -right-1 inline-flex size-10 items-center justify-center text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
              >
                <span aria-hidden="true" className="relative block size-4">
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-[3px] bg-current transition-transform duration-200 ease-out group-data-open:translate-y-0 group-data-open:rotate-45" />
                  <span className="absolute inset-x-0 top-1/2 h-px translate-y-[3px] bg-current transition-transform duration-200 ease-out group-data-open:translate-y-0 group-data-open:-rotate-45" />
                </span>
              </button>
            </div>
          </div>

          <nav
            aria-label="Navigation"
            className="relative hidden border-b border-neutral-200 md:flex md:gap-8 dark:border-neutral-800"
          >
            {header.links.map((item, index) => {
              const active = isActive(
                "slug" in item.link ? item.link.slug : undefined,
              )
              return (
                <Link
                  ref={(el) => {
                    linkRefs.current[index] = el
                  }}
                  key={item.title}
                  href={linkResolver(item.link)}
                  className={cn(
                    "inline-flex items-center pb-5 text-base font-medium transition-colors",
                    {
                      "text-neutral-900 dark:text-white": active,
                      "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white":
                        !active,
                    },
                  )}
                >
                  {item.title}
                </Link>
              )
            })}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -bottom-px h-px bg-neutral-900 dark:bg-white",
                {
                  "transition-[left,width,opacity] duration-300 ease-out":
                    animate,
                },
              )}
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.visible ? 1 : 0,
              }}
            />
          </nav>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            aria-hidden={!menuOpen}
            className="min-h-0 flex-1 overflow-y-auto mask-[linear-gradient(to_bottom,transparent_0,black_1rem,black_calc(100%-2rem),transparent_100%)] pt-6 pb-12 [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden"
          >
            <ul className="flex flex-col gap-6">
              {header.links.map((item) => {
                const active = isActive(
                  "slug" in item.link ? item.link.slug : undefined,
                )
                return (
                  <li key={item.title}>
                    <Link
                      href={linkResolver(item.link)}
                      onClick={closeMenu}
                      className={cn(
                        "block text-4xl font-medium tracking-tight transition-colors",
                        {
                          "text-neutral-900 dark:text-white": active,
                          "text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white":
                            !active,
                        },
                      )}
                    >
                      {item.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

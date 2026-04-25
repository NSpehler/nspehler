"use client"

import { formatCoordinates } from "@/lib/coordinates"
import { HeaderFragment } from "@/lib/datocms/commonFragments"
import { type FragmentOf, readFragment } from "@/lib/datocms/graphql"
import { linkResolver } from "@/lib/linkResolver"
import { cn } from "@/lib/utils"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { MenuIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"

type Props = {
  data: FragmentOf<typeof HeaderFragment>
}

type Underline = { left: number; width: number; visible: boolean }

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

  return (
    <header className="relative">
      <Menu>
        {({ open }) => (
          <div className="relative">
            <div className="relative z-50 flex items-start justify-between pt-8 pb-2 lg:py-10">
              <div className="min-w-0 lg:flex lg:shrink-0 lg:flex-wrap lg:items-center lg:space-x-4">
                <Link
                  href="/"
                  className="block text-3xl text-gray-900 dark:text-white"
                >
                  {header.title}
                </Link>
                <span className="block truncate text-2xl text-gray-300 sm:text-3xl dark:text-gray-500">
                  {coordinates}
                </span>
              </div>
              <div className="flex items-center lg:hidden">
                <MenuButton
                  aria-label="Open menu"
                  className="group relative -right-2 inline-flex size-10 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-100 data-open:outline-none dark:text-white dark:hover:bg-gray-900"
                >
                  <MenuIcon
                    className="absolute size-6 transition-opacity duration-200 ease-out group-data-open:opacity-0"
                    aria-hidden="true"
                  />
                  <XIcon
                    className="absolute size-6 opacity-0 transition-opacity duration-200 ease-out group-data-open:opacity-100"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>
            </div>

            <div
              aria-hidden="true"
              className={cn(
                "fixed inset-0 z-30 backdrop-blur-xs transition-opacity duration-200 ease-out lg:hidden",
                {
                  "opacity-100": open,
                  "pointer-events-none opacity-0": !open,
                },
              )}
            />

            <MenuItems
              transition
              className="absolute inset-x-0 top-full z-40 mt-2 origin-top rounded-2xl border border-gray-200 bg-white p-2 shadow-lg transition duration-200 ease-out focus:outline-none data-closed:-translate-y-2 data-closed:opacity-0 lg:hidden dark:border-gray-600 dark:bg-black"
            >
              {header.links.map((item) => {
                const active = isActive(
                  "slug" in item.link ? item.link.slug : undefined,
                )
                return (
                  <MenuItem key={item.title}>
                    <Link
                      href={linkResolver(item.link)}
                      className={cn(
                        "block rounded-xl px-3 py-2.5 text-base font-medium transition-colors",
                        "data-focus:bg-gray-100 dark:data-focus:bg-gray-900",
                        {
                          "text-gray-900 dark:text-white": active,
                          "text-gray-500 data-focus:text-gray-900 dark:text-gray-400 dark:data-focus:text-white":
                            !active,
                        },
                      )}
                    >
                      {item.title}
                    </Link>
                  </MenuItem>
                )
              })}
            </MenuItems>
          </div>
        )}
      </Menu>

      <nav
        className="relative hidden border-b border-gray-200 lg:flex lg:space-x-8 dark:border-gray-600"
        aria-label="Navigation"
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
                "inline-flex items-center pb-5 text-lg font-medium transition-colors",
                {
                  "text-gray-900 dark:text-white": active,
                  "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100":
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
            "pointer-events-none absolute -bottom-px h-px bg-gray-600 dark:bg-white",
            {
              "transition-[left,width,opacity] duration-300 ease-out": animate,
            },
          )}
          style={{
            left: underline.left,
            width: underline.width,
            opacity: underline.visible ? 1 : 0,
          }}
        />
      </nav>
    </header>
  )
}

import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { Disclosure } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { toDMC } from "coordinates-parser"

import { linkResolver } from "@/lib/linkResolver"

export const Header = ({ header }) => {
  const { asPath: location } = useRouter()

  const coordinates = toDMC({
    lat: header.location.latitude,
    lng: header.location.longitude,
  })

  return (
    <Disclosure as="header">
      {({ open }) => (
        <>
          <div className="relative flex justify-between items-start pt-8 pb-2 lg:py-10">
            <div className="relative z-10 flex">
              <div className="flex-shrink-0 lg:flex lg:flex-wrap lg:items-center lg:space-x-4">
                <Link href="/">
                  <a className="block text-3xl text-gray-900 dark:text-white">
                    {header.title}
                  </a>
                </Link>
                <span className="text-3xl text-gray-300 dark:text-gray-500">
                  {coordinates}
                </span>
              </div>
            </div>
            <div className="relative z-10 flex items-center lg:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="relative -right-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-300">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </div>
          <nav
            className="hidden lg:flex lg:space-x-8 border-b border-gray-200 dark:border-gray-600"
            aria-label="Navigation"
          >
            {header.links.map((item, index) => (
              <Link
                href={linkResolver(item.link)}
                key={index}
              >
                <a
                  className={`${
                    (location.includes(item.link.slug) || (!item.link.slug && location === `/`))
                      ? `text-gray-900 border-gray-600 dark:text-white dark:border-white`
                      : `text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 border-transparent`
                  } relative top-[1px] border-b inline-flex pb-5 items-center text-lg font-medium transition-all`}
                >
                  {item.title}
                </a>
              </Link>
            ))}
          </nav>
          <Disclosure.Panel
            as="nav"
            className="lg:hidden"
            aria-label="Navigation"
          >
            <div className="pt-4 space-y-4">
              {header.links.map((item, index) => (
                <Link
                  href={linkResolver(item.link)}
                  key={index}
                >
                  <a
                    className={`${
                      (location.includes(item.link.slug) || (!item.link.slug && location === `/`))
                        ? `text-gray-900 dark:text-white`
                        : `text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100`
                    } block text-lg font-medium transition-all`}
                  >
                    {item.title}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

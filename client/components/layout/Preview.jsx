import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ArrowRightOnRectangleIcon, BoltIcon } from "@heroicons/react/24/outline"

export const Preview = () => {
  const { asPath } = useRouter()

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="p-2 rounded-lg bg-gray-500 shadow-lg sm:p-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-gray-600">
                  <BoltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
                <p className="ml-3 sm:mr-3 font-medium text-white">
                  Live preview mode
                </p>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                <Link
                  href={`/api/exit-preview?redirect=${asPath}`}
                  className="-mr-1 flex p-2 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <span className="sr-only">Exit preview</span>
                  <ArrowRightOnRectangleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
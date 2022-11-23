import React from "react"
import Image from "next/image"

export const Social = ({ title, link, icon }) => (
  <a
    href={link}
    className="text-gray-400 hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">{title}</span>
    <Image
      src={icon}
      alt={title}
      width={24}
      height={24}
      className="h-6 w-6 hover:opacity-80 transition-all"
      aria-hidden="true"
    />
  </a>
)

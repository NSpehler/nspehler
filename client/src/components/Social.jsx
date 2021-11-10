import * as React from "react"

export const Social = ({ title, link, icon }) => (
  <a
    href={link}
    className="text-gray-400 hover:text-gray-500"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className="sr-only">{title}</span>
    <img
      src={icon}
      alt={title}
      className="h-6 w-6 hover:opacity-80 transition-all"
      aria-hidden="true"
    />
  </a>
)

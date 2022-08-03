import React from "react"

export const Button = ({ title, link }) => (
  <a
    href={link}
    className="inline-flex py-1 border-b text-2xl font-medium text-gray-900 hover:text-gray-600 border-gray-900 hover:border-gray-600 dark:text-white dark:hover:text-gray-300 dark:border-white dark:hover:border-gray-300 mt-8 transition-all"
    target="_blank"
    rel="noopener noreferrer"
  >
    {title}
  </a>
)

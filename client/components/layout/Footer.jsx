import React from "react"

import { Social } from "@/components/utils"

export const Footer = ({ footer }) => (
  <footer className="border-t border-gray-200 dark:border-gray-600">
    <div className="py-12">
      <div className="flex justify-start space-x-6">
        {footer.social.map((item, index) => (
          <Social
            title={item.title}
            link={item.link}
            icon={item.icon.url}
            key={index}
          />
        ))}
      </div>
    </div>
  </footer>
)

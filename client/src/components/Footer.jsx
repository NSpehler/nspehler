import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Social } from "./"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      footer: datoCmsFooter {
        ...Footer
      }
    }
  `)

  return (
    <footer className="border-t border-gray-200 dark:border-gray-600">
      <div className="py-12">
        <div className="flex justify-start space-x-6">
          {data.footer.social.map((item, index) => (
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
}

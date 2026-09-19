import { site } from "@/content/site"

import { SocialLink } from "@/components/utils"

import { ThemeSwitcher } from "./ThemeSwitcher"

export const Footer = () => (
  <footer className="border-neutral-200 dark:border-neutral-800 border-t">
    <div className="flex flex-wrap items-center justify-between gap-6 py-8 md:py-12">
      <div className="flex justify-start gap-6">
        {site.social.map((item) => (
          <SocialLink key={item.title} {...item} />
        ))}
      </div>
      <ThemeSwitcher />
    </div>
  </footer>
)

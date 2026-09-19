import { site } from "@/content/site"

import { ThemeSwitcher } from "./ThemeSwitcher"

export const Footer = () => (
  <footer className="mt-auto flex h-20 shrink-0 items-center justify-between border-t border-hairline text-sm text-body md:h-22">
    <div className="flex gap-5 md:gap-6">
      {site.social.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-150 hover:text-ink motion-reduce:transition-none"
        >
          {label}
        </a>
      ))}
    </div>
    <ThemeSwitcher />
  </footer>
)

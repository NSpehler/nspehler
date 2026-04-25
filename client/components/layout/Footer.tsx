import { Social } from "@/components/utils"
import { FooterFragment } from "@/lib/datocms/commonFragments"
import { type FragmentOf, readFragment } from "@/lib/datocms/graphql"
import { ThemeSwitcher } from "./ThemeSwitcher"

type Props = {
  data: FragmentOf<typeof FooterFragment>
}

export const Footer = ({ data }: Props) => {
  const footer = readFragment(FooterFragment, data)

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="flex flex-wrap items-center justify-between gap-6 py-8 md:py-12">
        <div className="flex justify-start gap-6">
          {footer.social.map((item) => (
            <Social
              key={item.title}
              title={item.title}
              link={item.link}
              icon={item.icon.url}
            />
          ))}
        </div>
        <ThemeSwitcher />
      </div>
    </footer>
  )
}

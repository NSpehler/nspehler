import { ThemeSwitcher } from "@/components/layout/ThemeSwitcher"
import { Social } from "@/components/ui"
import { FooterFragment } from "@/lib/datocms/commonFragments"
import { type FragmentOf, readFragment } from "@/lib/datocms/graphql"

type Props = {
  data: FragmentOf<typeof FooterFragment>
}

export const Footer = ({ data }: Props) => {
  const footer = readFragment(FooterFragment, data)

  return (
    <footer className="border-t border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between gap-6 py-12">
        <div className="flex justify-start space-x-6">
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

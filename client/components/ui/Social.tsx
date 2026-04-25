import Image from "next/image"

type Props = {
  title: string
  link: string
  icon: string
}

export const Social = ({ title, link, icon }: Props) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <span className="sr-only">{title}</span>
    <Image
      src={icon}
      alt={title}
      width={24}
      height={24}
      className="size-6 transition hover:opacity-70 dark:hover:opacity-100 dark:hover:brightness-125"
      aria-hidden="true"
    />
  </a>
)

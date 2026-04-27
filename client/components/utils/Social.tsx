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
      alt=""
      width={24}
      height={24}
      className="size-6 opacity-60 transition-opacity hover:opacity-100"
      aria-hidden="true"
    />
  </a>
)

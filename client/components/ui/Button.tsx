type Props = {
  title: string
  link: string
}

export const Button = ({ title, link }: Props) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-8 inline-flex border-b border-gray-900 py-1 text-2xl font-medium text-gray-900 transition-all hover:border-gray-600 hover:text-gray-600 dark:border-white dark:text-white dark:hover:border-gray-300 dark:hover:text-gray-300"
  >
    {title}
  </a>
)

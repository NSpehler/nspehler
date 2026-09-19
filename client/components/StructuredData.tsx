type Props = {
  id: string
  data: unknown
}

export const StructuredData = ({ id, data }: Props) => {
  if (data == null) return null
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

import { linkResolver } from "@/lib/linkResolver"

const handler = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.setHeader("Content-Type", "application/json")
  if (req.method === "OPTIONS") return res.status(200).send("ok")

  const { item, itemType } = req.body
  const link = {
    _modelApiKey: itemType.attributes.api_key,
    slug: item.attributes.slug ? item.attributes.slug : ""
  }
  const url = linkResolver(link)
  if (!url) return res.status(200).json({ previewLinks: [] })

  const previewLinks = [
    {
      label: "Published version",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/exit-preview?redirect=${url}`,
    },
    {
      label: "Live preview",
      url: `${process.env.NEXT_PUBLIC_APP_URL}/api/preview?redirect=${url}&secret=${process.env.NEXT_DATOCMS_PREVIEW_SECRET}`,
    },
  ]

  return res.status(200).json({ previewLinks })
}

export default handler
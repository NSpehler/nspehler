import { linkResolver } from "@/lib/linkResolver"
import { deserializeRawItem } from "@datocms/rest-client-utils"
import { type NextRequest, NextResponse } from "next/server"
import {
  handleUnexpectedError,
  invalidRequestResponse,
  withCORS,
} from "../utils"

export async function OPTIONS() {
  return new Response("OK", withCORS())
}

type PreviewLink = {
  label: string
  url: string
  reloadPreviewOnRecordUpdate?: boolean | { delayInMs: number }
}

type WebPreviewsResponse = {
  previewLinks: PreviewLink[]
}

/**
 * Implements the Previews webhook required by the DatoCMS "Web Previews"
 * plugin.
 *
 * https://www.datocms.com/marketplace/plugins/i/datocms-plugin-web-previews#the-previews-webhook
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const authorization = request.headers.get("Authorization")
    const token = authorization?.split(" ")[1]

    if (!token || token !== process.env.SECRET_API_TOKEN) {
      return invalidRequestResponse("Invalid token", 401)
    }

    const { item, itemType } = await request.json()
    const deserializedItem = deserializeRawItem(item)
    const slug = (deserializedItem.attributes.slug as string | undefined) ?? ""

    const url = linkResolver({
      _modelApiKey: itemType.attributes.api_key,
      slug,
    })

    const response: WebPreviewsResponse = { previewLinks: [] }

    if (url) {
      response.previewLinks.push({
        label: "Live preview",
        url: new URL(
          `/api/draft-mode/enable?redirect=${url}&token=${token}`,
          request.url,
        ).toString(),
      })

      if (item.meta.status !== "draft") {
        response.previewLinks.push({
          label: "Published version",
          url: new URL(
            `/api/draft-mode/disable?redirect=${url}`,
            request.url,
          ).toString(),
        })
      }
    }

    return NextResponse.json(response, withCORS())
  } catch (error) {
    return handleUnexpectedError(error)
  }
}

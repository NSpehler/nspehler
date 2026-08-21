import { cacheTag } from "@/lib/datocms/executeQuery"
import { revalidateTag } from "next/cache"
import type { NextRequest, NextResponse } from "next/server"
import {
  handleUnexpectedError,
  invalidRequestResponse,
  successfulResponse,
} from "../utils"

/*
 * Receives "Cache Tag Invalidation" events from a DatoCMS webhook and
 * invalidates the Next.js Data Cache for everything tagged with "datocms".
 *
 * https://www.datocms.com/docs/next-js/using-cache-tags
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const authorization = request.headers.get("Authorization")
    const token = authorization?.split(" ")[1]

    if (!token || token !== process.env.SECRET_API_TOKEN) {
      return invalidRequestResponse("Invalid token", 401)
    }

    revalidateTag(cacheTag, "default")

    return successfulResponse()
  } catch (error) {
    return handleUnexpectedError(error)
  }
}

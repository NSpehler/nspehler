import { ApiError } from "@datocms/cma-client"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { serializeError } from "serialize-error"

export function withCORS(responseInit?: ResponseInit): ResponseInit {
  return {
    ...responseInit,
    headers: {
      ...responseInit?.headers,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  }
}

export function handleUnexpectedError(error: unknown) {
  console.error(error)

  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        request: error.request,
        response: error.response,
      },
      withCORS({ status: 500 }),
    )
  }

  return invalidRequestResponse(serializeError(error), 500)
}

export function invalidRequestResponse(error: unknown, status = 422) {
  return NextResponse.json(
    {
      success: false,
      error,
    },
    withCORS({ status }),
  )
}

export function successfulResponse(data?: unknown, status = 200) {
  return NextResponse.json(
    {
      success: true,
      data,
    },
    withCORS({ status }),
  )
}

/**
 * Re-applies the `__prerender_bypass` cookie set by `draft.enable()` /
 * `draft.disable()` with the `partitioned` attribute, so that Draft Mode
 * survives inside the Web Previews plugin's iframe under CHIPS.
 *
 * https://developers.google.com/privacy-sandbox/3pcd/chips
 */
export async function makeDraftModeWorkWithinIframes() {
  const cookie = (await cookies()).get("__prerender_bypass")!

  ;(await cookies()).set({
    name: "__prerender_bypass",
    value: cookie?.value,
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none",
    partitioned: true,
  })
}

export function isRelativeUrl(path: string): boolean {
  try {
    new URL(path)
    return false
  } catch {
    try {
      new URL(path, "http://example.com")
      return true
    } catch {
      return false
    }
  }
}

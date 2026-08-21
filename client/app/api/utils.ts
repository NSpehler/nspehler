import { ApiError } from "@datocms/cma-client"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createHash, timingSafeEqual } from "node:crypto"

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

// These responses are CORS-open, so the body must not carry stacks, request
// headers or anything else internal.
export function handleUnexpectedError(error: unknown) {
  if (error instanceof ApiError) {
    console.error("DatoCMS API error", {
      message: error.message,
      status: error.response?.status,
      url: error.request?.url,
    })
  } else {
    console.error(error)
  }

  return invalidRequestResponse("Internal server error", 500)
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
  const store = await cookies()
  const value = store.get("__prerender_bypass")?.value

  const attributes = {
    name: "__prerender_bypass",
    httpOnly: true,
    path: "/",
    secure: true,
    sameSite: "none" as const,
    partitioned: true,
  }

  // `draft.disable()` blanks the cookie rather than dropping it.
  if (!value) {
    store.set({ ...attributes, value: "", maxAge: 0 })
    return
  }

  store.set({ ...attributes, value })
}

const RELATIVE_URL_BASE = "http://relative.invalid"

// Resolve like a browser would: `//evil.com` and `/\evil.com` do not parse as
// absolute URLs on their own, but they do leave the origin.
export function isRelativeUrl(path: string): boolean {
  try {
    return new URL(path, RELATIVE_URL_BASE).origin === RELATIVE_URL_BASE
  } catch {
    return false
  }
}

// Hashed first because `timingSafeEqual` needs equal-length buffers.
export function matchesSecretToken(token: string | null | undefined): boolean {
  const secret = process.env.SECRET_API_TOKEN

  if (!token || !secret) return false

  return timingSafeEqual(
    createHash("sha256").update(token).digest(),
    createHash("sha256").update(secret).digest(),
  )
}

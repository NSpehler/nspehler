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

/**
 * Logs the real error and tells the caller nothing about it.
 *
 * These responses carry `Access-Control-Allow-Origin: *`, so whatever goes in
 * the body is readable by any origin. That ruled out both of the things this
 * used to return: a serialized error carries a stack, and `ApiError.request`
 * carries the outgoing `headers`, which is where the DatoCMS token lives.
 */
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

  // `draft.disable()` blanks the cookie rather than dropping it, so an empty
  // value here means Draft Mode was just turned off. Re-setting it as-is would
  // leave a live, empty partitioned cookie behind; expiring it is what actually
  // clears the copy the browser is holding.
  if (!value) {
    store.set({ ...attributes, value: "", maxAge: 0 })
    return
  }

  store.set({ ...attributes, value })
}

/**
 * Base used only to resolve candidate redirect targets. Its host is what a
 * same-origin path must still resolve to, so it has to be a name nothing can
 * legitimately reach.
 */
const RELATIVE_URL_BASE = "http://relative.invalid"

/**
 * True only when `path` stays on our own origin once a browser resolves it.
 *
 * Rejecting strings that parse as absolute URLs is not enough: `//evil.com`,
 * `/\evil.com` and a leading-whitespace variant all fail to parse on their own
 * yet resolve to another origin, which made this an open redirect. Resolving
 * against a fixed base and comparing the origin is what browsers actually do.
 */
export function isRelativeUrl(path: string): boolean {
  try {
    return new URL(path, RELATIVE_URL_BASE).origin === RELATIVE_URL_BASE
  } catch {
    return false
  }
}

/**
 * Constant-time check of a caller-supplied token against `SECRET_API_TOKEN`.
 *
 * Hashing both sides first keeps the buffers the same length, so the comparison
 * cannot leak the secret's length, and `timingSafeEqual` keeps it from leaking
 * the matching prefix. Fails closed when either side is missing, so an unset
 * secret rejects every caller rather than accepting one.
 */
export function matchesSecretToken(token: string | null | undefined): boolean {
  const secret = process.env.SECRET_API_TOKEN

  if (!token || !secret) return false

  return timingSafeEqual(
    createHash("sha256").update(token).digest(),
    createHash("sha256").update(secret).digest(),
  )
}

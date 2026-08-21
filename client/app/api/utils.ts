import { ApiError } from "@datocms/cma-client"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

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

/**
 * Determine whether a user-supplied redirect target is safe to follow — i.e. it
 * points to the same host as the current request.
 *
 * This guards against open-redirect attacks. A naive `url.startsWith('http')`
 * check — and even a plain "is it a relative URL?" check — fails to catch
 * protocol-relative targets like `//evil.com` or backslash variants like
 * `/\evil.com`, both of which browsers happily send off-site.
 *
 * Instead, we resolve the candidate against the current request URL and require
 * the resulting hostname to match. Relative paths (`/foo`, `/a?b=1#c`) resolve
 * to the same host and pass; anything that escapes to another host — or fails to
 * parse — is rejected. The scheme is irrelevant: we only compare hostnames.
 */
export function isSafeRedirectUrl(candidate: string, requestUrl: URL): boolean {
  try {
    const target = new URL(candidate, requestUrl)
    return target.hostname === requestUrl.hostname
  } catch {
    return false
  }
}

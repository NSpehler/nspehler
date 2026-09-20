"use client"

import {
  createContext,
  type ReactNode,
  type RefCallback,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react"

import type { Shot } from "@/content/types"

import { Lightbox, type Thumb } from "./Lightbox"

type Entry = { element: HTMLElement | null; sizes: string }

type Api = {
  shots: readonly Shot[]
  open: (index: number) => void
  register: (index: number, sizes: string) => RefCallback<HTMLElement>
}

const Context = createContext<Api | null>(null)

type Props = {
  shots: readonly Shot[]
  children: ReactNode
}

export const LightboxProvider = ({ shots, children }: Props) => {
  const [index, setIndex] = useState<number | null>(null)
  const entries = useRef<Entry[]>([])

  const register = useCallback(
    (position: number, sizes: string): RefCallback<HTMLElement> =>
      (element) => {
        entries.current[position] = { element, sizes }
      },
    [],
  )

  const getThumb = useCallback((position: number): Thumb | null => {
    const entry = entries.current[position]
    const element = entry?.element
    if (!entry || !element) return null
    const box = element.getBoundingClientRect()
    const visible =
      box.bottom > 0 &&
      box.right > 0 &&
      box.top < window.innerHeight &&
      box.left < window.innerWidth
    if (!visible) return null
    const style = getComputedStyle(element)
    const { offsetWidth: width, offsetHeight: height } = element
    return {
      rect: {
        top: box.top + (box.height - height) / 2,
        left: box.left + (box.width - width) / 2,
        width,
        height,
      },
      angle: angleOf(style),
      radius: radiusOf(style.borderTopLeftRadius, width),
      sizes: entry.sizes,
    }
  }, [])

  const close = useCallback(() => setIndex(null), [])

  return (
    <Context value={{ shots, open: setIndex, register }}>
      {children}
      <Lightbox
        shots={shots}
        index={index}
        onIndexChange={setIndex}
        onClose={close}
        getThumb={getThumb}
      />
    </Context>
  )
}

const angleOf = ({ rotate, transform }: CSSStyleDeclaration) => {
  const tilt = Number.parseFloat(rotate) || 0
  if (transform === "none") return tilt
  const { a, b } = new DOMMatrixReadOnly(transform)
  return tilt + (Math.atan2(b, a) * 180) / Math.PI
}

const radiusOf = (radius: string, width: number) => {
  const value = radius.split(" ")[0] ?? ""
  const number = Number.parseFloat(value) || 0
  return value.endsWith("%") ? (number / 100) * width : number
}

export const useLightbox = () => {
  const api = useContext(Context)
  if (!api) throw new Error("useLightbox needs a LightboxProvider")
  return api
}

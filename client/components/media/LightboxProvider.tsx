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
    const rect = entry?.element?.getBoundingClientRect()
    if (!entry || !rect) return null
    const visible =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth
    return visible ? { rect, sizes: entry.sizes } : null
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

export const useLightbox = () => {
  const api = useContext(Context)
  if (!api) throw new Error("useLightbox needs a LightboxProvider")
  return api
}

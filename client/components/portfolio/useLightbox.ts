import { useCallback, useRef, useState } from "react"

/** Open/close state plus thumbnail registry shared by cards and galleries. */
export const useLightbox = () => {
  const [index, setIndex] = useState<number | null>(null)
  const thumbs = useRef<Array<HTMLElement | null>>([])

  const registerThumb = useCallback(
    (position: number) => (element: HTMLElement | null) => {
      thumbs.current[position] = element
    },
    [],
  )

  const getThumbRect = useCallback((position: number) => {
    const rect = thumbs.current[position]?.getBoundingClientRect()
    if (!rect) return null
    const visible =
      rect.bottom > 0 &&
      rect.right > 0 &&
      rect.top < window.innerHeight &&
      rect.left < window.innerWidth
    return visible ? rect : null
  }, [])

  const close = useCallback(() => setIndex(null), [])

  return { index, open: setIndex, close, registerThumb, getThumbRect }
}

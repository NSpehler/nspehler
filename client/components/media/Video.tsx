"use client"

import { PlayIcon } from "lucide-react"
import Image, { getImageProps } from "next/image"
import { useEffect, useRef, useState } from "react"

import type { Video as VideoData } from "@/content/types"

type Props = {
  video: VideoData
}

const videoSizes = "(min-width: 1440px) 752px, (min-width: 1024px) 58vw, 100vw"

export const Video = ({ video }: Props) => {
  const [playing, setPlaying] = useState(false)
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (playing) ref.current?.focus()
  }, [playing])

  if (playing) {
    const { src: poster } = getImageProps({
      src: video.poster.src,
      alt: "",
      sizes: videoSizes,
    }).props
    return (
      <video
        ref={ref}
        src={video.src}
        poster={poster}
        autoPlay
        controls
        playsInline
        className="block aspect-video w-full rounded-2xl bg-[#0a0a0a] object-cover ring-1 ring-bleed"
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${video.title}, ${video.duration}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-[#0a0a0a] ring-1 ring-bleed"
    >
      <Image
        src={video.poster.src}
        alt={video.poster.alt}
        sizes={videoSizes}
        placeholder="blur"
        className="size-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 m-auto flex size-16 items-center justify-center rounded-full bg-[#fff] shadow-play transition-transform duration-200 ease-out group-hover:scale-110 group-focus-visible:scale-110 motion-reduce:transition-none"
      >
        <PlayIcon className="ml-[3px] size-[22px] fill-[#0a0a0a] text-[#0a0a0a]" />
      </span>
    </button>
  )
}

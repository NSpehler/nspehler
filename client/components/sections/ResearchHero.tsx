import Image from "next/image"
import { Fragment } from "react"

import { sizes } from "@/components/media/sizes"
import { Morph } from "@/components/motion/Morph"
import { vt } from "@/components/motion/names"
import { ArrowLink } from "@/components/ui/ArrowLink"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { Pill } from "@/components/ui/Pill"
import { research } from "@/content/research"
import { cn } from "@/lib/utils"

const pages = [
  "paper-back left-[12.3%] top-[6.67%] shadow-paper [--tilt:-8deg] [--from:31.67%_3.53%]",
  "paper-back left-[41.15%] top-[4.29%] shadow-paper [--tilt:5deg] [--from:-30.83%_6.47%] [--stagger:90ms]",
  "left-[26.9%] top-[9.5%] shadow-paper-front",
]

export const ResearchHero = () => (
  <section
    aria-label={research.title}
    className="grid gap-y-10 pt-10 pb-14 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:pt-18 lg:pb-28"
  >
    <div className="flex flex-col lg:col-span-6">
      <Eyebrow>{research.eyebrow}</Eyebrow>
      <h1 className="mt-5 text-title-xl text-balance">{research.headline}</h1>
      <p className="mt-6 text-lg/[1.45] text-pretty text-body md:text-[22px]/[1.45] md:tracking-[-0.01em]">
        {research.body}
      </p>
      <div className="mt-8 flex gap-3 caption">
        {research.specs.map((spec, index) => (
          <Fragment key={spec}>
            {index > 0 && <span className="text-separator">·</span>}
            <span>{spec}</span>
          </Fragment>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
        <Pill
          link={{ label: "Read the paper", href: research.pdf }}
          external
          className="px-[26px]"
        />
        <ArrowLink
          link={{ label: "Download PDF", href: research.pdf }}
          icon="download"
          className="gap-2"
          download
        />
      </div>
    </div>
    <Morph name={vt.paper.frame}>
      <a
        href={research.pdf}
        target="_blank"
        rel="noreferrer"
        aria-label="Open the paper"
        draggable={false}
        className="mat aspect-[640/470] rounded-mat select-none lg:col-span-6 lg:col-start-7"
      >
        <span className="relative block aspect-[520/420] w-[81.25%]">
          <span
            aria-hidden="true"
            className="absolute right-[9.6%] bottom-0 left-[17.3%] h-[8.1%] rounded-full bg-[radial-gradient(closest-side,var(--paper-contact),transparent)] blur-[10px]"
          />
          {research.covers.map(({ src, alt }, index) => {
            const page = (
              <Image
                key={src.src}
                src={src}
                alt={alt}
                sizes={sizes.paper}
                draggable={false}
                className={cn(
                  "absolute aspect-[12/17] w-[46.15%] rounded-[3px] object-cover",
                  pages[index],
                )}
              />
            )
            return index === research.covers.length - 1 ? (
              <Morph key={src.src} name={vt.paper.cover}>
                {page}
              </Morph>
            ) : (
              page
            )
          })}
        </span>
      </a>
    </Morph>
  </section>
)

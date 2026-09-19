import { Eyebrow } from "@/components/ui/Eyebrow"
import { about } from "@/content/about"

export const WhatIDo = () => (
  <section
    aria-label="What I do"
    className="flex flex-col gap-6 border-t border-hairline pt-6 md:gap-8 md:pt-8"
  >
    <Eyebrow>What I do</Eyebrow>
    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
      {about.services.map(({ title, body, examples }) => (
        <div key={title} className="flex flex-col gap-3">
          <h2 className="text-[20px] font-medium tracking-[-0.01em]">
            {title}
          </h2>
          <p className="text-base/[1.55] text-pretty text-body">{body}</p>
          <span className="mt-1 caption leading-[1.6]">{examples}</span>
        </div>
      ))}
    </div>
  </section>
)

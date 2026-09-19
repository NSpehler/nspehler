import { Section } from "@/components/ui/Section"
import type { Block } from "@/content/types"

type Props = {
  block: Extract<Block, { type: "quote" }>
}

export const Quote = ({ block: { text, name, role } }: Props) => (
  <Section label="From the client" ariaLabel="Testimonial">
    <figure className="flex flex-col gap-6">
      <blockquote className="text-chapter leading-[1.3] text-pretty">
        {text}
      </blockquote>
      <figcaption className="flex flex-col gap-0.5 text-[15px]">
        <span className="font-medium">{name}</span>
        <span className="text-body">{role}</span>
      </figcaption>
    </figure>
  </Section>
)

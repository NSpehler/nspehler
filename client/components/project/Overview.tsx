import { Video } from "@/components/media/Video"
import { Section } from "@/components/ui/Section"
import type { Project } from "@/content/types"

type Props = {
  project: Project
}

export const Overview = ({ project: { overview, video } }: Props) => (
  <Section label="Overview" labelAs="h2" rule={false} ariaLabel="Overview">
    <div className="flex flex-col gap-5">
      <p className="text-lede text-pretty">{overview[0]}</p>
      <p className="text-lede text-pretty text-soft">{overview[1]}</p>
    </div>
    {video && (
      <div className="mt-8 md:mt-12">
        <Video video={video} />
      </div>
    )}
  </Section>
)

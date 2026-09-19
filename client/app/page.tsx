import { LightboxProvider } from "@/components/media/LightboxProvider"
import { PageTransition } from "@/components/motion/PageTransition"
import { AboutTeaser } from "@/components/sections/AboutTeaser"
import { ContactCta } from "@/components/sections/ContactCta"
import { Hero } from "@/components/sections/Hero"
import { NowBuilding } from "@/components/sections/NowBuilding"
import { ProjectCard } from "@/components/sections/ProjectCard"
import { ProjectRows } from "@/components/sections/ProjectRows"
import { StructuredData } from "@/components/StructuredData"
import { Eyebrow } from "@/components/ui/Eyebrow"
import { home } from "@/content/home"
import { projects } from "@/content/projects"
import { screenShot } from "@/lib/collectShots"
import { graph } from "@/lib/jsonld"

export default function Page() {
  return (
    <PageTransition>
      <StructuredData id="home" data={graph()} />
      <LightboxProvider shots={home.nowBuilding.screens.map(screenShot)}>
        <Hero />
        <section
          id="projects"
          aria-label="Featured projects"
          className="flex flex-col gap-4 md:gap-6"
        >
          <Eyebrow>Featured projects</Eyebrow>
          <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-18">
            {home.featured.map((slug, index) => (
              <ProjectCard
                key={slug}
                project={projects[slug]}
                eager={index < 2}
              />
            ))}
          </div>
        </section>
        <NowBuilding />
        <ProjectRows {...home.more} />
        <AboutTeaser />
        <ContactCta />
      </LightboxProvider>
    </PageTransition>
  )
}

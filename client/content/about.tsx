import { person, site } from "./site"

export const about = {
  title: "About me",
  description: site.description,
  structuredData: { "@context": "https://schema.org", ...person },
  content: (
    <>
      <p>
        Hey! I’m Nicolas, a full-stack developer with a passion for building
        modern web applications and front-end experiences, and a strong focus on
        automation, AI and data scraping to help scale businesses through
        technology.
      </p>
      <p>
        I’ve led Growth Engineering teams at companies like PayFit (HR tech) and
        Alma (fintech), where I focused on building automated systems and
        internal tools to drive business growth.
      </p>
      <p>
        More recently, I’ve worked as a freelance Full-Stack Engineer at Back
        Market (B2B marketplace) and Intigriti (bug bounty platform), developing
        robust web applications and marketing platforms — and I’ve also shipped
        client projects like goalGetr (ice hockey training), Nucase (home
        renovation in Norway), Smartvatten’s Solutions Advisor (sales and lead
        generation tool) and PaperDrop (job management for UK contractors).
      </p>
      <p>
        I’m also building <a href="https://analogapp.co">Analog</a>, an iPhone
        app for vinyl collectors. It identifies what’s playing on your turntable
        and uses AI to turn your record shelf into curated playlists from
        records you already own.
      </p>
      <p>
        I’m open to new client work — web apps, marketing websites, internal
        tools or growth engineering.{" "}
        <a href={`mailto:${site.email}`}>Let’s connect!</a>
      </p>
    </>
  ),
}

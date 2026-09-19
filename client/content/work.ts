import * as screenshots from "./screenshots"
import { person, site, website } from "./site"
import type { Entry } from "./types"

export const work = {
  title: "Work",
  slug: "work",
  description:
    "Over the past 15 years, I've been helping companies scale their business through technology and automation. Here are some of the highlights.",
  structuredData: {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Work",
    url: `${site.url}/work`,
    description:
      "Over the past 15 years, helping companies scale their business through technology and automation — from Growth Engineering at PayFit and Alma to freelance full-stack work at Back Market and Intigriti.",
    isPartOf: website,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      url: person.url,
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Full-Stack Engineer (Freelance)",
          description:
            "Building robust web applications and marketing platforms for B2B marketplaces and security platforms.",
        },
        {
          "@type": "Occupation",
          name: "Lead Growth Engineer",
          description:
            "Built automated systems and internal tools to drive business growth at fintech and HR-tech companies.",
        },
      ],
      alumniOf: [
        "Intigriti",
        "Back Market",
        "Alma",
        "Dolead",
        "PayFit",
        "INSEEC",
      ].map((name) => ({ "@type": "Organization", name })),
    },
  },
}

export const workEntries: readonly Entry[] = [
  {
    title: "Intigriti",
    url: "https://www.intigriti.com",
    year: 2024,
    description:
      "Intigriti is Europe’s leading bug bounty platform and penetration testing services provider. As a freelance full-stack engineer, I’ve developed Intigriti’s marketing website and blog infrastructure from the ground up, focusing on maintainability and content management efficiency.",
    highlights: [
      "Developed and maintained the marketing website using Next.js and DatoCMS, implementing a modular architecture with reusable blocks to ensure consistency and accelerate development cycles",
      "Migrated the company blog to Next.js and integrated Algolia search, significantly improving content discovery and user engagement through a seamless search experience",
      "Built cross-platform Web Components using Stencil.js to create a unified header and footer system, ensuring brand consistency across both the marketing website and the main Intigriti application",
    ],
    screenshots: screenshots.intigriti,
  },
  {
    title: "Back Market Pro",
    url: "https://pro.backmarket.com",
    year: 2023,
    description:
      "Back Market Pro is the B2B division of Back Market, the leading marketplace for refurbished electronics. As a full-stack engineer, I’ve helped build and scale the technical infrastructure to meet the unique demands of business customers across Europe and the United States.",
    highlights: [
      "Developed pro.backmarket.com using Shopify Hydrogen and Remix, featuring a fully custom checkout system integrated with Stripe",
      "Built and optimized a product catalog system to import and synchronize inventory from over 100 sellers, including real-time syncing with Algolia for efficient search and discovery",
      "Implemented a comprehensive invoicing system for both customers and sellers, including automated PDF generation",
      "Contributed to the development of various internal tools and processes to streamline operations and enhance efficiency across the organization",
      "Collaborated closely with cross-functional teams to rapidly iterate and deliver solutions tailored to the B2B market’s specific needs",
    ],
  },
  {
    title: "Alma",
    url: "https://almapay.com",
    year: 2022,
    description:
      "Alma is a technology company that makes financial solutions for commerce by developing an installment payment platform accessible to the greatest number of retailers and customers.",
    highlights: [
      "Scaled lead generation to collect and enrich a global database of e-commerce merchants",
      "Integrate AI algorithms to automate and improve internal processes",
      "Developed a state-of-the-art website using React, Next.js and DatoCMS",
    ],
    screenshots: screenshots.alma,
  },
  {
    title: "Dolead",
    url: "https://dolead.com",
    year: 2021,
    description:
      "Dolead is one of the leading players in customer acquisition across paid channels, powered by a unique marketing technology, working alongside existing marketing & sales team to accelerate growth.",
    highlights: [
      "Automate and fine-tune ad copy generation in Google Ads using GPT-3 from OpenAI",
      "Build proof of concepts to experiment and improve campaign performances at scale",
    ],
  },
  {
    title: "PayFit",
    url: "https://payfit.com",
    year: 2019,
    description:
      "PayFit simplifies payroll management and HR processes for SMBs. We have built a fast, intuitive and automated SaaS solution to help business owners and HR professionals save time and money allowing them to refocus and what really matters: their employees.",
    highlights: [
      "Developed Atlas, an internal “gold mining machine” for lead generation at scale",
      "Built over 20 automated tools to facilitate internal processes and solve problems",
      "Hired, managed and grew a talented team of Growth Engineers",
    ],
    screenshots: screenshots.payfit,
  },
  {
    title: "INSEEC",
    url: "https://www.inseec.com/en/",
    year: 2015,
    description:
      "Helping third- and fourth-year students master the art & science of digital marketing through various courses and workshops, including Digital Entrepreneurship, Digital Project Management, Design Thinking Sprint and Growth Hacking.",
  },
  {
    title: "L&S",
    url: "https://ls.agency",
    year: 2012,
    description:
      "L&S is a web agency with services ranging from web & mobile development, graphic design and marketing consulting. Handled projects for over 100 companies including Lancôme, Nespresso, Groupon, ENGIE, EDF, TomTom, DHL, SFR Business, Bouygues Telecom and more.",
    highlights: [
      "Developed state-of-the-art websites, landing pages and responsive marketing emails",
      "Created and designed iOS applications for businesses spanning multiple industries",
      "Published over a dozen apps on the App Store, with over 400,000 downloads",
    ],
  },
]

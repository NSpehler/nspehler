import catalog from "@/images/projects/back-market-pro/catalog.webp"
import contact from "@/images/projects/back-market-pro/contact.webp"
import emailNps from "@/images/projects/back-market-pro/email-nps.webp"
import emailOrder from "@/images/projects/back-market-pro/email-order.webp"
import home from "@/images/projects/back-market-pro/home.webp"
import popularDevices from "@/images/projects/back-market-pro/popular-devices.webp"
import product from "@/images/projects/back-market-pro/product.webp"
import reborn from "@/images/projects/back-market-pro/reborn.webp"
import register from "@/images/projects/back-market-pro/register.webp"
import specs from "@/images/projects/back-market-pro/specs.webp"

import type { Project } from "../types"

export const backMarketPro = {
  slug: "back-market-pro",
  name: "Back Market Pro",
  year: "2023–2024",
  subtitle:
    "Back Market Pro helps businesses buy refurbished tech at scale, cheaper and greener than new",
  facts: [
    { label: "Type", value: "B2B e-commerce platform" },
    { label: "Tech stack", value: "Shopify Hydrogen, Remix, Stripe, Algolia" },
    {
      label: "Website",
      links: [
        { label: "pro.backmarket.com", href: "https://pro.backmarket.com" },
      ],
    },
  ],
  card: {
    image: {
      src: catalog,
      alt: "Back Market Pro catalog search: MacBooks filtered by quantity, condition, brand and model",
    },
    frame: "web",
    description:
      "Back Market’s store for businesses, selling refurbished tech from over 100 sellers",
    type: "B2B e-commerce",
    stack: ["Hydrogen", "Remix", "Stripe", "Algolia"],
  },
  lead: {
    type: "figure",
    frame: "mat",
    shot: {
      src: catalog,
      alt: "Catalog search: MacBooks filtered by quantity, condition, brand and model",
      caption: "Catalog search, filtered by quantity and condition",
    },
  },
  overview: [
    "Back Market is the leading marketplace for refurbished electronics. Back Market Pro, its division for businesses, sells refurbished laptops, phones and tablets in bulk from more than 100 sellers across Europe and the US.",
    "From 2023 to 2024, as a freelance full-stack engineer, I helped build and scale the platform behind it, from the storefront and checkout to the tools sellers and the team use every day.",
  ],
  blocks: [
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: home,
          alt: "pro.backmarket.com home page: Quality tech for less than new",
          caption: "Home page",
        },
        {
          src: popularDevices,
          alt: "Product categories: tablets, laptops, desktops, MacBooks, iPhone and monitors",
          caption: "Product categories",
        },
      ],
    },
    {
      type: "cards",
      heading: "What I built",
      columns: 2,
      items: [
        {
          title: "A storefront for business buyers",
          body: "Built pro.backmarket.com on Shopify Hydrogen and Remix, with business accounts, quote requests and a fully custom Stripe checkout.",
        },
        {
          title: "A catalog from 100+ sellers",
          body: "Inventory imported and kept in sync from over 100 sellers, with instant Algolia search and filters for quantity, condition and specs.",
        },
        {
          title: "Invoices and emails, automated",
          body: "Invoices, purchase orders and credit notes generated as PDFs, plus branded email templates, in English and French.",
        },
        {
          title: "Tools for sellers and the team",
          body: "A seller API and dashboard to manage orders and shipping, plus internal tools for returns, reporting and support.",
        },
      ],
    },
    {
      type: "figure",
      frame: "mat",
      shot: {
        src: product,
        alt: "iPad Pro product page with price, condition and tech specs",
        caption: "Product page",
      },
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: specs,
          alt: "MacBook Air product page with the technical specifications panel open",
          caption: "Technical specifications",
        },
        {
          src: register,
          alt: "Business account sign-up form",
          caption: "Business account sign-up",
        },
      ],
    },
    {
      type: "figures",
      frame: "mat",
      shots: [
        {
          src: reborn,
          alt: "Reborn vs. brand new: the environmental impact of choosing refurbished",
          caption: "Reborn vs. brand new",
        },
        {
          src: contact,
          alt: "Contact page: Need help? We’ve got you",
          caption: "Contact and support",
        },
      ],
    },
    {
      type: "chapter",
      name: "Ordering API",
      headline: ["An ordering API", "for insurance companies."],
      body: "Insurance companies like Asurion needed to order refurbished devices at scale, without going through the storefront. I was part of the team that built an ordering API that plugs straight into their own systems: they search the catalog, place orders automatically, follow payments and get webhook updates as each order moves forward.",
    },
    {
      type: "chapter",
      name: "Email system",
      headline: ["Order emails,", "from confirmation to delivery."],
      body: "I built Back Market Pro’s transactional emails, from order confirmations and wire transfer instructions to shipping updates and customer surveys. They share one set of components, put what business buyers need first, like invoices, tracking and the CO₂ saved, and are available in English and French.",
    },
    {
      type: "figures",
      frame: "tall",
      shots: [
        {
          src: emailOrder,
          alt: "Order confirmation email: You’re all set, with the CO₂ saved and the order summary",
          caption: "Order confirmation",
        },
        {
          src: emailNps,
          alt: "Customer survey email: Would you recommend Back Market Pro to your colleagues?",
          caption: "Customer satisfaction survey",
        },
      ],
    },
    {
      type: "ledger",
      rows: [
        {
          label: "Storefront",
          value: "Shopify Hydrogen, Remix, React, Tailwind CSS",
        },
        { label: "Search", value: "Algolia InstantSearch and Autocomplete" },
        { label: "Payments", value: "Stripe, with a fully custom checkout" },
        {
          label: "Backend",
          value: "Python, Flask, Google Cloud Functions and Cloud Tasks",
        },
        {
          label: "Data",
          value: "MongoDB, Redis, BigQuery, Shopify Admin and Storefront APIs",
        },
        {
          label: "Documents and emails",
          value: "Next.js, React Email, react-print, DocRaptor, Mandrill",
        },
        {
          label: "Hosting and monitoring",
          value: "Shopify Oxygen, Vercel, Google Cloud, Sentry, Segment",
        },
      ],
    },
  ],
} satisfies Project

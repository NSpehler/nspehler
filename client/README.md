# nspehler.com

The source of [nspehler.com](https://nspehler.com), the portfolio of Nicolas Spehler: a home page of selected projects, nine case studies, an about page, a research paper and a contact page.

## Stack

- [Next.js](https://nextjs.org) App Router with React Server Components, static generation and typed routes
- [Tailwind CSS](https://tailwindcss.com) v4 with the design tokens declared in `app/globals.css`
- React `ViewTransition` for the page transitions, `next/image` for every visual, `next/font` for Geist
- Content as typed TypeScript modules, images as static imports, videos on Vercel Blob
- Deployed on [Vercel](https://vercel.com)

## Structure

```
app/          routes, metadata files and the global stylesheet
components/   layout chrome, ui primitives, media (mats, lightbox, video), motion, case study blocks, page sections
content/      the site content: site, home, about, research, contact and one module per project
images/       every image, imported statically so Next.js knows its size and can blur it up
lib/          small helpers: metadata, JSON-LD, easing, coordinates
```

## Content

Everything on the site lives in `content/`. A project is a `Project` object (`content/types.ts`) with its hero facts, its card on the home page, a lead visual, two overview paragraphs, an optional film and an ordered list of blocks: chapters, figures, phone screenshots, cards, a quote and the tech stack ledger. The block renderer in `components/project/Blocks.tsx` turns that list into the page.

To add a project:

1. Create `content/projects/<slug>.ts` and end it with `satisfies Project`.
2. Add the slug to `content/projects/slugs.ts`, in the order it should appear on the home page.
3. Register it in `content/projects/index.ts`.
4. Drop its images in `images/projects/<slug>/`.

The route, the sitemap, the Open Graph image and the "Next project" link all derive from the slug list.

## Development

```bash
bun install
bun run dev
```

`bun run check` runs the linter, the formatter, the type checker and knip. `bun run build` produces the production build.

## Environment

| Variable                    | Purpose                                 |
| --------------------------- | --------------------------------------- |
| `NEXT_PUBLIC_APP_URL`       | Canonical origin, used for metadata     |
| `NEXT_PUBLIC_PLAUSIBLE_SRC` | Optional Plausible script for analytics |

## License

The code is available for reference. The copy, the photos and the client screenshots are not licensed for reuse.

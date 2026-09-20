export const slugs = [
  "payfit",
  "smartvatten",
  "goalgetr",
  "paperdrop",
  "nucase",
  "intigriti",
  "abax",
  "back-market-pro",
  "alma",
  "analog",
] as const

export type Slug = (typeof slugs)[number]

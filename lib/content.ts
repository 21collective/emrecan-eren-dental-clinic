// Treatment and guide copy (regulation-checked), shared by the list and detail pages.
import data from "./content.json"

export type Block =
  | { t: "h2" | "h3" | "p" | "li"; x: string }
  | { t: "table"; rows: string[][] }

export type Meta = { title: string; description: string; keywords: string[] }

export type Treatment = {
  slug: string
  br: string
  brEn: string
  title: string
  titleEn: string
  lead: string
  leadEn: string
  meta: Meta
  proc: { name: string; description: string } | null
  svc: { t: string; d: string; i: string[] }[]
  b: Block[]
  faq: { q: string; a: string }[]
}

export type Guide = {
  slug: string
  title: string
  lead: string
  cat: string
  tx: string
  b: Block[]
  faq: { q: string; a: string }[]
  meta: Meta
  datePublished: string
  dateModified?: string
  related: string[]
}

export const TX = data.tx as Treatment[]
export const GD = data.gd as Guide[]

export const txBySlug = (slug: string) => TX.find((t) => t.slug === slug)
export const gdBySlug = (slug: string) => GD.find((g) => g.slug === slug)

export const two = (i: number) => String(i + 1).padStart(2, "0")

export function readMin(g: Guide) {
  let w = 0
  for (const b of g.b) if (b.t !== "table") w += b.x.split(/\s+/).length
  return Math.max(2, Math.round(w / 190))
}

export const GUIDE_CATS = Array.from(new Set(GD.map((g) => g.cat)))

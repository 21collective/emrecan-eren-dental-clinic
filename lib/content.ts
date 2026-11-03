// Treatment and guide copy (regulation-checked), shared by the list and detail pages.
import data from "./content.json"
import en from "./content-en.json"

// xe / rowsEn: the English text, shown when the visitor switches language (content-en.json)
export type Block =
  | { t: "h2" | "h3" | "p" | "li"; x: string; xe?: string }
  | { t: "table"; rows: string[][]; rowsEn?: string[][] }

export type Faq = { q: string; a: string; qe?: string; ae?: string }

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
  svc: { t: string; d: string; i: string[]; te?: string; de?: string; ie?: string[] }[]
  b: Block[]
  faq: Faq[]
}

export type Guide = {
  slug: string
  title: string
  lead: string
  cat: string
  titleEn?: string
  leadEn?: string
  catEn?: string
  tx: string
  b: Block[]
  faq: Faq[]
  meta: Meta
  datePublished: string
  dateModified?: string
  related: string[]
}

type EnBlock = { t: string; x?: string; rows?: string[][] }
type EnFaq = { q: string; a: string }
const withEn = (b: Block[], e?: EnBlock[]): Block[] =>
  b.map((x, i) => (x.t === "table" ? { ...x, rowsEn: e?.[i]?.rows } : { ...x, xe: e?.[i]?.x }))
const faqEn = (f: Faq[], e?: EnFaq[]): Faq[] => f.map((x, i) => ({ ...x, qe: e?.[i]?.q, ae: e?.[i]?.a }))

const EN = en as unknown as {
  tx: Record<string, { svc: { t: string; d: string; i: string[] }[]; b: EnBlock[]; faq: EnFaq[] }>
  gd: Record<string, { title: string; lead: string; cat: string; b: EnBlock[]; faq: EnFaq[] }>
  local: Record<string, LocalEn>
}
export type LocalEn = {
  name: string; h1: string; lead: string; intro: string[]; steps: { title: string; text: string }[]
  forWho: string[]; faqs: { question: string; answer: string }[]; related: string[]
}
export const localEn = (slug: string): LocalEn | undefined => EN.local[slug]

export const TX: Treatment[] = (data.tx as Treatment[]).map((t) => {
  const e = EN.tx[t.slug]
  return {
    ...t,
    svc: t.svc.map((x, i) => ({ ...x, te: e?.svc[i]?.t, de: e?.svc[i]?.d, ie: e?.svc[i]?.i })),
    b: withEn(t.b, e?.b),
    faq: faqEn(t.faq, e?.faq),
  }
})
export const GD: Guide[] = (data.gd as Guide[]).map((g) => {
  const e = EN.gd[g.slug]
  return { ...g, titleEn: e?.title, leadEn: e?.lead, catEn: e?.cat, b: withEn(g.b, e?.b), faq: faqEn(g.faq, e?.faq) }
})

export const txBySlug = (slug: string) => TX.find((t) => t.slug === slug)
export const gdBySlug = (slug: string) => GD.find((g) => g.slug === slug)

export const two = (i: number) => String(i + 1).padStart(2, "0")

export function readMin(g: Guide) {
  let w = 0
  for (const b of g.b) if (b.t !== "table") w += b.x.split(/\s+/).length
  return Math.max(2, Math.round(w / 190))
}

export const GUIDE_CATS = Array.from(new Set(GD.map((g) => g.cat)))
export const catEn = (cat: string) => GD.find((g) => g.cat === cat)?.catEn

// English copy goes into data-en (set as innerHTML by the language switch): escape it, keep §b bold
export const enHtml = (x?: string) =>
  x == null ? undefined : x.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/§b/g, "<strong>").replace(/§\/b/g, "</strong>")
export const enText = (x?: string) => (x == null ? undefined : enHtml(x.replace(/§\/?b/g, "")))

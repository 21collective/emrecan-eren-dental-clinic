import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { ArticleBody, BackHome, Faq, GuideCard, PageFooter, Toc, TrOnlyNote, tocOf } from "@/components/site/page-bits"
import { SITE_UPDATED } from "@/lib/clinic"
import { GD, gdBySlug, readMin, txBySlug } from "@/lib/content"

const SITE = "https://www.emrecaneren.com"

export const dynamicParams = false

export function generateStaticParams() {
  return GD.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = gdBySlug(params.slug)
  if (!g) return {}
  return {
    title: g.meta.title || g.title,
    description: g.meta.description || g.lead,
    keywords: g.meta.keywords,
    alternates: { canonical: `/dis-sagligi-rehberi/${g.slug}` },
    openGraph: { type: "article", title: g.meta.title || g.title, description: g.meta.description || g.lead, url: `/dis-sagligi-rehberi/${g.slug}` },
  }
}

const fmtDate = (iso: string, locale: string) =>
  new Date(iso.slice(0, 10) + "T12:00:00").toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" })

export default function GuideArticle({ params }: { params: { slug: string } }) {
  const g = gdBySlug(params.slug)
  if (!g) notFound()
  const pillar = txBySlug(g.tx)
  const modified = g.dateModified || SITE_UPDATED
  // same category first, then fill up to three
  let more = GD.filter((o) => o !== g && o.cat === g.cat).slice(0, 3)
  if (more.length < 3) more = more.concat(GD.filter((o) => o !== g && !more.includes(o)).slice(0, 3 - more.length))
  const url = `${SITE}/dis-sagligi-rehberi/${g.slug}`

  return (
    <section className="pg bold dt" aria-labelledby="pgh-gd">
      <header className="dt-hero bx-wrap">
        <BackHome />
        <nav className="dt-crumb" aria-label="Konum"><a href="/dis-sagligi-rehberi" data-en="Guide">Rehber</a><span>/</span><span>{g.cat}</span></nav>
        <h1 className="dt-h" id="pgh-gd" style={{ fontSize: "clamp(40px,6vw,104px)", maxWidth: "20ch" }}>{g.title}</h1>
        <div className="dt-hero-ft">
          <p className="dt-lead">{g.lead}</p>
          <div className="gd-meta">
            <span>Dt. Emrecan Eren</span>
            <span data-en={`${readMin(g)} min read`}>{readMin(g)} dk okuma</span>
            <span>{g.cat}</span>
            <span data-en={`Updated <time datetime="${modified}">${fmtDate(modified, "en-GB")}</time>`}>Güncelleme: <time dateTime={modified}>{fmtDate(modified, "tr-TR")}</time></span>
          </div>
        </div>
      </header>

      <section className="dt-body bx-wrap gd">
        <Toc toc={tocOf(g.b, "gds-")} />
        <article className="dt-art"><TrOnlyNote /><ArticleBody blocks={g.b} pre="gds-" /></article>
      </section>

      <Faq faq={g.faq} />

      {pillar && (
        <section className="dt-sec bx-wrap">
          <a className="gd-pill" href={`/tedaviler/${pillar.slug}`}>
            <span><small data-en="Related area of treatment">İlgili tedavi alanı</small><b data-en={`${pillar.brEn} · ${pillar.titleEn}`}>{pillar.br} · {pillar.title}</b></span>
            <span aria-hidden="true">→</span>
          </a>
        </section>
      )}

      <section className="dt-sec bx-wrap">
        <h2 className="pg-lbl" data-en="More articles">Diğer yazılar</h2>
        <div className="dt-rel-g">{more.map((o) => <GuideCard key={o.slug} g={o} />)}</div>
      </section>

      <p className="dt-note bx-wrap" data-en="This article is for information. Diagnosis and treatment require an examination.">Bu yazı bilgilendirme amaçlıdır. Tanı ve tedavi için muayene gerekir.</p>
      <div className="bx-wrap bx-ftw"><PageFooter /></div>

      <SchemaMarkup
        type="article"
        data={{ title: g.title, description: g.meta.description || g.lead, url, datePublished: g.datePublished || modified, dateModified: modified, medicalTopic: g.cat }}
      />
      {g.faq.length > 0 && <JsonLd data={schemas.faqPage(g.faq.map((f) => ({ question: f.q, answer: f.a })))} />}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
          { "@type": "ListItem", position: 2, name: "Diş Sağlığı Rehberi", item: `${SITE}/dis-sagligi-rehberi` },
          { "@type": "ListItem", position: 3, name: g.title, item: url },
        ],
      }} />
    </section>
  )
}

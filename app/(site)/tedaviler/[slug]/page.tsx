import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { ArticleBody, BackHome, Faq, GuideCard, PageFooter, Toc, TrOnlyNote, tocOf } from "@/components/site/page-bits"
import { CLINIC, HOURS, OG_IMAGE } from "@/lib/clinic"
import { GD, TX, two, txBySlug, type Treatment } from "@/lib/content"
import { LOCAL_SERVICES, NEARBY, getLocalService, type LocalService } from "@/lib/local-seo"

const SITE = "https://www.emrecaneren.com"

// the nine areas of treatment plus the local "Lüleburgaz + tedavi" pages
export const dynamicParams = false

export function generateStaticParams() {
  return [...TX.map((t) => ({ slug: t.slug })), ...LOCAL_SERVICES.map((s) => ({ slug: s.slug }))]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const t = txBySlug(slug)
  if (t) {
    return {
      title: t.meta.title,
      description: t.meta.description,
      keywords: t.meta.keywords,
      alternates: { canonical: `/tedaviler/${t.slug}` },
      openGraph: { images: [OG_IMAGE], title: t.meta.title, description: t.meta.description, url: `/tedaviler/${t.slug}` },
    }
  }
  const s = getLocalService(slug)
  if (!s) return { title: "Sayfa bulunamadı", robots: { index: false } }
  return {
    title: { absolute: `${s.title} | Dt. Emrecan Eren` },
    description: s.description,
    keywords: s.keywords,
    alternates: { canonical: `/tedaviler/${s.slug}` },
    openGraph: { images: [OG_IMAGE], title: s.title, description: s.description, url: `/tedaviler/${s.slug}` },
  }
}

function Crumbs({ name, url }: { name: string; url: string }) {
  return (
    <JsonLd data={{
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Anasayfa", item: SITE },
        { "@type": "ListItem", position: 2, name: "Tedaviler", item: `${SITE}/tedaviler` },
        { "@type": "ListItem", position: 3, name, item: url },
      ],
    }} />
  )
}

function Book({ label = "Muayene randevusu →", en = "Book an examination →" }: { label?: string; en?: string }) {
  return <a className="pbtn wa-link" href={CLINIC.whatsapp} target="_blank" rel="noopener" data-en={en}>{label}</a>
}

function Note() {
  return <p className="dt-note bx-wrap" data-en="This page is for information. Diagnosis and treatment require an examination.">Bu sayfa bilgilendirme amaçlıdır. Tanı ve tedavi için muayene gerekir.</p>
}

function TreatmentDetail({ t }: { t: Treatment }) {
  const i = TX.indexOf(t)
  const prev = TX[(i + TX.length - 1) % TX.length]
  const next = TX[(i + 1) % TX.length]
  const rel = GD.filter((g) => g.tx === t.slug)
  const toc = tocOf(t.b, "dts-")
  const url = `${SITE}/tedaviler/${t.slug}`
  return (
    <section className="pg bold dt" aria-labelledby="pgh-dt">
      <header className="dt-hero bx-wrap">
        <BackHome />
        <nav className="dt-crumb" aria-label="Konum"><a href="/tedaviler" data-en="Treatments">Tedaviler</a><span>/</span><span data-en={t.brEn}>{t.br}</span></nav>
        <div className="dt-eb"><b>{two(i)}</b><span data-en={t.brEn}>{t.br}</span></div>
        <h1 className="dt-h" id="pgh-dt" data-en={t.titleEn}>{t.title}</h1>
        <div className="dt-hero-ft">
          <p className="dt-lead" data-en={t.leadEn}>{t.lead}</p>
          <aside className="dt-sum">
            {t.svc.length > 0 && (
              <div><span className="pg-lbl" data-en="Scope">Kapsam</span><ul>{t.svc.map((x) => <li key={x.t}>{x.t}</li>)}</ul></div>
            )}
            <div><span className="pg-lbl" data-en="Planning">Planlama</span><p data-en="Examination · imaging as needed · treatment plan and consent">Muayene · gerekli görüntüleme · tedavi planı ve onam</p></div>
            <Book />
          </aside>
        </div>
      </header>

      {t.svc.length > 0 && (
        <section className="dt-sec bx-wrap">
          <h2 className="pg-lbl" data-en="Procedures">Uygulamalar</h2>
          <TrOnlyNote />
          <div className="dt-svc-g">
            {t.svc.map((x, j) => (
              <article key={x.t}>
                <i>{two(j)}</i>
                <h3>{x.t}</h3>
                {x.d && <p>{x.d}</p>}
                {x.i.length > 0 && <ul>{x.i.map((y) => <li key={y}>{y}</li>)}</ul>}
              </article>
            ))}
          </div>
        </section>
      )}

      {t.b.length > 0 && (
        <section className="dt-body bx-wrap">
          <Toc toc={toc} />
          <article className="dt-art"><TrOnlyNote /><ArticleBody blocks={t.b} pre="dts-" /></article>
        </section>
      )}

      <Faq faq={t.faq} />

      {rel.length > 0 && (
        <section className="dt-sec bx-wrap">
          <h2 className="pg-lbl" data-en="From the guide">Rehberden</h2>
          <div className="dt-rel-g">{rel.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
        </section>
      )}

      <nav className="dt-next bx-wrap" aria-label="Diğer tedavi alanları">
        <a href={`/tedaviler/${prev.slug}`}><small data-en="← Previous area">← Önceki alan</small><b data-en={prev.brEn}>{prev.br}</b></a>
        <a href={`/tedaviler/${next.slug}`}><small data-en="Next area →">Sonraki alan →</small><b data-en={next.brEn}>{next.br}</b></a>
      </nav>
      <Note />
      <div className="bx-wrap bx-ftw"><PageFooter /></div>

      <JsonLd data={{ ...schemas.medicalProcedure(t.proc?.name || t.title, t.proc?.description || t.lead), url }} />
      {t.faq.length > 0 && <JsonLd data={schemas.faqPage(t.faq.map((f) => ({ question: f.q, answer: f.a })))} />}
      <Crumbs name={t.title} url={url} />
    </section>
  )
}

function LocalDetail({ s }: { s: LocalService }) {
  const url = `${SITE}/tedaviler/${s.slug}`
  return (
    <section className="pg bold dt" aria-labelledby="pgh-dt">
      <header className="dt-hero bx-wrap">
        <BackHome />
        <nav className="dt-crumb" aria-label="Konum"><a href="/tedaviler" data-en="Treatments">Tedaviler</a><span>/</span><span>{s.name}</span></nav>
        <div className="dt-eb"><b>LB</b><span>Lüleburgaz</span></div>
        <h1 className="dt-h" id="pgh-dt">{s.h1}</h1>
        <div className="dt-hero-ft">
          <p className="dt-lead">{s.lead}</p>
          <aside className="dt-sum">
            <div><span className="pg-lbl">Kimler için</span><ul>{s.forWho.map((w) => <li key={w}>{w}</li>)}</ul></div>
            <Book label={`${s.name} için randevu →`} />
          </aside>
        </div>
      </header>

      <section className="dt-body bx-wrap">
        <div />
        <article className="dt-art">
          <TrOnlyNote />
          {s.intro.map((p, i) => <p key={i}>{p}</p>)}
        </article>
      </section>

      <section className="dt-sec bx-wrap">
        <h2 className="pg-lbl">{s.name} nasıl yapılır?</h2>
        <div className="dt-svc-g">
          {s.steps.map((st, j) => (
            <article key={st.title}><i>{two(j)}</i><h3>{st.title}</h3><p>{st.text}</p></article>
          ))}
        </div>
      </section>

      <section className="dt-sec bx-wrap">
        <h2 className="pg-lbl">Adres ve çalışma saatleri</h2>
        <div className="contact">
          <div className="card cinfo">
            <p>
              Kliniğimiz Lüleburgaz 8 Kasım Mahallesi, Hazal Sokak’tadır. {NEARBY.slice(1).join(", ")} gibi yakın
              yerleşimlerden de hasta kabul ediyoruz.
            </p>
            <address style={{ fontStyle: "normal" }}>
              {CLINIC.legalName}<br />{CLINIC.street}<br />{CLINIC.city}<br /><b className="num">{CLINIC.phone}</b>
            </address>
            <div className="row"><a className="pbtn ghost" href={CLINIC.maps} target="_blank" rel="noopener">Yol tarifi ↗</a></div>
          </div>
          <div className="card cinfo">
            <div>
              <span className="pg-lbl">Çalışma saatleri</span>
              <ul className="hrs">{HOURS.map((h, i) => <li key={h.day} data-day={(i + 1) % 7}><span>{h.day}</span><span>{h.open}–{h.close}</span></li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <Faq faq={s.faqs.map((f) => ({ q: f.question, a: f.answer }))} />

      <section className="dt-sec bx-wrap">
        <h2 className="pg-lbl">İlgili sayfalar</h2>
        <ol className="trx">
          {s.related.map((r, i) => (
            <li key={r.href}><a href={r.href}><i>{two(i)}</i><b>{r.name}</b><span /></a></li>
          ))}
        </ol>
      </section>
      <Note />
      <div className="bx-wrap bx-ftw"><PageFooter /></div>

      <JsonLd data={{ ...schemas.medicalProcedure(s.name, s.lead), url, areaServed: NEARBY.map((n) => ({ "@type": "City", name: n })) }} />
      <JsonLd data={schemas.faqPage(s.faqs)} />
      <Crumbs name={s.name} url={url} />
    </section>
  )
}

export default async function TreatmentRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const t = txBySlug(slug)
  if (t) return <TreatmentDetail t={t} />
  const s = getLocalService(slug)
  if (!s) notFound()
  return <LocalDetail s={s} />
}

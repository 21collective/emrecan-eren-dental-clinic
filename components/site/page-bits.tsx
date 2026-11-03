import { Fragment } from "react"
import { CLINIC, SITE_EDITOR, SITE_UPDATED, siteUpdatedTR } from "@/lib/clinic"
import { type Block, type Faq as FaqItem, type Guide, TX, enHtml, enText, readMin } from "@/lib/content"
import { PRIMARY_PATHS, PRIMARY_VB } from "@/components/site/logos"

const siteUpdatedEN = () =>
  new Date(SITE_UPDATED + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

const PAGES = [
  { href: "/", t: "Anasayfa · Maket", te: "Home · Model" },
  { href: "/hakkinda", t: "Hakkımızda", te: "About" },
  { href: "/ekibimiz", t: "Ekibimiz", te: "Our team" },
  { href: "/tedaviler", t: "Tedaviler", te: "Treatments" },
  { href: "/dis-sagligi-rehberi", t: "Diş sağlığı rehberi", te: "Dental health guide" },
  { href: "/sik-sorulan-sorular", t: "Sık sorulan sorular", te: "FAQ" },
  { href: "/kariyer", t: "Kariyer", te: "Careers" },
  { href: "/iletisim", t: "İletişim", te: "Contact" },
]

// Every page ends with a site map footer, the agency credit (mandatory) and the last-update line (yönetmelik 5/1-ı).
export function PageFooter() {
  return (
    <footer className="pg-ft sf">
      <div className="sf-id">
        <a href="/" className="sf-logo" aria-label="Emrecan Eren">
          <svg viewBox={PRIMARY_VB} fill="currentColor" aria-hidden="true" focusable="false">
            {PRIMARY_PATHS.map((d, i) => <path key={i} d={d} />)}
          </svg>
        </a>
        <span data-en="Private Oral and Dental Health Polyclinic">{CLINIC.legalName.replace("Emrecan Eren ", "")}</span>
        <a className="sf-tel" href={CLINIC.phoneHref}>{CLINIC.phone}</a>
        <a className="pbtn wa-link" href={CLINIC.whatsapp} target="_blank" rel="noopener" data-en="Book on WhatsApp →">WhatsApp ile randevu →</a>
      </div>
      <nav className="sf-col" aria-label="Sayfalar" data-en-label="Pages">
        <span className="pg-lbl" data-en="Pages">Sayfalar</span>
        <ul>{PAGES.map((x) => <li key={x.href}><a href={x.href} data-en={x.te}>{x.t}</a></li>)}</ul>
      </nav>
      <nav className="sf-col" aria-label="Tedaviler" data-en-label="Treatments">
        <span className="pg-lbl" data-en="Treatments">Tedaviler</span>
        <ul>{TX.map((t) => <li key={t.slug}><a href={`/tedaviler/${t.slug}`} data-en={t.brEn}>{t.br}</a></li>)}</ul>
      </nav>
      <div className="sf-col">
        <span className="pg-lbl" data-en="Clinic">Klinik</span>
        <ul>
          <li><a href={CLINIC.maps} target="_blank" rel="noopener">{CLINIC.street}<br />{CLINIC.city} ↗</a></li>
          <li><a href={CLINIC.instagram} target="_blank" rel="noopener">Instagram · @emrecanerenadsp ↗</a></li>
          <li><a href="/iletisim" data-en="Opening hours →">Çalışma saatleri →</a></li>
          <li><a href="/kvkk" data-en="Privacy notice (KVKK)">KVKK aydınlatma metni</a></li>
        </ul>
      </div>
      <div className="sf-bot">
        <span className="ft-l">Family business, different toolboxes. — 21collective</span>
        <span>
          21collective © 2025 · {SITE_EDITOR.name} · <span data-en="Contact:">İletişim:</span> <b>{SITE_EDITOR.phone}</b>
        </span>
        <span
          className="pg-upd"
          data-en={`Last updated: <time datetime="${SITE_UPDATED}">${siteUpdatedEN()}</time> · Site editor: ${SITE_EDITOR.name}, ${SITE_EDITOR.phone}`}
        >
          Son güncelleme: <time dateTime={SITE_UPDATED}>{siteUpdatedTR()}</time> · Site editörü: {SITE_EDITOR.name}, {SITE_EDITOR.phone}
        </span>
      </div>
    </footer>
  )
}

// Turkish body copy, flagged for English readers (empty, hence hidden, in Turkish)
export function TrOnlyNote() {
  return <p className="dt-note" data-en="The detailed text below is in Turkish for now." />
}

export function BackHome() {
  return <a className="pg-back" href="/" data-en="← Home">← Anasayfa</a>
}

// §b … §/b marks bold in the content data
export function Rich({ x }: { x: string }) {
  const parts = x.split(/§b|§\/b/)
  return <>{parts.map((p, i) => (i % 2 ? <strong key={i}>{p}</strong> : <Fragment key={i}>{p}</Fragment>))}</>
}

export function tocOf(blocks: Block[], pre: string) {
  const toc: [string, string, string?][] = []
  for (const b of blocks) if (b.t === "h2") toc.push([pre + toc.length, b.x, b.xe])
  return toc
}

export function Toc({ toc }: { toc: [string, string, string?][] }) {
  if (!toc.length) return <div />
  return (
    <nav className="dt-toc" aria-label="Bu sayfada" data-en-label="On this page">
      <span className="pg-lbl" data-en="On this page">Bu sayfada</span>
      <ol>
        {toc.map(([id, t, te]) => (
          <li key={id}><button type="button" data-to={id} data-en={enText(te)}>{t.replace(/§\/?b/g, "")}</button></li>
        ))}
      </ol>
    </nav>
  )
}

// Article body: consecutive li blocks become one list; h2s are numbered and anchored for the TOC.
export function ArticleBody({ blocks, pre }: { blocks: Block[]; pre: string }) {
  const out: React.ReactNode[] = []
  let list: React.ReactNode[] = []
  let n = 0
  const flush = () => {
    if (list.length) out.push(<ul key={`ul${out.length}`}>{list}</ul>)
    list = []
  }
  blocks.forEach((b, i) => {
    if (b.t === "li") { list.push(<li key={i} data-en={enHtml(b.xe)}><Rich x={b.x} /></li>); return }
    flush()
    if (b.t === "table") {
      const [head, ...rows] = b.rows
      const en = b.rowsEn
      out.push(
        <div className="dt-tbl" key={i}>
          <table>
            <thead><tr>{head.map((c, j) => <th key={j} scope="col" data-en={enText(en?.[0]?.[j])}>{c}</th>)}</tr></thead>
            <tbody>{rows.map((r, k) => <tr key={k}>{r.map((c, j) => <td key={j} data-en={enText(en?.[k + 1]?.[j])}>{c}</td>)}</tr>)}</tbody>
          </table>
        </div>,
      )
    } else if (b.t === "h2") {
      out.push(<h2 id={pre + n} key={i} data-en={enHtml(b.xe)}><Rich x={b.x} /></h2>)
      n++
    } else if (b.t === "h3") out.push(<h3 key={i} data-en={enHtml(b.xe)}><Rich x={b.x} /></h3>)
    else out.push(<p key={i} data-en={enHtml(b.xe)}><Rich x={b.x} /></p>)
  })
  flush()
  return <>{out}</>
}

export function Faq({ faq }: { faq: FaqItem[] }) {
  if (!faq.length) return null
  return (
    <section className="dt-sec bx-wrap">
      <h2 className="pg-lbl" data-en="Frequently asked questions">Sık sorulan sorular</h2>
      <div className="dt-faq">
        {faq.map((f) => (
          <details key={f.q}><summary data-en={enText(f.qe)}>{f.q}</summary><p data-en={enText(f.ae)}>{f.a}</p></details>
        ))}
      </div>
    </section>
  )
}

export function GuideCard({ g }: { g: Guide }) {
  return (
    <a className="gcard" href={`/dis-sagligi-rehberi/${g.slug}`} data-c={g.cat}>
      <small data-en={enText(g.catEn)}>{g.cat}</small>
      <b data-en={enText(g.titleEn)}>{g.title}</b>
      <span data-en={enText(g.leadEn)}>{g.lead}</span>
      <em data-en={`${readMin(g)} min read`}>{readMin(g)} dk okuma</em>
    </a>
  )
}

import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { CLINIC } from "@/lib/clinic"

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false },
}

const WAYS = [
  { href: "/", n: "01", t: "Anasayfa", te: "Home", d: "Kliniğin bahçeli maketi; her köşesi bir sayfaya açılır.", de: "The clinic’s garden model; every corner opens a page." },
  { href: "/tedaviler", n: "02", t: "Tedaviler", te: "Treatments", d: "Dokuz klinik alan ve her birinin ayrıntısı.", de: "Nine clinical areas, each in detail." },
  { href: "/dis-sagligi-rehberi", n: "03", t: "Diş sağlığı rehberi", te: "Dental health guide", d: "Sık merak edilen konularda bilgilendirme yazıları.", de: "Articles on the questions patients ask most." },
  { href: "/iletisim", n: "04", t: "İletişim", te: "Contact", d: "Adres, çalışma saatleri ve randevu.", de: "Address, opening hours and appointments." },
]

// Shown for any address the site does not have; it opens over the model like every inner page
export default function NotFound() {
  return (
    <section className="pg" aria-labelledby="pgh-404">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="404 · Page not found">404 · Sayfa bulunamadı</div>
        <h1 className="pg-h" id="pgh-404" data-en="This page is <em>not in the garden.</em>">
          Bu sayfa <em>bahçede yok.</em>
        </h1>
        <p className="pg-lead" data-en="The address may have moved or never existed. You can carry on from one of the pages below.">
          Aradığınız adres taşınmış ya da hiç var olmamış olabilir. Aşağıdaki sayfalardan devam edebilirsiniz.
        </p>
      </header>
      <section className="nf-sc" aria-label="Devam edin" data-en-label="Carry on">
        <span className="pg-lbl" data-en="Carry on">Devam edin</span>
        <nav className="nf-ways">
          {WAYS.map((w) => (
            <a key={w.href} href={w.href}>
              <i>{w.n}</i>
              <b data-en={w.te}>{w.t}</b>
              <span data-en={w.de}>{w.d}</span>
              <em aria-hidden="true">→</em>
            </a>
          ))}
        </nav>
        <p className="nf-call" data-en={`Looking for something specific? Call us: <b>${CLINIC.phone}</b>`}>
          Aradığınız belirli bir şey mi var? Bizi arayın: <b>{CLINIC.phone}</b>
        </p>
      </section>
      <PageFooter />
    </section>
  )
}

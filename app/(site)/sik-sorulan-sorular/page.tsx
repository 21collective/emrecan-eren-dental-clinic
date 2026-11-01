import type { Metadata } from "next"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { two } from "@/lib/content"
import { CLINIC_FAQ } from "@/lib/faq"
import { LOCAL_SERVICES } from "@/lib/local-seo"

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular · Lüleburgaz Diş Kliniği",
  description:
    "Dt. Emrecan Eren kliniği nerede, saat kaçta açık, hafta sonu açık mı, randevu nasıl alınır? Lüleburgaz'daki kliniğimizle ilgili sık sorulan sorular.",
  alternates: { canonical: "/sik-sorulan-sorular" },
}

export default function FaqPage() {
  return (
    <section className="pg" aria-labelledby="pgh-sss">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="Frequently asked questions">Sık sorulan sorular</div>
        <h1 className="pg-h" id="pgh-sss" data-en="Short questions, <em>short answers.</em>">Kısa sorular, <em>kısa cevaplar.</em></h1>
        <p className="pg-lead" data-en="Address, opening hours, appointments and treatments at our clinic in Lüleburgaz, answered briefly (in Turkish).">Lüleburgaz’daki kliniğimizin adresi, çalışma saatleri, randevu ve tedavilerle ilgili kısa cevaplar.</p>
      </header>
      <div className="dt-faq">
        {CLINIC_FAQ.map((f) => (
          <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>
        ))}
      </div>
      <div>
        <h2 className="pg-lbl">Tedaviye özel sorular</h2>
        <ol className="trx">
          {LOCAL_SERVICES.map((s, i) => (
            <li key={s.slug}>
              <a href={`/tedaviler/${s.slug}`}><i>{two(i)}</i><b>{s.name}</b><span>{s.name} hakkında sık sorulanlar</span></a>
            </li>
          ))}
        </ol>
      </div>
      <p className="dt-note">Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; tanı ve tedavi için hekiminize başvurunuz.</p>
      <PageFooter />
      <JsonLd data={schemas.faqPage(CLINIC_FAQ)} />
    </section>
  )
}

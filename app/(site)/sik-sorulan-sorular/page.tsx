import type { Metadata } from "next"
import { JsonLd, schemas } from "@/components/seo/json-ld"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { two, enText, localEn } from "@/lib/content"
import { CLINIC_FAQ, CLINIC_FAQ_EN } from "@/lib/faq"
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
        <p className="pg-lead" data-en="Address, opening hours, appointments and treatments at our clinic in Lüleburgaz, answered briefly.">Lüleburgaz’daki kliniğimizin adresi, çalışma saatleri, randevu ve tedavilerle ilgili kısa cevaplar.</p>
      </header>
      <div className="dt-faq">
        {CLINIC_FAQ.map((f, i) => (
          <details key={f.question}><summary data-en={enText(CLINIC_FAQ_EN[i]?.question)}>{f.question}</summary><p data-en={enText(CLINIC_FAQ_EN[i]?.answer)}>{f.answer}</p></details>
        ))}
      </div>
      <div>
        <h2 className="pg-lbl" data-en="Questions by treatment">Tedaviye özel sorular</h2>
        <ol className="trx">
          {LOCAL_SERVICES.map((s, i) => (
            <li key={s.slug}>
              <a href={`/tedaviler/${s.slug}`}><i>{two(i)}</i><b data-en={enText(localEn(s.slug)?.name)}>{s.name}</b><span data-en={localEn(s.slug) ? `Common questions about ${enText(localEn(s.slug)?.name)}` : undefined}>{s.name} hakkında sık sorulanlar</span></a>
            </li>
          ))}
        </ol>
      </div>
      <p className="dt-note" data-en="The information on this page is general; please see your dentist for diagnosis and treatment.">Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; tanı ve tedavi için hekiminize başvurunuz.</p>
      <PageFooter />
      <JsonLd data={schemas.faqPage(CLINIC_FAQ)} />
    </section>
  )
}

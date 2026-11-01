import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { CLINIC } from "@/lib/clinic"
import { TX, two } from "@/lib/content"
import { LOCAL_SERVICES } from "@/lib/local-seo"

export const metadata: Metadata = {
  title: "Tedaviler · Lüleburgaz Diş Kliniği",
  description:
    "Lüleburgaz Dt. Emrecan Eren kliniğinde tedavi alanları: endodonti, implant, periodontoloji, protetik, estetik, şeffaf plak, oral cerrahi, pedodonti ve bruksizm.",
  alternates: { canonical: "/tedaviler" },
}

export default function TreatmentsPage() {
  return (
    <section className="pg" aria-labelledby="pgh-tedaviler">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="03 · Treatments">03 · Tedaviler</div>
        <h1 className="pg-h" id="pgh-tedaviler" data-en="Areas of <em>treatment.</em>">Tedavi <em>alanları.</em></h1>
        <p className="pg-lead" data-en="Every treatment is planned after an examination and the imaging it needs. We talk through the right option for you at the appointment.">Her tedavi muayene ve gerekli görüntülemeyle planlanır. Size uygun seçeneği muayenede birlikte konuşuruz.</p>
        <span className="pg-place" data-en="On the model: Under the palm">Maketteki yeri: Palmiyenin altı</span>
      </header>
      <ol className="trx">
        {TX.map((t, i) => (
          <li key={t.slug}>
            <a href={`/tedaviler/${t.slug}`}><i>{two(i)}</i><b data-en={`${t.brEn} · ${t.titleEn}`}>{t.br} · {t.title}</b><span data-en={t.leadEn}>{t.lead}</span></a>
          </li>
        ))}
      </ol>
      <div className="split">
        <img className="photo" src="/maket/img/tedavi.webp" alt="Tedavi odası" loading="lazy" />
        <div>
          <span className="pg-lbl" data-en="Examination">Muayene</span>
          <h2 data-en="It starts with an examination.">Muayene ile başlar.</h2>
          <p data-en="We decide together which treatment suits you after an examination and imaging. You can book on WhatsApp.">Hangi tedavinin size uygun olduğunu muayene ve görüntüleme sonrası birlikte belirleriz. Randevunuzu WhatsApp’tan alabilirsiniz.</p>
          <div className="row" style={{ marginTop: 18 }}>
            <a className="pbtn wa-link" href={CLINIC.whatsapp} target="_blank" rel="noopener" data-en="Book an appointment →">Randevu al →</a>
          </div>
        </div>
      </div>
      <div>
        <span className="pg-lbl" data-en="Common treatments in Lüleburgaz (in Turkish)">Lüleburgaz’da sık aranan tedaviler</span>
        <ol className="trx">
          {LOCAL_SERVICES.map((s, i) => (
            <li key={s.slug}>
              <a href={`/tedaviler/${s.slug}`}><i>{two(i)}</i><b>{s.name}</b><span>{s.lead}</span></a>
            </li>
          ))}
        </ol>
      </div>
      <PageFooter />
    </section>
  )
}

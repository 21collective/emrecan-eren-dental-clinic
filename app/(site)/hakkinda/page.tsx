import { Fragment } from "react"
import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { Gallery, type Shot } from "@/components/site/gallery"
import { CLINIC } from "@/lib/clinic"
import { TX, two } from "@/lib/content"

export const metadata: Metadata = {
  title: "Hakkımızda · Lüleburgaz Diş Kliniği",
  description:
    "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği, Lüleburgaz: dört tedavi ünitesi, klinik içi dental tomografi ve hastayla paylaşılan tedavi planı.",
  keywords: ["Dt. Emrecan Eren", "Lüleburgaz poliklinik", "Lüleburgaz diş kliniği", "dental tomografi", "klinik içi üretim"],
  alternates: { canonical: "/hakkinda" },
}

// English strings sit in data-en; maket.js swaps them in when the visitor picks EN
const AREAS = TX.map((t) => ({ tr: t.br, en: t.brEn }))

// the clinic, outside in: garden, door, the rooms in walking order, then the evening
const GALLERY: Shot[] = [
  { img: "g-cephe", t: "Hazal Sokak cephesi", te: "The Hazal Street front", shape: "wide" },
  { img: "g-ahsap-kapi", t: "Bahçe kapısı", te: "The garden gate", shape: "tall" },
  { img: "g-bahce-yolu", t: "Bahçeden girişe", te: "Through the garden to the door", shape: "wide" },
  { img: "kapi", t: "Giriş", te: "Entrance" },
  { img: "g-giris", t: "Giriş holü", te: "Entrance hall" },
  { img: "resepsiyon", t: "Danışma", te: "Reception" },
  { img: "g-bekleme", t: "Bekleme alanı", te: "Waiting area", shape: "tall" },
  { img: "salon", t: "Bekleme salonu", te: "Waiting room" },
  { img: "g-hasir", t: "Bekleme köşesi", te: "A corner to wait in", shape: "tall" },
  { img: "k1", t: "Klinik 1 · Zeus", te: "Clinic 1 · Zeus" },
  { img: "k2", t: "Klinik 2 · Apollo", te: "Clinic 2 · Apollo" },
  { img: "k3", t: "Klinik 3 · Artemis", te: "Clinic 3 · Artemis" },
  { img: "k4", t: "Klinik 4 · Athena", te: "Clinic 4 · Athena" },
  { img: "tomo", t: "Görüntüleme · dental tomografi (CBCT)", te: "Imaging · dental CT (CBCT)", shape: "wide" },
  { img: "g-oda", t: "Tedavi odası", te: "Treatment room" },
  { img: "g-koridor", t: "Klinik koridoru", te: "Clinic corridor" },
  { img: "g-logo", t: "Kliniğin işareti", te: "The clinic’s mark", shape: "tall" },
  { img: "g-gece-giris", t: "Akşam girişi", te: "The entrance at night", shape: "tall" },
  { img: "g-gece-bahce", t: "Akşam bahçe", te: "The garden at night", shape: "tall" },
]

const FOUNDER = [
  { b: "Eğitim", be: "Education", s: "Yakın Doğu Üniversitesi Diş Hekimliği Fakültesi", se: "Near East University, Faculty of Dentistry" },
  { b: "2015–16", be: "2015–16", s: "Hakkari Dağ Komando Tugayı’nda diş hekimi", se: "Dentist at the Hakkari Mountain Commando Brigade" },
  { b: "8 yıl", be: "8 years", s: "Emrecan Eren Butik Diş Kliniği", se: "Emrecan Eren Boutique Dental Clinic" },
  { b: "Bugün", be: "Today", s: "Kırklareli Diş Hekimleri Birliği Yönetim Kurulu üyesi", se: "Board member, Kırklareli Chamber of Dentists" },
]

const FLOW = [
  { t: "Muayene ve anamnez", te: "Examination and history", d: "Şikâyetiniz, tıbbi geçmişiniz ve kullandığınız ilaçlar kaydedilir; ağız içi muayene yapılır.", de: "Your complaint, medical history and medication are recorded and your mouth is examined." },
  { t: "Görüntüleme", te: "Imaging", d: "Gerektiğinde panoramik röntgen, periapikal röntgen ya da dental tomografi (CBCT) çekilir.", de: "When needed, a panoramic X-ray, periapical X-ray or dental CT (CBCT) is taken." },
  { t: "Tedavi planı", te: "Treatment plan", d: "Seçenekler, süre ve seans sayısı sizinle konuşulur; plan onayınızla başlar.", de: "Options, duration and number of visits are discussed with you; the plan starts with your consent." },
  { t: "Tedavi ve kontrol", te: "Treatment and follow-up", d: "Tedavi planlanan seanslarda yapılır, ardından kontrol randevusu verilir.", de: "Treatment is done in the planned visits, followed by a check-up appointment." },
]

export default function AboutPage() {
  return (
    <section className="pg bold" aria-labelledby="pgh-hakkimizda">
      <header className="bx-hero bx-wrap">
        <BackHome />
        <div className="pg-eb" data-en="01 · About">01 · Hakkımızda</div>
        <h1 className="bx-h" id="pgh-hakkimizda" data-en="From diagnosis to treatment, <em>one clinical protocol.</em>">
          Teşhisten tedaviye, <em>tek bir klinik protokol.</em>
        </h1>
        <div className="bx-hero-ft">
          <p
            className="pg-lead"
            data-en="Emrecan Eren Private Oral and Dental Health Polyclinic serves Lüleburgaz with four treatment units and in-house dental CT. Every treatment rests on an examination, the imaging it needs and a plan shared with the patient."
          >
            Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği, Lüleburgaz’da dört tedavi ünitesi ve klinik içi dental
            tomografi ile hizmet verir. Her tedavi; muayene, gerekli görüntüleme ve hastayla paylaşılan bir tedavi planı
            üzerine kurulur.
          </p>
          <span className="bx-scroll" data-en="Scroll to see the clinic">Kaydırın, kliniği görün</span>
        </div>
      </header>

      <div className="bx-marq" aria-hidden="true">
        <div>
          {[...AREAS, ...AREAS].map((a, i) => (
            <Fragment key={i}><span data-en={a.en}>{a.tr}</span><i>✳</i></Fragment>
          ))}
        </div>
      </div>

      <section className="phs bx-wrap" aria-label="Klinikten kareler" data-en-label="Around the clinic">
        <div className="phs-hd">
          <span className="pg-lbl" data-en="Around the clinic">Klinikten kareler</span>
          <h2 className="phs-h" data-en="A garden, a door, <em>four rooms.</em>">Bir bahçe, bir kapı, <em>dört oda.</em></h2>
          <p className="phs-p" data-en="Entrance, reception, waiting area, four treatment units and in-house dental CT. Tap a photo to see it large.">Giriş, danışma, bekleme alanı, dört tedavi ünitesi ve klinik içi dental tomografi. Büyütmek için fotoğrafa dokunun.</p>
        </div>
        <Gallery shots={GALLERY} />
      </section>

      <section className="fd bx-wrap">
        <div className="fd-img" data-rv><img src="/maket/img/ee.webp" alt="Dt. Emrecan Eren" loading="lazy" /></div>
        <div className="fd-tx">
          <span className="pg-lbl" data-rv data-en="Founding dentist">Kurucu hekim</span>
          <h2 className="fd-n" data-rv data-en="Dr. Emrecan<br /><em>Eren</em>">Dt. Emrecan<br /><em>Eren</em></h2>
          <ol className="fd-tl">
            {FOUNDER.map((f) => (
              <li data-rv key={f.b}><b data-en={f.be}>{f.b}</b><span data-en={f.se}>{f.s}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="flow">
        <div className="bx-wrap">
          <span className="pg-lbl" data-rv data-en="Clinical workflow">Klinik akış</span>
          <h2 className="flow-h" data-rv data-en="From examination to follow-up, <em>four steps.</em>">Muayeneden kontrole, <em>dört adım.</em></h2>
          <ol className="flow-l">
            {FLOW.map((f, i) => (
              <li key={f.t} data-rv><b>{i + 1}</b><span className="pg-lbl" data-en={f.te}>{f.t}</span><p data-en={f.de}>{f.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bx-tx bx-wrap">
        <div className="bx-tx-hd" data-rv>
          <span className="pg-lbl" data-en="Areas of treatment">Tedavi alanları</span>
          <h2 className="bx-tx-h" data-en="Nine clinical areas.">Dokuz klinik alan.</h2>
        </div>
        <ol className="txi">
          {TX.map((t, i) => (
            <li key={t.slug}>
              <a href={`/tedaviler/${t.slug}`}><i>{two(i)}</i><b data-en={t.brEn}>{t.br}</b><span data-en={t.titleEn}>{t.title}</span><em aria-hidden="true">→</em></a>
            </li>
          ))}
        </ol>
        <div className="row" data-rv>
          <a className="pbtn wa-link" href={CLINIC.whatsapp} target="_blank" rel="noopener" data-en="Book an examination →">Muayene randevusu →</a>
          <a className="pbtn ghost" href="/ekibimiz" data-en="Our dentists →">Hekimlerimiz →</a>
        </div>
      </section>

      <div className="bx-wrap bx-ftw"><PageFooter /></div>
    </section>
  )
}

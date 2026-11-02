import { Fragment } from "react"
import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
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

// each stop flies the model behind the page to that room (data-at)
const WALK = [
  { at: "gate", z: "0.62", img: "kapi", t: "Giriş", te: "Entrance", d: "8 Kasım Mah. Hazal Sk. No:44/A, Lüleburgaz.", de: "8 Kasım Dist., Hazal St. No:44/A, Lüleburgaz." },
  { at: "room_resep", z: "0.74", img: "resepsiyon", t: "Danışma", te: "Reception", d: "Randevu, hasta kaydı ve anamnez formu.", de: "Appointments, patient registration and medical history form." },
  { at: "room_bekle", z: "0.74", img: "salon", t: "Bekleme", te: "Waiting area", d: "Randevu saatinize kadar beklediğiniz alan.", de: "Where you wait until your appointment time." },
  { at: "room_k1", z: "0.74", img: "k1", t: "Klinik 1", te: "Clinic 1", d: "Tedavi ünitesi · Zeus.", de: "Treatment unit · Zeus." },
  { at: "room_k2", z: "0.74", img: "k2", t: "Klinik 2", te: "Clinic 2", d: "Tedavi ünitesi · Apollo.", de: "Treatment unit · Apollo." },
  { at: "room_k3", z: "0.74", img: "k3", t: "Klinik 3", te: "Clinic 3", d: "Tedavi ünitesi · Artemis.", de: "Treatment unit · Artemis." },
  { at: "room_k4", z: "0.74", img: "k4", t: "Klinik 4", te: "Clinic 4", d: "Tedavi ünitesi · Athena.", de: "Treatment unit · Athena." },
  { at: "room_tomo", z: "0.74", img: "tomo", t: "Görüntüleme", te: "Imaging", d: "Dental volumetrik tomografi (CBCT). İmplant, cerrahi ve kanal tedavisi planlamasında üç boyutlu görüntü sağlar.", de: "Dental cone-beam CT (CBCT): a 3D image for planning implants, surgery and root canal treatment." },
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
          <span className="bx-scroll" data-en="Scroll to tour the clinic">Kaydırın, kliniği gezin</span>
        </div>
      </header>

      <div className="bx-marq" aria-hidden="true">
        <div>
          {[...AREAS, ...AREAS].map((a, i) => (
            <Fragment key={i}><span data-en={a.en}>{a.tr}</span><i>✳</i></Fragment>
          ))}
        </div>
      </div>

      <section className="walk" aria-label="Klinik altyapı" data-en-label="Clinical setting" style={{ "--n": WALK.length } as React.CSSProperties}>
        <div className="walk-in">
          <div className="walk-txt">
            <span className="pg-lbl" data-en="Clinical setting">Klinik altyapı</span>
            <div className="walk-num"><b>01</b><span>/ {two(WALK.length - 1)}</span></div>
            <h2 className="walk-t">{WALK[0].t}</h2>
            <p className="walk-d">{WALK[0].d}</p>
            <div className="walk-bar" aria-hidden="true"><i /></div>
            <span className="walk-hint" data-en="The model behind shows the room you are in.">Arkadaki maket, gezdiğiniz odayı gösterir.</span>
          </div>
          <div className="walk-track">
            {WALK.map((w, i) => (
              <figure key={w.at} data-at={w.at} data-in={i ? "1" : "0"} data-z={w.z} data-tr={w.t} data-en-t={w.te} data-dtr={w.d} data-den={w.de}>
                <img src={`/maket/img/${w.img}.webp`} alt={w.t} loading={i < 3 ? "eager" : "lazy"} />
                <figcaption><i>{two(i)}</i></figcaption>
              </figure>
            ))}
          </div>
        </div>
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

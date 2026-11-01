import { CLINIC, HOURS, SITE_EDITOR, SITE_UPDATED, TREATMENTS, siteUpdatedTR } from "@/lib/clinic"
import { CLINIC_FAQ } from "@/lib/faq"
import { LOCAL_SERVICES } from "@/lib/local-seo"

const ROOMS: { name: string; text: string }[] = [
  { name: "Klinik 1 · Zeus", text: "Mikroskop destekli kanal tedavisi ve dijital ağız içi tarayıcı." },
  { name: "Klinik 2 · Apollo", text: "Bahçeye bakan cam önünde tedavi odası." },
  { name: "Klinik 3 · Artemis", text: "Bol ışıklı tedavi odası." },
  { name: "Klinik 4 · Athena", text: "Kliniğin en sakin köşesi." },
  { name: "Tomografi odası", text: "Dental tomografi ile teşhis ve implant planlaması klinikte." },
  { name: "Bekleme salonu", text: "Beyaz sedirler, adaçayı minderler, bol yeşil." },
]

// Readable, indexable description of the clinic. Shown as a sheet from the
// home page, and as the whole page when the browser cannot run the 3D model.
export function AboutSheet() {
  return (
    <section id="about" className="ab" aria-labelledby="ab-h" tabIndex={-1}>
      <div className="ab-inner">
        <button type="button" className="ab-close" data-about-close aria-label="Kapat">×</button>
        <p className="ab-eb">Lüleburgaz · Hazal Sokak</p>
        <h2 id="ab-h">Lüleburgaz’da mikroskop destekli diş kliniği</h2>
        <p className="ab-lead">
          {CLINIC.legalName}, Lüleburgaz 8 Kasım Mahallesi’nde, bahçeli tek katlı bir binada hizmet veriyor.
          Dt. Emrecan Eren ve ekibi; kanal tedavisinden implanta, şeffaf plaktan çocuk diş hekimliğine kadar
          tedavileri dört tedavi odası ve klinik içindeki tomografiyle tek bir yerde yürütüyor.
        </p>

        <h3>Tedaviler</h3>
        <ul className="ab-list">
          {TREATMENTS.map((t) => (
            <li key={t.href}><a href={t.href}><b>{t.name}</b><span>{t.blurb}</span></a></li>
          ))}
        </ul>

        <h3>Lüleburgaz’da diş hekimi arıyorsanız</h3>
        <p>
          Diş ağrısı, dolgu, diş taşı temizliği ya da yirmi yaş dişi için Lüleburgaz’da diş hekimi, dişçi veya diş
          doktoru arıyorsanız kliniğimiz pazartesi ve çarşamba 22:00’ye kadar, hafta sonu da 11:00–17:00 arasında açık.
          Büyükkarıştıran, Babaeski, Pınarhisar ve çevre ilçelerden gelen hastalarımıza da randevu veriyoruz.
        </p>
        <ul className="ab-list">
          {LOCAL_SERVICES.map((s) => (
            <li key={s.slug}><a href={`/tedaviler/${s.slug}`}><b>{s.h1.replace("Lüleburgaz'da ", "")}</b><span>{s.lead}</span></a></li>
          ))}
        </ul>

        <h3>Sık sorulan sorular</h3>
        <dl className="ab-faq">
          {CLINIC_FAQ.slice(1, 6).map((f) => (
            <div key={f.question}><dt>{f.question}</dt><dd>{f.answer}</dd></div>
          ))}
        </dl>
        <p><a href="/sik-sorulan-sorular">Tüm sorular →</a></p>

        <h3>Klinikte neler var?</h3>
        <ul className="ab-list ab-rooms">
          {ROOMS.map((r) => (
            <li key={r.name}><b>{r.name}</b><span>{r.text}</span></li>
          ))}
        </ul>

        <div className="ab-cols">
          <div>
            <h3>Adres ve iletişim</h3>
            <address>
              {CLINIC.street}<br />{CLINIC.city}<br />
              <span className="ab-sel">{CLINIC.phone}</span>
            </address>
            <p className="ab-links">
              <a className="ab-btn" href={CLINIC.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ile randevu →</a>
              <a href={CLINIC.maps} target="_blank" rel="noopener noreferrer">Yol tarifi</a>
            </p>
          </div>
          <div>
            <h3>Çalışma saatleri</h3>
            <ul className="ab-hours">
              {HOURS.map((h) => (
                <li key={h.day}><span>{h.day}</span><span>{h.open}–{h.close}</span></li>
              ))}
            </ul>
          </div>
        </div>

        <p className="ab-more">
          <a href="/hakkinda">Hakkımızda</a> · <a href="/ekibimiz">Ekibimiz</a> · <a href="/dis-sagligi-rehberi">Diş sağlığı rehberi</a> · <a href="/iletisim">İletişim</a> · <a href="/sik-sorulan-sorular">Sık sorulan sorular</a> · <a href="/kvkk">KVKK</a>
        </p>
        <p className="ab-upd">Son güncelleme: <time dateTime={SITE_UPDATED}>{siteUpdatedTR()}</time> · Site editörü: {SITE_EDITOR.name}, {SITE_EDITOR.phone}</p>
      </div>
    </section>
  )
}

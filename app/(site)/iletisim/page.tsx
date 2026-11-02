import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { CLINIC, HOURS } from "@/lib/clinic"

export const metadata: Metadata = {
  title: "Lüleburgaz Diş Hekimi Randevu ve İletişim",
  description: "Lüleburgaz Dt. Emrecan Eren diş kliniği iletişim bilgileri: Hazal Sokak 44/A adresi, telefon, çalışma saatleri ve yol tarifi.",
  keywords: ["Lüleburgaz diş kliniği iletişim", "Lüleburgaz diş hekimi randevu"],
  alternates: { canonical: "/iletisim" },
}

const DAYS_EN = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const DIRECTIONS =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Emrecan Eren Ağız ve Diş Sağlığı Polikliniği, Hazal Sk. 44/A, Lüleburgaz")

export default function ContactPage() {
  return (
    <section className="pg" aria-labelledby="pgh-iletisim">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="06 · Contact">06 · İletişim</div>
        <h1 className="pg-h" id="pgh-iletisim" data-en="Hazal Street, <em>44/A.</em>">Hazal Sokak, <em>44/A.</em></h1>
        <p className="pg-lead" data-en="8 Kasım District, Lüleburgaz / Kırklareli. Open weekdays and weekends by appointment.">8 Kasım Mahallesi, Lüleburgaz / Kırklareli. Hafta içi ve hafta sonu randevuyla.</p>
        <span className="pg-place" data-en="On the model: Entrance">Maketteki yeri: Giriş</span>
      </header>
      <div className="contact">
        <div className="card livemap">
          {/* drawn from OpenStreetMap data by maket.js */}
          <svg className="lmap" role="img" aria-label="Kliniğin konumu: 8 Kasım Mah. Hazal Sk. No:44/A, Lüleburgaz" data-en-label="Clinic location: Hazal St. No:44/A, Lüleburgaz" />
          <div className="lm-ctl">
            <button type="button" data-z="in" aria-label="Yakınlaştır" data-en-label="Zoom in">+</button>
            <button type="button" data-z="out" aria-label="Uzaklaştır" data-en-label="Zoom out">−</button>
            <button type="button" data-z="home" aria-label="Kliniğe dön" data-en-label="Back to the clinic">◎</button>
          </div>
          <span className="lm-hint" data-en="Drag · scroll to zoom">Sürükleyin · yakınlaştırın</span>
          <div className="lm-ft">
            <div><b>{CLINIC.street}</b><span>{CLINIC.city}</span></div>
            <div className="row">
              <a className="pbtn" href={DIRECTIONS} target="_blank" rel="noopener" data-en="Directions ↗">Yol tarifi ↗</a>
              <a className="pbtn ghost mapsLink" href={CLINIC.maps} target="_blank" rel="noopener" data-en="Open in Google Maps ↗">Google Haritalar’da aç ↗</a>
            </div>
          </div>
          <a className="lm-attr" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>
        </div>
        <div className="card cinfo">
          <div>
            <span className="pg-lbl" data-en="Phone">Telefon</span>
            <div className="num">{CLINIC.phone}</div>
            <div className="row" style={{ marginTop: 14 }}>
              <a className="pbtn wa-link" href={CLINIC.whatsapp} target="_blank" rel="noopener" data-en="Book on WhatsApp →">WhatsApp ile randevu →</a>
              <a className="pbtn ghost" href={CLINIC.phoneHref} data-en="Call">Ara</a>
            </div>
          </div>
          <div>
            <span className="pg-lbl">Instagram</span>
            <a href={CLINIC.instagram} target="_blank" rel="noopener" style={{ fontFamily: "var(--disp)", fontSize: 20 }}>@emrecanerenadsp ↗</a>
          </div>
          <div>
            <span className="pg-lbl" data-en="Opening hours">Çalışma saatleri</span>
            <ul className="hrs">
              {HOURS.map((h, i) => (
                <li key={h.day} data-day={(i + 1) % 7}><span data-en={DAYS_EN[i]}>{h.day}</span><span>{h.open}–{h.close}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PageFooter />
    </section>
  )
}

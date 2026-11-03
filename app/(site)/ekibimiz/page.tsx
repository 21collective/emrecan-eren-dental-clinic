import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"

export const metadata: Metadata = {
  title: "Lüleburgaz Diş Hekimleri · Ekibimiz",
  description: "Lüleburgaz Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği diş hekimleri: Dt. Emrecan Eren, Dt. Barkın Ergin, Dt. Mehmet Varyemez, Dt. Rıdvan Doğan ve ekibi.",
  keywords: ["Lüleburgaz diş kliniği ekip", "diş hekimi ekibi", "Dt. Emrecan Eren ekip"],
  alternates: { canonical: "/ekibimiz" },
}

// p0…p3 are the dentists' figures in the garden model
const TEAM = [
  { name: "Dt. Emrecan Eren", role: "Kurucu Diş Hekimi", roleEn: "Founding Dentist", img: "ee", at: "p0" },
  { name: "Dt. Barkın Ergin", role: "Diş Hekimi", roleEn: "Dentist", img: "be", at: "p1" },
  { name: "Dt. Mehmet Varyemez", role: "Diş Hekimi", roleEn: "Dentist", img: "mv", at: "p2" },
  { name: "Dt. Rıdvan Doğan", role: "Diş Hekimi", roleEn: "Dentist", img: "rd", at: "p3" },
]

export default function TeamPage() {
  return (
    <section className="pg" aria-labelledby="pgh-ekibimiz">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="02 · Team">02 · Ekibimiz</div>
        <h1 className="pg-h" id="pgh-ekibimiz" data-en="Four dentists, <em>one clinic.</em>">Dört hekim, <em>tek klinik.</em></h1>
        <p className="pg-lead" data-en="The dentists who plan and carry out your treatment, with clinical assistants and the patient desk team beside them.">Tedavinizi planlayan ve uygulayan hekimlerimiz; yanlarında klinik asistanları ve hasta danışma ekibi.</p>
      </header>
      <div className="team">
        {TEAM.map((m) => (
          <article className="tm card" key={m.at}>
            <img src={`/maket/img/${m.img}.webp`} alt={m.name} loading="lazy" />
            <small data-en={m.roleEn}>{m.role}</small>
            <h2 data-en={m.name.replace(/^Dt\. /, "Dr. ")}>{m.name}</h2>
            <button type="button" data-act={`find:${m.at}`} data-en="Show on the model →">Makette göster →</button>
          </article>
        ))}
      </div>
      <div className="card split" style={{ padding: 30 }}>
        <div><span className="pg-lbl" data-en="Join the team">Ekibe katılın</span><h2 data-en="Would you like to join the team?">Ekibimize katılmak ister misiniz?</h2></div>
        <div className="row" style={{ justifyContent: "flex-end" }}><a className="pbtn" href="/kariyer" data-en="Careers →">Kariyer →</a></div>
      </div>
      <PageFooter />
    </section>
  )
}

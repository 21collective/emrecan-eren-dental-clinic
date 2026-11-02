import type { Metadata } from "next"
import { BackHome, PageFooter } from "@/components/site/page-bits"
import { CLINIC } from "@/lib/clinic"
import { two } from "@/lib/content"

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "Lüleburgaz Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği'nde sosyal medya sorumlusu ve diş protez teknisyeni pozisyonları için başvuru.",
  alternates: { canonical: "/kariyer" },
}

// applications (with CV upload) are handled by the application site
const APPLY_URL = "https://basvuru.emrecaneren.com"

const JOBS = [
  {
    title: "Sosyal Medya Sorumlusu",
    titleEn: "Social Media Lead",
    type: "Tam zamanlı · Yarı zamanlı · Serbest",
    typeEn: "Full-time · Part-time · Freelance",
    text: "Kliniğin fotoğraf, video ve Instagram üretimini yürütür.",
    textEn: "Runs the clinic’s photo, video and Instagram production.",
    items: ["Klinik ve ekip fotoğrafı", "Reels, vlog ve hekimin anlattığı eğitim videoları", "İçerik planı, tasarım ve hesap yönetimi", "Sağlık tanıtım kurallarına uygun içerik"],
  },
  {
    title: "Diş Protez Teknisyeni",
    titleEn: "Dental Technician",
    type: "Tam zamanlı · Yarı zamanlı",
    typeEn: "Full-time · Part-time",
    text: "Klinik içi laboratuvarda sabit ve hareketli protez üretimi.",
    textEn: "Fixed and removable prosthetics in the in-clinic lab.",
    items: ["Zirkonyum, cam seramik ve metal destekli porselen", "Dijital tasarım yazılımlarıyla çalışma", "Ağız içi tarayıcı verisiyle çalışma", "Hasta başında renk alma"],
  },
]

const VALUES = [
  { t: "Güncel ekipman", te: "Current equipment", de: "You work with an intraoral scanner, dental CT and in-house production.", d: "Ağız içi tarayıcı, dental tomografi ve klinik içi üretimle çalışırsınız." },
  { t: "Eğitim ve gelişim", te: "Training and growth", de: "In-house training and learning current protocols together.", d: "Ekip içi eğitimler ve güncel protokolleri birlikte öğrenme." },
  { t: "Destekleyici ekip", te: "A supportive team", de: "A people-first, unhurried way of working.", d: "İnsan odaklı, acele etmeyen bir çalışma düzeni." },
]

export default function CareerPage() {
  return (
    <section className="pg" aria-labelledby="pgh-kariyer">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="05 · Careers">05 · Kariyer</div>
        <h1 className="pg-h" id="pgh-kariyer" data-en="Join <em>the team.</em>">Ekibimize <em>katılın.</em></h1>
        <p className="pg-lead" data-en="We are hiring for two positions. Applications, with your CV, go through our application form (in Turkish).">
          İki pozisyon için başvuru alıyoruz. Başvurular, özgeçmiş yükleyebileceğiniz başvuru formumuz üzerinden alınır.
        </p>
        <span className="pg-place" data-en="On the model: Treatment room">Maketteki yeri: Tedavi odası</span>
      </header>
      <section className="jobs-sc" aria-label="Açık pozisyonlar" data-en-label="Open positions">
        <div className="jobs-hd"><span className="pg-lbl" data-en="Open positions">Açık pozisyonlar</span><b>{two(JOBS.length - 1)}</b></div>
        <div className="jobs">
          {JOBS.map((j, i) => (
            <article className="job" key={j.title}>
              <div className="job-top"><i>{two(i)}</i><small data-en={j.typeEn}>{j.type}</small></div>
              <h2 data-en={j.titleEn}>{j.title}</h2>
              <p data-en={j.textEn}>{j.text}</p>
              <ul>{j.items.map((x) => <li key={x}>{x}</li>)}</ul>
              <a className="pbtn" href={APPLY_URL} target="_blank" rel="noopener" data-en="Apply →">Başvur →</a>
            </article>
          ))}
        </div>
      </section>
      <section className="vals-sc" aria-label="Çalışma ortamı" data-en-label="Workplace">
        <span className="pg-lbl" data-en="Workplace">Çalışma ortamı</span>
        <div className="vals">
          {VALUES.map((v) => (
            <div className="card" key={v.t}><b data-en={v.te}>{v.t}</b><p data-en={v.de}>{v.d}</p></div>
          ))}
        </div>
        <p
          className="dt-note"
          data-en={`Questions: <b>${CLINIC.phone}</b>. The personal data you send with your application is processed only to assess it, under our <a href="/kvkk">privacy notice</a> (in Turkish).`}
        >
          Sorularınız için: <b>{CLINIC.phone}</b>. Başvurunuzla ilettiğiniz kişisel veriler, yalnızca iş başvurunuzun
          değerlendirilmesi amacıyla <a href="/kvkk">KVKK Aydınlatma Metni</a> kapsamında işlenir.
        </p>
      </section>
      <PageFooter />
    </section>
  )
}

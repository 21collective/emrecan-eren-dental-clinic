import type { Metadata } from "next"
import { BackHome, GuideCard, PageFooter } from "@/components/site/page-bits"
import { GD, GUIDE_CATS } from "@/lib/content"

export const metadata: Metadata = {
  title: "Diş Sağlığı Rehberi",
  description:
    "Lüleburgaz Dt. Emrecan Eren kliniğinden diş sağlığı hakkında bilgilendirme yazıları: implant, ortodonti, kanal tedavisi, diş eti, çocuk diş sağlığı ve daha fazlası.",
  keywords: ["diş sağlığı rehberi", "diş tedavisi bilgileri", "implant rehberi", "ortodonti bilgileri", "kanal tedavisi"],
  alternates: { canonical: "/dis-sagligi-rehberi" },
}

export default function GuidePage() {
  return (
    <section className="pg" aria-labelledby="pgh-rehber">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="04 · Guide">04 · Rehber</div>
        <h1 className="pg-h" id="pgh-rehber" data-en="Dental health <em>guide.</em>">Diş sağlığı <em>rehberi.</em></h1>
        <p className="pg-lead" data-en="Information articles written by our dentists, in Turkish. They inform; they do not replace an examination.">Hekimlerimizin hazırladığı bilgilendirme yazıları. Bilgi verir; muayenenin yerini tutmaz.</p>
        <span className="pg-place" data-en="On the model: The straw shade">Maketteki yeri: Hasır gölgelik</span>
      </header>
      <div className="gl-wrap">
        {/* chips filter the cards in place (maket.js, data-cat) */}
        <div className="gl-chips" role="group" aria-label="Kategori" data-en-label="Category">
          <button type="button" data-cat="" aria-pressed="true" data-en={`All · ${GD.length}`}>Tümü · {GD.length}</button>
          {GUIDE_CATS.map((c) => (
            <button type="button" data-cat={c} aria-pressed="false" key={c}>{c}</button>
          ))}
        </div>
        <div className="gl">{GD.map((g) => <GuideCard key={g.slug} g={g} />)}</div>
      </div>
      <PageFooter />
    </section>
  )
}

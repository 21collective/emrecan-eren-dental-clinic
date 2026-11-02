import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { AboutSheet } from "@/components/maket/about-sheet"

export const metadata: Metadata = {
  title: { absolute: "Lüleburgaz Diş Kliniği | Emrecan Eren Ağız ve Diş Sağlığı Polikliniği" },
  description:
    "Lüleburgaz diş kliniği ve diş hekimi: Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği, Hazal Sk. 44/A. Dolgu, kanal, implant, şeffaf plak; akşam ve hafta sonu randevu.",
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="localBusiness" />
      <h1 id="title"><em data-en="Your smile">Gülüşünüz</em><b data-en="grows here<span>.</span>">burada yeşerir<span>.</span></b></h1>
      <AboutSheet />
    </>
  )
}

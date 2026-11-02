import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/seo/schema-markup"
import { AboutSheet } from "@/components/maket/about-sheet"

export const metadata: Metadata = {
  title: { absolute: "Lüleburgaz Diş Hekimi | Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği" },
  description:
    "Lüleburgaz diş hekimi Dt. Emrecan Eren: Hazal Sokak'ta bahçeli, mikroskop destekli diş kliniği. Dolgu, kanal tedavisi, implant, şeffaf plak. Hafta sonu ve akşam açık.",
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

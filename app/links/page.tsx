import type { Metadata, Viewport } from "next"
import { headers } from "next/headers"
import { LinksContent } from "./links-content"
import { pickLanguage } from "./pick-language"

export const metadata: Metadata = {
  title: "Bağlantılarımız | Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
  description:
    "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği iletişim ve sosyal medya bağlantıları.",
  // Bu sayfa yalnızca broşürdeki QR koddan açılır: siteden linklenmez,
  // sitemap'te yer almaz ve arama motorlarına kapalıdır.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false },
  },
}

export const viewport: Viewport = {
  themeColor: "#725649",
}

export default function LinksPage() {
  const initialLang = pickLanguage(headers().get("accept-language"))

  return <LinksContent initialLang={initialLang} />
}

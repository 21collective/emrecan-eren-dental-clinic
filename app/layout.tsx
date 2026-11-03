import type { Metadata, Viewport } from "next"
import { preload } from "react-dom"
import "./reset.css"
import "./globals.css"
import { josefin } from "./fonts"
import { OG_IMAGE } from "@/lib/clinic"
import { ContactEvents } from "@/components/site/analytics"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emrecaneren.com"),
  // every page points to itself unless it sets its own canonical
  alternates: { canonical: "./" },
  title: {
    default: "Lüleburgaz Diş Kliniği | Emrecan Eren Ağız ve Diş Sağlığı Polikliniği",
    template: "%s | Dt. Emrecan Eren",
  },
  description:
    "Lüleburgaz diş kliniği ve diş hekimi: Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği, Hazal Sk. 44/A. Dolgu, kanal, implant, şeffaf plak; akşam ve hafta sonu randevu.",
  keywords: ["Lüleburgaz diş kliniği", "Lüleburgaz diş hekimi", "Lüleburgaz dişçi", "Lüleburgaz özel diş kliniği", "Lüleburgaz implant", "Lüleburgaz kanal tedavisi", "Lüleburgaz şeffaf plak"],
  authors: [{ name: "Dt. Emrecan Eren" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.emrecaneren.com",
    siteName: "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
    title: "Lüleburgaz Diş Kliniği | Emrecan Eren Ağız ve Diş Sağlığı Polikliniği",
    description: "Lüleburgaz Hazal Sokak'ta mikroskop destekli diş kliniği. Bahçeden içeri buyurun.",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", images: ["/maket/og.jpg"] },
}

export const viewport: Viewport = {
  themeColor: "#ECE6DC",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // fetch the text font with the HTML, so text is not re-laid out when it arrives (both files: ş and ğ are in latin-ext)
  preload("/fonts/parkinsans-latin.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  preload("/fonts/parkinsans-latin-ext.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" })
  // cookieless visit statistics (Umami), only when both build variables are set
  const umami = process.env.NEXT_PUBLIC_UMAMI_SRC && process.env.NEXT_PUBLIC_UMAMI_ID
    ? { src: process.env.NEXT_PUBLIC_UMAMI_SRC, id: process.env.NEXT_PUBLIC_UMAMI_ID }
    : null
  return (
    <html lang="tr" className={josefin.variable}>
      {/* the site layout's inline script sets the page-open class before hydration */}
      <body suppressHydrationWarning>
        {children}
        {umami && <script defer src={umami.src} data-website-id={umami.id} data-domains="www.emrecaneren.com" />}
        {umami && <ContactEvents />}
      </body>
    </html>
  )
}

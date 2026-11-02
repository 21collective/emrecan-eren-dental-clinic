import type { Metadata, Viewport } from "next"
import "./globals.css"
import { josefin } from "./fonts"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.emrecaneren.com"),
  // every page points to itself unless it sets its own canonical
  alternates: { canonical: "./" },
  title: {
    default: "Lüleburgaz Diş Hekimi | Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
    template: "%s | Dt. Emrecan Eren",
  },
  description:
    "Lüleburgaz Hazal Sokak'ta mikroskop destekli diş kliniği. Kanal tedavisi, implant, şeffaf plak, estetik diş hekimliği ve çocuk diş hekimliği. Dt. Emrecan Eren.",
  keywords: ["Lüleburgaz diş hekimi", "Lüleburgaz diş kliniği", "Lüleburgaz implant", "Lüleburgaz kanal tedavisi", "Lüleburgaz şeffaf plak"],
  authors: [{ name: "Dt. Emrecan Eren" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.emrecaneren.com",
    siteName: "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
    title: "Lüleburgaz Diş Hekimi | Dt. Emrecan Eren",
    description: "Lüleburgaz'ın mikroskop destekli diş kliniği. Bahçeden içeri buyurun.",
    images: [{ url: "/maket/og.jpg", width: 1200, height: 630, alt: "Kliniğin bahçeli maket görünümü" }],
  },
  twitter: { card: "summary_large_image", images: ["/maket/og.jpg"] },
}

export const viewport: Viewport = {
  themeColor: "#F6F3EE",
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={josefin.variable}>
      {/* the site layout's inline script sets the page-open class before hydration */}
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

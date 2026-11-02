// Single source for the clinic's contact details, hours and site navigation.

export const CLINIC = {
  name: "Dt. Emrecan Eren",
  legalName: "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
  street: "8 Kasım Mah. Hazal Sk. No:44/A",
  city: "Lüleburgaz / Kırklareli",
  phone: "+90 543 486 00 55",
  phoneHref: "tel:+905434860055",
  whatsapp:
    "https://wa.me/905434860055?text=" +
    encodeURIComponent("Merhaba, Hazal Sk.’deki kliniğiniz için randevu almak istiyorum."),
  maps: "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Emrecan Eren Ağız ve Diş Sağlığı Polikliniği, Hazal Sk. 44/A, Lüleburgaz"),
  instagram: "https://www.instagram.com/emrecanerenadsp",
  youtube: "https://www.youtube.com/@lifeindentistry",
  googleMaps: "https://maps.google.com/?cid=17744340931578869053",
}

// Required on health sites (Tanıtım ve Bilgilendirme Yönetmeliği 5/1-ı): last update + editor contact.
// Bump SITE_UPDATED whenever content changes.
export const SITE_UPDATED = "2026-11-02"
export const SITE_EDITOR = { name: "21collective – Mertcan Eren", phone: "0 542 689 80 44" }

export function siteUpdatedTR() {
  return new Date(SITE_UPDATED + "T12:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })
}

// Monday first, as patients read a week
export const HOURS: { day: string; open: string; close: string }[] = [
  { day: "Pazartesi", open: "13:00", close: "22:00" },
  { day: "Salı", open: "10:30", close: "19:00" },
  { day: "Çarşamba", open: "13:00", close: "22:00" },
  { day: "Perşembe", open: "10:30", close: "19:00" },
  { day: "Cuma", open: "10:30", close: "19:00" },
  { day: "Cumartesi", open: "11:00", close: "17:00" },
  { day: "Pazar", open: "11:00", close: "17:00" },
]

export const TREATMENTS: { name: string; href: string; blurb: string }[] = [
  { name: "Mikroskopik Diş Tedavisi", href: "/tedaviler/mikroskopik-dis-tedavisi", blurb: "Kanal tedavisi ve dolgu, dişi büyüterek görerek." },
  { name: "İmplant Tedavisi", href: "/tedaviler/implant-tedavisi", blurb: "Eksik dişlerin yerine, tomografiyle planlanmış implant." },
  { name: "Estetik Diş Hekimliği", href: "/tedaviler/estetik-dis-hekimligi", blurb: "Lamina, zirkonyum, beyazlatma ve gülüş tasarımı." },
  { name: "Ortodonti (Şeffaf Plak)", href: "/tedaviler/ortodonti-seffaf-plak", blurb: "Tel takmadan, şeffaf plaklarla diş düzeltme." },
  { name: "Ağız, Diş ve Çene Cerrahisi", href: "/tedaviler/agiz-dis-cene-cerrahisi", blurb: "Gömülü yirmi yaş ve cerrahi diş çekimi." },
  { name: "Periodontoloji", href: "/tedaviler/periodontoloji-dis-eti-tedavisi", blurb: "Diş eti kanaması, çekilmesi ve derin temizlik." },
  { name: "Protetik Diş Tedavisi", href: "/tedaviler/protetik-dis-tedavisi", blurb: "Kaplama, köprü ve protezler." },
  { name: "Pedodonti", href: "/tedaviler/pedodonti-cocuk-dis-hekimligi", blurb: "Çocuklar için sakin bir ortamda diş hekimliği." },
  { name: "Bruksizm (Diş Sıkma)", href: "/tedaviler/dis-sikma-bruksizm-tedavisi", blurb: "Kişiye özel gece plağı." },
]

// share image for every page; pages that set their own openGraph must repeat it (Next does not merge it in)
export const OG_IMAGE = { url: "/maket/og.jpg", width: 1200, height: 630, alt: "Kliniğin bahçeli maket görünümü" }

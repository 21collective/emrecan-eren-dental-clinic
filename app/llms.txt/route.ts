// /llms.txt: a plain summary of the clinic for AI assistants, built from the same data as the site
import { CLINIC, HOURS, SITE_UPDATED, TREATMENTS } from "@/lib/clinic"
import { CLINIC_FAQ } from "@/lib/faq"
import { LOCAL_SERVICES } from "@/lib/local-seo"

const SITE = "https://www.emrecaneren.com"

export const dynamic = "force-static"

export function GET() {
  const body = `# ${CLINIC.legalName}

> Lüleburgaz (Kırklareli) 8 Kasım Mahallesi'nde, bahçeli tek katlı binada hizmet veren ağız ve diş sağlığı polikliniği. Kurucu hekim Dt. Emrecan Eren. Klinikte dental mikroskop ve dental tomografi bulunur.

- Adres: ${CLINIC.street}, ${CLINIC.city}
- Google Haritalar: ${CLINIC.googleMaps}
- Telefon / WhatsApp: ${CLINIC.phone}
- Çalışma saatleri: ${HOURS.map((h) => `${h.day} ${h.open}–${h.close}`).join("; ")}
- Hekimler: Dt. Emrecan Eren, Dt. Barkın Ergin, Dt. Mehmet Varyemez, Dt. Rıdvan Doğan
- Hizmet verilen bölge: Lüleburgaz ve çevresi (Büyükkarıştıran, Evrensekiz, Babaeski, Pınarhisar, Vize, Muratlı, Hayrabolu)
- Son güncelleme: ${SITE_UPDATED}

## Tedaviler

${[...LOCAL_SERVICES.map((s) => `- [${s.name}](${SITE}/tedaviler/${s.slug}): ${s.lead}`),
  ...TREATMENTS.map((t) => `- [${t.name}](${SITE}${t.href}): ${t.blurb}`)].join("\n")}

## Sık sorulan sorular

${CLINIC_FAQ.map((f) => `- **${f.question}** ${f.answer}`).join("\n")}

## Sayfalar

- [Sık sorulan sorular](${SITE}/sik-sorulan-sorular)
- [KVKK ve yasal bilgilendirme](${SITE}/kvkk)
- [Hakkımızda](${SITE}/hakkinda)
- [Ekibimiz](${SITE}/ekibimiz)
- [İletişim ve yol tarifi](${SITE}/iletisim)
- [Diş sağlığı rehberi](${SITE}/dis-sagligi-rehberi)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}

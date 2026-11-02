"use client"

import Image from "next/image"
import { useState } from "react"
import { Phone, MapPin, ArrowUpRight } from "lucide-react"
import type { Lang } from "./pick-language"
import { SITE_EDITOR, SITE_UPDATED } from "@/lib/clinic"

const PHONE_DISPLAY = "0543 486 00 55"
const PHONE_HREF = "tel:+905434860055"
const MAPS_HREF = "https://maps.app.goo.gl/ZjYhRLkJtXxZwqXX7"
const CLINIC_HANDLE = "emrecanerenadsp"

// Kliniğin tescilli adı her dilde aynı kalır.
const LEGAL_NAME = "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği"
const UPDATED_LABEL: Record<Lang, string> = { tr: "Son güncelleme", en: "Last updated", bg: "Последна актуализация" }
const EDITOR_LABEL: Record<Lang, string> = { tr: "Site editörü", en: "Site editor", bg: "Редактор на сайта" }
const DATE_LOCALE: Record<Lang, string> = { tr: "tr-TR", en: "en-GB", bg: "bg-BG" }

const LANGUAGES: { code: Lang; short: string; label: string }[] = [
  { code: "tr", short: "TR", label: "Türkçe" },
  { code: "en", short: "EN", label: "English" },
  { code: "bg", short: "BG", label: "Български" },
]

const COPY: Record<Lang, Record<string, string>> = {
  tr: {
    tagline: "Ağız ve Diş Sağlığı Polikliniği",
    callEyebrow: "BİZİ ARAYIN",
    clinicEyebrow: "KLİNİĞİMİZ",
    directions: "Yol tarifi alın",
    accountEyebrow: "KLİNİK HESABIMIZ",
    teamHeading: "EKİBİMİZİ TAKİP EDİN",
    langGroupLabel: "Dil seçimi",
  },
  en: {
    tagline: "Oral and Dental Health Clinic",
    callEyebrow: "CALL US",
    clinicEyebrow: "OUR CLINIC",
    directions: "Get directions",
    accountEyebrow: "CLINIC ACCOUNT",
    teamHeading: "FOLLOW OUR TEAM",
    langGroupLabel: "Language selection",
  },
  bg: {
    tagline: "Клиника за орално и дентално здраве",
    callEyebrow: "ОБАДЕТЕ СЕ",
    clinicEyebrow: "НАШАТА КЛИНИКА",
    directions: "Вижте маршрута",
    accountEyebrow: "ПРОФИЛ НА КЛИНИКАТА",
    teamHeading: "ПОСЛЕДВАЙТЕ ЕКИПА НИ",
    langGroupLabel: "Избор на език",
  },
}

// İsimler Latin alfabesinde kalıyor: Instagram profilleriyle birebir
// eşleşmeleri, tanınabilirlikten daha önemli. Yalnızca unvan çevriliyor.
const TEAM: {
  monogram: string
  handle: string
  name: Record<Lang, string>
  role: Record<Lang, string>
}[] = [
  {
    monogram: "EE",
    handle: "sadeceemmrecaan",
    name: { tr: "Dt. Emrecan Eren", en: "Dr. Emrecan Eren", bg: "Д-р Emrecan Eren" },
    role: {
      tr: "Kurucu Diş Hekimi",
      en: "Founding Dentist",
      bg: "Дентален лекар, основател",
    },
  },
  {
    monogram: "BE",
    handle: "trakyadishekimi",
    name: { tr: "Dt. Barkın Ergin", en: "Dr. Barkın Ergin", bg: "Д-р Barkın Ergin" },
    role: { tr: "Diş Hekimi", en: "Dentist", bg: "Дентален лекар" },
  },
  {
    monogram: "MV",
    handle: "trakyadishekimi0",
    name: { tr: "Dt. Mehmet Varyemez", en: "Dr. Mehmet Varyemez", bg: "Д-р Mehmet Varyemez" },
    role: { tr: "Diş Hekimi", en: "Dentist", bg: "Дентален лекар" },
  },
  {
    monogram: "RD",
    handle: "trakyadishekimii",
    name: { tr: "Dt. Rıdvan Doğan", en: "Dr. Rıdvan Doğan", bg: "Д-р Rıdvan Doğan" },
    role: { tr: "Diş Hekimi", en: "Dentist", bg: "Дентален лекар" },
  },
  {
    monogram: "BK",
    handle: "trakyadiyetisyen",
    name: {
      tr: "Dyt. Beyza Şule Kahraman",
      en: "Beyza Şule Kahraman",
      bg: "Beyza Şule Kahraman",
    },
    role: { tr: "Diyetisyen", en: "Dietitian", bg: "Диетолог" },
  },
]

// lucide no longer ships brand marks; same 24px stroke style as its other icons
function Instagram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const instagramUrl = (handle: string) => `https://www.instagram.com/${handle}/`

export function LinksContent({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = COPY[lang]

  return (
    <main
      lang={lang}
      className="flex min-h-[100dvh] flex-col bg-cream pb-8 links-page"
    >
      <div className="mx-auto flex w-full max-w-[440px] flex-1 flex-col">
        {/* Klinik künyesi — sayfanın kim adına konuştuğunu tek bakışta kurar */}
        <header className="reveal rounded-b-[28px] bg-brown px-7 pb-8 pt-5 text-center shadow-[0_18px_40px_-24px_rgba(114,86,73,0.9)]">
          <div
            role="group"
            aria-label={t.langGroupLabel}
            className="mx-auto flex w-fit gap-0.5 rounded-full border border-cream/20 p-0.5"
          >
            {LANGUAGES.map((option) => {
              const active = option.code === lang
              return (
                <button
                  key={option.code}
                  type="button"
                  lang={option.code}
                  aria-label={option.label}
                  aria-pressed={active}
                  onClick={() => setLang(option.code)}
                  className={`min-w-[44px] rounded-full px-3 py-1.5 text-[0.6875rem] font-bold tracking-[0.1em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream ${
                    active
                      ? "bg-cream text-brown"
                      : "text-cream/60 hover:text-cream"
                  }`}
                >
                  {option.short}
                </button>
              )
            })}
          </div>

          {/* Logo kare bir tuval ve kendi iç boşluğunu taşıyor; bu yüzden
              büyük render edilip çevresindeki padding kısılıyor. */}
          <Image
            src="/header_logos.png"
            alt="Emrecan Eren"
            width={200}
            height={200}
            priority
            className="mx-auto -mt-2 h-[184px] w-[184px] object-contain brightness-0 invert"
          />
          <p className="-mt-6 text-[0.9375rem] font-light leading-snug text-cream/75">
            {t.tagline}
          </p>
          <p className="mt-3 text-[0.6875rem] font-medium tracking-[0.22em] text-vizon-light">
            LÜLEBURGAZ
          </p>
        </header>

        <div className="flex flex-1 flex-col px-5">
          {/* Birincil eylemler: QR'ı okutan kişinin en olası iki niyeti */}
          <div className="mt-7 space-y-3">
            <a
              href={PHONE_HREF}
              className="reveal reveal-1 flex min-h-[64px] items-center gap-4 rounded-2xl bg-brown px-5 text-cream transition-colors duration-200 hover:bg-brown-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown active:bg-brown-dark"
            >
              <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[0.6875rem] font-medium tracking-[0.18em] text-cream/60">
                  {t.callEyebrow}
                </span>
                <span className="mt-0.5 text-lg font-bold tracking-tight" dir="ltr">
                  {PHONE_DISPLAY}
                </span>
              </span>
            </a>

            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-2 flex min-h-[64px] items-center gap-4 rounded-2xl border border-brown/25 bg-transparent px-5 text-brown transition-colors duration-200 hover:bg-brown/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown active:bg-brown/10"
            >
              <MapPin className="h-5 w-5 shrink-0 text-vizon" aria-hidden="true" />
              <span className="flex flex-col text-left leading-tight">
                <span className="text-[0.6875rem] font-medium tracking-[0.18em] text-brown/55">
                  {t.clinicEyebrow}
                </span>
                <span className="mt-0.5 text-lg font-bold tracking-tight">
                  {t.directions}
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-brown/40" aria-hidden="true" />
            </a>
          </div>

          {/* Klinik hesabı hekimlerden ayrı duruyor: farklı türde bir hesap */}
          <a
            href={instagramUrl(CLINIC_HANDLE)}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-3 mt-3 flex min-h-[64px] items-center gap-4 rounded-2xl bg-vizon px-5 text-cream transition-colors duration-200 hover:bg-vizon-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vizon active:bg-vizon-light"
          >
            <Instagram className="h-5 w-5 shrink-0" aria-hidden="true" />
            <span className="flex min-w-0 flex-col text-left leading-tight">
              <span className="text-[0.6875rem] font-medium tracking-[0.18em] text-cream/65">
                {t.accountEyebrow}
              </span>
              <span className="mt-0.5 truncate text-lg font-bold tracking-tight" dir="ltr">
                @{CLINIC_HANDLE}
              </span>
            </span>
            <ArrowUpRight className="ml-auto h-5 w-5 shrink-0 text-cream/50" aria-hidden="true" />
          </a>

          {/* Ekip listesi */}
          <div className="reveal reveal-4 mt-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-brown/15" />
            <h2 className="text-[0.6875rem] font-medium tracking-[0.2em] text-brown/55">
              {t.teamHeading}
            </h2>
            <span className="h-px flex-1 bg-brown/15" />
          </div>

          <ul className="mt-5 space-y-2.5">
            {TEAM.map((person, index) => (
              <li
                key={person.handle}
                className="reveal"
                style={{ animationDelay: `${0.28 + index * 0.06}s` }}
              >
                <a
                  href={instagramUrl(person.handle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[72px] items-center gap-4 rounded-2xl border border-brown/12 bg-white/45 px-4 py-3 transition-colors duration-200 hover:border-brown/25 hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vizon active:bg-white"
                >
                  {/* Fotoğraf yerine monogram: eksik değil, kasıtlı */}
                  <span
                    aria-hidden="true"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-vizon/35 bg-cream text-sm font-extrabold tracking-tight text-vizon transition-colors duration-200 group-hover:border-vizon group-hover:bg-vizon group-hover:text-cream"
                  >
                    {person.monogram}
                  </span>

                  <span className="flex min-w-0 flex-col text-left leading-tight">
                    {/* İsim kırpılmaz, sarar: dar ekranda uzun isimler
                        eksik görünmesin. */}
                    <span className="text-[1.0625rem] font-bold leading-snug tracking-tight text-brown">
                      {person.name[lang]}
                    </span>
                    <span className="mt-0.5 text-[0.8125rem] font-light text-brown/60">
                      {person.role[lang]}
                    </span>
                    <span className="mt-1 truncate text-[0.8125rem] font-light text-vizon" dir="ltr">
                      <span className="text-vizon/55">@</span>
                      {person.handle}
                    </span>
                  </span>

                  <Instagram
                    className="ml-auto h-5 w-5 shrink-0 text-brown/25 transition-colors duration-200 group-hover:text-vizon"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          <p className="reveal reveal-5 mt-auto pt-12 text-center text-[0.75rem] font-light leading-relaxed text-brown/45">
            {LEGAL_NAME}
            <br />
            {UPDATED_LABEL[lang]}: {new Date(SITE_UPDATED + "T12:00:00").toLocaleDateString(DATE_LOCALE[lang], { day: "numeric", month: "long", year: "numeric" })}
            {" · "}
            {EDITOR_LABEL[lang]}: {SITE_EDITOR.name}, {SITE_EDITOR.phone}
          </p>
        </div>
      </div>

      <style>{`
        .links-page .reveal {
          animation: links-rise 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .links-page .reveal-1 { animation-delay: 0.06s; }
        .links-page .reveal-2 { animation-delay: 0.12s; }
        .links-page .reveal-3 { animation-delay: 0.18s; }
        .links-page .reveal-4 { animation-delay: 0.24s; }
        .links-page .reveal-5 { animation-delay: 0.56s; }

        @keyframes links-rise {
          from { opacity: 0; transform: translate3d(0, 12px, 0); }
          to   { opacity: 1; transform: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .links-page .reveal {
            animation: none;
          }
        }
      `}</style>
    </main>
  )
}

"use client"

import { useState } from "react"
import type { Lang } from "./pick-language"
import { CLINIC, SITE_EDITOR, SITE_UPDATED } from "@/lib/clinic"
import "./links.css"

const PHONE_DISPLAY = "+90 543 486 00 55"
const MAPS_HREF = "https://maps.app.goo.gl/ZjYhRLkJtXxZwqXX7"
const CLINIC_HANDLE = "emrecanerenadsp"
const DATE_LOCALE: Record<Lang, string> = { tr: "tr-TR", en: "en-GB", bg: "bg-BG" }

const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "bg", label: "Български" },
]

const COPY: Record<Lang, Record<string, string>> = {
  tr: {
    langLabel: "Dil seçimi", tagline: "Özel Ağız ve Diş Sağlığı Polikliniği", call: "Bizi arayın",
    clinic: "Kliniğimiz", directions: "Yol tarifi", site: "Web sitesi", model: "Kliniği gezin",
    account: "Klinik hesabımız", team: "Ekibimizi takip edin", updated: "Son güncelleme", editor: "Site editörü",
    founder: "Kurucu Diş Hekimi", dentist: "Diş Hekimi", diet: "Diyetisyen",
  },
  en: {
    langLabel: "Language", tagline: "Private Oral and Dental Health Polyclinic", call: "Call us",
    clinic: "Our clinic", directions: "Directions", site: "Website", model: "Tour the clinic",
    account: "Clinic account", team: "Follow our team", updated: "Last updated", editor: "Site editor",
    founder: "Founding Dentist", dentist: "Dentist", diet: "Dietitian",
  },
  bg: {
    langLabel: "Език", tagline: "Частна клиника за орално и дентално здраве", call: "Обадете се",
    clinic: "Нашата клиника", directions: "Маршрут", site: "Уебсайт", model: "Разгледайте клиниката",
    account: "Профил на клиниката", team: "Последвайте екипа ни", updated: "Последна актуализация", editor: "Редактор на сайта",
    founder: "Дентален лекар, основател", dentist: "Дентален лекар", diet: "Диетолог",
  },
}

// "Dt." in Turkish, "Dr." / "Д-р" elsewhere
const TITLE: Record<Lang, string> = { tr: "Dt.", en: "Dr.", bg: "Д-р" }

const TEAM: { name: string; role: "founder" | "dentist" | "diet"; handle: string; img?: string; mono?: string }[] = [
  { name: "Emrecan Eren", role: "founder", handle: "sadeceemmrecaan", img: "ee" },
  { name: "Barkın Ergin", role: "dentist", handle: "trakyadishekimi", img: "be" },
  { name: "Mehmet Varyemez", role: "dentist", handle: "trakyadishekimi0", img: "mv" },
  { name: "Rıdvan Doğan", role: "dentist", handle: "trakyadishekimii", img: "rd" },
  { name: "Beyza Şule Kahraman", role: "diet", handle: "trakyadiyetisyen", mono: "BK" },
]

const instagramUrl = (handle: string) => `https://www.instagram.com/${handle}/`

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function LinksContent({ initialLang }: { initialLang: Lang }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = COPY[lang]
  const personName = (p: (typeof TEAM)[number]) =>
    p.role === "diet" ? (lang === "tr" ? `Dyt. ${p.name}` : p.name) : `${TITLE[lang]} ${p.name}`
  const updated = new Date(SITE_UPDATED + "T12:00:00").toLocaleDateString(DATE_LOCALE[lang], { day: "numeric", month: "long", year: "numeric" })

  return (
    <main className="lk" lang={lang}>
      <header className="lk-hero">
        <img className="lk-poster" src="/maket/poster-mobile.webp" alt="" />
        <div role="group" aria-label={t.langLabel} className="lk-lang">
          {LANGUAGES.map((o) => (
            <button key={o.code} type="button" lang={o.code} aria-label={o.label} aria-pressed={o.code === lang} onClick={() => setLang(o.code)}>
              {o.code.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="lk-id">
          <svg className="lk-mark" viewBox="422 0 255 380" aria-hidden="true">
            <path fill="currentColor" d="M441.53,359.78v-133.27c0-48.17,39.05-87.21,87.21-87.21h51.47c2.44,0,4.41-1.97,4.41-4.41v-11.15c0-2.44-1.97-4.41-4.41-4.41h-51.47c-59.2,0-107.19,47.99-107.19,107.18v153.24h158.82c2.43,0,4.41-1.97,4.41-4.41v-11.15c0-2.44-1.97-4.41-4.41-4.41h-138.85Z" />
            <path fill="currentColor" d="M656.2,240.45V107.18c0-48.17-39.05-87.21-87.21-87.21h-51.47c-2.44,0-4.41-1.97-4.41-4.41V4.41c0-2.44,1.97-4.41,4.41-4.41h51.47c59.2,0,107.19,47.99,107.19,107.19v153.24h-158.82c-2.44,0-4.41-1.97-4.41-4.41v-11.15c0-2.44,1.97-4.41,4.41-4.41h138.85Z" />
          </svg>
          <h1>Emrecan Eren</h1>
          <p>{t.tagline}</p>
          <span>LÜLEBURGAZ</span>
        </div>
      </header>

      <a className="lk-tile lk-call" href={CLINIC.phoneHref}>
        <span>
          <small>{t.call}</small>
          <b dir="ltr">{PHONE_DISPLAY}</b>
        </span>
        <i aria-hidden="true">↗</i>
      </a>

      <div className="lk-two">
        <a className="lk-tile lk-map" href={MAPS_HREF} target="_blank" rel="noopener noreferrer">
          <small>{t.clinic}</small>
          <span><b>{t.directions}</b>Hazal Sk. 44/A</span>
        </a>
        <a className="lk-tile lk-site" href="/">
          <small>{t.site}</small>
          <span><b>{t.model}</b><em>emrecaneren.com</em></span>
        </a>
      </div>

      <a className="lk-tile lk-ig" href={instagramUrl(CLINIC_HANDLE)} target="_blank" rel="noopener noreferrer">
        <span className="lk-ig-ic"><InstagramMark /></span>
        <span className="lk-ig-tx">
          <small>{t.account}</small>
          <b dir="ltr">@{CLINIC_HANDLE}</b>
        </span>
        <i aria-hidden="true">→</i>
      </a>

      <section className="lk-team" aria-labelledby="lk-team-h">
        <h2 id="lk-team-h">{t.team}</h2>
        <ul>
          {TEAM.map((p) => (
            <li key={p.handle}>
              <a className="lk-tile lk-person" href={instagramUrl(p.handle)} target="_blank" rel="noopener noreferrer">
                {p.img ? (
                  <img src={`/maket/img/${p.img}.webp`} alt="" loading="lazy" />
                ) : (
                  <span className="lk-mono" aria-hidden="true">{p.mono}</span>
                )}
                <span className="lk-person-tx">
                  <b>{personName(p)}</b>
                  <span>{t[p.role]} · <span dir="ltr">@{p.handle}</span></span>
                </span>
                <i aria-hidden="true">→</i>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="lk-ft">
        <b>{CLINIC.legalName}</b>
        <span>
          {t.updated}: {updated} · {t.editor}: {SITE_EDITOR.name}, {SITE_EDITOR.phone}
        </span>
        <span>Family business, different toolboxes. — 21collective</span>
      </footer>
    </main>
  )
}

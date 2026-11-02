"use client"

import { useEffect } from "react"

// Umami: cookieless visit statistics, self-hosted. Off unless both build-time variables are set
// (CapRover app env → build args): NEXT_PUBLIC_UMAMI_SRC (…/script.js) and NEXT_PUBLIC_UMAMI_ID.
const UMAMI_SRC = process.env.NEXT_PUBLIC_UMAMI_SRC || ""
const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID || ""

type Umami = { track: (event: string, data?: Record<string, string>) => void }

// the contact actions worth counting, by link target
const EVENTS: [RegExp, string][] = [
  [/^https:\/\/wa\.me\//, "whatsapp"],
  [/^tel:/, "telefon"],
  [/google\.[a-z.]+\/maps|maps\.app\.goo\.gl|maps\.google\./, "yol-tarifi"],
  [/instagram\.com\//, "instagram"],
  [/basvuru\.emrecaneren\.com/, "is-basvurusu"],
]

// counts clicks on contact links; the tracker script itself is rendered by app/layout.tsx
export function ContactEvents() {
  useEffect(() => {
    if (!UMAMI_SRC || !UMAMI_ID) return
    const onClick = (e: MouseEvent) => {
      const href = (e.target as HTMLElement).closest("a")?.getAttribute("href") || ""
      const hit = EVENTS.find(([re]) => re.test(href))
      if (hit) (window as Window & { umami?: Umami }).umami?.track(hit[1], { sayfa: location.pathname })
    }
    document.addEventListener("click", onClick, { capture: true })
    return () => document.removeEventListener("click", onClick, { capture: true })
  }, [])

  return null
}

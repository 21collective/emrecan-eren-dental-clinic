import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false },
}

// Fallback outside the site layout (the site's own 404 is app/(site)/not-found.tsx)
export default function RootNotFound() {
  return (
    <main
      style={{
        minHeight: "100svh", display: "grid", alignContent: "center", gap: 20, boxSizing: "border-box",
        paddingBlock: 48, paddingInline: "max(24px, 6vw)", background: "#1C241E", color: "#F6F3EE",
      }}
    >
      <span style={{ fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "#ffc777" }}>404 · Sayfa bulunamadı</span>
      <h1 style={{ margin: 0, fontSize: "clamp(44px, 8vw, 104px)", lineHeight: 0.94, letterSpacing: "-.045em", fontWeight: 600 }}>
        Bu sayfa bahçede yok.
      </h1>
      <a
        href="/"
        style={{ justifySelf: "start", padding: "16px 24px", borderRadius: 999, background: "#ffc777", color: "#1C241E", fontWeight: 600, textDecoration: "none" }}
      >
        ← Anasayfa
      </a>
    </main>
  )
}

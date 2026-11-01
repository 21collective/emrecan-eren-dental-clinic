"use client"

import { useCallback, useEffect, useState } from "react"

type Scene = { el: HTMLElement; label: string }

// tones after the hero, repeating; the hero is always dark, the footer too
const TONES = ["cream", "acc", "sand", "dark"]
const MIN_SCENE = 260 // shorter blocks (labels, notes) ride along with the next scene

const isFooter = (el: Element) => el.matches(".pg-ft, .bx-ftw") || !!el.querySelector(":scope > .pg-ft")

function labelOf(el: HTMLElement, i: number, en: boolean) {
  if (i === 0) return en ? "Intro" : "Giriş"
  const own = el.getAttribute("aria-label")
  const h = el.querySelector("h2") || el.querySelector(".pg-lbl, h3, b")
  const t = (own || h?.innerText || "").replace(/\s+/g, " ").replace(/^§\s*\d+\s*/, "").trim()
  return t.length > 28 ? t.slice(0, 27) + "…" : t || (en ? "Section" : "Bölüm")
}

// Turns the open page into full-screen scenes: each top-level section of .pg gets
// a tone and a snap point, and a rail, arrows and a progress bar follow the scroll.
export function Scenes({ path }: { path: string }) {
  const [scenes, setScenes] = useState<Scene[]>([])
  const [cur, setCur] = useState(0)

  const build = useCallback(() => {
    const pg = document.querySelector<HTMLElement>("#pages .pg")
    if (!pg) return setScenes([])
    const kids = Array.from(pg.children).filter((k): k is HTMLElement => k instanceof HTMLElement && k.tagName !== "SCRIPT")
    const en = document.documentElement.lang === "en"
    const isScene = kids.map((k, i) => i === 0 || (!isFooter(k) && k.offsetHeight >= MIN_SCENE))
    const tone: string[] = []
    let n = 0
    kids.forEach((k, i) => {
      if (i === 0) tone[i] = "dark"
      else if (isFooter(k)) tone[i] = "dark"
      else if (isScene[i]) tone[i] = TONES[n++ % TONES.length]
    })
    // small blocks take the tone of the scene after them
    for (let i = kids.length - 1; i >= 0; i--) if (!tone[i]) tone[i] = tone[i + 1] || tone[i - 1] || "cream"
    const list: Scene[] = []
    kids.forEach((k, i) => {
      k.dataset.tone = tone[i]
      k.classList.toggle("sc", isScene[i])
      k.classList.toggle("sc-hero", i === 0)
      // a block that starts or ends a run of one tone gets room at that edge
      k.classList.toggle("sc-top", !isScene[i] && tone[i] !== tone[i - 1])
      k.classList.toggle("sc-end", !isScene[i] && tone[i] !== tone[i + 1] && !isFooter(k))
      if (isScene[i]) list.push({ el: k, label: labelOf(k, i, en) })
    })
    const eb = kids[0]?.querySelector(".pg-eb, .dt-eb b")?.textContent?.match(/\d{2}/)
    if (eb) kids[0].dataset.n = eb[0]
    setScenes(list)
    setCur(0)
  }, [])

  useEffect(() => {
    if (path === "/") return setScenes([])
    // after the new page has painted (fonts and images change heights a little)
    const t1 = setTimeout(build, 60)
    const t2 = setTimeout(build, 900)
    const lang = () => setTimeout(build, 60)
    document.getElementById("langBtn")?.addEventListener("click", lang)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.getElementById("langBtn")?.removeEventListener("click", lang)
    }
  }, [path, build])

  useEffect(() => {
    const pages = document.getElementById("pages")
    if (!pages || !scenes.length) return
    const onScroll = () => {
      const y = pages.clientHeight * 0.4
      let a = 0
      scenes.forEach((s, i) => { if (s.el.getBoundingClientRect().top <= y) a = i })
      setCur(a)
    }
    onScroll()
    pages.addEventListener("scroll", onScroll, { passive: true })
    return () => pages.removeEventListener("scroll", onScroll)
  }, [scenes])

  const go = (i: number) => {
    const pages = document.getElementById("pages")
    const s = scenes[Math.max(0, Math.min(scenes.length - 1, i))]
    if (!pages || !s) return
    pages.scrollTo({ top: s.el.getBoundingClientRect().top + pages.scrollTop, behavior: "smooth" })
  }

  if (scenes.length < 2) return null
  const tone = scenes[cur]?.el.dataset.tone || "dark"
  const two = (i: number) => String(i + 1).padStart(2, "0")
  return (
    <div data-tone={tone} style={{ background: "none", display: "contents" }}>
      <nav className="scr" aria-label="Bölümler">
        {scenes.map((s, i) => (
          <button key={i} type="button" onClick={() => go(i)} aria-current={i === cur ? "step" : undefined}>
            <b>{two(i)}</b><span>{s.label}</span>
          </button>
        ))}
      </nav>
      <div className="scn">
        <button type="button" onClick={() => go(cur - 1)} aria-label="Önceki bölüm">←</button>
        <button type="button" className="nx" onClick={() => go(cur + 1)} aria-label="Sonraki bölüm">→</button>
        <span className="bar" aria-hidden="true"><i style={{ width: `${((cur + 1) / scenes.length) * 100}%` }} /></span>
      </div>
    </div>
  )
}

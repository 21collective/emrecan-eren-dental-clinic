"use client"

import { useCallback, useEffect } from "react"

// tones after the hero, repeating; the hero is always dark, the footer too
const TONES = ["cream", "acc", "sand", "dark"]
const MIN_SCENE = 260 // shorter blocks (labels, notes) ride along with the next scene

const isFooter = (el: Element) => el.matches(".pg-ft, .bx-ftw") || !!el.querySelector(":scope > .pg-ft")

// Turns the open page into full-screen scenes: each top-level section of .pg gets a tone and a snap point.
export function Scenes({ path }: { path: string }) {
  const build = useCallback(() => {
    const pg = document.querySelector<HTMLElement>("#pages .pg")
    if (!pg) return
    const kids = Array.from(pg.children).filter((k): k is HTMLElement => k instanceof HTMLElement && k.tagName !== "SCRIPT")
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
    kids.forEach((k, i) => {
      k.dataset.tone = tone[i]
      k.classList.toggle("sc", isScene[i])
      k.classList.toggle("sc-hero", i === 0)
      // a block that starts or ends a run of one tone gets room at that edge
      k.classList.toggle("sc-top", !isScene[i] && tone[i] !== tone[i - 1])
      k.classList.toggle("sc-end", !isScene[i] && tone[i] !== tone[i + 1] && !isFooter(k))
    })
    const eb = kids[0]?.querySelector(".pg-eb, .dt-eb b")?.textContent?.match(/\d{2,3}/)
    if (eb) kids[0].dataset.n = eb[0]
  }, [])

  useEffect(() => {
    if (path === "/") return
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

  return null
}

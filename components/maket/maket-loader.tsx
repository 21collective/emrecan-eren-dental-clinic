"use client"

import { useEffect } from "react"

// Bump when public/maket/maket.js changes so browsers fetch the new scene.
const MAKET_VERSION = "16"

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement("script")
    s.src = src
    s.async = false
    s.onload = () => resolve()
    s.onerror = () => reject(new Error(src))
    document.body.appendChild(s)
  })
}

// Loads three.js and the garden scene after the poster has painted, so the
// first view (poster + headline) never waits on WebGL. The scene lives in the
// site layout, so it survives client navigation between pages.
export function MaketLoader() {
  useEffect(() => {
    const w = window as Window & { __maketLoaded?: boolean }
    if (w.__maketLoaded) return
    w.__maketLoaded = true
    const go = () =>
      loadScript("/maket/three.min.js")
        .then(() => loadScript(`/maket/maket.js?v=${MAKET_VERSION}`))
        .catch(() => document.documentElement.classList.add("mk-fallback"))
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback
    const start = () => (ric ? ric(go, { timeout: 2500 }) : setTimeout(go, 300))
    if (document.readyState === "complete") start()
    else window.addEventListener("load", start, { once: true })
  }, [])
  return null
}

// Opens/closes the "about the clinic" sheet from any [data-about-open] / [data-about-close].
export function AboutToggle() {
  useEffect(() => {
    const root = document.documentElement
    const sheet = document.getElementById("about")
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest("[data-about-open]")) {
        root.classList.add("about-open")
        sheet?.focus()
      } else if (t.closest("[data-about-close]")) {
        root.classList.remove("about-open")
      }
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") root.classList.remove("about-open") }
    document.addEventListener("click", onClick)
    window.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("click", onClick)
      window.removeEventListener("keydown", onKey)
      root.classList.remove("about-open")
    }
  }, [])
  return null
}

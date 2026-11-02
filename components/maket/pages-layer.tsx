"use client"

import { useEffect, useLayoutEffect, useRef } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Scenes } from "./scenes"

type MaketWindow = Window & { __mkNav?: (href: string) => void; __mkRoute?: (path: string) => void }

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect

// Inner pages slide over the persistent garden model. The scene script (maket.js)
// flies the camera to each page's place; React owns the page content.
export function PagesLayer({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const router = useRouter()
  const home = path === "/"

  useIsoLayoutEffect(() => {
    document.body.classList.toggle("page-open", !home)
  }, [home])

  useEffect(() => {
    ;(window as MaketWindow).__mkNav = (href) => router.push(href)
  }, [router])

  // after the first page, page changes animate in (see site.css)
  const first = useRef(true)
  useEffect(() => {
    if (first.current) first.current = false
    else document.documentElement.classList.add("pg-nav")
  }, [path])

  useEffect(() => {
    const pages = document.getElementById("pages")
    if (pages) pages.scrollTop = 0
    ;(window as MaketWindow).__mkRoute?.(path)
  }, [path])

  // the chrome markup and page bodies use plain links; keep them client-side
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement).closest("a")
      const href = a?.getAttribute("href")
      if (!a || !href || !href.startsWith("/") || href.startsWith("//") || a.target === "_blank" || a.hasAttribute("download")) return
      e.preventDefault()
      router.push(href)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [router])

  return (
    <>
      {home ? children : null}
      <div id="pages" hidden={home}>
        {home ? null : children}
      </div>
      <Scenes path={path} />
    </>
  )
}

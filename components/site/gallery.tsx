"use client"

import { useEffect, useRef, useState } from "react"

export type Shot = { img: string; t: string; te: string; shape?: "wide" | "tall" }

// Bento grid of clinic photos; a tile opens the photo large in a dialog (arrows and Esc work)
export function Gallery({ shots }: { shots: Shot[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const dlg = useRef<HTMLDialogElement>(null)
  const en = () => typeof document !== "undefined" && document.documentElement.lang === "en"

  useEffect(() => {
    const d = dlg.current
    if (!d) return
    if (open === null) d.open && d.close()
    else if (!d.open) d.showModal()
  }, [open])

  const step = (by: number) => setOpen((i) => (i === null ? i : (i + by + shots.length) % shots.length))
  const cur = open === null ? null : shots[open]

  return (
    <>
      <div className="phs-grid">
        {shots.map((s, i) => (
          <button key={s.img} type="button" className={`phs-tile${s.shape ? " " + s.shape : ""}`} onClick={() => setOpen(i)}>
            {/* tiles load the small cut (-s); the dialog shows the full photo */}
            <img
              src={`/maket/img/${s.img}-s.webp`}
              srcSet={s.shape === "tall"
                ? `/maket/img/${s.img}-s.webp 480w, /maket/img/${s.img}.webp 900w`
                : `/maket/img/${s.img}-s.webp 800w, /maket/img/${s.img}.webp 1400w`}
              sizes={s.shape === "wide" ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 50vw, 25vw"}
              alt={s.t}
              loading="lazy"
              decoding="async"
            />
            <span data-en={s.te}>{s.t}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dlg}
        className="phs-dlg"
        aria-label={cur ? (en() ? cur.te : cur.t) : undefined}
        onClose={() => setOpen(null)}
        onClick={(e) => e.target === e.currentTarget && setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1)
          if (e.key === "ArrowLeft") step(-1)
        }}
      >
        {cur && (
          <figure>
            <img src={`/maket/img/${cur.img}.webp`} alt={en() ? cur.te : cur.t} />
            <figcaption>
              <span>{en() ? cur.te : cur.t}</span>
              <i>{String((open ?? 0) + 1).padStart(2, "0")} / {String(shots.length).padStart(2, "0")}</i>
            </figcaption>
          </figure>
        )}
        <div className="phs-ctl">
          <button type="button" onClick={() => step(-1)} aria-label={en() ? "Previous photo" : "Önceki fotoğraf"}>←</button>
          <button type="button" onClick={() => step(1)} aria-label={en() ? "Next photo" : "Sonraki fotoğraf"}>→</button>
          <button type="button" className="x" onClick={() => setOpen(null)} aria-label={en() ? "Close" : "Kapat"}>×</button>
        </div>
      </dialog>
    </>
  )
}

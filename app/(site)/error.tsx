"use client"

import { BackHome, PageFooter } from "@/components/site/page-bits"

// A page that fails to render still opens over the model, with a way to retry
export default function PageError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="pg" aria-labelledby="pgh-err">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="Something went wrong">Bir sorun oluştu</div>
        <h1 className="pg-h" id="pgh-err" data-en="This page <em>could not load.</em>">
          Bu sayfa <em>açılamadı.</em>
        </h1>
        <p className="pg-lead" data-en="It is usually temporary. Try again, or carry on from the home page.">
          Bu genellikle geçicidir. Yeniden deneyin ya da anasayfadan devam edin.
        </p>
        <button type="button" className="pbtn" onClick={reset} data-en="Try again">
          Yeniden dene
        </button>
      </header>
      <PageFooter />
    </section>
  )
}

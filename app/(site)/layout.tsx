import { Chrome } from "@/components/maket/chrome"
import { AboutToggle, MaketLoader } from "@/components/maket/maket-loader"
import { MAKET_DOCK, MAKET_TAIL, MAKET_TOP } from "@/components/maket/markup"
import { PagesLayer } from "@/components/maket/pages-layer"
import { SITE_UPDATED, siteUpdatedTR } from "@/lib/clinic"
import "./maket.css"
import "./site.css"

// the generated footers carry the editor credit; the regulation also wants the last-update date beside it
const updatedEN = new Date(SITE_UPDATED + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
const withUpdated = (html: string) =>
  html.split('<span class="ft-r">').join(`<span class="ft-r"><span data-en="Last updated: ${updatedEN}">Son güncelleme: ${siteUpdatedTR()}</span> · `)

// Every page sits over one persistent garden model; inner pages open as a veil
// above it and the camera flies to the page's place in the garden.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mk-root">
      {/* before hydration: inner pages start with the veil up */}
      <script dangerouslySetInnerHTML={{ __html: "if(location.pathname!=='/')document.body.classList.add('page-open')" }} />

      {/* painted first; the live model fades in over it once ready */}
      <picture className="mk-poster" aria-hidden="true">
        <source media="(max-width: 640px)" srcSet="/maket/poster-mobile.webp" />
        <img src="/maket/poster-desktop.webp" alt="" fetchPriority="high" decoding="async" />
      </picture>

      <div id="sky" />
      <div id="skyN" />
      <canvas id="c" aria-label="Kliniğin ve bahçesinin 3B maketi: sürükleyerek çevirin, nesnelere dokunun" />

      <Chrome html={withUpdated(MAKET_TOP)} />
      <Chrome html={withUpdated(MAKET_DOCK)} />

      <PagesLayer>{children}</PagesLayer>

      <Chrome html={withUpdated(MAKET_TAIL)} />

      <AboutToggle />
      <MaketLoader />
    </div>
  )
}

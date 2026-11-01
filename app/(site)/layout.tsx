import { Chrome } from "@/components/maket/chrome"
import { AboutToggle, MaketLoader } from "@/components/maket/maket-loader"
import { MAKET_DOCK, MAKET_TAIL, MAKET_TOP } from "@/components/maket/markup"
import { PagesLayer } from "@/components/maket/pages-layer"
import "./maket.css"
import "./site.css"

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

      <Chrome html={MAKET_TOP} />
      <Chrome html={MAKET_DOCK} />

      <PagesLayer>{children}</PagesLayer>

      <Chrome html={MAKET_TAIL} />

      <AboutToggle />
      <MaketLoader />
    </div>
  )
}

import type { Metadata } from "next"
import { notFound } from "next/navigation"

// the not-found boundary's own metadata is not applied when a page throws notFound(), so the title is set here
export const metadata: Metadata = {
  title: "Sayfa bulunamadı",
  robots: { index: false },
}

// Unknown addresses land here so the 404 opens inside the site layout, over the model
export default function Missing() {
  notFound()
}

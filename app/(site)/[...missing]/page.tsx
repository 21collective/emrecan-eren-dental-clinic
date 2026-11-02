import { notFound } from "next/navigation"

// Unknown addresses land here so the 404 opens inside the site layout, over the model
export default function Missing() {
  notFound()
}

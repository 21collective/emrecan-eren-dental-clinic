"use client"

import { memo } from "react"

// Static chrome markup that maket.js binds to and fills in (icons, labels, listeners).
// It is written once; later layout renders on client navigation must never reset it.
export const Chrome = memo(
  function Chrome({ html }: { html: string }) {
    return <div className="mk-chrome" dangerouslySetInnerHTML={{ __html: html }} />
  },
  () => true,
)

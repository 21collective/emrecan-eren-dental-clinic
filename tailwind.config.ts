import type { Config } from "tailwindcss"

// Tailwind only styles the /links QR page; the main site is plain CSS (app/(site)/*.css)
const config = {
  content: ["./app/links/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Arial", "sans-serif"],
      },
      colors: {
        cream: "#f0ece1",
        brown: { DEFAULT: "#725649", dark: "#5a4539" },
        vizon: { DEFAULT: "#886e57", light: "#a08875" },
      },
    },
  },
} satisfies Config

export default config

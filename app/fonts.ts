import { Josefin_Sans } from 'next/font/google'

// Lettering on the 3D clinic sign; everything else is set in Parkinsans (globals.css)
export const josefin = Josefin_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-josefin',
  display: 'swap',
  preload: false,
})

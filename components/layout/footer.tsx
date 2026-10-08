"use client"

import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook } from "lucide-react"

const quickLinks = [
  { name: "Hakkımızda", href: "/hakkinda" },
  { name: "Ekibimiz", href: "/ekibimiz" },
  { name: "Tedaviler", href: "/tedaviler" },
  { name: "Blog", href: "/dis-sagligi-rehberi" },
  { name: "İletişim", href: "/iletisim" },
  { name: "Kariyer", href: "/kariyer" },
]

const socialLinks = [
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/dtemrecaneren", 
    icon: Instagram,
    color: "hover:text-pink-400"
  },
  { 
    name: "YouTube", 
    href: "https://www.youtube.com/@lifeindentistry", 
    icon: Youtube,
    color: "hover:text-red-500"
  },
  
]

export function Footer() {
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dt. Emrecan Eren</h3>
            <p className="text-cream/80 mb-6 leading-relaxed">
              Lüleburgaz'ın ilk ve tek mikroskop destekli diş kliniği. 
              Geleceğin diş hekimliği, bugünün kliniği.
            </p>

            {/* Social Media Links */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-cream">Bizi Takip Edin</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-cream/70 ${social.color} transition-all duration-300 transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  )
                })}
              </div>
            </div>
            
            <ul className="space-y-3 text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-vizon-light" />
                <span className="text-sm">8 Kasım Mahallesi, Hazal Sokak, No:44/A, Lüleburgaz, Kırklareli</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-vizon-light" />
                <a href="tel:+905434860055" className="text-sm hover:text-cream transition-colors">
                  +90 543 486 00 55
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-vizon-light" />
                <a href="mailto:info@emrecaneren.com" className="text-sm hover:text-cream transition-colors">
                  info@emrecaneren.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/80 hover:text-cream hover:translate-x-1 inline-block transition-all"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Çalışma Saatleri</h4>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 mt-0.5 flex-shrink-0 text-vizon-light" />
              <ul className="space-y-1.5 text-sm text-cream/80">
                <li className="flex justify-between gap-4">
                  <span>Pazartesi</span>
                  <span className="text-cream">13:00 - 22:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Salı</span>
                  <span className="text-cream">10:30 - 19:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Çarşamba</span>
                  <span className="text-cream">13:00 - 22:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Perşembe</span>
                  <span className="text-cream">10:30 - 19:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Cuma</span>
                  <span className="text-cream">10:30 - 19:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Cumartesi</span>
                  <span className="text-cream">11:00 - 17:00</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Pazar</span>
                  <span className="text-cream">11:00 - 17:00</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Google Maps */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Konumumuz</h4>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.2590808254245!2d27.359614499999996!3d41.390179599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a5f024a85985%3A0xf6409010502eb53d!2zRW1yZWNhbiBFcmVuIEHEn8SxeiB2ZSBEacWfIFNhxJ9sxLHEn8SxIFBvbGlrbGluacSfaQ!5e0!3m2!1str!2suk!4v1762827729240!5m2!1str!2suk" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 pt-3 border-t border-cream/40 text-center">
          <p className="text-sm text-cream/60">
            If you’ve made it this far, we should probably talk.{" "}
            <a 
              href="https://21collective.co" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/80 hover:text-cream transition-colors font-bold"
            >
              21collective © 2025
            </a>
          </p>
          <p className="mt-1 text-sm text-cream/60">
            21collective - Mertcan Eren İletişim:{" "}
            <a
              href="tel:+905426898044"
              className="text-cream/80 hover:text-cream transition-colors font-bold"
            >
              0 542 689 80 44
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

# Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği — web sitesi

Next.js 16 (App Router) ile yazılmış, Lüleburgaz'daki kliniğin sitesi. Ana sayfada kliniğin
bahçeli 3B maketi (three.js) açılır; iç sayfalar maketin üstünde, bölüm bölüm sahneler olarak gelir.

## Yapı

| Yol | İçerik |
| --- | --- |
| `app/(site)/` | Sitenin tüm sayfaları; `layout.tsx` maketi bir kez kurar, sayfalar üstünde açılır |
| `app/(site)/maket.css`, `site.css` | Stil. `maket.css` üretilir, elle değişiklikler `site.css`'e |
| `components/maket/` | Maket köprüsü, sayfa katmanı, sahne rayı (`scenes.tsx`). `markup.ts` üretilir |
| `components/site/page-bits.tsx` | Ortak sayfa parçaları: alt bilgi, SSS, içindekiler |
| `lib/` | İçerik: tedaviler ve rehber yazıları (`content.json`), klinik bilgileri (`clinic.ts`), SSS |
| `public/maket/` | Maket betiği, three.js, posterler ve fotoğraflar |
| `app/links/` | QR kodun açtığı bağlantı sayfası (TR/EN/BG) |

## Geliştirme

```bash
npm install
npm run dev          # geliştirme sunucusu
npm run build        # üretim derlemesi (output: standalone)
```

Çalışan geliştirme sunucusunun `.next` klasörüne dokunmadan önizleme derlemesi almak için:

```bash
NEXT_DIST_DIR=.next-preview npm run build
NEXT_DIST_DIR=.next-preview npx next start -p 3006
```

Ortam değişkenleri `.env.example` içinde. İş başvuruları ayrı başvuru paneline
(basvuru.emrecaneren.com) bağlantı verir; bu sitede form işleme yoktur.

## İçerik kuralları

Tüm metinler 2025 Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği'ne uyar:
fiyat ya da kampanya yok, üstünlük iddiası yok, kliniğin hekimleri için "uzman" yok, marka adı
yok, hasta yorumu yok, sonuç garantisi yok, kaynaksız istatistik yok. Her sayfada son güncelleme
tarihi ve site editörü (21collective – Mertcan Eren · 0 542 689 80 44) görünür; içerik
değişince `lib/clinic.ts` içindeki `SITE_UPDATED` güncellenir.

## Yayın

Docker (`Dockerfile`, standalone çıktı) ile CapRover üzerinden (`captain-definition`).

// Clinic-level questions people ask search engines and AI assistants.
// Answers stay factual (address, hours, process); no prices, no superiority claims.
import { CLINIC, HOURS } from "@/lib/clinic"

const hoursLine = HOURS.map((h) => `${h.day} ${h.open}–${h.close}`).join(", ")

export const CLINIC_FAQ: { question: string; answer: string }[] = [
  {
    question: "Dt. Emrecan Eren kliniği Lüleburgaz’da nerede?",
    answer: `${CLINIC.legalName}, ${CLINIC.street}, ${CLINIC.city} adresindedir. Klinik, bahçeli tek katlı bir binada hizmet verir.`,
  },
  {
    question: "Kliniğin çalışma saatleri nedir?",
    answer: `Çalışma saatlerimiz: ${hoursLine}.`,
  },
  {
    question: "Lüleburgaz’da hafta sonu açık diş hekimi var mı?",
    answer: "Kliniğimiz cumartesi ve pazar günleri 11:00–17:00 arasında açıktır. Gelmeden önce WhatsApp’tan yazarak randevu saati almanızı öneririz.",
  },
  {
    question: "Akşam saatlerinde diş hekimine gidebilir miyim?",
    answer: "Pazartesi ve çarşamba günleri 22:00’ye kadar, salı, perşembe ve cuma günleri 19:00’a kadar hasta kabul ediyoruz.",
  },
  {
    question: "Randevu nasıl alabilirim?",
    answer: `WhatsApp üzerinden yazarak ya da ${CLINIC.phone} numarasını arayarak randevu alabilirsiniz. Şikayetinizi kısaca yazmanız uygun saati planlamamızı kolaylaştırır.`,
  },
  {
    question: "Diş ağrısı için randevusuz gelebilir miyim?",
    answer: "Acil durumlarda önce WhatsApp’tan yazmanızı öneririz; o gün için uygun bir saat ayarlamaya çalışırız. Yüzde hızla büyüyen şişlik, nefes almada veya yutkunmada güçlük, yüksek ateş ya da durmayan kanama varsa en yakın hastanenin acil servisine başvurun.",
  },
  {
    question: "Klinikte hangi tedaviler yapılıyor?",
    answer: "Muayene ve diş taşı temizliği, dolgu, kanal tedavisi, diş çekimi ve gömülü 20 yaş dişi cerrahisi, implant, zirkonyum kaplama ve köprü, lamina, diş beyazlatma, şeffaf plak ile ortodonti, diş eti tedavileri, çocuk diş hekimliği ve diş sıkma (bruksizm) tedavisi.",
  },
  {
    question: "Kanal tedavisinde mikroskop kullanılıyor mu?",
    answer: "Evet. Kliniğimizde kanal tedavileri dental mikroskop altında yapılır. Mikroskop çalışma alanını büyütüp aydınlatarak ek kanalların ve çatlakların görülmesine yardımcı olur.",
  },
  {
    question: "Klinikte tomografi çekilebiliyor mu?",
    answer: "Evet. Klinik içinde dental tomografi bulunur; implant planlaması, gömülü diş ve kanal tedavisi gerektiren durumlarda üç boyutlu görüntüleme yapılabilir.",
  },
  {
    question: "Klinikte kaç diş hekimi çalışıyor?",
    answer: "Kliniğimizde Dt. Emrecan Eren, Dt. Barkın Ergin, Dt. Mehmet Varyemez ve Dt. Rıdvan Doğan olmak üzere dört diş hekimi hasta kabul etmektedir.",
  },
  {
    question: "Çocuklar için diş hekimi hizmeti var mı?",
    answer: "Evet. Süt dişi tedavileri, flor uygulaması ve fissür örtücü gibi koruyucu uygulamalar kliniğimizde yapılmaktadır.",
  },
  {
    question: "Tedavi ücretlerini sitede neden göremiyorum?",
    answer: "Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik gereği tanıtım mecralarında ücret, indirim veya kampanya bilgisi yer alamaz. Ücret bilgisi muayene sonrası, kişiye özel tedavi planıyla birlikte verilir.",
  },
  {
    question: "Lüleburgaz dışından gelen hastalara hizmet veriyor musunuz?",
    answer: "Evet. Büyükkarıştıran, Evrensekiz, Babaeski, Pınarhisar, Vize, Muratlı ve Hayrabolu gibi yakın yerleşimlerden gelen hastalarımız için de randevu planlıyoruz.",
  },
]

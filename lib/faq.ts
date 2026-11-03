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

const DAY_EN: Record<string, string> = {
  Pazartesi: "Monday", Salı: "Tuesday", Çarşamba: "Wednesday", Perşembe: "Thursday", Cuma: "Friday", Cumartesi: "Saturday", Pazar: "Sunday",
}
const hoursLineEn = HOURS.map((h) => `${DAY_EN[h.day] || h.day} ${h.open}–${h.close}`).join(", ")

// English for the visitor's language switch, same order as CLINIC_FAQ
export const CLINIC_FAQ_EN: { question: string; answer: string }[] = [
  {
    question: "Where is Dr. Emrecan Eren's clinic in Lüleburgaz?",
    answer: `Emrecan Eren Private Oral and Dental Health Polyclinic is at ${CLINIC.street}, ${CLINIC.city}. The clinic is a single-storey building with a garden.`,
  },
  { question: "What are the clinic's opening hours?", answer: `Our opening hours: ${hoursLineEn}.` },
  {
    question: "Is there a dentist open at the weekend in Lüleburgaz?",
    answer: "Our clinic is open on Saturdays and Sundays from 11:00 to 17:00. We suggest messaging us on WhatsApp for an appointment time before you come.",
  },
  {
    question: "Can I see a dentist in the evening?",
    answer: "We see patients until 22:00 on Mondays and Wednesdays, and until 19:00 on Tuesdays, Thursdays and Fridays.",
  },
  {
    question: "How do I make an appointment?",
    answer: `Message us on WhatsApp or call ${CLINIC.phone}. Telling us briefly what the problem is helps us plan a suitable time.`,
  },
  {
    question: "Can I come without an appointment if I have toothache?",
    answer: "In an emergency, please message us on WhatsApp first; we try to find a suitable time that day. If you have rapidly growing facial swelling, difficulty breathing or swallowing, a high fever or bleeding that will not stop, go to the nearest hospital emergency department.",
  },
  {
    question: "Which treatments does the clinic provide?",
    answer: "Examinations and scaling, fillings, root canal treatment, extractions and impacted wisdom tooth surgery, implants, zirconia crowns and bridges, laminate veneers, tooth whitening, orthodontics with clear aligners, gum treatments, pediatric dentistry and bruxism treatment.",
  },
  {
    question: "Is a microscope used for root canal treatment?",
    answer: "Yes. Root canal treatments at our clinic are carried out under a dental microscope. The microscope magnifies and lights the working area, which helps to see extra canals and cracks.",
  },
  {
    question: "Can a CT scan be taken at the clinic?",
    answer: "Yes. The clinic has a dental CT (CBCT) unit; three-dimensional imaging can be taken for implant planning, impacted teeth and cases that need root canal treatment.",
  },
  {
    question: "How many dentists work at the clinic?",
    answer: "Four dentists see patients at our clinic: Dr. Emrecan Eren, Dr. Barkın Ergin, Dr. Mehmet Varyemez and Dr. Rıdvan Doğan.",
  },
  {
    question: "Do you treat children?",
    answer: "Yes. Treatment of baby teeth and preventive care such as fluoride application and fissure sealants are provided at our clinic.",
  },
  {
    question: "Why can't I see treatment prices on the website?",
    answer: "Under Turkey's regulation on promotion and information in health services, prices, discounts or campaigns may not appear in promotional media. Prices are shared after an examination, together with a treatment plan made for you.",
  },
  {
    question: "Do you see patients from outside Lüleburgaz?",
    answer: "Yes. We also plan appointments for patients from nearby places such as Büyükkarıştıran, Evrensekiz, Babaeski, Pınarhisar, Vize, Muratlı and Hayrabolu.",
  },
]

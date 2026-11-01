// Content for the "Lüleburgaz + tedavi" pages under /tedaviler/[slug].
// Each page answers one thing people actually search for locally; wording stays
// factual (no prices, no superlatives, no promised results) per health advertising rules.

export type LocalService = {
  slug: string
  name: string // breadcrumb + schema name
  title: string // <title>, kept under ~60 chars
  description: string // meta description, ~150 chars
  h1: string
  lead: string
  intro: string[]
  steps: { title: string; text: string }[]
  forWho: string[]
  faqs: { question: string; answer: string }[]
  related: { name: string; href: string }[]
  keywords: string[]
}

export const NEARBY = ["Lüleburgaz", "Büyükkarıştıran", "Evrensekiz", "Babaeski", "Pınarhisar", "Vize", "Muratlı", "Hayrabolu"]

export const LOCAL_SERVICES: LocalService[] = [
  {
    slug: "dis-dolgusu",
    name: "Diş Dolgusu",
    title: "Lüleburgaz Diş Dolgusu (Beyaz Kompozit Dolgu)",
    description:
      "Lüleburgaz'da diş dolgusu: çürük temizliği ve diş renginde kompozit dolgu. Hazal Sokak'taki kliniğimizde büyütme altında, tek seansta. Randevu için yazın.",
    h1: "Lüleburgaz'da Diş Dolgusu",
    lead: "Çürüğün temizlenip dişin, diş renginde kompozit dolgu ile yeniden şekillendirilmesi.",
    intro: [
      "Diş dolgusu, çürük ya da kırık nedeniyle kaybedilen diş dokusunun yerine konan malzemedir. Kliniğimizde dolgular diş renginde kompozit malzeme ile yapılır; dolgu, dişe yapıştırılarak tabaka tabaka şekillendirilir.",
      "Çürük temizliğini büyütme altında yapıyoruz. Böylece sağlıklı diş dokusu korunur, yalnızca çürümüş kısım uzaklaştırılır. Küçük ve orta büyüklükteki dolgular çoğunlukla tek seansta tamamlanır.",
      "Çürük sinire ulaşmışsa dolgu yeterli olmaz; bu durumda önce kanal tedavisi gerekir. Muayenede röntgenle hangi tedavinin uygun olduğuna birlikte karar veriyoruz.",
    ],
    steps: [
      { title: "Muayene ve röntgen", text: "Çürüğün derinliği ve sinire yakınlığı değerlendirilir." },
      { title: "Lokal anestezi", text: "Gerekli durumlarda bölge uyuşturulur; işlem sırasında ağrının hissedilmemesi amaçlanır." },
      { title: "Çürük temizliği", text: "Çürük doku büyütme altında temizlenir, sağlam doku korunur." },
      { title: "Kompozit dolgu", text: "Diş renginde malzeme tabaka tabaka yerleştirilip ışıkla sertleştirilir." },
      { title: "Şekil ve cila", text: "Kapanış kontrol edilir, dolgu parlatılır." },
    ],
    forWho: [
      "Dişinde çürük ya da siyah lekeler fark edenler",
      "Soğuk-sıcak hassasiyeti yaşayanlar",
      "Eski amalgam (gri) dolgusu kırılan ya da sızdıran hastalar",
      "Ön dişlerinde küçük kırık veya aşınma olanlar",
    ],
    faqs: [
      { question: "Dolgu yaptırmak acıtır mı?", answer: "Gerekli durumlarda işlem lokal anestezi altında yapılır, böylece işlem sırasında ağrının hissedilmemesi amaçlanır. Anestezinin etkisi birkaç saat içinde geçer." },
      { question: "Dolgu kaç dakika sürer?", answer: "Tek bir dişteki küçük ya da orta büyüklükte bir dolgu genellikle 30–60 dakika sürer. Birden fazla diş aynı seansta yapılabilir." },
      { question: "Dolgudan sonra ne zaman yemek yiyebilirim?", answer: "Kompozit dolgu ışıkla hemen sertleştiği için yemek yemeye engel yoktur. Ancak anestezi geçene kadar dudak ve yanağı ısırmamak için yemek yemeyi ertelemeniz önerilir." },
      { question: "Gri amalgam dolgularımı değiştirmeli miyim?", answer: "Sağlam ve sızdırmayan amalgam dolguların yalnızca renk nedeniyle değiştirilmesi her zaman gerekli değildir. Kırık, çatlak ya da altında çürük olan dolgular muayenede değerlendirilip değiştirilir." },
      { question: "Dolgu ne kadar dayanır?", answer: "Dolgunun ömrü büyüklüğüne, dişin konumuna, diş sıkma alışkanlığına ve ağız bakımına bağlıdır. Düzenli kontrollerle dolgunun kenarları takip edilir." },
    ],
    related: [
      { name: "Amalgam mı kompozit mi?", href: "/dis-sagligi-rehberi/amalgam-kompozit-dolgu-karsilastirma" },
      { name: "Kanal tedavisi", href: "/tedaviler/kanal-tedavisi" },
      { name: "Mikroskopik diş tedavisi", href: "/tedaviler/mikroskopik-dis-tedavisi" },
    ],
    keywords: ["Lüleburgaz diş dolgusu", "Lüleburgaz dolgu", "Lüleburgaz beyaz dolgu", "Lüleburgaz kompozit dolgu", "Lüleburgaz çürük tedavisi"],
  },
  {
    slug: "kanal-tedavisi",
    name: "Kanal Tedavisi",
    title: "Lüleburgaz Kanal Tedavisi (Mikroskop Destekli)",
    description:
      "Lüleburgaz'da kanal tedavisi: diş içindeki iltihaplı siniri temizleyip dişi koruyan tedavi. Mikroskop altında, dental tomografi klinik içinde. Randevu alın.",
    h1: "Lüleburgaz'da Kanal Tedavisi",
    lead: "İltihaplanan ya da ölen diş sinirinin temizlenip kanalların doldurulmasıyla dişin ağızda tutulması.",
    intro: [
      "Kanal tedavisi, çürük ya da darbe nedeniyle iltihaplanan diş sinirinin (pulpa) temizlendiği ve kök kanallarının doldurulduğu tedavidir. Amaç, dişi çekmeden ağızda tutmaktır.",
      "Kliniğimizde kanal tedavilerini dental mikroskop altında yapıyoruz. Mikroskop, gözle görülmesi zor ek kanalların ve çatlakların fark edilmesine yardımcı olur. Gerekli durumlarda klinik içindeki dental tomografi ile kök yapısı üç boyutlu incelenir.",
      "Kanal tedavisi gören dişler zamanla kırılgan hale gelebilir; bu nedenle tedavinin ardından dişin üst kısmının dolgu ya da kronla korunması planlanır.",
    ],
    steps: [
      { title: "Teşhis", text: "Röntgen, gerekirse tomografi ile sinirin ve kök ucunun durumu değerlendirilir." },
      { title: "Anestezi ve izolasyon", text: "Diş uyuşturulur, tükürükten korumak için lastik örtü takılır." },
      { title: "Kanalların temizlenmesi", text: "Mikroskop altında iltihaplı doku temizlenir, kanallar şekillendirilip dezenfekte edilir." },
      { title: "Kanal dolgusu", text: "Kanallar sızdırmaz bir dolgu malzemesiyle kapatılır." },
      { title: "Üst yapı", text: "Dişin üst kısmı dolgu ya da kronla güçlendirilir." },
    ],
    forWho: [
      "Gece uyandıran ya da kendiliğinden başlayan diş ağrısı olanlar",
      "Soğuk-sıcak hassasiyeti uzun süre geçmeyenler",
      "Diş etinde şişlik veya apse oluşanlar",
      "Darbe sonrası rengi koyulaşan dişi olanlar",
      "Önceki kanal tedavisi başarısız olan dişler (kanal tedavisinin yenilenmesi)",
    ],
    faqs: [
      { question: "Kanal tedavisi acıtır mı?", answer: "Tedavi lokal anestezi altında yapılır. İşlemden sonraki birkaç gün çiğnerken hafif hassasiyet olabilir; bu genellikle ağrı kesicilerle kontrol edilir." },
      { question: "Kanal tedavisi kaç seans sürer?", answer: "Birçok diş tek seansta tamamlanabilir. Şiddetli iltihap, apse ya da yenilenen kanal tedavilerinde iki veya daha fazla seans gerekebilir." },
      { question: "Kanal tedavisinde mikroskop ne işe yarar?", answer: "Mikroskop çalışma alanını büyütüp aydınlatır. Bu, ek kanalların, kırık aletlerin ya da çatlakların görülmesini kolaylaştırır ve sağlam diş dokusunun korunmasına yardımcı olur." },
      { question: "Kanal tedavisi yerine dişi çektirsem olmaz mı?", answer: "Çekilen dişin yerinde boşluk kalır; komşu dişler kayabilir ve ileride implant ya da köprü gerekebilir. Kurtarılabilecek bir dişi korumak çoğu zaman daha az işlem gerektirir. Karar muayenede birlikte verilir." },
      { question: "Kanal tedavisinden sonra kaplama şart mı?", answer: "Özellikle azı dişlerinde, kanal tedavisinden sonra dişin kırılmaması için kron önerilir. Ön dişlerde ve az madde kaybı olan dişlerde dolgu yeterli olabilir." },
    ],
    related: [
      { name: "Mikroskop destekli kanal tedavisi nedir?", href: "/dis-sagligi-rehberi/mikroskop-destekli-kanal-tedavisi" },
      { name: "Kanal tedavisi sonrası ağrı", href: "/dis-sagligi-rehberi/kanal-tedavisi-sonrasi-agri" },
      { name: "Mikroskopik diş tedavisi", href: "/tedaviler/mikroskopik-dis-tedavisi" },
    ],
    keywords: ["Lüleburgaz kanal tedavisi", "Lüleburgaz mikroskop kanal tedavisi", "Lüleburgaz endodonti", "Lüleburgaz diş ağrısı"],
  },
  {
    slug: "dis-cekimi",
    name: "Diş Çekimi",
    title: "Lüleburgaz Diş Çekimi ve 20 Yaş Dişi Çekimi",
    description:
      "Lüleburgaz'da diş çekimi ve gömülü 20 yaş dişi çekimi. Tomografi ile planlama, lokal anestezi, çekim sonrası bakım talimatları. Hazal Sokak, randevu için yazın.",
    h1: "Lüleburgaz'da Diş Çekimi",
    lead: "Kurtarılamayan dişlerin ve gömülü yirmi yaş dişlerinin planlı ve kontrollü çekimi.",
    intro: [
      "Diş çekimi, kurtarılamayacak kadar hasar görmüş, kırılmış ya da ağızda soruna yol açan dişler için uygulanır. Önceliğimiz dişi korumaktır; çekim, başka bir tedavi seçeneği kalmadığında planlanır.",
      "Gömülü ya da yarı gömülü yirmi yaş dişlerinde, dişin sinir kanalına yakınlığı klinik içindeki dental tomografi ile incelenir. Böylece cerrahi çekim önceden planlanır.",
      "Çekim sonrasında kanamanın durması, şişliğin azalması ve yaranın iyileşmesi için yazılı bakım talimatları verilir; gerekirse kontrol randevusu planlanır.",
    ],
    steps: [
      { title: "Muayene ve görüntüleme", text: "Röntgen ya da tomografi ile kök yapısı ve çevre dokular değerlendirilir." },
      { title: "Lokal anestezi", text: "Bölge uyuşturulur; işlem sırasında ağrının hissedilmemesi amaçlanır." },
      { title: "Çekim", text: "Diş, çevre kemiği ve diş etini koruyacak şekilde çıkarılır; gerekirse dikiş atılır." },
      { title: "Bakım talimatları", text: "Tampon, soğuk uygulama, beslenme ve ağız bakımı anlatılır." },
    ],
    forWho: [
      "Ağrı, şişlik veya tekrarlayan iltihaba yol açan yirmi yaş dişi olanlar",
      "Kırılıp kurtarılamayan dişi olanlar",
      "İleri diş eti hastalığı nedeniyle sallanan dişler",
      "Ortodontik tedavi için çekim planlanan hastalar",
    ],
    faqs: [
      { question: "20 yaş dişi mutlaka çekilmeli mi?", answer: "Hayır. Tamamen sürmüş, temizlenebilen ve sorun yaratmayan yirmi yaş dişleri çekilmeyebilir. Ağrı, tekrarlayan iltihap, komşu dişte çürük ya da kist varsa çekim önerilir." },
      { question: "Diş çekimi sonrası ne kadar şişlik olur?", answer: "Basit çekimlerde şişlik çoğunlukla hafiftir. Cerrahi yirmi yaş çekimlerinden sonra şişlik ilk 2–3 günde artıp sonra azalır. Soğuk uygulama ve verilen talimatlar bu süreci kolaylaştırır." },
      { question: "Çekimden sonra ne zaman yemek yiyebilirim?", answer: "Tampon çıkarıldıktan ve anestezi geçtikten sonra ılık ve yumuşak gıdalar tüketilebilir. İlk gün sıcak içecekler, pipet ve sigara kullanılmamalıdır." },
      { question: "Çekilen dişin yerine ne yapılır?", answer: "Yirmi yaş dişleri dışında, çekilen dişin yeri genellikle implant, köprü ya da protezle tamamlanır. Seçenekler muayenede değerlendirilir." },
    ],
    related: [
      { name: "20 yaş dişi çekilmeli mi?", href: "/dis-sagligi-rehberi/20-yas-disi-cekilmeli-mi" },
      { name: "20 yaş dişi çekimi sonrası bakım", href: "/dis-sagligi-rehberi/20-yas-disi-cekimi-sonrasi-bakim" },
      { name: "Ağız, diş ve çene cerrahisi", href: "/tedaviler/agiz-dis-cene-cerrahisi" },
    ],
    keywords: ["Lüleburgaz diş çekimi", "Lüleburgaz 20 yaş dişi çekimi", "Lüleburgaz gömülü diş", "Lüleburgaz cerrahi diş çekimi"],
  },
  {
    slug: "dis-tasi-temizligi",
    name: "Diş Taşı Temizliği",
    title: "Lüleburgaz Diş Taşı Temizliği (Detertraj)",
    description:
      "Lüleburgaz'da diş taşı temizliği: ultrasonik aletlerle diş taşlarının ve lekelerin temizlenmesi, cila ve diş eti kontrolü. Hazal Sokak'taki kliniğimizden randevu alın.",
    h1: "Lüleburgaz'da Diş Taşı Temizliği",
    lead: "Diş yüzeyinde sertleşen plak ve taşların temizlenmesi, diş etinin rahatlaması.",
    intro: [
      "Diş taşı, temizlenmeyen bakteri plağının zamanla sertleşmesiyle oluşur ve fırçalamayla çıkmaz. Diş eti kanaması, ağız kokusu ve diş eti çekilmesinin başlıca nedenleri arasındadır.",
      "Diş taşı temizliğinde (detertraj) ultrasonik aletlerle taşlar diş yüzeyinden ayrılır, ardından dişler cilalanarak pürüzsüz hale getirilir. Aynı randevuda diş eti cepleri de ölçülür.",
      "Diş eti altında derin cepler varsa, standart temizlik yerine kök yüzeylerinin temizlendiği derin temizlik (küretaj) planlanabilir.",
    ],
    steps: [
      { title: "Diş eti kontrolü", text: "Diş eti cepleri ve kanama noktaları kontrol edilir." },
      { title: "Ultrasonik temizlik", text: "Diş taşları su soğutmalı ultrasonik uçlarla temizlenir." },
      { title: "Cila", text: "Lekeler alınır, yüzey pürüzsüzleştirilir; plak daha zor tutunur." },
      { title: "Bakım önerileri", text: "Fırçalama, diş ipi ve arayüz fırçası kullanımı gösterilir." },
    ],
    forWho: [
      "Diş fırçalarken diş eti kanaması olanlar",
      "Ağız kokusu yaşayanlar",
      "Dişlerinde sarı-kahverengi sert birikinti görenler",
      "Çay, kahve ve sigara lekesi olanlar",
      "Altı aydan uzun süredir kontrole gitmeyenler",
    ],
    faqs: [
      { question: "Diş taşı temizliği dişlere zarar verir mi?", answer: "Hayır. Doğru uygulandığında diş minesine zarar vermez. Temizlik sonrası hissedilen boşluk hissi, taşların doldurduğu alanların açılmasından kaynaklanır." },
      { question: "Diş taşı temizliği acıtır mı?", answer: "Çoğu hasta için rahatsızlık hafiftir. Hassasiyeti yüksek olan ya da diş eti iltihabı fazla olan hastalarda bölgesel anestezi uygulanabilir." },
      { question: "Ne sıklıkla diş taşı temizliği yaptırmalıyım?", answer: "Çoğu kişi için yılda bir ya da iki kez yeterlidir. Diş eti hastalığı olan veya hızlı taş oluşan hastalarda daha sık kontrol önerilebilir." },
      { question: "Temizlikten sonra diş eti neden kanıyor?", answer: "İltihaplı diş eti temizlik sırasında kanayabilir. Taşlar alındıktan sonra iltihap azaldıkça kanama da birkaç gün içinde azalır." },
    ],
    related: [
      { name: "Diş taşı temizliği zarar verir mi?", href: "/dis-sagligi-rehberi/dis-tasi-temizligi-zarar-verir-mi" },
      { name: "Diş eti kanaması nedenleri", href: "/dis-sagligi-rehberi/dis-eti-kanamasi-nedenleri" },
      { name: "Periodontoloji (diş eti tedavisi)", href: "/tedaviler/periodontoloji-dis-eti-tedavisi" },
    ],
    keywords: ["Lüleburgaz diş taşı temizliği", "Lüleburgaz diş temizliği", "Lüleburgaz detertraj", "Lüleburgaz diş eti kanaması"],
  },
  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma",
    title: "Lüleburgaz Diş Beyazlatma (Klinik ve Ev Tipi)",
    description:
      "Lüleburgaz'da diş beyazlatma: muayene sonrası klinikte ya da kişiye özel plaklarla evde uygulanan beyazlatma. Hassasiyet ve renk kontrolüyle. Randevu için yazın.",
    h1: "Lüleburgaz'da Diş Beyazlatma",
    lead: "Diş renginin, muayene ve hekim kontrolünde birkaç ton açılması.",
    intro: [
      "Diş beyazlatma, çay, kahve, sigara ya da yaşla koyulaşan diş renginin hekim kontrolünde açılmasıdır. Beyazlatmadan önce muayene yapılır; çürük, diş eti sorunu ya da açıkta kalan kök yüzeyi varsa önce bunlar tedavi edilir.",
      "Klinikte uygulanan beyazlatmada diş etleri korunur ve jel dişlere hekim tarafından uygulanır. Ev tipi beyazlatmada ise ağız ölçüsünden hazırlanan kişiye özel plaklarla, belirlenen sürelerde jel kullanılır.",
      "Dolgu, kaplama ve laminalar beyazlatma ile renk değiştirmez. Ön dişlerde bu tür restorasyonlar varsa, beyazlatma sonrası renk uyumu birlikte planlanır.",
    ],
    steps: [
      { title: "Muayene ve renk tespiti", text: "Başlangıç rengi kaydedilir, uygunluk değerlendirilir." },
      { title: "Diş taşı temizliği", text: "Gerekirse önce temizlik yapılır; jel temiz yüzeyde daha eşit etki eder." },
      { title: "Beyazlatma", text: "Klinikte ya da kişiye özel plaklarla evde uygulanır." },
      { title: "Kontrol", text: "Renk ve hassasiyet kontrol edilir, bakım önerileri verilir." },
    ],
    forWho: [
      "Dişleri zamanla sararan ya da koyulaşan yetişkinler",
      "Çay, kahve ve sigara kaynaklı renklenmesi olanlar",
      "Lamina veya kaplama öncesi doğal dişlerinin rengini açmak isteyenler",
    ],
    faqs: [
      { question: "Diş beyazlatma dişlere zarar verir mi?", answer: "Hekim kontrolünde ve uygun yoğunluktaki jellerle yapılan beyazlatma diş minesine kalıcı zarar vermez. Geçici hassasiyet görülebilir; genellikle birkaç gün içinde geçer." },
      { question: "Beyazlatmanın etkisi ne kadar sürer?", answer: "Süre beslenme ve alışkanlıklara göre değişir. Çay, kahve ve sigara tüketimi rengin daha erken koyulaşmasına neden olur. Ev tipi plaklarla ara uygulamalar yapılabilir." },
      { question: "Herkes diş beyazlatma yaptırabilir mi?", answer: "Hamilelik ve emzirme döneminde, 18 yaş altında ve tedavi edilmemiş çürük ya da diş eti hastalığı varsa beyazlatma önerilmez. Uygunluk muayenede değerlendirilir." },
      { question: "Dolgularım da beyazlar mı?", answer: "Hayır. Dolgu, kaplama ve laminalar renk değiştirmez. Görünür bölgedeki restorasyonların beyazlatma sonrası yenilenmesi gerekebilir." },
    ],
    related: [
      { name: "Diş beyazlatma sonrası bakım", href: "/dis-sagligi-rehberi/dis-beyazlatma-sonrasi-bakim" },
      { name: "Estetik diş hekimliği", href: "/tedaviler/estetik-dis-hekimligi" },
      { name: "Diş taşı temizliği", href: "/tedaviler/dis-tasi-temizligi" },
    ],
    keywords: ["Lüleburgaz diş beyazlatma", "Lüleburgaz bleaching", "Lüleburgaz ev tipi beyazlatma"],
  },
  {
    slug: "zirkonyum-kaplama",
    name: "Zirkonyum Kaplama",
    title: "Lüleburgaz Zirkonyum Kaplama ve Köprü",
    description:
      "Lüleburgaz'da zirkonyum kaplama ve köprü: dijital ağız içi tarama, renk seçimi ve prova ile hazırlanan metal desteksiz kronlar. Randevu için yazın.",
    h1: "Lüleburgaz'da Zirkonyum Kaplama",
    lead: "Metal destek içermeyen, diş rengindeki zirkonyum kron ve köprüler.",
    intro: [
      "Zirkonyum kaplama, aşırı madde kaybı olan, kanal tedavisi görmüş ya da rengi bozulmuş dişlerin üzerine yapılan, metal desteksiz bir kron türüdür. Işığı doğal dişe yakın geçirdiği için özellikle görünen bölgelerde tercih edilir.",
      "Kliniğimizde ölçüler ağız içi tarayıcı ile dijital olarak alınabilir; ölçü kaşığı ve ölçü maddesi kullanılmaz. Renk seçimi gün ışığında yapılır ve kaplamalar yapıştırılmadan önce prova edilir.",
      "Eksik dişlerin komşu dişlerden destek alınarak tamamlanması için zirkonyum köprü de uygulanabilir. Hangi seçeneğin uygun olduğu dişlerin ve diş etinin durumuna göre belirlenir.",
    ],
    steps: [
      { title: "Muayene ve planlama", text: "Dişlerin, diş etinin ve kapanışın durumu değerlendirilir." },
      { title: "Diş hazırlığı", text: "Dişler lokal anestezi altında kaplamaya uygun şekilde hazırlanır." },
      { title: "Dijital ölçü ve renk", text: "Ağız içi tarama ile ölçü alınır, renk birlikte seçilir; geçici kaplama takılır." },
      { title: "Prova ve yapıştırma", text: "Uyum, renk ve kapanış kontrol edildikten sonra kaplamalar yapıştırılır." },
    ],
    forWho: [
      "Büyük dolgusu olan ya da kırılan dişler",
      "Kanal tedavisi sonrası güçlendirilmesi gereken dişler",
      "Eski metal destekli kaplamalarını yenilemek isteyenler",
      "Eksik dişini köprüyle tamamlamak isteyenler",
    ],
    faqs: [
      { question: "Zirkonyum kaplama kaç günde biter?", answer: "Çoğu vakada hazırlık, ölçü ve prova dahil birkaç randevuda, birkaç hafta içinde tamamlanır. Süre diş sayısına ve ek tedavi ihtiyacına göre değişir." },
      { question: "Zirkonyum ile porselen (metal destekli) kaplama arasındaki fark nedir?", answer: "Zirkonyumda metal alt yapı bulunmaz; bu nedenle diş eti kenarında gri görüntü oluşmaz ve ışık geçirgenliği doğal dişe daha yakındır." },
      { question: "Zirkonyum kaplama için dişler çok kesilir mi?", answer: "Kaplama için dişin bir miktar küçültülmesi gerekir. Miktar, kullanılacak kaplamanın tipine ve dişin durumuna göre planlanır; sağlam dokuyu korumak önceliklidir." },
      { question: "Zirkonyum kaplama ne kadar dayanır?", answer: "Ömrü ağız bakımına, diş sıkma alışkanlığına ve düzenli kontrollere bağlıdır. Diş sıkma varsa gece plağı önerilebilir." },
    ],
    related: [
      { name: "Zirkonyum kaplamada renk seçimi", href: "/dis-sagligi-rehberi/zirkonyum-kaplama-renk-secimi" },
      { name: "Protetik diş tedavisi", href: "/tedaviler/protetik-dis-tedavisi" },
      { name: "Porselen lamina", href: "/tedaviler/porselen-lamina" },
    ],
    keywords: ["Lüleburgaz zirkonyum", "Lüleburgaz zirkonyum kaplama", "Lüleburgaz diş kaplama", "Lüleburgaz köprü"],
  },
  {
    slug: "porselen-lamina",
    name: "Porselen Lamina",
    title: "Lüleburgaz Lamina (Yaprak Porselen)",
    description:
      "Lüleburgaz'da porselen ve kompozit lamina: dijital gülüş planlaması, prova ve minimal diş hazırlığıyla ön dişlerin şekil ve rengini düzenleme. Randevu alın.",
    h1: "Lüleburgaz'da Porselen Lamina",
    lead: "Ön dişlerin ön yüzüne yapıştırılan ince porselen ya da kompozit yapraklar.",
    intro: [
      "Lamina (yaprak porselen), ön dişlerin ön yüzüne yapıştırılan ince bir tabakadır. Dişlerdeki renk bozukluğu, aralıklar, kırıklar ve şekil farklılıkları bu yöntemle düzenlenebilir.",
      "Tedaviye başlamadan önce gülüş dijital olarak planlanır ve çoğu vakada ağız içinde prova (mock-up) yapılır. Böylece sonuç, dişlere işlem yapılmadan önce birlikte değerlendirilir.",
      "Porselen laminalarda dişten genellikle çok az doku kaldırılır; bazı vakalarda hiç kesim gerekmeyebilir. Kompozit lamina ise tek seansta, doğrudan ağızda şekillendirilen bir alternatiftir.",
    ],
    steps: [
      { title: "Analiz", text: "Fotoğraf ve dijital tarama ile yüz, dudak ve diş oranları incelenir." },
      { title: "Gülüş planı ve prova", text: "Tasarım ağız içinde geçici malzemeyle denenir." },
      { title: "Hazırlık ve ölçü", text: "Gerekli minimal hazırlık yapılır, dijital ölçü alınır." },
      { title: "Yapıştırma", text: "Renk ve uyum kontrolünden sonra laminalar yapıştırılır." },
    ],
    forWho: [
      "Ön dişlerinde renk bozukluğu beyazlatmayla açılmayanlar",
      "Ön dişleri arasında küçük aralıklar olanlar",
      "Kırık, aşınmış ya da şekli farklı ön dişleri olanlar",
    ],
    faqs: [
      { question: "Porselen lamina ile kompozit lamina arasındaki fark nedir?", answer: "Porselen lamina laboratuvarda hazırlanır, rengini uzun süre korur ve birkaç randevu gerektirir. Kompozit lamina doğrudan ağızda tek seansta yapılır, gerektiğinde onarılabilir ancak zamanla renk değiştirebilir." },
      { question: "Lamina için dişler kesilir mi?", answer: "Çoğu vakada yalnızca minede çok ince bir hazırlık yapılır. Dişlerin konumuna göre bazı vakalarda hiç kesim gerekmeyebilir." },
      { question: "Lamina takılınca yemek yiyebilir miyim?", answer: "Evet. Laminalar yapıştırıldıktan sonra normal beslenmeye devam edilir. Çok sert cisimleri ön dişlerle ısırmaktan ve tırnak yemekten kaçınılması önerilir." },
    ],
    related: [
      { name: "Porselen mi kompozit lamina mı?", href: "/dis-sagligi-rehberi/porselen-lamina-kompozit-lamina-karsilastirma" },
      { name: "Gülüş tasarımının temel ilkeleri", href: "/dis-sagligi-rehberi/gulus-tasarimi-temel-ilkeler" },
      { name: "Estetik diş hekimliği", href: "/tedaviler/estetik-dis-hekimligi" },
    ],
    keywords: ["Lüleburgaz lamina", "Lüleburgaz yaprak porselen", "Lüleburgaz gülüş tasarımı", "Lüleburgaz estetik diş"],
  },
  {
    slug: "acil-dis-tedavisi",
    name: "Acil Diş Tedavisi",
    title: "Lüleburgaz Acil Diş Tedavisi, Hafta Sonu Açık",
    description:
      "Lüleburgaz'da diş ağrısı, şişlik veya kırık diş için acil randevu. Pazartesi ve çarşamba 22:00'ye kadar, cumartesi-pazar 11:00–17:00 açığız. WhatsApp'tan yazın.",
    h1: "Lüleburgaz'da Acil Diş Tedavisi",
    lead: "Şiddetli diş ağrısı, şişlik, kırık ya da düşen dolgu için mümkünse aynı gün değerlendirme.",
    intro: [
      "Diş ağrısı çoğu zaman beklemeden ortaya çıkar. Kliniğimiz pazartesi ve çarşamba günleri 22:00'ye kadar, cumartesi ve pazar günleri de 11:00–17:00 arasında açıktır. Acil durumlarda WhatsApp'tan yazarak o gün için uygun bir saat isteyebilirsiniz.",
      "Acil randevuda öncelik ağrıyı ve enfeksiyonu kontrol altına almaktır. Bu, kanal tedavisinin ilk aşaması, apsenin boşaltılması, kırık dişin geçici olarak kapatılması ya da düşen dolgunun yenilenmesi olabilir. Kalıcı tedavi ardından planlanır.",
      "Yüzde hızla büyüyen şişlik, yutkunma ya da nefes almada güçlük, yüksek ateş veya durmayan kanama varsa vakit kaybetmeden en yakın hastanenin acil servisine başvurun.",
    ],
    steps: [
      { title: "Yazın", text: "WhatsApp'tan şikayetinizi ve mümkünse bir fotoğraf gönderin." },
      { title: "Muayene ve röntgen", text: "Ağrının kaynağı belirlenir." },
      { title: "Acil müdahale", text: "Ağrı ve enfeksiyon kontrol altına alınır." },
      { title: "Tedavi planı", text: "Kalıcı tedavi için seçenekler ve randevular planlanır." },
    ],
    forWho: [
      "Gece uyandıran ya da ağrı kesiciyle geçmeyen diş ağrısı",
      "Diş eti ya da yüzde şişlik, apse",
      "Darbe sonrası kırılan, yerinden oynayan ya da düşen diş",
      "Düşen dolgu veya kaplama",
      "Yirmi yaş dişi bölgesinde ağrı ve ağız açmada güçlük",
    ],
    faqs: [
      { question: "Hafta sonu açık diş kliniği var mı?", answer: "Kliniğimiz cumartesi ve pazar günleri 11:00–17:00 arasında açıktır. Gelmeden önce WhatsApp'tan yazarak randevu saati almanızı öneririz." },
      { question: "Akşam saatlerinde diş hekimine gidebilir miyim?", answer: "Pazartesi ve çarşamba günleri 22:00'ye kadar hasta kabul ediyoruz. Diğer hafta içi günlerde 19:00'a kadar açığız." },
      { question: "Diş ağrısı için gelene kadar ne yapabilirim?", answer: "Hekiminizin önerdiği ya da daha önce sorunsuz kullandığınız bir ağrı kesiciyi kullanabilir, ağrıyan tarafla çiğnememeye dikkat edebilirsiniz. Dişin üzerine aspirin koymayın, şişlik varsa sıcak uygulama yapmayın." },
      { question: "Düşen dişi ne yapmalıyım?", answer: "Dişi kökünden değil taç kısmından tutun, kirliyse yalnızca su ile hafifçe durulayın, süt içinde ya da yanak içinde saklayarak hemen başvurun. Ne kadar erken müdahale edilirse dişin yerine yerleştirilme şansı o kadar artar." },
    ],
    related: [
      { name: "Acil diş ağrısı ve kırıkta ilk yardım", href: "/dis-sagligi-rehberi/acil-dis-agrisi-kirik-ilk-yardim" },
      { name: "Kanal tedavisi", href: "/tedaviler/kanal-tedavisi" },
      { name: "İletişim ve yol tarifi", href: "/iletisim" },
    ],
    keywords: ["Lüleburgaz acil diş", "Lüleburgaz hafta sonu açık dişçi", "Lüleburgaz akşam açık diş hekimi", "Lüleburgaz diş ağrısı"],
  },
  {
    slug: "takma-dis-protez",
    name: "Takma Diş (Hareketli Protez)",
    title: "Lüleburgaz Takma Diş ve Hareketli Protez",
    description:
      "Lüleburgaz'da takma diş: tam ve bölümlü hareketli protez, implant destekli protez seçenekleri, ölçü, prova ve alışma süreci. Randevu için yazın.",
    h1: "Lüleburgaz'da Takma Diş (Hareketli Protez)",
    lead: "Dişlerin bir kısmı veya tamamı eksik olduğunda, çıkarılıp takılabilen protezlerle çiğneme ve görünümün yeniden kazanılması.",
    intro: [
      "Takma diş (hareketli protez), eksik dişlerin yerine yapılan ve hastanın kendisinin çıkarıp takabildiği protezlerdir. Ağızda hiç diş kalmadığında tam protez, bazı dişler mevcutsa bu dişlerden destek alan bölümlü protez yapılır.",
      "Protezin rahat kullanılabilmesi için ölçülerin, kapanışın ve diş dizisinin dikkatle planlanması gerekir. Prova aşamasında dişlerin rengi, boyu ve yüzle uyumu birlikte değerlendirilir.",
      "Alt çenede tam protezin oynaması sık karşılaşılan bir sorundur. Uygun kemik varsa, protezin birkaç implanta tutturulduğu implant destekli (implant üstü) protez seçeneği de değerlendirilebilir.",
    ],
    steps: [
      { title: "Muayene", text: "Kalan dişler, diş etleri ve kemik değerlendirilir; gerekiyorsa önce çekim veya dolgular yapılır." },
      { title: "Ölçüler", text: "Ağızdan ölçü alınır, kapanış ve dikey boyut kaydedilir." },
      { title: "Prova", text: "Dişler mum üzerinde dizilerek ağızda denenir; renk, boy ve konuşma kontrol edilir." },
      { title: "Teslim ve kontroller", text: "Protez teslim edilir; ilk haftalarda yapılan kontrollerde vuruklar ve uyum düzeltilir." },
    ],
    forWho: [
      "Ağızda hiç dişi kalmayan hastalar",
      "Birden fazla eksik dişi olan ve sabit tedavi uygun olmayan hastalar",
      "Eski protezi gevşeyen, kırılan veya vuruk yapan hastalar",
      "Alt protezi oynayan ve implant destekli protez düşünen hastalar",
    ],
    faqs: [
      { question: "Takma dişe alışmak ne kadar sürer?", answer: "Alışma süresi kişiden kişiye değişir; çoğu hasta ilk birkaç hafta içinde konuşma ve çiğnemeye alışır. Bu sürede oluşan vuruklar kontrollerde düzeltilir." },
      { question: "Takma dişle yemek yiyebilir miyim?", answer: "Evet. Başlangıçta yumuşak ve küçük lokmalarla, iki tarafı birlikte kullanarak çiğnemeniz önerilir. Alıştıkça normal beslenmeye geçilir." },
      { question: "Takma diş geceleri çıkarılmalı mı?", answer: "Genellikle diş etlerinin dinlenmesi için protezlerin gece çıkarılması ve temiz bir kapta saklanması önerilir. Hekiminiz durumunuza göre yönlendirir." },
      { question: "Protez zamanla gevşer mi?", answer: "Dişsiz çene kemiği zamanla şekil değiştirdiği için protez gevşeyebilir. Bu durumda protezin iç yüzeyi yenilenebilir (besleme) veya yeni protez planlanabilir." },
      { question: "İmplant destekli protezin farkı nedir?", answer: "İmplant destekli protezde protez, çene kemiğine yerleştirilen implantlara çıt çıt veya bar sistemiyle tutunur. Bu, özellikle alt çenede protezin oynamasını azaltabilir. Uygunluğu kemik durumuna göre belirlenir." },
    ],
    related: [
      { name: "Hareketli protezde alışma süreci", href: "/dis-sagligi-rehberi/hareketli-protez-alisma-sureci" },
      { name: "Protetik diş tedavisi", href: "/tedaviler/protetik-dis-tedavisi" },
      { name: "İmplant tedavisi", href: "/tedaviler/implant-tedavisi" },
    ],
    keywords: ["Lüleburgaz takma diş", "Lüleburgaz protez", "Lüleburgaz hareketli protez", "Lüleburgaz implant üstü protez"],
  },
]

export function getLocalService(slug: string) {
  return LOCAL_SERVICES.find((s) => s.slug === slug)
}

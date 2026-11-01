import type { Metadata } from "next"
import { BackHome, PageFooter, TrOnlyNote } from "@/components/site/page-bits"
import { CLINIC, SITE_EDITOR, SITE_UPDATED, siteUpdatedTR } from "@/lib/clinic"

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni ve Yasal Bilgilendirme",
  description: "Kişisel verilerin işlenmesine ilişkin aydınlatma metni, hasta hakları ve sağlık tanıtım mevzuatı kapsamındaki yasal bilgilendirme.",
  alternates: { canonical: "/kvkk" },
}

const EMAIL = "info@emrecaneren.com"

function H2({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>
}

export default function KvkkPage() {
  return (
    <section className="pg" aria-labelledby="pgh-kvkk">
      <header className="pg-hero">
        <BackHome />
        <div className="pg-eb" data-en="Legal information">Yasal bilgilendirme</div>
        <h1 className="pg-h" id="pgh-kvkk" data-en="Privacy notice and <em>legal information.</em>">KVKK aydınlatma metni ve <em>yasal bilgilendirme.</em></h1>
      </header>
      <article className="dt-art">
        <TrOnlyNote />
          <H2>1. Veri sorumlusu</H2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu {CLINIC.legalName}’dir
            (“Klinik”). Adres: {CLINIC.street}, {CLINIC.city}. Telefon: {CLINIC.phone}. E-posta: {EMAIL}.
          </p>

          <H2>2. İşlenen kişisel veriler</H2>
          <ul>
            <li><strong>Kimlik ve iletişim verileri:</strong> ad soyad, T.C. kimlik numarası, telefon, e-posta, adres.</li>
            <li><strong>Sağlık verileri:</strong> muayene ve tedavi kayıtları, röntgen ve tomografi görüntüleri, anamnez bilgileri, reçeteler.</li>
            <li><strong>Randevu ve yazışma kayıtları:</strong> telefon, WhatsApp ve internet sitemizdeki iletişim formu üzerinden iletilen ad soyad, telefon, randevu talepleri ve mesajlar. İletişim formu kayıtları, yalnızca kliniğin erişebildiği şifreli panelde tutulur ve görüşme tamamlandıktan sonra silinir.</li>
            <li><strong>İş başvurusu verileri:</strong> basvuru.emrecaneren.com başvuru formu aracılığıyla iletilen ad soyad, iletişim bilgileri, başvurulan pozisyon ve özgeçmiş.</li>
            <li><strong>Görsel veriler:</strong> yalnızca açık rızanızla ve tedavi amacıyla alınan ağız içi fotoğraflar.</li>
          </ul>

          <H2>3. İşleme amaçları ve hukuki sebepler</H2>
          <p>
            Kişisel verileriniz; muayene, teşhis ve tedavi hizmetlerinin yürütülmesi, randevuların planlanması, yasal
            kayıt ve bildirim yükümlülüklerinin yerine getirilmesi, faturalandırma ve iş başvurularının değerlendirilmesi
            amaçlarıyla işlenir. Sağlık verileri, KVKK’nın 6. maddesi uyarınca kamu sağlığının korunması, koruyucu hekimlik,
            tıbbî teşhis, tedavi ve bakım hizmetlerinin yürütülmesi amacıyla sır saklama yükümlülüğü altındaki kişilerce
            işlenir. Diğer veriler; sözleşmenin kurulması ve ifası, hukuki yükümlülüklerin yerine getirilmesi ve meşru menfaat
            hukuki sebeplerine, bunların bulunmadığı hallerde açık rızanıza dayanılarak işlenir.
          </p>

          <H2>4. Aktarım</H2>
          <p>
            Kişisel verileriniz, yalnızca mevzuatın gerektirdiği hallerde Sağlık Bakanlığı ve bağlı kurumlar, Sosyal Güvenlik
            Kurumu, yetkili kamu kurum ve kuruluşları ile tedaviniz için zorunlu olduğu ölçüde diş protez laboratuvarları gibi
            iş ortaklarıyla paylaşılabilir. Veriler pazarlama amacıyla üçüncü kişilere aktarılmaz.
          </p>

          <H2>5. Toplama yöntemi</H2>
          <p>
            Veriler; klinikte doldurulan formlar, muayene ve görüntüleme, telefon ve WhatsApp yazışmaları ile internet
            sitemizdeki formlar aracılığıyla, sözlü, yazılı veya elektronik ortamda toplanır.
          </p>

          <H2>6. Haklarınız</H2>
          <p>
            KVKK’nın 11. maddesi uyarınca kişisel verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işlenme
            amacını öğrenme, aktarıldığı kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda
            silinmesini veya yok edilmesini isteme, otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme ve
            zarara uğramanız halinde zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı yukarıdaki adrese
            yazılı olarak veya {EMAIL} adresine iletebilirsiniz. Başvurular en geç otuz gün içinde sonuçlandırılır.
          </p>

          <H2>7. Hasta hakları</H2>
          <p>
            Hasta Hakları Yönetmeliği kapsamında bilgi alma, tedaviyi reddetme, mahremiyete saygı gösterilmesi ve kayıtlara
            erişim haklarınız saklıdır. Tedavi öncesinde, uygulanacak işlem ve olası riskler hakkında hekiminiz tarafından
            bilgilendirilirsiniz.
          </p>

          <H2>8. Tanıtım ve bilgilendirme</H2>
          <p>
            Bu sitedeki içerikler, Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik
            kapsamında genel bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Tanı ve tedavi için hekiminize başvurunuz.
            Her cerrahi veya girişimsel işlemde sonuçlar kişiden kişiye değişiklik gösterebilir. İşlem öncesinde hekiminizden
            detaylı görüş almanız önerilir.
          </p>
          <p>
            Son güncelleme: <time dateTime={SITE_UPDATED}>{siteUpdatedTR()}</time>. Site editörü: {SITE_EDITOR.name}, {SITE_EDITOR.phone}.
          </p>
      </article>
      <PageFooter />
    </section>
  )
}

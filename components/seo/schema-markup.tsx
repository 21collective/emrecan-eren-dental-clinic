import Script from 'next/script'

interface SchemaMarkupProps {
  type: 'organization' | 'localBusiness' | 'article'
  data?: any
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
          "alternateName": "Dt. Emrecan Eren",
          "url": "https://www.emrecaneren.com",
          "logo": "https://www.emrecaneren.com/apple-icon.png",
          "description": "Lüleburgaz'da mikroskop destekli, kanıta dayalı diş hekimliği uygulayan ağız ve diş sağlığı polikliniği.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Kasım Mahallesi, Hazal Sokak, No:44/A",
            "addressLocality": "Lüleburgaz",
            "addressRegion": "Kırklareli",
            "postalCode": "39750",
            "addressCountry": "TR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-543-486-00-55",
            "contactType": "customer service",
            "availableLanguage": ["Turkish"],
            "areaServed": "TR"
          },
          "sameAs": [
            "https://www.instagram.com/dtemrecaneren",
            "https://maps.google.com/?cid=17744340931578869053",
            "https://www.google.com/search?kgmid=/g/11ght2r62p",
            "https://www.youtube.com/@lifeindentistry"
          ]
        }

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "@id": "https://www.emrecaneren.com/#clinic",
          "name": "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
          "founder": { "@id": "https://www.emrecaneren.com/hakkinda#dr-eren" },
          "sameAs": ["https://www.instagram.com/dtemrecaneren", "https://www.youtube.com/@lifeindentistry"],
          "image": "https://www.emrecaneren.com/apple-icon.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Kasım Mahallesi, Hazal Sokak, No:44/A",
            "addressLocality": "Lüleburgaz",
            "addressRegion": "Kırklareli",
            "postalCode": "39750",
            "addressCountry": "TR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 41.390179599999996,
            "longitude": 27.359614499999996
          },
          "url": "https://www.emrecaneren.com",
          "telephone": "+90-543-486-00-55",
          "email": "info@emrecaneren.com",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Monday",
              "opens": "13:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Tuesday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Wednesday",
              "opens": "13:00",
              "closes": "22:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Thursday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Friday",
              "opens": "10:30",
              "closes": "19:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "11:00",
              "closes": "17:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "11:00",
              "closes": "17:00"
            }
          ],
          "areaServed": ["Lüleburgaz", "Büyükkarıştıran", "Evrensekiz", "Babaeski", "Pınarhisar", "Vize", "Muratlı", "Hayrabolu"].map((n) => ({ "@type": "City", "name": n })),
          "hasMap": "https://maps.google.com/?cid=17744340931578869053"
        }

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "headline": data?.title,
          "description": data?.description,
          "inLanguage": "tr-TR",
          "url": data?.url,
          "author": {
            "@type": "Person",
            "@id": "https://www.emrecaneren.com/hakkinda#dr-eren",
            "name": "Dt. Emrecan Eren",
            "jobTitle": "Diş Hekimi",
            "url": "https://www.emrecaneren.com/hakkinda"
          },
          "publisher": {
            "@type": "Dentist",
            "@id": "https://www.emrecaneren.com/#clinic",
            "name": "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.emrecaneren.com/apple-icon.png"
            }
          },
          "datePublished": data?.datePublished,
          "dateModified": data?.dateModified,
          "lastReviewed": data?.dateModified,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data?.url
          },
          "about": {
            "@type": "MedicalCondition",
            "name": data?.medicalTopic
          },
          "reviewedBy": {
            "@type": "Person",
            "@id": "https://www.emrecaneren.com/hakkinda#dr-eren",
            "name": "Dt. Emrecan Eren"
          }
        }

      default:
        return null
    }
  }

  const schema = getSchema()

  if (!schema) return null

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive"
    />
  )
}

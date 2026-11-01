interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Predefined Schema.org structures
export const schemas = {
  dentist: {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Emrecan Eren Özel Ağız ve Diş Sağlığı Polikliniği",
    "image": "https://www.emrecaneren.com/images/klinik-logo.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "[Gerçek Adres]",
      "addressLocality": "Lüleburgaz",
      "addressRegion": "Kırklareli",
      "postalCode": "[Posta Kodu]",
      "addressCountry": "TR"
    },
    "telephone": "+90 [Telefon]",
    "url": "https://www.emrecaneren.com",
    "openingHours": "Mo-Fr 09:00-18:00, Sa 09:00-14:00",
    "member": {
      "@type": "Physician",
      "@id": "https://www.emrecaneren.com/hakkinda#dr-eren"
    }
  },

  physician: {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://www.emrecaneren.com/hakkinda#dr-eren",
    "name": "Dt. Emrecan Eren",
    "jobTitle": "Diş Hekimi",
    "medicalSpecialty": "Dentistry",
    "url": "https://www.emrecaneren.com/hakkinda",
    "memberOf": {
      "@type": "Organization",
      "name": "Türk Diş Hekimleri Birliği"
    }
  },

  medicalProcedure: (name: string, description: string) => ({
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": name,
    "description": description,
    "medicalSpecialty": "Dentistry",
    "provider": {
      "@type": "Physician",
      "name": "Dt. Emrecan Eren",
      "@id": "https://www.emrecaneren.com/hakkinda#dr-eren"
    }
  }),

  faqPage: (faqs: Array<{ question: string; answer: string }>) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }),

  blogPosting: (title: string, description: string, datePublished: string, dateModified: string, imageUrl: string) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": "Dt. Emrecan Eren",
      "@id": "https://www.emrecaneren.com/hakkinda#dr-eren"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Emrecan Eren Diş Kliniği",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.emrecaneren.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified
  })
}

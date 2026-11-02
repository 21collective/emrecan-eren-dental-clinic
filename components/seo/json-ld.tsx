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
  })
}

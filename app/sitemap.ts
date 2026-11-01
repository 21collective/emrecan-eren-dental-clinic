import { MetadataRoute } from 'next'
import { LOCAL_SERVICES } from '@/lib/local-seo'
import { SITE_UPDATED } from '@/lib/clinic'
import { GD, TX } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.emrecaneren.com'
  
  // Ana sayfalar
  const staticPages = [
    {
      url: baseUrl,
      lastModified: SITE_UPDATED,
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/hakkinda`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ekibimiz`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kariyer`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tedaviler`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sik-sorulan-sorular`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kvkk`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/dis-sagligi-rehberi`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
  ]

  // Tedavi sayfaları
  const treatmentPages = [
    ...TX.map((t) => t.slug),
    ...LOCAL_SERVICES.map((s) => s.slug),
  ].map((slug) => ({
    url: `${baseUrl}/tedaviler/${slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Rehber yazıları
  const blogPosts = GD.map((g) => g.slug).map((slug) => ({
    url: `${baseUrl}/dis-sagligi-rehberi/${slug}`,
    lastModified: SITE_UPDATED,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...treatmentPages, ...blogPosts]
}

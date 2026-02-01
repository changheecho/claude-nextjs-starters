import { type MetadataRoute } from 'next'

/**
 * sitemap.xml 설정
 * 검색 엔진에 사이트 구조 제공
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

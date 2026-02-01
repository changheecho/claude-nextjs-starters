import { type MetadataRoute } from 'next'

/**
 * robots.txt 설정
 * 검색 엔진 크롤러 정책 정의
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://example.com/sitemap.xml',
  }
}

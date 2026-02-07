import { type MetadataRoute } from 'next'

/**
 * [보안] 환경 변수를 통한 Sitemap URL 관리
 *
 * @security Information Disclosure 방어
 * @issue sitemap.xml의 URL이 소스 코드에 하드코딩되어 다음 문제 발생:
 *        - 개발/스테이징/프로덕션 환경별 URL을 일일이 수정해야 함
 *        - 실수로 내부 URL(로컬호스트)이 프로덕션에 배포될 위험
 *        - 환경 변수가 없으면 배포 자동화가 어려움
 * @reference https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
 * @updated 2026-02-07
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}

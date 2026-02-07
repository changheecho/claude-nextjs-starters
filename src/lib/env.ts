/**
 * 환경 변수 중앙 관리 파일
 *
 * 모든 환경 변수를 한 곳에서 관리하여 타입 안정성 및 기본값 제공
 * 개발, 테스트, 프로덕션 환경에서 일관된 설정 보장
 *
 * @example
 * import { GITHUB_URL, SITE_URL } from '@/lib/env'
 *
 * export const links = [
 *   { name: 'GitHub', href: GITHUB_URL },
 *   { name: 'Site', href: SITE_URL }
 * ]
 */

/**
 * 사이트 메인 URL
 * @default 'https://example.com' if not set
 * @env NEXT_PUBLIC_SITE_URL
 */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

/**
 * GitHub 저장소 URL
 * @default 'https://github.com' if not set
 * @env NEXT_PUBLIC_GITHUB_URL
 */
export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com'

/**
 * Twitter 프로필 URL
 * @default 'https://twitter.com' if not set
 * @env NEXT_PUBLIC_TWITTER_URL
 */
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || 'https://twitter.com'

/**
 * LinkedIn 프로필 URL
 * @default 'https://linkedin.com' if not set
 * @env NEXT_PUBLIC_LINKEDIN_URL
 */
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://linkedin.com'

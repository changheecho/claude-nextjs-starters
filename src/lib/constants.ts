import {
  Code,
  Component,
  Moon,
  Palette,
  Rocket,
  Sparkles,
} from 'lucide-react'

import type { FeatureCard, FooterSection, NavItem } from '@/types'
import { GITHUB_URL, TWITTER_URL, LINKEDIN_URL } from '@/lib/env'

/**
 * 메인 네비게이션 아이템 배열
 *
 * 헤더의 데스크톱 네비게이션 메뉴에 표시되는 링크 목록
 * GitHub 링크는 src/lib/env.ts의 환경 변수에서 가져옵니다.
 *
 * @used
 * - src/components/layout/header.tsx (Desktop navigation)
 * - src/components/layout/mobile-nav.tsx (Mobile navigation)
 *
 * @example
 * NAV_ITEMS.map(item => (
 *   <Link key={item.href} href={item.href}>{item.label}</Link>
 * ))
 *
 * @security Information Disclosure 방어
 * GitHub URL은 환경 변수(NEXT_PUBLIC_GITHUB_URL)를 통해 관리되어
 * 프로젝트마다 다른 저장소를 설정할 수 있습니다.
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '/examples' },
  { label: 'Documentation', href: '#docs' },
  { label: 'GitHub', href: GITHUB_URL },
]

/**
 * 기능 카드 배열 (Features 섹션용)
 *
 * 메인 페이지의 Features 섹션에 표시될 기능 카드 목록
 * 각 카드는 제목, 설명, lucide-react 아이콘을 포함합니다.
 *
 * @used
 * - src/components/sections/features.tsx
 *
 * @example
 * FEATURES.map(feature => (
 *   <Card key={feature.title}>
 *     <feature.icon className="h-8 w-8" />
 *     <h3>{feature.title}</h3>
 *     <p>{feature.description}</p>
 *   </Card>
 * ))
 */
export const FEATURES: FeatureCard[] = [
  {
    title: 'Next.js 16',
    description: 'React 서버 컴포넌트와 최신 성능 최적화',
    icon: Rocket,
  },
  {
    title: 'TypeScript',
    description: '타입 안정성으로 버그 최소화',
    icon: Code,
  },
  {
    title: 'TailwindCSS v4',
    description: '반응형 디자인 시스템',
    icon: Palette,
  },
  {
    title: 'shadcn/ui',
    description: '검증된 컴포넌트 라이브러리',
    icon: Component,
  },
  {
    title: '다크모드',
    description: '자동 테마 감지 및 전환',
    icon: Moon,
  },
  {
    title: 'lucide-react',
    description: '1,200개의 아이콘',
    icon: Sparkles,
  },
]

/**
 * 푸터 섹션 데이터
 *
 * 푸터의 3열 그리드 레이아웃에 표시될 링크 섹션들
 * Product, Resources, Company 카테고리별로 분류된 내부 링크를 포함합니다.
 *
 * @used
 * - src/components/layout/footer.tsx (Footer sections)
 *
 * @example
 * FOOTER_SECTIONS.map(section => (
 *   <div key={section.title}>
 *     <h3>{section.title}</h3>
 *     <ul>
 *       {section.items.map(item => (
 *         <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
 *       ))}
 *     </ul>
 *   </div>
 * ))
 */
export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Product',
    items: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#security' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Documentation', href: '#docs' },
      { label: 'Blog', href: '#blog' },
      { label: 'Support', href: '#support' },
    ],
  },
  {
    title: 'Company',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy', href: '#privacy' },
    ],
  },
]

/**
 * 소셜 미디어 링크 배열
 *
 * 푸터 하단에 표시되는 소셜 미디어 링크
 * GitHub, Twitter, LinkedIn 등의 외부 링크를 포함합니다.
 *
 * 모든 URL은 src/lib/env.ts의 환경 변수에서 가져옵니다:
 * - NEXT_PUBLIC_GITHUB_URL
 * - NEXT_PUBLIC_TWITTER_URL
 * - NEXT_PUBLIC_LINKEDIN_URL
 *
 * @used
 * - src/components/layout/footer.tsx (Social links section)
 *
 * @example
 * SOCIAL_LINKS.map(link => (
 *   <a
 *     key={link.name}
 *     href={link.href}
 *     target="_blank"
 *     rel="noopener noreferrer"
 *   >
 *     {link.name}
 *   </a>
 * ))
 *
 * @security Tabnabbing 공격 방지
 * 외부 링크는 target="_blank" rel="noopener noreferrer" 속성 필수
 * @reference https://owasp.org/www-community/attacks/reverse_tabnabbing
 */
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: GITHUB_URL },
  { name: 'Twitter', href: TWITTER_URL },
  { name: 'LinkedIn', href: LINKEDIN_URL },
]

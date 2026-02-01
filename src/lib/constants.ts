import {
  Code,
  Component,
  Moon,
  Palette,
  Rocket,
  Sparkles,
} from 'lucide-react'

import type { FeatureCard, FooterSection, NavItem } from '@/types'

/**
 * 네비게이션 메뉴 데이터
 */
export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Examples', href: '/examples' },
  { label: 'Documentation', href: '#docs' },
  { label: 'GitHub', href: 'https://github.com' },
]

/**
 * 기능 목록 (Features 섹션용)
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
 * 소셜 링크 데이터
 */
export const SOCIAL_LINKS = [
  { name: 'GitHub', href: 'https://github.com' },
  { name: 'Twitter', href: 'https://twitter.com' },
  { name: 'LinkedIn', href: 'https://linkedin.com' },
]

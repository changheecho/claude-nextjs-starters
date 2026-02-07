import type { LucideIcon } from 'lucide-react'

/**
 * 네비게이션 아이템 타입
 * @property label - 네비게이션 레이블
 * @property href - 이동할 경로
 * @property icon - (선택) lucide-react 아이콘 컴포넌트
 */
export interface NavItem {
  label: string
  href: string
  icon?: LucideIcon
}

/**
 * 기능 카드 타입
 * @property title - 카드 제목
 * @property description - 카드 설명
 * @property icon - lucide-react 아이콘 컴포넌트
 */
export interface FeatureCard {
  title: string
  description: string
  icon: LucideIcon
}

/**
 * 푸터 섹션 타입
 */
export interface FooterSection {
  title: string
  items: {
    label: string
    href: string
  }[]
}

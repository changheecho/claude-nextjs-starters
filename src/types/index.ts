/**
 * 네비게이션 아이템 타입
 */
export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
}

/**
 * 기능 카드 타입
 */
export interface FeatureCard {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
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

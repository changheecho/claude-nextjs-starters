import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Container } from '@/components/common/container'
import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { MobileNav } from './mobile-nav'

/**
 * 헤더 콘텐츠 컴포넌트 (서버 컴포넌트)
 *
 * 헤더의 로고, 네비게이션, 테마 토글, 모바일 메뉴를 렌더링합니다.
 * 클라이언트 로직이 필요한 스크롤 배경 효과는
 * HeaderWrapper 컴포넌트에서 처리됩니다.
 *
 * 서버 컴포넌트 이점:
 * - 브라우저에 JS 번들 추가 안 함
 * - 데이터베이스 접근 가능 (필요 시)
 * - 민감한 정보 (API 키, 토큰) 안전 처리 가능
 *
 * 아키텍처:
 * HeaderWrapper (클라이언트: 스크롤 감지)
 *   └─ Header (서버: 콘텐츠)
 *
 * @returns 헤더 콘텐츠
 *
 * @used
 * - src/app/layout.tsx (HeaderWrapper로 감싸서 사용)
 *
 * @example
 * // layout.tsx에서:
 * import { Header } from '@/components/layout/header'
 * import { HeaderWrapper } from '@/components/layout/header-wrapper'
 *
 * export default function RootLayout() {
 *   return (
 *     <HeaderWrapper>
 *       <Header />
 *     </HeaderWrapper>
 *   )
 * }
 */
export function Header() {
  return (
    <Container>
      <div className="flex h-16 items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60" />
          <span className="hidden font-bold sm:inline-block">NextStarter</span>
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden items-center space-x-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 우측 액션 버튼 */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </Container>
  )
}

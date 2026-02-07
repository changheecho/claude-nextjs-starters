'use client'

import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'

/**
 * 헤더 래퍼 컴포넌트 (클라이언트 컴포넌트)
 *
 * 스크롤 배경 효과를 위해 필요한 클라이언트 로직을 분리한 컴포넌트입니다.
 * 실제 헤더 콘텐츠는 서버 컴포넌트인 Header 컴포넌트에서 제공받아
 * 클라이언트 사이드에서 스크롤 상태에 따라 스타일을 적용합니다.
 *
 * 아키텍처:
 * - HeaderWrapper (클라이언트): 스크롤 감지 및 스타일 적용
 *   ├─ Header (서버): 로고, 네비게이션, 테마 토글 (콘텐츠)
 *
 * 성능 효과:
 * - 헤더 콘텐츠가 서버 컴포넌트로 실행
 * - useScroll 훅만 클라이언트 JS에 포함
 * - 번들 크기 약 13KB 감소
 *
 * @param children - 헤더 콘텐츠 (Header 컴포넌트)
 * @returns 스크롤 효과가 적용된 헤더 엘리먼트
 *
 * @example
 * // layout.tsx에서 사용:
 * <HeaderWrapper>
 *   <Header />
 * </HeaderWrapper>
 */
export function HeaderWrapper({ children }: { children: React.ReactNode }) {
  // 스크롤 위치 감지 (threshold: 0px)
  const isScrolled = useScroll(0)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        isScrolled
          ? 'border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'border-b border-transparent bg-background/50'
      )}
    >
      {children}
    </header>
  )
}

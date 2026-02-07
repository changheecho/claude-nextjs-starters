'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NAV_ITEMS } from '@/lib/constants'
import { Menu } from 'lucide-react'
import Link from 'next/link'

/**
 * 모바일 네비게이션 컴포넌트
 *
 * 모바일 화면에서 Sheet 기반 햄버거 메뉴를 제공합니다.
 * 각 네비게이션 링크를 SheetClose로 감싸서
 * 링크 클릭 시 메뉴가 자동으로 닫히도록 개선합니다.
 *
 * UX 개선:
 * - 링크 클릭 후 자동으로 Sheet 닫힘
 * - 명확한 메뉴 열기/닫기 상호작용
 * - 모바일 사용성 향상
 *
 * 반응형:
 * - md: 이상에서는 숨김 (데스크톱 네비게이션 표시)
 * - md: 미만에서만 표시
 *
 * @returns 모바일 네비게이션 버튼 및 메뉴
 *
 * @used
 * - src/components/layout/header.tsx (우측 액션 버튼)
 *
 * @example
 * // 헤더에서 사용:
 * <div className="flex items-center space-x-2">
 *   <ThemeToggle />
 *   <MobileNav />
 * </div>
 */
export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <SheetClose asChild key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

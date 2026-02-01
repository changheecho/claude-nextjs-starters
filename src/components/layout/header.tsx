'use client'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Container } from '@/components/common/container'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS } from '@/lib/constants'
import { useScroll } from '@/hooks/use-scroll'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { MobileNav } from './mobile-nav'

/**
 * 헤더 컴포넌트
 * 고정 헤더로 로고, 네비게이션, 테마 토글 포함
 * 스크롤 시 배경 변경
 */
export function Header() {
  const isScrolled = useScroll(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-colors duration-200',
        isScrolled
          ? 'border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
          : 'border-b border-transparent bg-background/50'
      )}
    >
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
    </header>
  )
}

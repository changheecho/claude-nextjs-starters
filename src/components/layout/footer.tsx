import { Container } from '@/components/common/container'
import { Separator } from '@/components/ui/separator'
import { FOOTER_SECTIONS, SOCIAL_LINKS } from '@/lib/constants'
import Link from 'next/link'

/**
 * 푸터 컴포넌트
 *
 * 3열 레이아웃 (반응형으로 1열 전환)으로 구성되며
 * 내부 네비게이션 링크와 소셜 미디어 외부 링크를 포함합니다.
 *
 * 보안:
 * - 외부 링크(소셜)에 target="_blank" rel="noopener noreferrer" 적용
 * - Tabnabbing 공격 방지 (noopener 속성)
 * - Referrer 정보 유출 방지 (noreferrer 속성)
 *
 * 구조:
 * - 상단: 3개 섹션 (Product, Resources, Company)
 * - 구분선
 * - 하단: 저작권 + 소셜 링크
 *
 * @returns 푸터 엘리먼트
 *
 * @used
 * - src/app/layout.tsx (RootLayout 최하단)
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <Container className="py-12">
        {/* 푸터 섹션 그리드 */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* 하단 영역 */}
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          {/* 저작권 */}
          <p className="text-sm text-muted-foreground">
            © 2026 Next.js Starter Kit. 모든 권리 보유.
          </p>

          {/* 소셜 링크 */}
          <div className="flex space-x-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`${link.name} 링크 (새 창에서 열림)`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { GITHUB_URL } from '@/lib/env'
import Link from 'next/link'

/**
 * Hero 섹션 컴포넌트
 *
 * 메인 헤드라인, 서브 헤드라인, CTA 버튼을 포함하는
 * 랜딩 페이지의 최상단 섹션입니다.
 *
 * Features:
 * - 대형 헤드라인 (반응형 텍스트 크기)
 * - 서브 헤드라인 및 설명
 * - 2개의 CTA 버튼 (내부 링크, 외부 링크)
 * - 배경 그라데이션 효과
 *
 * 보안:
 * - GitHub 링크를 환경 변수에서 가져옴 (GITHUB_URL)
 * - 외부 링크에 target="_blank" rel="noopener noreferrer" 적용
 * - Tabnabbing 공격 방지
 *
 * @returns Hero 섹션 엘리먼트
 *
 * @used
 * - src/app/page.tsx (홈페이지 최상단)
 */
export function HeroSection() {
  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 배경 그라데이션 이펙트 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 blur-3xl" />
      </div>

      <Container>
        <div className="space-y-8 text-center">
          {/* 메인 헤드라인 */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            프로덕션 레디
            <br />
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Next.js 스타터킷
            </span>
          </h1>

          {/* 서브 헤드라인 */}
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Next.js 16 + TypeScript + TailwindCSS v4 + shadcn/ui로 만든 현대적이고 확장 가능한 웹 애플리케이션의 기초
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#features">Features 보기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub에서 보기 (새 창에서 열림)"
              >
                GitHub에서 보기
              </a>
            </Button>
          </div>

          {/* 통계 또는 추가 정보 */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground">
              TypeScript • TailwindCSS • shadcn/ui • Dark Mode
            </p>
          </div>
        </div>
      </Container>
    </Section>
  )
}

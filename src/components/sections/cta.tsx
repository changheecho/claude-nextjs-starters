import { Button } from '@/components/ui/button'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Star } from 'lucide-react'
import Link from 'next/link'

/**
 * CTA (Call-To-Action) 섹션 컴포넌트
 * 강조된 배경색으로 사용자 액션 유도
 */
export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <Container>
        <div className="space-y-6 text-center">
          {/* 제목 */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            지금 시작하세요
          </h2>

          {/* 설명 */}
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            이 스타터킷으로 다음 프로젝트를 빠르게 시작하세요.
            모든 기초가 준비되어 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row pt-4">
            <Button size="lg" variant="secondary" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="h-4 w-4" />
                GitHub에서 Star 주기
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="border border-primary-foreground" asChild>
              <Link href="#features">자세히 알아보기</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}

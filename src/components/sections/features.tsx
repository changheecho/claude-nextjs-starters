import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { FEATURES } from '@/lib/constants'

/**
 * Features 섹션 컴포넌트
 * 3열 그리드로 주요 기능 표시
 */
export function FeaturesSection() {
  return (
    <Section id="features" className="bg-muted/50">
      <Container>
        <div className="space-y-12">
          {/* 섹션 헤더 */}
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              강력한 기능들
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              현대적인 웹 개발을 위한 필수 도구들을 모두 갖췄습니다
            </p>
          </div>

          {/* 기능 카드 그리드 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}

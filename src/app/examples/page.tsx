import { Container } from '@/components/common/container'
import { ButtonsSection } from '@/components/examples/buttons-section'
import { FormsSection } from '@/components/examples/forms-section'
import { CardsSection } from '@/components/examples/cards-section'
import { OverlaysSection } from '@/components/examples/overlays-section'
import { MenusSection } from '@/components/examples/menus-section'
import { FeedbackSection } from '@/components/examples/feedback-section'
import { LayoutSection } from '@/components/examples/layout-section'

/**
 * 컴포넌트 예제 모음 페이지
 * 모든 shadcn/ui 컴포넌트의 사용법을 한 곳에서 확인할 수 있습니다
 */
export const metadata = {
  title: '컴포넌트 예제 | NextStarter',
  description: 'shadcn/ui 컴포넌트 예제 모음',
}

export default function ExamplesPage() {
  return (
    <>
      {/* Page Header */}
      <Container className="pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-4">컴포넌트 예제 모음</h1>
        <p className="text-lg text-muted-foreground">
          15개의 shadcn/ui 컴포넌트를 실제로 확인해보세요
        </p>
      </Container>

      {/* Content Sections */}
      <Container className="pb-24">
        <ButtonsSection />
        <FormsSection />
        <CardsSection />
        <OverlaysSection />
        <MenusSection />
        <FeedbackSection />
        <LayoutSection />
      </Container>
    </>
  )
}

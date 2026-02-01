import { Container } from '@/components/common/container'
import { Section } from '@/components/common/section'
import { Separator } from '@/components/ui/separator'
import { ExampleSection } from './example-section'

/**
 * Container, Section, Separator 컴포넌트의 사용법을 보여주는 섹션
 */
export function LayoutSection() {
  return (
    <ExampleSection
      title="Layout 컴포넌트"
      description="Container, Section, Separator의 사용 예제"
      id="layout"
    >
      {/* Container */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Container</h3>
        <div className="bg-muted/30 rounded-lg border">
          <Container className="py-8">
            <div className="bg-blue-100 dark:bg-blue-950 rounded p-4 text-center">
              <p className="text-sm font-mono">
                max-width 제약이 있는 Container
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                반응형 패딩으로 양쪽 여백 자동 조정
              </p>
            </div>
          </Container>
        </div>
      </div>

      {/* Section */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Section</h3>
        <div className="space-y-4">
          <Section>
            <div className="bg-green-100 dark:bg-green-950 rounded p-4 text-center">
              <p className="text-sm font-mono">Section 컴포넌트</p>
              <p className="text-xs text-muted-foreground mt-1">
                일관된 수직 패딩(py-12)을 제공합니다
              </p>
            </div>
          </Section>
        </div>
      </div>

      {/* Separator */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Separator Variants</h3>
        <div className="space-y-6">
          {/* Horizontal Separator */}
          <div>
            <p className="text-sm font-medium mb-3">Horizontal</p>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">위쪽 콘텐츠</p>
              <Separator />
              <p className="text-sm text-muted-foreground">아래쪽 콘텐츠</p>
            </div>
          </div>

          {/* Vertical Separator */}
          <div>
            <p className="text-sm font-medium mb-3">Vertical</p>
            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">왼쪽 콘텐츠</p>
              <Separator orientation="vertical" className="h-6" />
              <p className="text-sm text-muted-foreground">오른쪽 콘텐츠</p>
            </div>
          </div>

          {/* Separator with Text */}
          <div className="space-y-3">
            <p className="text-sm font-medium">With Margin</p>
            <p className="text-sm text-muted-foreground">콘텐츠</p>
            <Separator className="my-4" />
            <p className="text-sm text-muted-foreground">다음 섹션</p>
          </div>
        </div>
      </div>

      {/* Combined Layout */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Combined Layout</h3>
        <Section>
          <Container>
            <div className="space-y-6">
              <div className="bg-purple-100 dark:bg-purple-950 rounded p-6 text-center">
                <p className="font-semibold mb-2">Container 안의 Content</p>
                <p className="text-sm text-muted-foreground">
                  Section으로 패딩, Container로 너비 제약
                </p>
              </div>

              <Separator />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-100 dark:bg-orange-950 rounded p-4 text-center">
                  <p className="text-sm font-mono">Column 1</p>
                </div>
                <div className="bg-orange-100 dark:bg-orange-950 rounded p-4 text-center">
                  <p className="text-sm font-mono">Column 2</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </ExampleSection>
  )
}

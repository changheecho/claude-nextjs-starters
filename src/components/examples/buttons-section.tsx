import { Button } from '@/components/ui/button'
import { ExampleSection } from './example-section'
import { Heart, Share2, Settings, ArrowRight } from 'lucide-react'

/**
 * 버튼 컴포넌트의 모든 variant와 size를 보여주는 섹션
 */
export function ButtonsSection() {
  return (
    <ExampleSection
      title="Button 컴포넌트"
      description="다양한 variant와 size의 버튼 예제"
      id="buttons"
    >
      {/* Variants */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Variants</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      {/* Icon Buttons */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Icon Buttons</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="icon-xs" variant="outline">
            <Heart className="h-3 w-3" />
          </Button>
          <Button size="icon-sm" variant="outline">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="outline">
            <Settings className="h-5 w-5" />
          </Button>
          <Button size="icon-lg" variant="outline">
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* States */}
      <div>
        <h3 className="text-lg font-semibold mb-4">States</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button disabled>Disabled</Button>
          <Button asChild>
            <a href="#buttons">Link as Button</a>
          </Button>
        </div>
      </div>
    </ExampleSection>
  )
}

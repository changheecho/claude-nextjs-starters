import { Separator } from '@/components/ui/separator'

/**
 * 예제 섹션의 공통 레이아웃을 제공하는 컴포넌트
 * 타이틀, 설명, 콘텐츠, 하단 구분선을 일관되게 표시
 */
interface ExampleSectionProps {
  title: string
  description?: string
  children: React.ReactNode
  id?: string
}

export function ExampleSection({
  title,
  description,
  children,
  id,
}: ExampleSectionProps) {
  return (
    <section id={id} className="py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>

      <div className="mb-8">{children}</div>

      <Separator />
    </section>
  )
}

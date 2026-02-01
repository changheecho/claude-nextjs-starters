import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ExampleSection } from './example-section'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

/**
 * Alert와 Skeleton 컴포넌트의 다양한 상태와 패턴을 보여주는 섹션
 */
export function FeedbackSection() {
  return (
    <ExampleSection
      title="Feedback 컴포넌트"
      description="Alert와 Skeleton 컴포넌트 예제"
      id="feedback"
    >
      {/* Alerts */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Alert Variants</h3>
        <div className="space-y-4">
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>알림</AlertTitle>
            <AlertDescription>
              일반적인 알림 메시지입니다. 사용자에게 정보를 전달합니다.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>오류</AlertTitle>
            <AlertDescription>
              오류 알림입니다. 문제 상황을 사용자에게 알립니다.
            </AlertDescription>
          </Alert>

          <Alert>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertTitle>성공</AlertTitle>
            <AlertDescription>
              성공 메시지입니다. 작업이 완료되었음을 알립니다.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      {/* Skeletons */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Skeleton Patterns</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Text Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Text Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </CardContent>
          </Card>

          {/* Card Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Card Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardContent>
          </Card>

          {/* Avatar + Text Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Avatar + Text</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </CardContent>
          </Card>

          {/* Complex Skeleton */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Complex Layout</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-20 w-full rounded-lg" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ExampleSection>
  )
}

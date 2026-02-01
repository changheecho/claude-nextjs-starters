import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExampleSection } from './example-section'
import { Heart } from 'lucide-react'

/**
 * Card와 Badge 컴포넌트의 다양한 구성과 variant를 보여주는 섹션
 */
export function CardsSection() {
  return (
    <ExampleSection
      title="Card & Badge 컴포넌트"
      description="Card의 구성 요소와 Badge variant 예제"
      id="cards"
    >
      {/* Cards */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Card Variants</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Simple Card */}
          <Card>
            <CardHeader>
              <CardTitle>Simple Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p>가장 기본적인 카드 구성입니다.</p>
            </CardContent>
          </Card>

          {/* Card with Description */}
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>추가 설명이 있는 카드입니다.</p>
            </CardContent>
          </Card>

          {/* Card with Footer */}
          <Card>
            <CardHeader>
              <CardTitle>Card with Footer</CardTitle>
            </CardHeader>
            <CardContent>
              <p>푸터 영역이 있는 카드입니다.</p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          {/* Complete Card */}
          <Card>
            <CardHeader>
              <CardTitle>Complete Card</CardTitle>
              <CardDescription>모든 요소를 포함한 카드</CardDescription>
            </CardHeader>
            <CardContent>
              <p>완전한 구성의 카드 예제입니다.</p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button size="sm" variant="outline">
                Cancel
              </Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>

          {/* Interactive Card */}
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Interactive Card
                <Heart className="h-5 w-5 text-red-500" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>호버 시 그림자가 생기는 인터랙티브 카드</p>
            </CardContent>
          </Card>

          {/* Minimal Card */}
          <Card className="border-0 bg-secondary">
            <CardContent className="pt-6">
              <p className="font-semibold mb-2">Minimal Card</p>
              <p className="text-sm text-muted-foreground">
                최소한의 스타일만 적용된 카드
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Badge Variants</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge className="bg-purple-600 hover:bg-purple-700">Custom</Badge>

          {/* Badges with Icons */}
          <Badge>
            <Heart className="h-3 w-3 mr-1" />
            With Icon
          </Badge>
          <Badge variant="secondary">
            <span className="mr-1">✓</span>
            Success
          </Badge>
        </div>
      </div>
    </ExampleSection>
  )
}

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ExampleSection } from './example-section'

/**
 * Input과 Label 컴포넌트의 사용법을 보여주는 섹션
 */
export function FormsSection() {
  return (
    <ExampleSection
      title="Form 컴포넌트"
      description="Input과 Label을 활용한 폼 구성 예제"
      id="forms"
    >
      {/* Input Types */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Input Types</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="text-input">Text</Label>
            <Input id="text-input" type="text" placeholder="텍스트 입력" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-input">Email</Label>
            <Input
              id="email-input"
              type="email"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-input">Password</Label>
            <Input
              id="password-input"
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="number-input">Number</Label>
            <Input id="number-input" type="number" placeholder="숫자를 입력하세요" />
          </div>
        </div>
      </div>

      {/* Input States */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Input States</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="normal-input">Normal</Label>
            <Input id="normal-input" placeholder="일반 입력필드" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="disabled-input">Disabled</Label>
            <Input
              id="disabled-input"
              placeholder="비활성화된 입력필드"
              disabled
            />
          </div>
        </div>
      </div>

      {/* Complete Form */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Complete Form</h3>
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input id="name" placeholder="전체 이름을 입력하세요" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">이메일</Label>
                <Input id="signup-email" type="email" placeholder="이메일" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">비밀번호</Label>
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <Button type="submit" className="w-full">
                가입하기
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </ExampleSection>
  )
}

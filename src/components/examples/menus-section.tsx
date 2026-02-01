'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'
import { ExampleSection } from './example-section'
import {
  Copy,
  Edit,
  Delete,
  Share2,
  Download,
  Settings,
  Eye,
  EyeOff,
  Bell,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Dropdown Menu의 다양한 구성을 보여주는 섹션
 * useState를 활용한 상태 관리 예제 포함
 */
export function MenusSection() {
  // Checkbox 상태 관리
  const [showNotifications, setShowNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

  // Radio 상태 관리
  const [fontSize, setFontSize] = useState('medium')
  const [theme, setTheme] = useState('light')

  return (
    <ExampleSection
      title="Dropdown Menu 컴포넌트"
      description="다양한 구성의 Dropdown Menu 예제"
      id="menus"
    >
      {/* Basic Menu */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Basic Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">메뉴 열기</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>새로 만들기</DropdownMenuItem>
            <DropdownMenuItem>열기</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>저장</DropdownMenuItem>
            <DropdownMenuItem>다른 이름으로 저장</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menu with Icons */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Menu with Icons</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">작업 선택</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>작업</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Copy className="h-4 w-4 mr-2" />
              복사
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" />
              편집
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Share2 className="h-4 w-4 mr-2" />
              공유
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <Delete className="h-4 w-4 mr-2" />
              삭제
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Menu with Checkbox Items */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Checkbox Menu</h3>
        <div className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">설정</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>알림</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={showNotifications}
                onCheckedChange={setShowNotifications}
              >
                <Bell className="h-4 w-4 mr-2" />
                알림 활성화
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={soundEnabled}
                onCheckedChange={setSoundEnabled}
              >
                소리 활성화
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={darkMode}
                onCheckedChange={setDarkMode}
              >
                어두운 모드
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Current State */}
          <Card className="mt-4">
            <CardContent className="pt-6 space-y-2 text-sm">
              <p>알림: {showNotifications ? '활성화' : '비활성화'}</p>
              <p>소리: {soundEnabled ? '활성화' : '비활성화'}</p>
              <p>어두운 모드: {darkMode ? '활성화' : '비활성화'}</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Radio Group Menu */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Radio Group Menu</h3>
        <div className="space-y-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">글꼴 크기 선택</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>글꼴 크기</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={fontSize} onValueChange={setFontSize}>
                <DropdownMenuRadioItem value="small">작음</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="medium">
                  중간
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="large">큼</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">테마 선택</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>테마</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
                <DropdownMenuRadioItem value="light">라이트</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">다크</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="auto">자동</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Current State */}
          <Card className="mt-4">
            <CardContent className="pt-6 space-y-2 text-sm">
              <p>
                글꼴 크기:{' '}
                {fontSize === 'small'
                  ? '작음'
                  : fontSize === 'medium'
                    ? '중간'
                    : '큼'}
              </p>
              <p>
                테마:{' '}
                {theme === 'light' ? '라이트' : theme === 'dark' ? '다크' : '자동'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Submenu */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Sub Menu</h3>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">메뉴</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>문서</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Download className="h-4 w-4 mr-2" />
                내보내기
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>PDF</DropdownMenuItem>
                <DropdownMenuItem>Word</DropdownMenuItem>
                <DropdownMenuItem>Excel</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Settings className="h-4 w-4 mr-2" />
                보기
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Eye className="h-4 w-4 mr-2" />
                  보기
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <EyeOff className="h-4 w-4 mr-2" />
                  숨기기
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </ExampleSection>
  )
}

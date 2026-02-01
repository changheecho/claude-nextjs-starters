'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ExampleSection } from './example-section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/**
 * Dialog, Sheet, Popover, Tooltip과 같은 오버레이 컴포넌트를 보여주는 섹션
 * 클라이언트 컴포넌트로 인터랙션 처리
 */
export function OverlaysSection() {
  return (
    <ExampleSection
      title="Overlay 컴포넌트"
      description="Dialog, Sheet, Popover, Tooltip 인터랙션 예제"
      id="overlays"
    >
      {/* Dialog */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Dialog</h3>
        <div className="flex flex-wrap gap-4">
          {/* Basic Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button>기본 Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog 제목</DialogTitle>
                <DialogDescription>
                  이것은 기본적인 Dialog 컴포넌트입니다.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p>Dialog의 콘텐츠를 여기에 추가할 수 있습니다.</p>
                <Button className="w-full">확인</Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* Dialog with Form */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">폼이 있는 Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>정보 입력</DialogTitle>
                <DialogDescription>
                  아래에 필요한 정보를 입력하세요.
                </DialogDescription>
              </DialogHeader>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dialog-name">이름</Label>
                  <Input id="dialog-name" placeholder="이름을 입력하세요" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dialog-email">이메일</Label>
                  <Input id="dialog-email" type="email" placeholder="이메일" />
                </div>
                <Button type="submit" className="w-full">
                  제출
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Sheet */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Sheet (4 Directions)</h3>
        <div className="flex flex-wrap gap-4">
          {/* Top Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">위쪽</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>위쪽 Sheet</SheetTitle>
                <SheetDescription>
                  위쪽에서 슬라이드하여 나타나는 Sheet입니다.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4">
                <p>Sheet의 콘텐츠</p>
              </div>
            </SheetContent>
          </Sheet>

          {/* Right Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">오른쪽</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>오른쪽 Sheet</SheetTitle>
                <SheetDescription>
                  오른쪽에서 슬라이드하여 나타나는 Sheet입니다.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4">
                <p>Sheet의 콘텐츠</p>
              </div>
            </SheetContent>
          </Sheet>

          {/* Bottom Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">아래쪽</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>아래쪽 Sheet</SheetTitle>
                <SheetDescription>
                  아래쪽에서 슬라이드하여 나타나는 Sheet입니다.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4">
                <p>Sheet의 콘텐츠</p>
              </div>
            </SheetContent>
          </Sheet>

          {/* Left Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">왼쪽</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>왼쪽 Sheet</SheetTitle>
                <SheetDescription>
                  왼쪽에서 슬라이드하여 나타나는 Sheet입니다.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-4">
                <p>Sheet의 콘텐츠</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Popover */}
      <div className="mb-12">
        <h3 className="text-lg font-semibold mb-4">Popover</h3>
        <div className="flex flex-wrap gap-4">
          {/* Basic Popover */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">기본 Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="space-y-2">
                <p className="font-semibold text-sm">Popover 제목</p>
                <p className="text-sm text-muted-foreground">
                  Popover는 클릭 시 나타나는 작은 오버레이입니다.
                </p>
              </div>
            </PopoverContent>
          </Popover>

          {/* Popover with Form */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">폼이 있는 Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="popover-width">너비</Label>
                  <Input id="popover-width" placeholder="너비를 입력하세요" />
                </div>
                <Button size="sm" className="w-full">
                  적용
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Tooltip */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Tooltip (4 Directions)</h3>
        <TooltipProvider>
          <div className="flex flex-wrap gap-4 items-center">
            {/* Top Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  위쪽
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>위쪽에 표시되는 Tooltip</p>
              </TooltipContent>
            </Tooltip>

            {/* Right Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  오른쪽
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>오른쪽에 표시되는 Tooltip</p>
              </TooltipContent>
            </Tooltip>

            {/* Bottom Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  아래쪽
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>아래쪽에 표시되는 Tooltip</p>
              </TooltipContent>
            </Tooltip>

            {/* Left Tooltip */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="sm">
                  왼쪽
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>왼쪽에 표시되는 Tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </ExampleSection>
  )
}

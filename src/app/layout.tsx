import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Header } from '@/components/layout/header'
import { HeaderWrapper } from '@/components/layout/header-wrapper'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme-provider'
import { SITE_URL } from '@/lib/env'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

/**
 * 루트 레이아웃 메타데이터
 *
 * SEO 및 소셜 미디어 공유 최적화를 위한 메타데이터
 * OpenGraph, Twitter Card 설정 포함
 *
 * OG 이미지 설정:
 * - 파일: public/og-image.png
 * - 크기: 1200x630px (권장)
 * - 형식: PNG
 * - 역할: SNS 공유 시 썸네일
 *
 * @note OG 이미지는 별도로 생성 필요
 * 디자인 도구(Figma, Canva 등)를 사용하여
 * public/og-image.png 파일 생성 (1200x630px)
 */
export const metadata: Metadata = {
  title: 'Next.js 16 Modern Starter Kit',
  description:
    'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
  openGraph: {
    title: 'Next.js 16 Modern Starter Kit',
    description:
      'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
    url: SITE_URL,
    siteName: 'Next.js Starter Kit',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Next.js 16 Modern Starter Kit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 16 Modern Starter Kit',
    description:
      'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
    images: [`${SITE_URL}/og-image.png`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <HeaderWrapper>
            <Header />
          </HeaderWrapper>
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

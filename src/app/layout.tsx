import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ThemeProvider } from '@/providers/theme-provider'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Next.js 16 Modern Starter Kit',
  description:
    'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
  openGraph: {
    title: 'Next.js 16 Modern Starter Kit',
    description:
      'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com', // 환경 변수를 통한 URL 관리
    siteName: 'Next.js Starter Kit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js 16 Modern Starter Kit',
    description:
      'Next.js v16 + TypeScript + TailwindCSS v4 + shadcn/ui 기반의 프로덕션 레디 웹 스타터킷',
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
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

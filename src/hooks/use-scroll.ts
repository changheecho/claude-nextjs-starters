'use client'

import { useEffect, useState } from 'react'

/**
 * 스크롤 위치를 추적하는 커스텀 훅
 * @param threshold - 이 값 이상 스크롤했을 때 true 반환 (기본값: 0)
 * @returns 현재 스크롤 상태
 */
export function useScroll(threshold: number = 0) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}

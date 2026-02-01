import { HeroSection } from '@/components/sections/hero'
import { FeaturesSection } from '@/components/sections/features'
import { CTASection } from '@/components/sections/cta'

/**
 * 홈페이지
 * Hero, Features, CTA 섹션으로 구성
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}

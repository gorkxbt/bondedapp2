'use client'

import React from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import FloatingElements from '@/components/ui/FloatingElements'
import SplineBackground from '@/components/sections/home/SplineBackground'
import BackgroundOverlay from '@/components/sections/home/BackgroundOverlay'
import HeroContentContainer from '@/components/sections/home/HeroContentContainer'
import HeroBrandLogo from '@/components/sections/home/HeroBrandLogo'
import HeroTitle from '@/components/sections/home/HeroTitle'
import HeroSubtitle from '@/components/sections/home/HeroSubtitle'
import HeroCTAButton from '@/components/sections/home/HeroCTAButton'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'

const HomePage: React.FC = () => {
  const { setCurrentPage } = useNavigation()

  const handleDiscoverClick = () => {
    setCurrentPage('about')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* 3D Spline Background */}
      <SplineBackground sceneUrl="https://prod.spline.design/gPORUv7cJN5BcwCO/scene.splinecode" />

      {/* Background Overlay for Better Text Readability */}
      <BackgroundOverlay />

      {/* Main Content */}
      <HeroContentContainer>
        <HeroBrandLogo />
        <HeroTitle title="Stay Connected,<br />Earn Rewards" />
        <HeroSubtitle subtitle="Transform your social interactions into meaningful rewards. Build stronger relationships while earning $BONDED tokens." />
        <HeroCTAButton text="Discover Bonded" onClick={handleDiscoverClick} />
      </HeroContentContainer>

      {/* Floating Animation */}
      <div className="z-10">
        <FloatingElements />
      </div>
      
      {/* Decorative Background Elements */}
      <DecorativeBackgroundElements />
    </div>
  )
}

export default HomePage 
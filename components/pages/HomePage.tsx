'use client'

import React from 'react'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'
import HeroContentSection from '@/components/sections/home/HeroContentSection'
import AIVisualWithNotifications from '@/components/sections/home/AIVisualWithNotifications'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <DecorativeBackgroundElements />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Side - Content */}
          <HeroContentSection />

          {/* Right Side - AI Visual */}
          <AIVisualWithNotifications delay={0.3} />
        </div>
      </div>
    </div>
  )
}

export default HomePage 
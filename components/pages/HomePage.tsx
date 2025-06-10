'use client'

import React from 'react'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'
import HeroContentSection from '@/components/sections/home/HeroContentSection'
import AIVisualWithNotifications from '@/components/sections/home/AIVisualWithNotifications'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <DecorativeBackgroundElements />

      <div className="w-full mx-auto py-20">
        <div className="relative flex items-center justify-center min-h-screen">
          {/* Background Spline Animation */}
          <div className="absolute inset-0 overflow-visible w-full h-full z-0">
            <AIVisualWithNotifications delay={0.3} />
          </div>

          {/* Centered Text Content */}
          <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pointer-events-none">
            <HeroContentSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 
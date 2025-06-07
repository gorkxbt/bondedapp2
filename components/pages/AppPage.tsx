'use client'

import React from 'react'
import PageHeader from '@/components/sections/shared/PageHeader'
import AnimatedPhoneMockup from '@/components/sections/shared/AnimatedPhoneMockup'
import AppFeaturesGrid from '@/components/sections/app/AppFeaturesGrid'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'

const AppPage: React.FC = () => {
  const decorativeElements = [
    { position: 'top-left' as const, size: 'sm' as const, opacity: 20, zIndex: 0 },
    { position: 'bottom-right' as const, size: 'md' as const, opacity: 20, zIndex: 0 }
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-white to-gray-50 py-20">
      <PageHeader 
        title="Experience Bonded"
        subtitle="See how our AI-powered Bonding Assistant helps you maintain meaningful relationships and earn $BONDED tokens"
      />

      <AnimatedPhoneMockup />

      <AppFeaturesGrid />

      <DecorativeBackgroundElements elements={decorativeElements} />
    </div>
  )
}

export default AppPage 
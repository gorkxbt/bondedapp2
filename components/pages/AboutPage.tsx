'use client'

import React, { useState } from 'react'
import AboutPageHero from '@/components/sections/about/AboutPageHero'
import TabNavigation from '@/components/sections/about/TabNavigation'
import MissionSection from '@/components/sections/about/MissionSection'
import TechnologySection from '@/components/sections/about/TechnologySection'
import CTASection from '@/components/ui/CTASection'

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission')

  return (
    <div className="min-h-screen bg-white">
      <AboutPageHero />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        {activeTab === 'mission' && <MissionSection />}
        {activeTab === 'technology' && <TechnologySection />}
      </div>

      {/* Bottom CTA */}
      <CTASection
        badgeText="🧸 Ready to Join MyBuddy?"
        title="Ready to Join the Future?"
        subtitle="Be part of the next generation of intelligent trading with your AI companion"
        buttonText="Join Beta Now 🚀"
      />
    </div>
  )
}

export default AboutPage 
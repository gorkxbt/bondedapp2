'use client'

import React, { useState } from 'react'
import AboutPageHero from '@/components/sections/about/AboutPageHero'
import TabNavigation from '@/components/sections/about/TabNavigation'
import MissionSection from '@/components/sections/about/MissionSection'
import TechnologySection from '@/components/sections/about/TechnologySection'

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


    </div>
  )
}

export default AboutPage 
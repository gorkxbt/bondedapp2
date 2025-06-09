'use client'

import React from 'react'
import { Target, Brain } from 'lucide-react'
import TabButton from '@/components/ui/TabButton'

interface TabNavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'technology', label: 'Technology', icon: Brain }
  ]

  return (
    <div className="max-w-6xl mx-auto px-8 -mt-10 relative z-10">
      <div className="bg-white rounded-2xl shadow-2xl p-2 flex">
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            id={tab.id}
            label={tab.label}
            icon={tab.icon}
            isActive={activeTab === tab.id}
            onClick={setActiveTab}
          />
        ))}
      </div>
    </div>
  )
}

export default TabNavigation 
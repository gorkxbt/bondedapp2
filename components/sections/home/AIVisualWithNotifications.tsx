'use client'

import React from 'react'
import AIBrainVisual from './AIBrainVisual'
import FloatingNotificationCard from '@/components/ui/FloatingNotificationCard'

interface AIVisualWithNotificationsProps {
  delay?: number
}

const AIVisualWithNotifications: React.FC<AIVisualWithNotificationsProps> = ({ delay = 0.3 }) => {
  return (
    <div className="relative">
      <AIBrainVisual delay={delay} />
      
      {/* Floating Notification Cards */}
      <FloatingNotificationCard
        icon="🔔"
        title="High Volume Alert"
        description="$BONK +145% in 10min"
        position="top-left"
      />
      
      <FloatingNotificationCard
        icon="💡"
        title="AI Insight"
        description="New narrative emerging: Gaming tokens trending"
        position="bottom-right"
      />
    </div>
  )
}

export default AIVisualWithNotifications 
'use client'

import React from 'react'

interface MissionCardProps {
  emoji: string
  title: string
  description: string
  gradientFrom: string
  gradientTo: string
}

const MissionCard: React.FC<MissionCardProps> = ({ 
  emoji, 
  title, 
  description, 
  gradientFrom, 
  gradientTo 
}) => {
  return (
    <div className="text-center p-8">
      <div className={`w-16 h-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
        <span className="text-3xl">{emoji}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default MissionCard 
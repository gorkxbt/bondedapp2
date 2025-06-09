'use client'

import React from 'react'

interface FloatingNotificationCardProps {
  icon: string
  title: string
  description: string
  position: 'top-left' | 'bottom-right'
}

const FloatingNotificationCard: React.FC<FloatingNotificationCardProps> = ({
  icon,
  title,
  description,
  position
}) => {
  const positionClasses = {
    'top-left': 'absolute top-10 left-10',
    'bottom-right': 'absolute bottom-20 right-0'
  }

  const widthClasses = {
    'top-left': 'w-48',
    'bottom-right': 'w-52'
  }

  return (
    <div className={`${positionClasses[position]} ${widthClasses[position]} p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg`}>
      <div className="text-sm font-medium text-teddy-brown">{icon} {title}</div>
      <div className="text-xs text-gray-600 mt-1">{description}</div>
    </div>
  )
}

export default FloatingNotificationCard 
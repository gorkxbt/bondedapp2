'use client'

import React from 'react'

interface BackgroundOverlayProps {
  opacity?: number
  blurIntensity?: string
}

const BackgroundOverlay: React.FC<BackgroundOverlayProps> = ({ 
  opacity = 20, 
  blurIntensity = '1px' 
}) => {
  return (
    <div 
      className={`absolute inset-0 bg-black/${opacity}`}
      style={{ backdropFilter: `blur(${blurIntensity})` }}
    />
  )
}

export default BackgroundOverlay 
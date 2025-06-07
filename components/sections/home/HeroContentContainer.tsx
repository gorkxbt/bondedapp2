'use client'

import React from 'react'

interface HeroContentContainerProps {
  children: React.ReactNode
  maxWidth?: string
  glassEffect?: boolean
  zIndex?: number
}

const HeroContentContainer: React.FC<HeroContentContainerProps> = ({ 
  children, 
  maxWidth = 'max-w-4xl',
  glassEffect = true,
  zIndex = 20
}) => {
  const baseClasses = `text-center z-${zIndex} ${maxWidth} mx-auto px-8`
  const glassClasses = glassEffect 
    ? 'py-12 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl'
    : 'py-8'

  return (
    <div className={`${baseClasses} ${glassClasses}`}>
      {children}
    </div>
  )
}

export default HeroContentContainer 
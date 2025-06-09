'use client'

import React from 'react'

interface DecorativeElementProps {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  size?: 'sm' | 'md' | 'lg'
  opacity?: number
  zIndex?: number
}

interface DecorativeBackgroundElementsProps {
  elements?: DecorativeElementProps[]
}

const DecorativeBackgroundElements: React.FC<DecorativeBackgroundElementsProps> = ({ 
  elements = [
    { position: 'top-left', size: 'sm', opacity: 10, zIndex: 10 },
    { position: 'bottom-right', size: 'md', opacity: 10, zIndex: 10 }
  ]
}) => {
  const getPositionClasses = (position: DecorativeElementProps['position']) => {
    switch (position) {
      case 'top-left': return 'top-1/4 left-10'
      case 'top-right': return 'top-1/4 right-10'
      case 'bottom-left': return 'bottom-1/4 left-10'
      case 'bottom-right': return 'bottom-1/4 right-10'
      case 'center': return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
      default: return 'top-1/4 left-10'
    }
  }

  const getSizeClasses = (size: DecorativeElementProps['size']) => {
    switch (size) {
      case 'sm': return 'w-32 h-32'
      case 'md': return 'w-40 h-40'
      case 'lg': return 'w-48 h-48'
      default: return 'w-32 h-32'
    }
  }

  return (
    <>
      {elements.map((element, index) => (
        <div
          key={index}
          className={`
            absolute ${getPositionClasses(element.position)} 
            ${getSizeClasses(element.size)} 
            bg-gradient-to-r from-teddy-brown/${element.opacity} to-teddy-amber/${element.opacity} 
            rounded-full blur-3xl z-${element.zIndex}
          `}
        />
      ))}
    </>
  )
}

export default DecorativeBackgroundElements 
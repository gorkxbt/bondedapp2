'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroTitleProps {
  title: string
  size?: 'sm' | 'md' | 'lg'
  delay?: number
}

const HeroTitle: React.FC<HeroTitleProps> = ({ 
  title, 
  size = 'lg',
  delay = 0.2 
}) => {
  const sizeClasses = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-5xl md:text-7xl'
  }

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`${sizeClasses[size]} font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary-600 to-yellow-500 bg-clip-text text-transparent leading-tight`}
      dangerouslySetInnerHTML={{ __html: title }}
    />
  )
}

export default HeroTitle 
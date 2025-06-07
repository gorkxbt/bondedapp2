'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroSubtitleProps {
  subtitle: string
  size?: 'sm' | 'md' | 'lg'
  delay?: number
  maxWidth?: string
}

const HeroSubtitle: React.FC<HeroSubtitleProps> = ({ 
  subtitle, 
  size = 'md',
  delay = 0.4,
  maxWidth = 'max-w-3xl'
}) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  }

  return (
    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`${sizeClasses[size]} text-gray-600 mb-12 ${maxWidth} mx-auto leading-relaxed`}
    >
      {subtitle}
    </motion.p>
  )
}

export default HeroSubtitle 
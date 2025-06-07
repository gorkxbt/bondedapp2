'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroBrandLogoProps {
  letter?: string
  size?: 'sm' | 'md' | 'lg'
  delay?: number
}

const HeroBrandLogo: React.FC<HeroBrandLogoProps> = ({ 
  letter = 'B', 
  size = 'md',
  delay = 0 
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-24 h-24 text-4xl',
    lg: 'w-32 h-32 text-5xl'
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="mb-8"
    >
      <div className={`${sizeClasses[size]} bg-gradient-to-r from-primary-500 to-yellow-500 rounded-3xl flex items-center justify-center font-bold text-white mx-auto shadow-xl`}>
        {letter}
      </div>
    </motion.div>
  )
}

export default HeroBrandLogo 
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroCTAButtonProps {
  text: string
  onClick: () => void
  size?: 'sm' | 'md' | 'lg'
  delay?: number
  variant?: 'primary' | 'secondary'
}

const HeroCTAButton: React.FC<HeroCTAButtonProps> = ({ 
  text, 
  onClick, 
  size = 'md',
  delay = 0.6,
  variant = 'primary'
}) => {
  const sizeClasses = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  }

  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-500 to-yellow-500 text-white',
    secondary: 'bg-white text-primary-600 border-2 border-primary-500'
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
    >
      <button 
        onClick={onClick}
        className={`${sizeClasses[size]} ${variantClasses[variant]} font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300`}
      >
        {text}
      </button>
    </motion.div>
  )
}

export default HeroCTAButton 
'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface PageHeaderProps {
  title: string
  subtitle: string
  titleSize?: 'sm' | 'md' | 'lg'
  delay?: number
  centered?: boolean
  maxWidth?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  titleSize = 'lg',
  delay = 0,
  centered = true,
  maxWidth = 'max-w-3xl'
}) => {
  const titleSizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl',
    lg: 'text-4xl md:text-6xl'
  }

  const alignmentClass = centered ? 'text-center' : 'text-left'

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`${alignmentClass} mb-12 z-10`}
    >
      <h1 className={`${titleSizes[titleSize]} font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary-600 to-yellow-500 bg-clip-text text-transparent`}>
        {title}
      </h1>
      <p className={`text-xl text-gray-600 ${maxWidth} mx-auto px-8`}>
        {subtitle}
      </p>
    </motion.div>
  )
}

export default PageHeader 
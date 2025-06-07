'use client'

import React from 'react'
import { motion } from 'framer-motion'
import PhoneMockup from '@/components/ui/PhoneMockup'

interface AnimatedPhoneMockupProps {
  delay?: number
  scale?: number
  zIndex?: number
  marginBottom?: string
}

const AnimatedPhoneMockup: React.FC<AnimatedPhoneMockupProps> = ({ 
  delay = 0.3, 
  scale = 0.8,
  zIndex = 10,
  marginBottom = 'mb-16'
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay, ease: "easeOut" }}
      className={`z-${zIndex} ${marginBottom}`}
    >
      <PhoneMockup />
    </motion.div>
  )
}

export default AnimatedPhoneMockup 
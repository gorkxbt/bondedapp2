'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroDescriptionProps {
  delay?: number
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ delay = 0.6 }) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="text-xl text-gray-600 leading-relaxed max-w-xl"
    >
      MyBuddy is your AI-powered companion that keeps you ahead of emerging narratives, 
      bonded tokens, and high-volume moments in the Solana ecosystem.
    </motion.p>
  )
}

export default HeroDescription 
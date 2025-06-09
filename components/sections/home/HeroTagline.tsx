'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroTaglineProps {
  delay?: number
}

const HeroTagline: React.FC<HeroTaglineProps> = ({ delay = 0.2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="inline-block px-4 py-2 bg-gradient-to-r from-teddy-brown/10 to-teddy-amber/10 rounded-full border border-teddy-brown/20"
    >
      <span className="text-sm font-medium text-teddy-dark">🧸 Your AI Trading Companion</span>
    </motion.div>
  )
}

export default HeroTagline 
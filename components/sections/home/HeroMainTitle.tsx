'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroMainTitleProps {
  delay?: number
}

const HeroMainTitle: React.FC<HeroMainTitleProps> = ({ delay = 0.4 }) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="text-6xl lg:text-7xl font-black leading-tight"
    >
      <span className="text-gray-900">Navigate the</span>
      <br />
      <span className="bg-gradient-to-r from-teddy-brown to-teddy-amber bg-clip-text text-transparent">
        Solana Trenches
      </span>
    </motion.h1>
  )
}

export default HeroMainTitle 
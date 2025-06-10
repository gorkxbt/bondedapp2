'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface HeroActionButtonsProps {
  delay?: number
}

const HeroActionButtons: React.FC<HeroActionButtonsProps> = ({ delay = 0.8 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto"
    >
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 bg-gradient-to-r from-teddy-brown to-teddy-amber text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 pointer-events-auto"
      >
        Join Beta Waitlist
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-4 border-2 border-teddy-brown text-teddy-dark font-bold rounded-2xl hover:bg-teddy-brown hover:text-white transition-all duration-300 pointer-events-auto"
      >
        Watch Demo
      </motion.button>
    </motion.div>
  )
}

export default HeroActionButtons 
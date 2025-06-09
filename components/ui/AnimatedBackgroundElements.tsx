'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AnimatedBackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
      />
    </div>
  )
}

export default AnimatedBackgroundElements 
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Logo: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
    >
      <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-coral-500 rounded-xl flex items-center justify-center font-bold text-xl text-white">
        B
      </div>
      <span className="text-xl font-bold text-gray-900">Bonded</span>
    </motion.div>
  )
}

export default Logo 
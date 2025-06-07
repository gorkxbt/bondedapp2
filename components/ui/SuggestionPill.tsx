'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface SuggestionPillProps {
  text: string
}

const SuggestionPill: React.FC<SuggestionPillProps> = ({ text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-coral-100 text-coral-600 px-3 py-2 rounded-2xl text-xs border border-coral-200 cursor-pointer hover:bg-coral-200 transition-colors"
    >
      {text}
    </motion.div>
  )
}

export default SuggestionPill 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Brain } from 'lucide-react'

interface AIBrainVisualProps {
  delay?: number
}

const AIBrainVisual: React.FC<AIBrainVisualProps> = ({ delay = 0.3 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      <div className="relative z-10">
        {/* Main AI Brain Visual */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-80 h-80 mx-auto relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-full opacity-20 blur-xl"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-teddy-cream to-teddy-light rounded-full flex items-center justify-center shadow-2xl border-4 border-teddy-brown/10">
            <Brain size={120} className="text-teddy-brown" />
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-teddy-brown/5 to-teddy-amber/5 rounded-full blur-3xl scale-150"></div>
    </motion.div>
  )
}

export default AIBrainVisual 
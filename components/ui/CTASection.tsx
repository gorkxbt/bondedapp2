'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackgroundElements from './AnimatedBackgroundElements'

interface CTASectionProps {
  badgeText: string
  title: string
  subtitle: string
  buttonText: string
  onButtonClick?: () => void
}

const CTASection: React.FC<CTASectionProps> = ({
  badgeText,
  title,
  subtitle,
  buttonText,
  onButtonClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber py-20 px-8 relative overflow-hidden"
    >
      <AnimatedBackgroundElements />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
          <span className="text-sm font-medium text-white">{badgeText}</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-white/90 mb-8">{subtitle}</p>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="px-12 py-4 bg-white text-teddy-brown rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  )
}

export default CTASection 
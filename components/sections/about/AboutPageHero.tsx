'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackgroundElements from '@/components/ui/AnimatedBackgroundElements'

const AboutPageHero: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber overflow-hidden"
    >
      <AnimatedBackgroundElements />

      <div className="relative max-w-6xl mx-auto text-center text-white">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30 mb-8"
        >
          <span className="text-sm font-medium">🧸 The Future of Trading Intelligence</span>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-8 leading-tight"
        >
          Learn More About
          <br />
          <span className="text-white/90">MyBuddy</span>
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto"
        >
          Discover the technology and vision behind your AI companion for Solana trenches
        </motion.p>
      </div>
    </motion.div>
  )
}

export default AboutPageHero 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import FloatingElements from '@/components/ui/FloatingElements'

const HeroSection: React.FC = () => {
  return (
    <section className="relative z-10 text-center py-24 px-8 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-accent-400 bg-clip-text text-transparent"
      >
        Build Meaningful Connections
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Earn crypto rewards for staying connected with friends, family, and colleagues. 
        Powered by AI to strengthen your social bonds.
      </motion.p>
      
      <FloatingElements />
    </section>
  )
}

export default HeroSection 
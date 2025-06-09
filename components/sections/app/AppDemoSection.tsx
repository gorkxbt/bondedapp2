'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AppDemoPhone from '@/components/ui/AppDemoPhone'

const AppDemoSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-black text-gray-900 mb-6">Try the App</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Interact with our live demo to see how MyBuddy keeps you ahead of the trends
        </p>
      </motion.div>

      <div className="flex justify-center">
        <AppDemoPhone />
      </div>
    </div>
  )
}

export default AppDemoSection 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ChatInterface from '@/components/ui/ChatInterface'

const PhoneMockup: React.FC = () => {
  return (
    <motion.div
      className="relative w-96 h-[800px] lg:w-[420px] lg:h-[900px] bg-black rounded-[40px] p-6 shadow-2xl shadow-black/50"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full h-full bg-gradient-to-b from-gray-100 to-white rounded-[25px] overflow-hidden border border-gray-200">
        <ChatInterface />
      </div>
    </motion.div>
  )
}

export default PhoneMockup 
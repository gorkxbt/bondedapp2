'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import WaitlistModal from '@/components/ui/WaitlistModal'

const DownloadButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <motion.button
        whileHover={{ 
          scale: 1.05, 
          y: -2,
          boxShadow: '0 6px 20px rgba(249, 115, 22, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-primary-500 to-coral-500 rounded-full text-white font-semibold shadow-lg shadow-primary-500/30 transition-all duration-300"
      >
        Download App
      </motion.button>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default DownloadButton 
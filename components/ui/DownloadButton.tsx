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
          scale: 1.08, 
          y: -3,
          boxShadow: '0 8px 30px rgba(139, 69, 19, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        className="px-8 py-3 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-full text-white font-bold shadow-lg shadow-teddy-brown/20 transition-all duration-300 relative overflow-hidden"
      >
        <span className="relative z-10">Beta</span>
        <div className="absolute inset-0 bg-gradient-to-r from-teddy-amber to-teddy-brown opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </motion.button>
      
      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  )
}

export default DownloadButton 
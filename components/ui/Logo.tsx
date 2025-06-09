'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2"
    >
      <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
        <Image 
          src="/logo.jpg" 
          alt="MyBuddy Logo" 
          width={40} 
          height={40}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <span className="text-xl font-bold text-gray-900">MyBuddy</span>
    </motion.div>
  )
}

export default Logo 
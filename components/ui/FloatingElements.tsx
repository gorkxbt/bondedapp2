'use client'

import React from 'react'
import { motion } from 'framer-motion'

const FloatingElements: React.FC = () => {
  const orbs = [
    { size: 60, left: '20%', delay: 0 },
    { size: 40, left: '75%', delay: 1 },
    { size: 80, left: '60%', delay: 2 },
  ]

  return (
    <div className="absolute w-full h-48 mt-8">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-solana-purple/30 to-solana-cyan/30 backdrop-blur-sm"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements 
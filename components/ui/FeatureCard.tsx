'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  index: number
  delay?: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  index, 
  delay = 1.2 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay + index * 0.1, duration: 0.6 }}
      className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-teddy-brown/20 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard 
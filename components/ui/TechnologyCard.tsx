'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface TechnologyCardProps {
  icon: LucideIcon
  name: string
  description: string
  index: number
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({ 
  icon: Icon, 
  name, 
  description, 
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-50 rounded-2xl p-8"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-xl flex items-center justify-center text-white flex-shrink-0">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TechnologyCard 
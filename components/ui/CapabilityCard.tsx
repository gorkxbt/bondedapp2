'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CapabilityCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  gradient: string
  cardTitle: string
  cardDescription: string
  index: number
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  title,
  description,
  features,
  icon: Icon,
  gradient,
  cardTitle,
  cardDescription,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}
    >
      <div className="flex-1">
        <div className={`w-full h-80 bg-gradient-to-br ${gradient} rounded-3xl p-8 text-white relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">{title}</h3>
            <p className="text-xl mb-6 opacity-90">{description}</p>
            <div className="space-y-2">
              {features.map((feature, featureIndex) => (
                <motion.div
                  key={featureIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + featureIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white/90">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="bg-white rounded-3xl p-8 shadow-lg">
          <div className="text-center">
            <div className={`w-20 h-20 bg-gradient-to-r ${gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
              <Icon size={32} />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-4">{cardTitle}</h4>
            <p className="text-gray-600">{cardDescription}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default CapabilityCard 
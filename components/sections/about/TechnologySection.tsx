'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Brain, Shield, Smartphone } from 'lucide-react'
import TechnologyCard from '@/components/ui/TechnologyCard'

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      name: "Real-time Data Processing",
      description: "Lightning-fast analysis of blockchain data and social signals",
      icon: Zap
    },
    {
      name: "Machine Learning Models",
      description: "Advanced AI trained on market patterns and narrative detection",
      icon: Brain
    },
    {
      name: "Secure Architecture",
      description: "End-to-end encryption with privacy-first design principles",
      icon: Shield
    },
    {
      name: "Mobile Optimization",
      description: "Native mobile experience with instant push notifications",
      icon: Smartphone
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-16"
    >
      <div className="text-center">
        <h2 className="text-5xl font-black text-gray-900 mb-6">Technology Stack</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Built on modern infrastructure designed for speed, security, and scalability
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => (
          <TechnologyCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            description={tech.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default TechnologySection 
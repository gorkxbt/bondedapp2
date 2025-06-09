'use client'

import React from 'react'
import { motion } from 'framer-motion'
import MissionCard from '@/components/ui/MissionCard'

const MissionSection: React.FC = () => {
  const missionItems = [
    {
      emoji: "🧸",
      title: "Democratize Intelligence",
      description: "Making professional-grade market intelligence accessible to every trader",
      gradientFrom: "from-teddy-brown",
      gradientTo: "to-teddy-amber"
    },
    {
      emoji: "🎯",
      title: "AI-First Approach",
      description: "Leveraging cutting-edge AI to process and understand market patterns",
      gradientFrom: "from-teddy-cocoa",
      gradientTo: "to-teddy-light"
    },
    {
      emoji: "🤝",
      title: "Community Driven",
      description: "Building features based on real trader needs and community feedback",
      gradientFrom: "from-teddy-amber",
      gradientTo: "to-teddy-cream"
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
        <h2 className="text-5xl font-black text-gray-900 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          We believe every trader deserves access to the same real-time intelligence that professional trading firms use. MyBuddy democratizes market intelligence through AI.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {missionItems.map((item, index) => (
          <MissionCard
            key={index}
            emoji={item.emoji}
            title={item.title}
            description={item.description}
            gradientFrom={item.gradientFrom}
            gradientTo={item.gradientTo}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default MissionSection 
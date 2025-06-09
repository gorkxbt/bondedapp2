'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Brain, Coins } from 'lucide-react'
import AppFeatureCard from './AppFeatureCard'

interface AppFeaturesGridProps {
  delay?: number
}

const AppFeaturesGrid: React.FC<AppFeaturesGridProps> = ({ delay = 0.6 }) => {
  const features = [
    {
      icon: Bell,
      title: 'Trenches Notifications',
      description: 'Get instant alerts about emerging narratives, bonded tokens, and high-volume moments in Solana'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Buddy analyzes patterns and provides context on why trends are gaining traction'
    },
    {
      icon: Coins,
      title: 'Earn $BUDDY Tokens',
      description: 'Get rewarded for engaging with the app and contributing to the community'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16 px-8 z-10"
    >
      {features.map((feature, index) => (
        <AppFeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </motion.div>
  )
}

export default AppFeaturesGrid 
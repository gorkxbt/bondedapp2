'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Flame, Coins } from 'lucide-react'
import AppFeatureCard from './AppFeatureCard'

interface AppFeaturesGridProps {
  delay?: number
}

const AppFeaturesGrid: React.FC<AppFeaturesGridProps> = ({ delay = 0.6 }) => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Smart Conversations',
      description: 'Get personalized conversation starters and message suggestions'
    },
    {
      icon: Flame,
      title: 'Streak Tracking',
      description: 'Monitor your social streaks and never lose touch again'
    },
    {
      icon: Coins,
      title: 'Earn Rewards',
      description: 'Get $BONDED tokens for maintaining social connections'
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
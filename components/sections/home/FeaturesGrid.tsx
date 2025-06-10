'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Brain, Coins } from 'lucide-react'
import FeatureCard from '@/components/ui/FeatureCard'

interface FeaturesGridProps {
  delay?: number
}

const FeaturesGrid: React.FC<FeaturesGridProps> = ({ delay = 1 }) => {
  const features = [
    {
      icon: Bell,
      title: "Trenches Notifications",
      description: "Get alerted when high-volume moments emerge before the masses catch on"
    },
    {
      icon: Brain,
      title: "AI Insights",
      description: "Smart analysis of on-chain patterns and social sentiment shifts"
    },
    {
      icon: Coins,
      title: "$BUDDY Rewards",
      description: "Earn tokens for using the platform and contributing valuable insights"
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="grid md:grid-cols-3 gap-6 pt-20"
    >
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          index={index}
          delay={1.2}
        />
      ))}
    </motion.div>
  )
}

export default FeaturesGrid 
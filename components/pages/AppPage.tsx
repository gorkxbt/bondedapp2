'use client'

import React from 'react'
import { Bell, Brain, Coins, Target, TrendingUp, Zap } from 'lucide-react'
import AppPageHero from '@/components/sections/app/AppPageHero'
import AppDemoSection from '@/components/sections/app/AppDemoSection'
import CapabilityCard from '@/components/ui/CapabilityCard'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'
import { motion } from 'framer-motion'

const AppPage: React.FC = () => {
  const capabilities = [
    {
      title: "Real-time Alerts",
      description: "Get instant notifications when market conditions change",
      features: ["Price movements", "Volume spikes", "Social sentiment shifts"],
      gradient: "from-teddy-brown to-teddy-dark",
      icon: Bell,
      cardTitle: "Never Miss a Move",
      cardDescription: "Stay informed with instant notifications about market movements that matter to your portfolio."
    },
    {
      title: "AI Insights",
      description: "Smart analysis of market patterns and emerging trends",
      features: ["Predictive analytics", "Pattern recognition", "Risk assessment"],
      gradient: "from-teddy-amber to-teddy-cocoa",
      icon: Brain,
      cardTitle: "Smart Analysis",
      cardDescription: "Let AI do the heavy lifting with advanced pattern recognition and predictive insights."
    },
    {
      title: "Custom Monitoring",
      description: "Track specific tokens and narratives that matter to you",
      features: ["Personalized watchlists", "Custom alert rules", "Portfolio tracking"],
      gradient: "from-teddy-cocoa to-teddy-brown",
      icon: Target,
      cardTitle: "Personalized Experience",
      cardDescription: "Customize your experience with personalized alerts and tracking for your favorite tokens."
    },
    {
      title: "$BUDDY Rewards",
      description: "Earn tokens for using the platform and sharing insights",
      features: ["Daily rewards", "Referral bonuses", "Community governance"],
      gradient: "from-teddy-light to-teddy-amber",
      icon: Coins,
      cardTitle: "Earn While You Learn",
      cardDescription: "Get rewarded for active participation with $BUDDY tokens and unlock premium features."
    },
    {
      title: "Community Intelligence",
      description: "Learn from collective wisdom of successful traders",
      features: ["Trending strategies", "Top performer insights", "Social signals"],
      gradient: "from-teddy-dark to-teddy-cocoa",
      icon: TrendingUp,
      cardTitle: "Community Wisdom",
      cardDescription: "Tap into the collective intelligence of successful traders and emerging market narratives."
    },
    {
      title: "Advanced Analytics",
      description: "Deep dive into market data with professional tools",
      features: ["Technical indicators", "On-chain metrics", "Correlation analysis"],
      gradient: "from-teddy-amber to-teddy-light",
      icon: Zap,
      cardTitle: "Professional Tools",
      cardDescription: "Access institutional-grade analytics and tools previously only available to professional traders."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <AppPageHero />
      <AppDemoSection />

      {/* Core Capabilities */}
      <div className="bg-gray-50 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900 mb-6">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to stay ahead in the Solana ecosystem
            </p>
          </motion.div>

          <div className="space-y-8">
            {capabilities.map((capability, index) => (
              <CapabilityCard
                key={index}
                title={capability.title}
                description={capability.description}
                features={capability.features}
                icon={capability.icon}
                gradient={capability.gradient}
                cardTitle={capability.cardTitle}
                cardDescription={capability.cardDescription}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      <DecorativeBackgroundElements />
    </div>
  )
}

export default AppPage 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Brain, Coins, TrendingUp, Smartphone, Shield } from 'lucide-react'

import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'

const HomePage: React.FC = () => {
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      <DecorativeBackgroundElements />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-teddy-brown/10 to-teddy-amber/10 rounded-full border border-teddy-brown/20"
              >
                <span className="text-sm font-medium text-teddy-dark">🧸 Your AI Trading Companion</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl lg:text-7xl font-black leading-tight"
              >
                <span className="text-gray-900">Navigate the</span>
                <br />
                <span className="bg-gradient-to-r from-teddy-brown to-teddy-amber bg-clip-text text-transparent">
                  Solana Trenches
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl text-gray-600 leading-relaxed max-w-xl"
              >
                MyBuddy is your AI-powered companion that keeps you ahead of emerging narratives, 
                bonded tokens, and high-volume moments in the Solana ecosystem.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-teddy-brown to-teddy-amber text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Join Beta Waitlist
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-teddy-brown text-teddy-dark font-bold rounded-2xl hover:bg-teddy-brown hover:text-white transition-all duration-300"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid md:grid-cols-3 gap-6 pt-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-teddy-brown/20 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - AI Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main AI Brain Visual */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-80 h-80 mx-auto relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-full opacity-20 blur-xl"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-teddy-cream to-teddy-light rounded-full flex items-center justify-center shadow-2xl border-4 border-teddy-brown/10">
                  <Brain size={120} className="text-teddy-brown" />
                </div>
              </motion.div>

              {/* Floating Notification Cards */}
              <div className="absolute top-10 left-10 w-48 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-sm font-medium text-teddy-brown">🔔 High Volume Alert</div>
                <div className="text-xs text-gray-600 mt-1">$BONK +145% in 10min</div>
              </div>
              
              <div className="absolute bottom-20 right-0 w-52 p-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="text-sm font-medium text-teddy-brown">💡 AI Insight</div>
                <div className="text-xs text-gray-600 mt-1">New narrative emerging: Gaming tokens trending</div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teddy-brown/5 to-teddy-amber/5 rounded-full blur-3xl scale-150"></div>
          </motion.div>
        </div>


      </div>
    </div>
  )
}

export default HomePage 
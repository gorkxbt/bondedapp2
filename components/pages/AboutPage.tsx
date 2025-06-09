'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, Brain, Coins, Users, Shield, Wallet, 
  Flame, TrendingUp, Heart, Building,
  CheckCircle, Zap, Clock, Target, Rocket
} from 'lucide-react'

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: Target },
    { id: 'technology', label: 'Technology', icon: Brain }
  ]

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
    <div className="min-h-screen bg-white">
      {/* Hero Section with Animated Background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full"
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center text-white">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-6 py-2 bg-white/20 rounded-full border border-white/30 mb-8"
          >
            <span className="text-sm font-medium">🧸 The Future of Trading Intelligence</span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            Learn More About
            <br />
            <span className="text-white/90">MyBuddy</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            Discover the technology and vision behind your AI companion for Solana trenches
          </motion.p>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto px-8 -mt-10 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-2 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-teddy-brown to-teddy-amber text-white shadow-lg'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <tab.icon size={20} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        {/* Mission Tab */}
        {activeTab === 'mission' && (
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
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🧸</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Democratize Intelligence</h3>
                <p className="text-gray-600">Making professional-grade market intelligence accessible to every trader</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teddy-cocoa to-teddy-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI-First Approach</h3>
                <p className="text-gray-600">Leveraging cutting-edge AI to process and understand market patterns</p>
              </div>

              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-teddy-amber to-teddy-cream rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community Driven</h3>
                <p className="text-gray-600">Building features based on real trader needs and community feedback</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Technology Tab */}
        {activeTab === 'technology' && (
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <tech.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{tech.name}</h3>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber py-20 px-8 relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-white/20 rounded-full border border-white/30 mb-6">
            <span className="text-sm font-medium text-white">🧸 Ready to Join MyBuddy?</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Future?</h2>
          <p className="text-xl text-white/90 mb-8">
            Be part of the next generation of intelligent trading with your AI companion
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-teddy-brown rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Join Beta Now 🚀
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage 
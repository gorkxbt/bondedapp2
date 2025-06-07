'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, Brain, Coins, Users, Shield, Wallet, 
  Flame, TrendingUp, Heart, Building,
  CheckCircle, Zap
} from 'lucide-react'

const AboutPage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Smartphone,
      title: "Effortless Social Tracking",
      description: "Automatically logs calls, messages, meetups, and Twitter interactions. Manual logging available for complete coverage."
    },
    {
      icon: Flame,
      title: "Streaks & $BONDED Rewards",
      description: "Maintain daily or weekly streaks with contacts to earn crypto rewards. Longer streaks = more tokens!"
    },
    {
      icon: TrendingUp,
      title: "Connection Insights",
      description: "See your most frequent contacts, longest streaks, and engagement patterns. Get reminders for inactive connections."
    },
    {
      icon: Brain,
      title: "AI Bonding Assistant",
      description: "Personalized suggestions for conversation starters, event ideas, and communication tips to strengthen relationships."
    },
    {
      icon: Shield,
      title: "Privacy & Security First",
      description: "Encrypted data storage with full user control. Only date, time, and contact info stored - never message content."
    },
    {
      icon: Wallet,
      title: "Solana Wallet Integration",
      description: "Seamlessly connect your wallet to receive $BONDED rewards. Easy tracking and withdrawal anytime."
    }
  ]

  const useCases = [
    {
      icon: Heart,
      title: "Staying Connected with Loved Ones",
      description: "Strengthen family and friend relationships while earning rewards for meaningful interactions."
    },
    {
      icon: Building,
      title: "Building Remote Teams",
      description: "Foster team bonding in distributed workplaces with gamified social engagement."
    },
    {
      icon: Users,
      title: "Thriving Communities",
      description: "Enhance connections in clubs, support groups, and networks with AI-powered suggestions."
    }
  ]

  const userFlow = [
    { 
      step: "Sign Up", 
      icon: CheckCircle, 
      description: "Connect contacts, messaging apps, and optional Twitter account"
    },
    { 
      step: "Auto-Track", 
      icon: Zap, 
      description: "Bonded automatically logs your social interactions"
    },
    { 
      step: "Earn Rewards", 
      icon: Coins, 
      description: "Get $BONDED tokens for maintaining streaks"
    },
    { 
      step: "AI Assistance", 
      icon: Brain, 
      description: "Receive personalized relationship suggestions"
    },
    { 
      step: "Track Progress", 
      icon: TrendingUp, 
      description: "Monitor streaks, rewards, and insights"
    },
    { 
      step: "Withdraw", 
      icon: Wallet, 
      description: "Easy access to your $BONDED earnings"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-32 pb-20 px-8 bg-white"
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            <span className="text-black">About </span>
            <span className="bg-gradient-to-r from-primary-500 to-yellow-500 bg-clip-text text-transparent">
              Bonded
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            The revolutionary social app that{' '}
            <span className="font-bold text-primary-600">
              transforms connections into rewards
            </span>
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-primary-500 to-yellow-500 text-white font-bold rounded-2xl shadow-lg text-lg"
            >
              Start Your Journey
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-primary-500 transition-colors text-lg bg-white"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Key Features */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-black mb-6">
              <span className="text-primary-500">Key</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the tools that make social connection rewarding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <feature.icon size={32} />
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-black mb-6">
              <span className="text-primary-500">How It</span> Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build meaningful connections in 6 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userFlow.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto mt-4">
                  <step.icon size={28} />
                </div>

                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-4 text-center">
                    {step.step}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-black mb-6">
              <span className="text-primary-500">Perfect</span> For Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform relationships across all walks of life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                  <useCase.icon size={32} />
                </div>
                
                <div className="flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-black mb-4 text-center">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center flex-grow">
                    {useCase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust & Transparency */}
      <div className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-black mb-6">
              <span className="text-primary-500">Trust</span> & Transparency
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Privacy Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
                <Shield size={40} />
              </div>

              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                Privacy-First Design
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span>End-to-end encryption for all data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span>Never store message content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <span>Local processing when possible</span>
                </div>
              </div>
            </motion.div>

            {/* Monetization Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 h-full"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-2xl flex items-center justify-center text-white mb-8 mx-auto">
                <Coins size={40} />
              </div>

              <h3 className="text-2xl font-bold text-black mb-6 text-center">
                Fair Freemium Model
              </h3>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <span>Core features always free</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <TrendingUp size={16} className="text-white" />
                  </div>
                  <span>Premium for advanced analytics</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Coins size={16} className="text-white" />
                  </div>
                  <span>Earn $BONDED tokens for free</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-yellow-500 rounded-2xl text-white font-bold text-xl shadow-lg"
            >
              Ready to Transform Your Connections?
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage 
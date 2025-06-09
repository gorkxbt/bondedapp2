'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bell, Brain, Coins, Send, Plus, Search, Home, User, Settings,
  TrendingUp, Clock, Zap, Shield, Target, Smartphone
} from 'lucide-react'
import DecorativeBackgroundElements from '@/components/sections/home/DecorativeBackgroundElements'

const AppPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "🔔 New high-volume activity detected on $BONK", time: "2:34 PM", type: "alert" },
    { id: 2, text: "💡 AI suggests: Consider watching $WIF for potential breakout", time: "2:31 PM", type: "insight" },
    { id: 3, text: "🎯 Your alert for $SOL > $150 has been triggered", time: "2:28 PM", type: "trigger" }
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { 
        id: messages.length + 1, 
        text: newMessage, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
        type: "user" 
      }])
      setNewMessage("")
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          id: prev.length + 1,
          text: "🤖 Analyzing your request... Found 3 matching tokens with similar patterns",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: "response"
        }])
      }, 1000)
    }
  }

  const capabilities = [
    {
      title: "Real-time Alerts",
      description: "Get instant notifications when market conditions change",
      features: ["Price movements", "Volume spikes", "Social sentiment shifts"],
              gradient: "from-teddy-brown to-teddy-dark"
    },
    {
      title: "AI Insights",
      description: "Smart analysis of market patterns and emerging trends",
      features: ["Predictive analytics", "Pattern recognition", "Risk assessment"],
              gradient: "from-teddy-amber to-teddy-cocoa"
    },
    {
      title: "Custom Monitoring",
      description: "Track specific tokens and narratives that matter to you",
      features: ["Personalized watchlists", "Custom alert rules", "Portfolio tracking"],
              gradient: "from-teddy-cocoa to-teddy-brown"
    },
    {
      title: "$BUDDY Rewards",
      description: "Earn tokens for using the platform and sharing insights",
      features: ["Daily rewards", "Referral bonuses", "Community governance"],
              gradient: "from-teddy-light to-teddy-amber"
    },
    {
      title: "Community Intelligence",
      description: "Learn from collective wisdom of successful traders",
      features: ["Trending strategies", "Top performer insights", "Social signals"],
              gradient: "from-teddy-dark to-teddy-cocoa"
    },
    {
      title: "Advanced Analytics",
      description: "Deep dive into market data with professional tools",
      features: ["Technical indicators", "On-chain metrics", "Correlation analysis"],
              gradient: "from-teddy-amber to-teddy-light"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 px-8 bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
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
            <span className="text-sm font-medium">📱 Experience the App</span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            MyBuddy
            <br />
            <span className="text-white/90">Experience</span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-white/80 leading-relaxed mb-12 max-w-4xl mx-auto"
          >
            See how MyBuddy transforms your Solana trading experience
          </motion.p>
        </div>
      </motion.div>

      {/* iPhone Demo Section */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black text-gray-900 mb-6">Try the App</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interact with our live demo to see how MyBuddy keeps you ahead of the trends
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* iPhone Frame */}
            <div className="relative w-[416px] h-[832px] bg-black rounded-[78px] p-3 shadow-2xl">
                              <div className="w-full h-full bg-white rounded-[68px] overflow-hidden relative">
                  {/* iPhone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-8 bg-black rounded-b-3xl z-10"></div>
                
                                  {/* App Header */}
                  <div className="bg-gradient-to-r from-teddy-brown to-teddy-amber p-5 pt-10 text-white">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="text-xl font-bold">MyBuddy</h3>
                      <div className="flex gap-3">
                        <Bell size={24} />
                        <Settings size={24} />
                      </div>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <div className="text-base opacity-90">Active Alerts</div>
                      <div className="text-3xl font-bold">24</div>
                    </div>
                  </div>

                                  {/* Message Area */}
                  <div className="flex-1 p-5 bg-gray-50 h-[520px] overflow-y-auto">
                                      <div className="space-y-5">
                      {messages.map((message) => (
                        <motion.div
                          key={message.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`p-4 rounded-xl max-w-[80%] ${
                            message.type === 'user' 
                              ? 'bg-teddy-brown text-white ml-auto' 
                              : message.type === 'alert'
                              ? 'bg-red-100 text-red-800'
                              : message.type === 'insight'
                              ? 'bg-blue-100 text-blue-800'
                              : message.type === 'trigger'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          <div className="text-base">{message.text}</div>
                          <div className="text-sm opacity-60 mt-1">{message.time}</div>
                        </motion.div>
                    ))}
                  </div>
                </div>

                                  {/* Input Area */}
                  <div className="border-t border-gray-200 p-5 bg-white">
                    <div className="flex gap-4 items-center">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask about trends, set alerts..."
                        className="flex-1 p-4 border border-gray-300 rounded-xl focus:border-teddy-brown focus:outline-none text-base"
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSendMessage}
                        className="p-4 bg-gradient-to-r from-teddy-brown to-teddy-amber rounded-xl text-white"
                      >
                        <Send size={24} />
                      </motion.button>
                    </div>
                  </div>

                                  {/* Bottom Navigation */}
                  <div className="flex justify-around items-center py-4 border-t border-gray-200 bg-white">
                    <Home size={28} className="text-teddy-brown" />
                    <Search size={28} className="text-gray-400" />
                    <Bell size={28} className="text-gray-400" />
                    <User size={28} className="text-gray-400" />
                  </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Capabilities - New Design */}
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
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}
              >
                <div className="flex-1">
                  <div className={`w-full h-80 bg-gradient-to-br ${capability.gradient} rounded-3xl p-8 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-bold mb-4">{capability.title}</h3>
                      <p className="text-xl mb-6 opacity-90">{capability.description}</p>
                      <div className="space-y-2">
                        {capability.features.map((feature, featureIndex) => (
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
                      <div className={`w-20 h-20 bg-gradient-to-r ${capability.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6`}>
                        {index === 0 && <Bell size={32} />}
                        {index === 1 && <Brain size={32} />}
                        {index === 2 && <Target size={32} />}
                        {index === 3 && <Coins size={32} />}
                        {index === 4 && <TrendingUp size={32} />}
                        {index === 5 && <Zap size={32} />}
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {index === 0 && "Never Miss a Move"}
                        {index === 1 && "Smart Analysis"}
                        {index === 2 && "Personalized Experience"}
                        {index === 3 && "Earn While You Learn"}
                        {index === 4 && "Community Wisdom"}
                        {index === 5 && "Professional Tools"}
                      </h4>
                      <p className="text-gray-600">
                        {index === 0 && "Stay informed with instant notifications about market movements that matter to your portfolio."}
                        {index === 1 && "Let AI do the heavy lifting with advanced pattern recognition and predictive insights."}
                        {index === 2 && "Customize your experience with personalized alerts and tracking for your favorite tokens."}
                        {index === 3 && "Get rewarded for active participation with $BUDDY tokens and unlock premium features."}
                        {index === 4 && "Tap into the collective intelligence of successful traders and emerging market narratives."}
                        {index === 5 && "Access institutional-grade analytics and tools previously only available to professional traders."}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
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
            <span className="text-sm font-medium text-white">🧸 Experience the Future</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience MyBuddy?</h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of traders already using AI to stay ahead in the Solana trenches
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-white text-teddy-brown rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Free Trial 🚀
          </motion.button>
        </div>
      </motion.div>

      <DecorativeBackgroundElements />
    </div>
  )
}

export default AppPage 
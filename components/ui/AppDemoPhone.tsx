'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Bell, Settings, Send, Home, Search, User } from 'lucide-react'

interface Message {
  id: number
  text: string
  time: string
  type: 'alert' | 'insight' | 'trigger' | 'user' | 'response'
}

const AppDemoPhone: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
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

  return (
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
  )
}

export default AppDemoPhone 
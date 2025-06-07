'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import ChatMessage from '@/components/ui/ChatMessage'
import SuggestionPill from '@/components/ui/SuggestionPill'

interface Message {
  type: 'assistant' | 'user'
  text: string
  delay?: number
  id: string
}

const ChatInterface: React.FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'assistant' as const,
      text: "Hi! I've noticed you haven't texted Sarah in 5 days. Your streak is at risk! 🔥",
      delay: 0,
    },
    {
      id: '2',
      type: 'user' as const,
      text: 'What should I say?',
      delay: 0.5,
    },
    {
      id: '3',
      type: 'assistant' as const,
      text: 'How about asking about her new job? She mentioned starting this week!',
      delay: 1,
    },
    {
      id: '4',
      type: 'assistant' as const,
      text: "You'll earn 10 $BONDED tokens for reconnecting! 🪙",
      delay: 1.5,
    },
  ])

  const suggestions = ['Send message', 'Schedule call', 'Plan meetup', 'View rewards']

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: inputValue.trim(),
      }
      
      setMessages(prev => [...prev, newMessage])
      setInputValue('')
      
      // Simulate AI response after a delay
      setTimeout(() => {
        const responses = [
          "Great message! That shows genuine interest in her life. 💪",
          "Perfect! I'll remind you to follow up in 2 days to keep the streak going.",
          "You're building stronger connections! +5 $BONDED tokens earned! 🪙",
          "Nice! This kind of personal touch really strengthens relationships.",
          "Excellent! Your social streak with Sarah is back on track! 🔥",
        ]
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'assistant',
          text: randomResponse,
        }
        
        setMessages(prev => [...prev, aiMessage])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="h-full flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-900 font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-2 border border-gray-900 rounded-sm">
            <div className="w-3 h-1 bg-gray-900 rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>
      
      <div className="flex-1 p-5 flex flex-col">
        <div className="text-center pb-5 border-b border-gray-200">
          <h3 className="text-primary-500 font-semibold text-lg">Bonding Assistant</h3>
        </div>
      
        <div className="flex-1 py-5 space-y-4 overflow-y-auto">
          <AnimatePresence>
            {messages.map((message, index) => (
              <ChatMessage
                key={message.id}
                type={message.type}
                text={message.text}
                delay={message.delay || 0}
              />
            ))}
          </AnimatePresence>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-2 mt-3"
          >
            {suggestions.map((suggestion, index) => (
              <SuggestionPill key={index} text={suggestion} />
            ))}
          </motion.div>
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-100 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              className="w-12 h-12 bg-gradient-to-r from-primary-500 to-coral-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <Send size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatInterface 
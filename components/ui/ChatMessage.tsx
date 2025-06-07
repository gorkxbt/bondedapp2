'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface ChatMessageProps {
  type: 'assistant' | 'user'
  text: string
  delay: number
}

const ChatMessage: React.FC<ChatMessageProps> = ({ type, text, delay = 0 }) => {
  const isAssistant = type === 'assistant'
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay, duration: 0.5 }}
      className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
          isAssistant
            ? 'bg-primary-100 text-primary-800 border border-primary-200'
            : 'bg-gray-100 text-gray-800 border border-gray-200'
        }`}
      >
        {text}
      </div>
    </motion.div>
  )
}

export default ChatMessage 
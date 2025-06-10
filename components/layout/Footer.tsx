'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Smartphone, Bot } from 'lucide-react'
import { useNavigation } from '@/contexts/NavigationContext'
import AnimatedBackgroundElements from '@/components/ui/AnimatedBackgroundElements'

const Footer: React.FC = () => {
  const { currentPage } = useNavigation()
  const isSpecialPage = currentPage === 'app' || currentPage === 'about'

  return (
    <footer className={`relative z-10 py-12 px-8 text-center ${
      isSpecialPage 
        ? 'bg-gradient-to-br from-teddy-brown via-teddy-cocoa to-teddy-amber overflow-hidden' 
        : 'bg-gray-50/80 backdrop-blur-lg border-t border-gray-200'
    }`}>
      {isSpecialPage && <AnimatedBackgroundElements />}
      
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-8"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -3 }}
            className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors duration-300 ${
              isSpecialPage
                ? 'bg-white/20 text-white hover:bg-white hover:text-teddy-brown border border-white/30'
                : 'bg-gray-200 text-gray-700 hover:bg-solana-purple hover:text-white'
            }`}
            title="Twitter"
          >
            <Twitter size={24} />
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -3 }}
            className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors duration-300 ${
              isSpecialPage
                ? 'bg-white/20 text-white hover:bg-white hover:text-teddy-brown border border-white/30'
                : 'bg-gray-200 text-gray-700 hover:bg-solana-purple hover:text-white'
            }`}
            title="iOS App Store"
          >
            <Smartphone size={24} />
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -3 }}
            className={`w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center transition-colors duration-300 ${
              isSpecialPage
                ? 'bg-white/20 text-white hover:bg-white hover:text-teddy-brown border border-white/30'
                : 'bg-gray-200 text-gray-700 hover:bg-green-600 hover:text-white'
            }`}
            title="Android Play Store"
          >
            <Bot size={24} />
          </motion.a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={isSpecialPage ? 'text-white/90 text-sm' : 'text-gray-600 text-sm'}
        >
          © 2025 MyBuddy. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer 
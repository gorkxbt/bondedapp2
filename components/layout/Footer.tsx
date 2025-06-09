'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Smartphone } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-gray-50/80 backdrop-blur-lg border-t border-gray-200 py-12 px-8 text-center">
      <div className="max-w-2xl mx-auto">
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
            className="w-12 h-12 rounded-full bg-gray-200 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-solana-purple hover:text-white transition-colors duration-300"
            title="Twitter"
          >
            <Twitter size={24} />
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.1, y: -3 }}
            className="w-12 h-12 rounded-full bg-gray-200 backdrop-blur-sm flex items-center justify-center text-gray-700 hover:bg-solana-purple hover:text-white transition-colors duration-300"
            title="iOS App Store"
          >
            <Smartphone size={24} />
          </motion.a>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm"
        >
          © 2025 MyBuddy. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer 
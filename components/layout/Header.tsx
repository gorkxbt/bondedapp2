'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useNavigation } from '@/contexts/NavigationContext'
import Logo from '@/components/ui/Logo'
import DownloadButton from '@/components/ui/DownloadButton'

const Header: React.FC = () => {
  const { currentPage, setCurrentPage } = useNavigation()

  const navItems = [
    { id: 'home', label: 'Features' },
    { id: 'app', label: 'Experience' },
    { id: 'about', label: 'Learn More' },
  ] as const

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Left - Logo */}
          <div className="flex justify-start">
            <Logo />
          </div>
          
          {/* Center - Beta Button */}
          <div className="flex justify-center">
            <DownloadButton />
          </div>
          
          {/* Right - Navigation */}
          <nav className="flex justify-end items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-teddy-brown to-teddy-amber text-white shadow-lg'
                    : 'text-gray-700 hover:text-teddy-brown hover:bg-gray-50'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header 
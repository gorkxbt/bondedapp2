'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useNavigation } from '@/contexts/NavigationContext'
import Logo from '@/components/ui/Logo'
import DownloadButton from '@/components/ui/DownloadButton'

const Header: React.FC = () => {
  const { currentPage, setCurrentPage } = useNavigation()

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'app', label: 'App' },
    { id: 'about', label: 'About' },
  ] as const

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 lg:px-16 bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm"
    >
      <Logo />
      
      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage(item.id)}
            className={`font-medium transition-colors duration-200 ${
              currentPage === item.id
                ? 'text-primary-500 border-b-2 border-primary-500 pb-1'
                : 'text-gray-700 hover:text-primary-500'
            }`}
          >
            {item.label}
          </motion.button>
        ))}
        
        <DownloadButton />
      </nav>
    </motion.header>
  )
}

export default Header 
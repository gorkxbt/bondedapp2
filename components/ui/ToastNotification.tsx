'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useToast } from '@/hooks/useToast'

const ToastNotification: React.FC = () => {
  const { message, isVisible } = useToast()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-5 right-5 z-50 bg-gradient-to-r from-primary-500 to-coral-500 text-white px-6 py-4 rounded-xl shadow-lg shadow-primary-500/30"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ToastNotification 
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Sparkles, Users, Zap } from 'lucide-react'
import { useToast } from '@/hooks/useToast'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { showToast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    
    setTimeout(() => {
      showToast('🎉 Welcome to the Bonded family!')
      onClose()
      setIsSubmitted(false)
      setEmail('')
    }, 2000)
  }

  const handleClose = () => {
    if (!isSubmitting) {
      onClose()
      setIsSubmitted(false)
      setEmail('')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 relative overflow-hidden mx-auto my-auto"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-coral-100 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-teal-100 to-gold-100 rounded-full blur-2xl translate-y-12 -translate-x-12"></div>

              {/* Close button */}
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="relative z-10">
                {!isSubmitted ? (
                  <>
                    {/* Header */}
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="w-16 h-16 bg-gradient-to-r from-primary-500 to-coral-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4"
                      >
                        <Sparkles size={32} />
                      </motion.div>
                      
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-bold text-gray-900 mb-2"
                      >
                        Join the Beta Waitlist
                      </motion.h2>
                      
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-gray-600"
                      >
                        Be among the first to experience Bonded and start earning $BONDED tokens!
                      </motion.p>
                    </div>

                    {/* Benefits */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-3 mb-6"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <Users size={16} className="text-orange-600" />
                        </div>
                        <span className="text-sm text-gray-700">Early access to all features</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <Zap size={16} className="text-orange-600" />
                        </div>
                        <span className="text-sm text-gray-700">Bonus $BONDED tokens for beta testers</span>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <Sparkles size={16} className="text-orange-600" />
                        </div>
                        <span className="text-sm text-gray-700">Exclusive beta tester rewards</span>
                      </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          disabled={isSubmitting}
                          className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        disabled={isSubmitting || !email}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-gradient-to-r from-primary-500 to-coral-500 text-white font-semibold rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Joining waitlist...
                          </div>
                        ) : (
                          'Join Beta Waitlist'
                        )}
                      </motion.button>
                    </motion.form>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-xs text-gray-500 text-center mt-4"
                    >
                      We'll notify you when the beta is ready. No spam, promise!
                    </motion.p>
                  </>
                ) : (
                  /* Success state */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-green-600"
                      >
                        ✓
                      </motion.div>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                    <p className="text-gray-600 mb-4">
                      Welcome to the Bonded beta waitlist. We'll send you an invite soon!
                    </p>
                    <div className="text-sm text-gray-500">
                      Check your email: <strong>{email}</strong>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default WaitlistModal 
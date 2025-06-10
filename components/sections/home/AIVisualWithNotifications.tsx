'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

interface AIVisualWithNotificationsProps {
  delay?: number
}

const AIVisualWithNotifications: React.FC<AIVisualWithNotificationsProps> = ({ delay = 0.3 }) => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-auto">
      {/* Spline 3D Object */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay }}
        className="absolute inset-0 w-full h-full flex items-center justify-center overflow-visible pointer-events-auto"
      >
        <div className="relative w-full h-full overflow-visible pointer-events-auto">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: delay + 0.2 }}
            className="w-full h-full relative overflow-visible flex items-center justify-center pointer-events-auto"
          >
            <Spline
              scene="https://prod.spline.design/Wjosl2AckRAPJaGD/scene.splinecode"
              style={{ 
                width: '130vw', 
                height: '130vh',
                minHeight: '1040px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) scale(1.3)',
                pointerEvents: 'auto',
                zIndex: 10
              }}
            />
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-teddy-brown/5 to-teddy-amber/5 rounded-full blur-3xl scale-150 opacity-30 pointer-events-none"></div>
      </motion.div>
    </div>
  )
}

export default AIVisualWithNotifications 
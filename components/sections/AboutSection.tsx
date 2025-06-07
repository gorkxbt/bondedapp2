'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutSection: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-8 max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold mb-8 text-white"
      >
        About Bonded
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg md:text-xl text-white/80 leading-relaxed bg-white/[0.02] p-12 rounded-3xl backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/20"
      >
        Bonded rewards the consistency of social interactions with $BONDED tokens. 
        The app helps you stay connected with your loved ones and features an AI assistant 
        to improve your messages and strengthen your relationships. Track your calls, messages, 
        meetups, and social media interactions while earning real crypto rewards for 
        maintaining those meaningful connections.
      </motion.div>
    </section>
  )
}

export default AboutSection 
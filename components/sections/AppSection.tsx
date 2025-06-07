'use client'

import React from 'react'
import { motion } from 'framer-motion'
import PhoneMockup from '@/components/ui/PhoneMockup'

const AppSection: React.FC = () => {
  return (
    <section className="relative z-10 py-24 px-8 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <PhoneMockup />
      </motion.div>
    </section>
  )
}

export default AppSection 
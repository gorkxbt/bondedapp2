'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroMainTitle from './HeroMainTitle'
import HeroDescription from './HeroDescription'
import HeroActionButtons from './HeroActionButtons'
import FeaturesGrid from './FeaturesGrid'

const HeroContentSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="space-y-8 text-center"
    >
      <div className="space-y-6">
        <HeroMainTitle delay={0.5} />
        <HeroDescription delay={0.7} />
      </div>

      <HeroActionButtons delay={0.9} />
      <FeaturesGrid delay={1.1} />
    </motion.div>
  )
}

export default HeroContentSection 
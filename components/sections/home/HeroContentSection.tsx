'use client'

import React from 'react'
import { motion } from 'framer-motion'
import HeroTagline from './HeroTagline'
import HeroMainTitle from './HeroMainTitle'
import HeroDescription from './HeroDescription'
import HeroActionButtons from './HeroActionButtons'
import FeaturesGrid from './FeaturesGrid'

const HeroContentSection: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      <div className="space-y-6">
        <HeroTagline delay={0.2} />
        <HeroMainTitle delay={0.4} />
        <HeroDescription delay={0.6} />
      </div>

      <HeroActionButtons delay={0.8} />
      <FeaturesGrid delay={1} />
    </motion.div>
  )
}

export default HeroContentSection 
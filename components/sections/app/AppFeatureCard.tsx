'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface AppFeatureCardProps {
  icon: LucideIcon
  iconSize?: number
  title: string
  description: string
  variant?: 'primary' | 'secondary'
}

const AppFeatureCard: React.FC<AppFeatureCardProps> = ({ 
  icon: Icon, 
  iconSize = 24,
  title, 
  description, 
  variant = 'primary' 
}) => {
  const variantClasses = {
    primary: 'bg-gradient-to-r from-solana-purple to-solana-cyan',
    secondary: 'bg-gradient-to-r from-gray-400 to-gray-500'
  }

  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`w-12 h-12 ${variantClasses[variant]} rounded-xl flex items-center justify-center text-white mx-auto mb-4`}>
        <Icon size={iconSize} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default AppFeatureCard 
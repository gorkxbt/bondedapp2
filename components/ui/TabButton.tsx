'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

interface TabButtonProps {
  id: string
  label: string
  icon: LucideIcon
  isActive: boolean
  onClick: (id: string) => void
}

const TabButton: React.FC<TabButtonProps> = ({ 
  id, 
  label, 
  icon: Icon, 
  isActive, 
  onClick 
}) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-teddy-brown to-teddy-amber text-white shadow-lg'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      {label}
    </button>
  )
}

export default TabButton 
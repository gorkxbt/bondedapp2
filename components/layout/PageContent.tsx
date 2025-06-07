'use client'

import React from 'react'
import { useNavigation } from '@/contexts/NavigationContext'
import HomePage from '@/components/pages/HomePage'
import AppPage from '@/components/pages/AppPage'
import AboutPage from '@/components/pages/AboutPage'

const PageContent: React.FC = () => {
  const { currentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'app':
        return <AppPage />
      case 'about':
        return <AboutPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="pt-20">
      {renderPage()}
    </div>
  )
}

export default PageContent 
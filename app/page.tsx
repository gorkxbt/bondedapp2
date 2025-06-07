import React from 'react'
import { NavigationProvider } from '@/contexts/NavigationContext'
import Header from '@/components/layout/Header'
import PageContent from '@/components/layout/PageContent'
import Footer from '@/components/layout/Footer'
import ToastNotification from '@/components/ui/ToastNotification'

export default function HomePage() {
  return (
    <NavigationProvider>
      <main className="relative min-h-screen bg-white">
        <Header />
        <PageContent />
        <Footer />
        <ToastNotification />
      </main>
    </NavigationProvider>
  )
} 
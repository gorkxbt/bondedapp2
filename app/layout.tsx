import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bonded - Build Meaningful Connections, Earn Crypto',
  description: 'Earn crypto rewards for staying connected with friends, family, and colleagues. Powered by AI to strengthen your social bonds.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 
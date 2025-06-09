import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyBuddy - Your AI Companion for Solana Trenches',
  description: 'Never miss the next big thing in Solana. Get real-time trenches notifications, AI-powered insights, and alerts for narratives, bonded tokens, and high-volume moments.',
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
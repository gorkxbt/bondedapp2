'use client'

import { useState, useCallback } from 'react'

interface ToastState {
  message: string
  isVisible: boolean
}

let globalToastState: ToastState = { message: '', isVisible: false }
let globalSetters: Array<(state: ToastState) => void> = []

export const useToast = () => {
  const [state, setState] = useState(globalToastState)

  // Register this component's setState
  if (!globalSetters.includes(setState)) {
    globalSetters.push(setState)
  }

  const showToast = useCallback((message: string) => {
    const newState = { message, isVisible: true }
    globalToastState = newState
    globalSetters.forEach(setter => setter(newState))
    
    setTimeout(() => {
      const hideState = { message: '', isVisible: false }
      globalToastState = hideState
      globalSetters.forEach(setter => setter(hideState))
    }, 3000)
  }, [])

  const hideToast = useCallback(() => {
    const hideState = { message: '', isVisible: false }
    globalToastState = hideState
    globalSetters.forEach(setter => setter(hideState))
  }, [])

  return { ...state, showToast, hideToast }
} 
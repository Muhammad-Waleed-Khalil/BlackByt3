'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LoadingSequence: React.FC = () => {
  const [bootText, setBootText] = useState<string[]>([])
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    const lines = [
      'INITIALIZING BLACK_BYT3 KERNEL...',
      'LOADING NEURAL SHADERS...',
      'DECRYPTING CONTENT PACKS...',
      'BYPASSING SECURITY LAYER 9...',
      'ESTABLISHING SECURE UPLINK...',
      'SYSTEM COMPROMISE DETECTED',
      'ACCESS GRANTED.'
    ]

    lines.forEach((line, index) => {
      setTimeout(() => {
        setBootText(prev => [...prev, line])
      }, index * 400)
    })

    // Red scan animation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval)
          return 100
        }
        return prev + 2
      })
    }, 30)

    return () => clearInterval(scanInterval)
  }, [])

  return (
    <div className="loading-sequence">
      {/* Red Scanner */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"
        style={{ top: `${scanProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: scanProgress > 0 ? 1 : 0 }}
      />

      {/* Boot Text */}
      <div className="flex flex-col items-start gap-2 font-mono text-red-500 px-8">
        <AnimatePresence>
          {bootText.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`text-sm md:text-base ${index === bootText.length - 1 ? 'text-red-400 font-bold glitch-text' : ''}`}
            >
              {line}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 max-w-[90%]">
        <div className="w-full h-1 bg-gray-900 rounded overflow-hidden">
          <motion.div
            className="h-full bg-red-600"
            style={{ width: `${scanProgress}%` }}
            initial={{ width: 0 }}
          />
        </div>
        <div className="text-red-500 font-mono text-xs mt-2 text-center">
          LOADING... {scanProgress}%
        </div>
      </div>
    </div>
  )
}

export default LoadingSequence

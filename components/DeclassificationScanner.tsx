'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface DeclassificationScannerProps {
  isScanning: boolean
  onScanComplete: () => void
}

const DeclassificationScanner: React.FC<DeclassificationScannerProps> = ({ isScanning, onScanComplete }) => {
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    if (!isScanning) {
      setScanProgress(0)
      return
    }

    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      setScanProgress(progress * 100)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setTimeout(onScanComplete, 200)
      }
    }

    requestAnimationFrame(animate)
  }, [isScanning, onScanComplete])

  if (!isScanning) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Scanning beam */}
      <motion.div
        className="absolute left-0 right-0 h-8 bg-gradient-to-b from-transparent via-red-500 to-transparent opacity-70 blur-sm"
        style={{
          top: `${scanProgress}%`,
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(255, 0, 0, 0.5)'
        }}
      />

      {/* Grid overlay during scan */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,0,0,0.05)_25%,rgba(255,0,0,0.05)_26%,transparent_27%,transparent_74%,rgba(255,0,0,0.05)_75%,rgba(255,0,0,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,0,0,0.05)_25%,rgba(255,0,0,0.05)_26%,transparent_27%,transparent_74%,rgba(255,0,0,0.05)_75%,rgba(255,0,0,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />

      {/* Scan lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent animate-pulse" />
    </div>
  )
}

export default DeclassificationScanner

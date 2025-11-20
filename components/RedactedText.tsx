'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface RedactedTextProps {
  children: string
  isRevealed: boolean
  delay?: number
}

const RedactedText: React.FC<RedactedTextProps> = ({ children, isRevealed, delay = 0 }) => {
  const redactedLength = Math.min(children.length, 10)
  const redactedText = '█'.repeat(redactedLength)

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.span
            key="redacted"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay }}
            className="text-black bg-black border border-red-900/50 px-2 py-1 font-mono text-xs tracking-wider"
          >
            {redactedText}
          </motion.span>
        ) : (
          <motion.span
            key="revealed"
            initial={{ opacity: 0, filter: 'blur(4px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, delay }}
            className="text-white"
          >
            {children}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  )
}

export default RedactedText

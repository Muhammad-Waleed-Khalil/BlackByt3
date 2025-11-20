'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import DeclassificationScanner from './DeclassificationScanner'
import { ProjectCaseStudy } from '@/types'

interface RedactedProjectCardProps {
  project: ProjectCaseStudy
  index: number
}

const RedactedProjectCard: React.FC<RedactedProjectCardProps> = ({ project, index }) => {
  const [isClassified, setIsClassified] = useState(true)
  const [isScanning, setIsScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, margin: "-100px" })

  // Auto-scan when card comes into view
  useEffect(() => {
    if (isInView && isClassified && !isScanning) {
      const timer = setTimeout(() => {
        setIsScanning(true)
      }, index * 300) // Stagger the declassification

      return () => clearTimeout(timer)
    }
  }, [isInView, isClassified, isScanning, index])

  const handleScanComplete = () => {
    setIsScanning(false)
    setScanComplete(true)
    setIsClassified(false)
  }

  const handleReclassify = () => {
    setIsClassified(true)
    setScanComplete(false)
  }

  // Create redacted version of text
  const redactText = (text: string, percentage: number = 0.8) => {
    if (!isClassified) return text

    const words = text.split(' ')
    const redactCount = Math.floor(words.length * percentage)

    return words.map((word, i) => {
      if (i < redactCount) {
        return '█'.repeat(Math.min(word.length, 6))
      }
      return word
    }).join(' ')
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div
        className={`relative p-8 border-2 transition-all duration-500 overflow-hidden ${
          isClassified
            ? 'bg-black border-red-900/50 hover:border-red-500'
            : 'bg-gradient-to-br from-gray-900 to-black border-red-500/50'
        }`}
        onClick={isClassified ? undefined : handleReclassify}
      >
        {/* Declassification Scanner */}
        <DeclassificationScanner
          isScanning={isScanning}
          onScanComplete={handleScanComplete}
        />

        {/* Classification Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isClassified ? 'bg-red-600 animate-pulse' : 'bg-green-500'}`} />
            <span className="font-mono text-xs tracking-widest">
              {isClassified ? (
                <span className="text-red-500">[ CLASSIFIED ]</span>
              ) : (
                <span className="text-green-500">[ DECLASSIFIED ]</span>
              )}
            </span>
          </div>
          <span className="font-mono text-xs text-gray-600">
            ID: {project.id}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold text-white mb-4 font-mono">
          {isClassified ? (
            <span className="text-black bg-black border border-red-900/50 px-4 py-2 inline-block">
              ████████████
            </span>
          ) : (
            <span className="text-red-500">{project.title}</span>
          )}
        </h3>

        {/* Project Details */}
        <div className="space-y-4 font-mono text-sm">
          {/* Client */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; CLIENT:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? redactText(project.client, 1) : project.client}
            </div>
          </div>

          {/* Problem */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; PROBLEM:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? redactText(project.problem, 0.85) : project.problem}
            </div>
          </div>

          {/* Scope */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; SCOPE:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? redactText(project.scope, 0.7) : project.scope}
            </div>
          </div>

          {/* Approach */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; APPROACH:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? redactText(project.approach, 0.9) : project.approach}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; OUTCOME:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? redactText(project.outcome, 0.8) : project.outcome}
            </div>
          </div>

          {/* Artifacts */}
          <div>
            <div className="text-red-400 text-xs mb-1">&gt; ARTIFACTS:</div>
            <div className="pl-4 text-gray-300">
              {isClassified ? '████████, ████████' : project.artifacts}
            </div>
          </div>
        </div>

        {/* Scan Complete Message */}
        {scanComplete && !isClassified && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 p-3 bg-red-950/30 border border-red-500/50 font-mono text-xs"
          >
            <div className="flex items-center gap-2 text-green-400">
              <span className="animate-pulse">█</span>
              <span>DECLASSIFICATION COMPLETE</span>
              <span className="animate-pulse">█</span>
            </div>
            <div className="text-gray-500 text-xs mt-2">
              Click to re-classify document
            </div>
          </motion.div>
        )}

        {/* Scanning Progress */}
        {isScanning && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900">
            <motion.div
              className="h-full bg-red-500"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'linear' }}
            />
          </div>
        )}
      </div>

      {/* Hover hint for classified docs */}
      {isClassified && !isScanning && (
        <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
          <span className="text-xs font-mono text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll to initiate declassification...
          </span>
        </div>
      )}
    </motion.div>
  )
}

export default RedactedProjectCard

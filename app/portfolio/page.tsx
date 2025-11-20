'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import RedactedProjectCard from '@/components/RedactedProjectCard'
import { PROJECTS_DATA } from '@/constants'

export default function PortfolioPage() {
  const [securityClearance, setSecurityClearance] = useState<'L1' | 'L5'>('L1')

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 font-mono text-sm tracking-widest">
              OPERATION ARCHIVE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-red-500">DECLASSIFIED</span> FILES
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-mono">
            These documents contain <span className="text-red-500">classified intelligence</span> on past operations.
            Scroll to initiate the <span className="text-green-500">declassification scanner</span>.
          </p>

          {/* Security Clearance Notice */}
          <div className="mt-6 p-4 bg-red-950/20 border border-red-900/50 font-mono text-xs">
            <div className="flex items-start gap-3">
              <span className="text-red-500 mt-1">⚠</span>
              <div>
                <span className="text-red-400">SECURITY CLEARANCE:</span> Level {securityClearance} — CLASSIFIED ACCESS
                <div className="text-gray-500 mt-2">
                  All case studies have been sanitized for public disclosure. Client identities and sensitive technical details remain redacted per NDA agreements.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Declassification Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12 p-6 bg-black/50 border border-red-900/30 backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-3">
            <div className="w-1 h-8 bg-red-500" />
            <h3 className="text-xl font-bold text-white font-mono">
              DECLASSIFICATION PROTOCOL
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 font-mono text-sm text-gray-400">
            <div>
              <span className="text-red-500">STEP 1:</span> Scroll down to bring document into view
            </div>
            <div>
              <span className="text-green-500">STEP 2:</span> Red scanning beam will sweep the document
            </div>
            <div>
              <span className="text-blue-400">STEP 3:</span> Redacted content reveals after 2-second scan
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <RedactedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Case Study Request CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              WANT A DETAILED CASE STUDY?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Request access to full technical reports, proof-of-concept videos, and sanitized exploit demonstrations.
            </p>
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
              REQUEST FULL DISCLOSURE →
            </button>
          </div>
        </motion.div>

        {/* Additional Projects Teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2 }}
          className="mt-12 p-6 bg-black/30 border border-gray-800"
        >
          <div className="flex items-center justify-between">
            <div className="font-mono">
              <div className="text-red-500 text-sm mb-2">ADDITIONAL OPERATIONS</div>
              <div className="text-gray-500 text-xs">
                3 more classified files pending declassification approval...
                <span className="text-red-400 ml-2">[PENDING CLEARANCE]</span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-16 h-20 bg-black border border-red-900/50 flex items-center justify-center font-mono text-xs text-red-500">
                █████
              </div>
              <div className="w-16 h-20 bg-black border border-red-900/50 flex items-center justify-center font-mono text-xs text-red-500">
                █████
              </div>
              <div className="w-16 h-20 bg-black border border-red-900/50 flex items-center justify-center font-mono text-xs text-red-500">
                █████
              </div>
            </div>
          </div>
        </motion.div>

        {/* Terminal Footer */}
        <div className="mt-12 p-4 bg-black border border-red-900/30 font-mono text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-green-500">$</span>
            <span>tail -f /var/log/black_labs/operations.log</span>
          </div>
          <div className="mt-2 text-gray-500">
            [2024-11-20 05:04:32] LOG: Declassification scanner initialized<br />
            [2024-11-20 05:04:33] LOG: {PROJECTS_DATA.length} case studies loaded<br />
            [2024-11-20 05:04:33] STATUS: Awaiting user scroll event...
          </div>
        </div>
      </div>
    </div>
  )
}

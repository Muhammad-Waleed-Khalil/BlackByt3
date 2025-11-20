'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ABOUT_CONTENT, TEAM_LIST } from '@/constants'

export default function AboutPage() {
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
              CYBER SPACE MANIFEST
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ABOUT <span className="text-red-500">BLACK BYT3</span>
          </h1>

          <p className="text-gray-400 text-2xl font-bold mb-8">
            {ABOUT_CONTENT.headline}
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-8 bg-gradient-to-br from-red-950/20 to-black border border-red-900/50"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-mono">
            OUR <span className="text-red-500">STORY</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            {ABOUT_CONTENT.story}
          </p>
        </motion.div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-black border-2 border-red-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-red-500" />
              <h3 className="text-2xl font-bold text-white font-mono">VISION</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {ABOUT_CONTENT.vision}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 bg-black border-2 border-red-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-12 bg-red-500" />
              <h3 className="text-2xl font-bold text-white font-mono">MISSION</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {ABOUT_CONTENT.mission}
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20 p-8 bg-gradient-to-br from-black to-red-950/20 border border-red-900/50"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            CORE <span className="text-red-500">VALUES</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ABOUT_CONTENT.values.map((value, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="flex items-center gap-3 p-4 bg-black/50 border border-red-900/30"
              >
                <span className="text-red-500 text-xl">▸</span>
                <span className="text-gray-300 font-mono text-sm">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 font-mono">
              THE <span className="text-red-500">TEAM</span>
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              █ SECURITY CLEARANCE REQUIRED █ — Operational identities below
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_LIST.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 + i * 0.05 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900 to-black border border-red-900/30 hover:border-red-500 transition-all"
              >
                {/* Clearance badge */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-red-950/50 border border-red-900/50 font-mono text-xs text-red-500">
                  {member.clearance}
                </div>

                {/* Specialty badge */}
                <div className="absolute top-3 left-3 px-2 py-1 bg-black/80 border border-gray-700 font-mono text-xs text-gray-500">
                  {member.specialty}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-1 font-mono">
                    {member.name}
                  </h3>
                  <div className="text-red-400 text-sm mb-3 font-mono">
                    {member.role}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            JOIN THE <span className="text-red-500">CYBER SPACE</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're always looking for talented hackers, researchers, and engineers to join our operations.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
            VIEW OPEN POSITIONS →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

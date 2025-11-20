'use client'

import React from 'react'
import { motion } from 'framer-motion'
import VaultDoorCard from '@/components/VaultDoorCard'
import { SERVICES_DATA } from '@/constants'

export default function ServicesPage() {
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
              SECURITY ARSENAL
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            CYBERSECURITY <span className="text-red-500">SERVICES</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-mono">
            Each service is a <span className="text-red-500">classified vault</span>. Click to breach the seal and access full operational details.
          </p>

          <div className="mt-6 flex items-center gap-3 text-sm font-mono text-gray-500">
            <span className="text-red-500 animate-pulse">█</span>
            <span>WARNING: Unauthorized access detected. Proceed with caution.</span>
            <span className="text-red-500 animate-pulse">█</span>
          </div>
        </motion.div>

        {/* Vault Doors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <VaultDoorCard service={service} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-black/50 border border-red-900/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              NEED A CUSTOM OPERATION?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We design bespoke security engagements tailored to your threat model.
              From APT simulations to supply chain audits.
            </p>
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
              INITIATE CONTACT →
            </button>
          </div>
        </motion.div>

        {/* Security Notice */}
        <div className="mt-12 p-4 bg-red-950/20 border border-red-900/30 font-mono text-xs text-gray-500">
          <div className="flex items-start gap-3">
            <span className="text-red-500 mt-1">⚠</span>
            <div>
              <span className="text-red-400">SECURITY NOTICE:</span> All penetration testing and offensive security services are conducted under strict legal agreements and authorized scopes. Black Byt3 operates within ethical boundaries and complies with local and international cybersecurity regulations.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

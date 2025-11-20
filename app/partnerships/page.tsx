'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PARTNERSHIPS_CONTENT } from '@/constants'

const PARTNERSHIP_OPPORTUNITIES = [
  {
    title: 'Strategic Technology Partnership',
    description: 'Collaborate on joint R&D, co-branded security solutions, and shared threat intelligence.',
    benefits: ['Co-marketing', 'Revenue sharing', 'Exclusive access to Black Labs', 'Joint CTF events']
  },
  {
    title: 'Reseller & Distribution',
    description: 'Become an authorized reseller of Black Byt3 training, certifications, and consulting services.',
    benefits: ['30% commission', 'Sales enablement', 'Lead generation support', 'Co-branded materials']
  },
  {
    title: 'Academic Partnership',
    description: 'Integrate Black Byt3 curriculum into universities. Student discounts and faculty training.',
    benefits: ['Curriculum licensing', 'Faculty certification', 'Student placement', 'Research collaboration']
  }
]

export default function PartnershipsPage() {
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
              ALLIANCES
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            PARTNERSHIPS & <span className="text-red-500">ALLIANCE</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono">
            Strategic collaborations that expand the Cyber Space.
          </p>
        </motion.div>

        {/* Strategic Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            OUR <span className="text-red-500">STRATEGIC PARTNERS</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERSHIPS_CONTENT.strategic.map((partner, i) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all text-center group"
              >
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white font-mono group-hover:text-red-500 transition-colors">
                  {partner}
                </h3>
                <p className="text-gray-500 text-sm mt-2 font-mono">Strategic Partner</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-black/50 border border-red-900/30">
            <p className="text-gray-400 text-sm leading-relaxed">
              We collaborate with <span className="text-red-400">Rayonix</span> on cloud security research, <span className="text-red-400">TechBiz</span> on enterprise delivery, <span className="text-red-400">Cyber Pashto</span> on regional community building, and <span className="text-red-400">AQEDA</span> on advanced threat intelligence sharing.
            </p>
          </div>
        </motion.div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            PARTNERSHIP <span className="text-red-500">OPPORTUNITIES</span>
          </h2>

          <div className="space-y-6">
            {PARTNERSHIP_OPPORTUNITIES.map((opp, i) => (
              <motion.div
                key={opp.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                className="p-8 bg-gradient-to-r from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3 font-mono">
                  {opp.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {opp.description}
                </p>
                <div>
                  <div className="text-red-400 text-sm font-mono mb-3">&gt; BENEFITS:</div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {opp.benefits.map((benefit, j) => (
                      <div key={j} className="flex items-center gap-2 text-gray-400">
                        <span className="text-red-500">▸</span>
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            INTERESTED IN <span className="text-red-500">PARTNERING</span>?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can collaborate to secure the digital landscape together.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all">
            INITIATE PARTNERSHIP →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

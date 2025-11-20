'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FAQ_CONTENT } from '@/constants'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-4xl mx-auto">
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
              INTEL DATABASE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            FREQUENTLY ASKED <span className="text-red-500">QUESTIONS</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono">
            Quick answers to common queries. Can't find what you need? Contact us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_CONTENT.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-red-900/50 hover:border-red-500 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-black transition-all"
              >
                <span className="text-lg font-bold text-white font-mono pr-4">
                  {faq.question}
                </span>
                <span className="text-red-500 text-2xl flex-shrink-0">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-black"
                  >
                    <div className="p-6 pt-0 text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center p-8 bg-gradient-to-br from-red-950/20 to-black border border-red-900/50"
        >
          <h3 className="text-2xl font-bold text-white mb-4 font-mono">
            STILL HAVE <span className="text-red-500">QUESTIONS</span>?
          </h3>
          <p className="text-gray-400 mb-6">
            Our team is standing by to help.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all">
            CONTACT SUPPORT →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

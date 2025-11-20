'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SHOP_CONTENT } from '@/constants'

export default function ShopPage() {
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
              ARMORY
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SHOP / <span className="text-red-500">BOOKINGS</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono">
            Training sessions, certifications, and exclusive Black Byt3 gear.
          </p>
        </motion.div>

        {/* Shop Items */}
        <div className="grid md:grid-cols-3 gap-8">
          {SHOP_CONTENT.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all group"
            >
              <div className="text-red-500 text-4xl mb-4">
                {item.type === 'booking' ? '📅' : '🛡️'}
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-mono group-hover:text-red-500 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-green-400 font-mono text-2xl font-bold">
                  {item.price}
                </span>
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all">
                  {item.type === 'booking' ? 'BOOK NOW' : 'ADD TO CART'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Orders */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            NEED SOMETHING <span className="text-red-500">CUSTOM</span>?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Bulk training sessions, custom hardware toolkits, or enterprise certification programs available.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all">
            REQUEST QUOTE →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

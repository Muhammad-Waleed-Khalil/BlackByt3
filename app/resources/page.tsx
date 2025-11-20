'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { RESOURCES_CONTENT } from '@/constants'

const ALL_RESOURCES = [
  {
    title: 'Zero-Day Analysis: Log4Shell Revisited',
    category: 'Article',
    date: '2024-11-10',
    readTime: '8 min',
    author: 'Saad Khan',
    excerpt: 'Deep dive into CVE-2021-44228, lessons learned two years later, and why JNDI injection still haunts enterprise Java.',
    tags: ['Zero-Day', 'CVE', 'Java', 'Exploitation']
  },
  {
    title: 'Hardware Hacking 101: Bus Pirate Guide',
    category: 'Tutorial',
    date: '2024-11-05',
    readTime: '12 min',
    author: 'Jafar Ali',
    excerpt: 'Hands-on walkthrough of UART sniffing, SPI dumping, and I2C communication using the Bus Pirate universal interface tool.',
    tags: ['Hardware', 'IoT', 'Firmware', 'Black Labs']
  },
  {
    title: 'The State of AI in Offensive Cyber',
    category: 'Whitepaper',
    date: '2024-10-28',
    readTime: '20 min',
    author: 'Saad Khan',
    excerpt: 'Comprehensive analysis of LLM-assisted exploit generation, adversarial ML attacks, and the future of autonomous red teaming.',
    tags: ['AI', 'Machine Learning', 'Research', 'Red Team']
  },
  {
    title: 'Container Escape Techniques: A 2024 Update',
    category: 'Article',
    date: '2024-10-15',
    readTime: '10 min',
    author: 'Zeeshan Ali',
    excerpt: 'Latest Docker and Kubernetes escape vectors, including privileged container abuse and kernel exploits.',
    tags: ['Cloud', 'Containers', 'Docker', 'Kubernetes']
  },
  {
    title: 'Building Your First Red Team C2 Infrastructure',
    category: 'Tutorial',
    date: '2024-10-01',
    readTime: '15 min',
    author: 'Ammar Hanif',
    excerpt: 'Step-by-step guide to setting up Covenant, managing redirectors, and establishing covert channels for engagements.',
    tags: ['Red Team', 'C2', 'Infrastructure', 'OPSEC']
  },
  {
    title: 'Threat Intelligence Report: APT Groups Q3 2024',
    category: 'Whitepaper',
    date: '2024-09-20',
    readTime: '25 min',
    author: 'Aqsa',
    excerpt: 'Quarterly threat landscape analysis covering APT28, Lazarus Group, and emerging nation-state actors targeting critical infrastructure.',
    tags: ['Threat Intel', 'APT', 'OSINT', 'Geopolitics']
  }
]

const CATEGORIES = ['All', 'Article', 'Tutorial', 'Whitepaper']

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredResources = ALL_RESOURCES.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
              INTEL DATABASE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            RESOURCES / <span className="text-red-500">TRANSMISSIONS</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono mb-8">
            Latest research, tutorials, and threat intelligence from the Black Byt3 team.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <input
              type="text"
              placeholder="Search by keyword, tag, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 bg-gray-900 border-2 border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex gap-4 flex-wrap"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-mono text-sm transition-all border-2 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white border-red-600'
                  : 'bg-transparent text-gray-400 border-red-900/50 hover:border-red-500 hover:text-white'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </motion.div>

        {/* Featured Resource */}
        {filteredResources.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 p-8 bg-gradient-to-br from-red-950/20 to-black border-2 border-red-500"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-3 py-1 bg-red-600 text-white font-mono text-xs">
                FEATURED TRANSMISSION
              </span>
              <span className="text-gray-500 font-mono text-sm">{filteredResources[0].date}</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
              {filteredResources[0].title}
            </h2>

            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              {filteredResources[0].excerpt}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm font-mono">
                <span className="text-red-400">{filteredResources[0].category}</span>
                <span className="text-gray-500">By {filteredResources[0].author}</span>
                <span className="text-gray-500">{filteredResources[0].readTime} read</span>
              </div>
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                READ FULL REPORT →
              </button>
            </div>

            <div className="mt-6 flex gap-2 flex-wrap">
              {filteredResources[0].tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-black border border-red-900/50 text-red-300 font-mono text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredResources.slice(1).map((resource, i) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-3 py-1 font-mono text-xs border ${
                  resource.category === 'Article'
                    ? 'bg-blue-900/50 text-blue-400 border-blue-500'
                    : resource.category === 'Tutorial'
                    ? 'bg-green-900/50 text-green-400 border-green-500'
                    : 'bg-purple-900/50 text-purple-400 border-purple-500'
                }`}>
                  {resource.category}
                </span>
                <span className="text-gray-500 font-mono text-xs">{resource.date}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-red-500 transition-colors">
                {resource.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {resource.excerpt}
              </p>

              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className="text-gray-500">By {resource.author}</span>
                <span className="text-gray-500">{resource.readTime}</span>
              </div>

              <div className="flex gap-2 flex-wrap mb-4">
                {resource.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 bg-black border border-red-900/30 text-red-400 font-mono text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="w-full px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600/20 font-mono text-sm transition-all">
                READ MORE →
              </button>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center p-12 bg-black border-2 border-red-900/30"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              NO TRANSMISSIONS FOUND
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            SUBSCRIBE TO <span className="text-red-500">TRANSMISSIONS</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get the latest research, exploits, and threat intelligence delivered directly to your encrypted inbox.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your.email@company.com"
              className="flex-1 p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
            />
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
              SUBSCRIBE →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

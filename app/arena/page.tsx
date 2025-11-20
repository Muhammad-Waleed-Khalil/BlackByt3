'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ARENA_CONTENT } from '@/constants'

const UPCOMING_EVENTS = [
  {
    title: 'Black Byt3 Winter CTF 2024',
    date: 'December 15-17, 2024',
    location: 'Islamabad, Pakistan',
    type: 'Capture The Flag',
    prize: '$10,000',
    difficulty: 'All Levels',
    status: 'Registration Open'
  },
  {
    title: 'Red Team Workshop Series',
    date: 'January 2025',
    location: 'Online',
    type: 'Training',
    prize: 'Certificate',
    difficulty: 'Advanced',
    status: 'Coming Soon'
  },
  {
    title: 'Hardware Hacking Bootcamp',
    date: 'February 2025',
    location: 'Lahore, Pakistan',
    type: 'Workshop',
    prize: 'Toolkit + Cert',
    difficulty: 'Intermediate',
    status: 'Early Bird'
  }
]

const PAST_EVENTS = [
  { title: 'Summer CTF 2024', participants: 450, winner: 'Team Shadow', prize: '$5,000' },
  { title: 'DEF CON Pakistan', participants: 200, winner: 'Null Pointer', prize: 'Trophy' },
  { title: 'IoT Security Workshop', participants: 80, winner: 'All Participants', prize: 'Certificate' }
]

export default function ArenaPage() {
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
              PROVING GROUNDS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            THE <span className="text-red-500">ARENA</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono mb-8">
            {ARENA_CONTENT.headline}
          </p>

          <p className="text-gray-300 text-lg max-w-3xl">
            {ARENA_CONTENT.description}
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            UPCOMING <span className="text-red-500">EVENTS & CTFs</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-mono ${
                    event.status === 'Registration Open'
                      ? 'bg-green-900/50 text-green-400 border border-green-500'
                      : event.status === 'Early Bird'
                      ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-500'
                      : 'bg-gray-800 text-gray-400 border border-gray-600'
                  }`}>
                    {event.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-mono group-hover:text-red-500 transition-colors">
                  {event.title}
                </h3>

                <div className="space-y-2 text-sm font-mono">
                  <div className="flex justify-between text-gray-400">
                    <span>Date:</span>
                    <span className="text-white">{event.date}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Location:</span>
                    <span className="text-white">{event.location}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Type:</span>
                    <span className="text-red-400">{event.type}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Prize:</span>
                    <span className="text-green-400">{event.prize}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Level:</span>
                    <span className="text-yellow-400">{event.difficulty}</span>
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all">
                  REGISTER NOW →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Black Byt3 CTF Team */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20 p-8 bg-gradient-to-br from-red-950/20 to-black border-2 border-red-500"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-mono">
            BLACK BYT3 <span className="text-red-500">CTF TEAM</span>
          </h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            Our competitive CTF team represents Pakistan in international competitions. We've ranked in the top 50 globally on CTFtime and compete in DEF CON, Google CTF, and HackTheBox events.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-black/50 border border-red-900/50">
              <div className="text-4xl font-bold text-red-500 mb-2">Top 50</div>
              <div className="text-gray-400 text-sm font-mono">Global CTFtime Ranking</div>
            </div>
            <div className="p-4 bg-black/50 border border-red-900/50">
              <div className="text-4xl font-bold text-red-500 mb-2">25+</div>
              <div className="text-gray-400 text-sm font-mono">CTFs Won (2024)</div>
            </div>
            <div className="p-4 bg-black/50 border border-red-900/50">
              <div className="text-4xl font-bold text-red-500 mb-2">12</div>
              <div className="text-gray-400 text-sm font-mono">Active Members</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="px-8 py-3 border-2 border-red-600 text-red-400 hover:bg-red-600/20 font-mono transition-all">
              JOIN THE TEAM
            </button>
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            PAST <span className="text-red-500">EVENTS & HIGHLIGHTS</span>
          </h2>

          <div className="space-y-4">
            {PAST_EVENTS.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                className="p-6 bg-black/50 border border-red-900/30 hover:border-red-500 transition-all flex items-center justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 font-mono">{event.title}</h3>
                  <div className="text-gray-400 text-sm font-mono">
                    Winner: <span className="text-red-400">{event.winner}</span> | Participants: <span className="text-white">{event.participants}</span>
                  </div>
                </div>
                <div className="text-green-400 font-mono text-lg font-bold">
                  {event.prize}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sponsorship */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            HOST AN EVENT / <span className="text-red-500">SPONSORSHIPS</span>
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Want to host a CTF at your organization? Looking to sponsor our events? We offer title sponsor, technical sponsor, and community sponsor packages.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all">
              SPONSOR AN EVENT →
            </button>
            <button className="px-8 py-3 border border-red-600 text-red-400 hover:bg-red-600/20 font-mono transition-all">
              HOST A CTF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

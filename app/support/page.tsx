'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAKE_TICKETS = [
  {
    id: 'TKT-2024-001',
    title: 'Pentest Report Review Request',
    status: 'OPEN',
    priority: 'HIGH',
    created: '2024-11-18',
    lastUpdate: '2 hours ago',
    assignedTo: 'Shamir Khan'
  },
  {
    id: 'TKT-2024-002',
    title: 'Remediation Validation Follow-up',
    status: 'IN_PROGRESS',
    priority: 'MEDIUM',
    created: '2024-11-15',
    lastUpdate: '1 day ago',
    assignedTo: 'Ammar Hanif'
  },
  {
    id: 'TKT-2024-003',
    title: 'SOC 2 Compliance Audit Q4',
    status: 'CLOSED',
    priority: 'LOW',
    created: '2024-10-30',
    lastUpdate: '3 days ago',
    assignedTo: 'Maham'
  }
]

const FAKE_PROJECTS = [
  {
    id: 'PRJ-5743',
    name: 'Q4 Network Pentest',
    type: 'Penetration Test',
    status: 'ACTIVE',
    completion: 75,
    nextMilestone: 'Final Report - Nov 25'
  },
  {
    id: 'PRJ-5821',
    name: 'Red Team Exercise',
    type: 'Red Team',
    status: 'SCOPING',
    completion: 15,
    nextMilestone: 'Kickoff Meeting - Dec 1'
  },
  {
    id: 'PRJ-5299',
    name: 'OCMP Mentorship Track',
    type: 'Training',
    status: 'COMPLETED',
    completion: 100,
    nextMilestone: 'Certificate Issued'
  }
]

const FAKE_ALERTS = [
  { time: '14:32', level: 'INFO', message: 'New report uploaded: network_scan_results.pdf' },
  { time: '11:05', level: 'WARNING', message: 'Scheduled maintenance: Dec 1, 02:00-04:00 UTC' },
  { time: '09:47', level: 'SUCCESS', message: 'Vulnerability patch confirmed: CVE-2024-9281' },
  { time: 'Yesterday', level: 'INFO', message: 'Analyst assigned to ticket TKT-2024-001' }
]

export default function SupportPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [selectedTab, setSelectedTab] = useState<'dashboard' | 'tickets' | 'projects'>('dashboard')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Fake login - accepts any credentials
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen pt-32 px-6 md:px-12 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="p-8 bg-black border-2 border-red-500">
            <div className="text-center mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-white mb-2 font-mono">
                CLIENT <span className="text-red-500">PORTAL</span>
              </h1>
              <p className="text-gray-400 text-sm font-mono">SECURE ACCESS REQUIRED</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  USERNAME
                </label>
                <input
                  type="text"
                  required
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                  placeholder="client@company.com"
                />
              </div>

              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  PASSWORD
                </label>
                <input
                  type="password"
                  required
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
              >
                AUTHENTICATE →
              </button>

              <div className="text-center">
                <a href="#" className="text-red-400 text-sm font-mono hover:underline">
                  Forgot credentials? Contact support.
                </a>
              </div>
            </form>

            <div className="mt-8 p-4 bg-red-950/20 border border-red-900/30">
              <p className="text-gray-400 text-xs font-mono">
                🔒 DEMO MODE: Use any credentials to access the portal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-500 font-mono text-sm tracking-widest">
                AUTHENTICATED
              </span>
            </div>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="px-4 py-2 border border-red-500 text-red-400 hover:bg-red-600/20 font-mono text-sm transition-all"
            >
              LOGOUT
            </button>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            COMMAND <span className="text-red-500">CENTER</span>
          </h1>

          <p className="text-gray-400 text-lg font-mono">
            Welcome back, {credentials.username || 'Operator'}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b-2 border-red-900/30">
          {(['dashboard', 'tickets', 'projects'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-3 font-mono text-sm transition-all ${
                selectedTab === tab
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {selectedTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50">
                <div className="text-4xl font-bold text-green-400 mb-2 font-mono">3</div>
                <div className="text-gray-400 text-sm font-mono">Active Projects</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50">
                <div className="text-4xl font-bold text-yellow-400 mb-2 font-mono">2</div>
                <div className="text-gray-400 text-sm font-mono">Open Tickets</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50">
                <div className="text-4xl font-bold text-red-400 mb-2 font-mono">12</div>
                <div className="text-gray-400 text-sm font-mono">Critical Findings</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50">
                <div className="text-4xl font-bold text-blue-400 mb-2 font-mono">98%</div>
                <div className="text-gray-400 text-sm font-mono">Remediation Rate</div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="mb-8 p-6 bg-black border-2 border-red-500">
              <h2 className="text-2xl font-bold text-white mb-6 font-mono">
                ACTIVITY <span className="text-red-500">FEED</span>
              </h2>
              <div className="space-y-3 font-mono text-sm">
                {FAKE_ALERTS.map((alert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-start gap-4 p-3 bg-gray-900/50 border-l-2 border-red-500"
                  >
                    <span className="text-gray-500">[{alert.time}]</span>
                    <span className={`px-2 py-1 text-xs ${
                      alert.level === 'SUCCESS'
                        ? 'bg-green-900/50 text-green-400'
                        : alert.level === 'WARNING'
                        ? 'bg-yellow-900/50 text-yellow-400'
                        : 'bg-blue-900/50 text-blue-400'
                    }`}>
                      {alert.level}
                    </span>
                    <span className="text-gray-300 flex-1">{alert.message}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <button className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all text-left">
                <div className="text-3xl mb-3">📄</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Download Reports</h3>
                <p className="text-gray-400 text-sm">Access all engagement reports</p>
              </button>
              <button className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all text-left">
                <div className="text-3xl mb-3">🎫</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Open New Ticket</h3>
                <p className="text-gray-400 text-sm">Submit support request</p>
              </button>
              <button className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all text-left">
                <div className="text-3xl mb-3">📅</div>
                <h3 className="text-xl font-bold text-white mb-2 font-mono">Schedule Meeting</h3>
                <p className="text-gray-400 text-sm">Book time with your analyst</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Tickets Tab */}
        {selectedTab === 'tickets' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {FAKE_TICKETS.map((ticket, i) => (
              <motion.div
                key={ticket.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-r from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white font-mono">{ticket.id}</h3>
                      <span className={`px-3 py-1 text-xs font-mono ${
                        ticket.status === 'OPEN'
                          ? 'bg-red-900/50 text-red-400 border border-red-500'
                          : ticket.status === 'IN_PROGRESS'
                          ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-500'
                          : 'bg-green-900/50 text-green-400 border border-green-500'
                      }`}>
                        {ticket.status}
                      </span>
                      <span className={`px-3 py-1 text-xs font-mono ${
                        ticket.priority === 'HIGH'
                          ? 'bg-red-950/50 text-red-300'
                          : ticket.priority === 'MEDIUM'
                          ? 'bg-yellow-950/50 text-yellow-300'
                          : 'bg-gray-800 text-gray-400'
                      }`}>
                        {ticket.priority}
                      </span>
                    </div>
                    <h4 className="text-lg text-gray-300 mb-3">{ticket.title}</h4>
                    <div className="flex gap-6 text-sm font-mono text-gray-500">
                      <span>Created: {ticket.created}</span>
                      <span>Updated: {ticket.lastUpdate}</span>
                      <span>Assigned: <span className="text-red-400">{ticket.assignedTo}</span></span>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all">
                    VIEW →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Projects Tab */}
        {selectedTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            {FAKE_PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50 hover:border-red-500 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-white font-mono">{project.name}</h3>
                      <span className={`px-3 py-1 text-xs font-mono border ${
                        project.status === 'ACTIVE'
                          ? 'bg-green-900/50 text-green-400 border-green-500'
                          : project.status === 'SCOPING'
                          ? 'bg-blue-900/50 text-blue-400 border-blue-500'
                          : 'bg-gray-800 text-gray-400 border-gray-600'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex gap-6 text-sm font-mono text-gray-400 mb-4">
                      <span>ID: {project.id}</span>
                      <span>Type: <span className="text-red-400">{project.type}</span></span>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between text-sm font-mono mb-2">
                        <span className="text-gray-400">Progress</span>
                        <span className="text-white">{project.completion}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${project.completion}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-gradient-to-r from-red-600 to-red-400"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-mono text-gray-500">
                      Next Milestone: <span className="text-yellow-400">{project.nextMilestone}</span>
                    </p>
                  </div>
                  <button className="ml-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all">
                    DETAILS →
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}

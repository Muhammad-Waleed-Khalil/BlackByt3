'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const OPEN_POSITIONS = [
  {
    title: 'Senior Penetration Tester',
    location: 'Islamabad / Remote',
    type: 'Full-time',
    clearance: 'L4_OFFENSIVE',
    requirements: ['5+ years offensive security', 'OSCP/OSCE preferred', 'Advanced network exploitation', 'Report writing mastery'],
    responsibilities: ['Lead client engagements', 'Mentor junior testers', 'Develop custom exploits', 'Present findings to C-suite']
  },
  {
    title: 'AI Security Researcher',
    location: 'Remote',
    type: 'Full-time',
    clearance: 'L3_R&D',
    requirements: ['ML/DL expertise (PyTorch/TensorFlow)', 'Adversarial ML research', 'Python automation', 'Published research preferred'],
    responsibilities: ['Develop AI defense models', 'Research adversarial attacks', 'Integrate ML into security tools', 'Publish whitepapers']
  },
  {
    title: 'Hardware Security Engineer',
    location: 'Lahore',
    type: 'Full-time',
    clearance: 'L4_HARDWARE',
    requirements: ['Embedded systems experience', 'Firmware reverse engineering', 'UART/SPI/JTAG expertise', 'Soldering & hardware mods'],
    responsibilities: ['Black Labs product development', 'IoT penetration testing', 'Hardware toolkit creation', 'Training workshops']
  },
  {
    title: 'Junior Pentester (Internship)',
    location: 'Islamabad',
    type: 'Internship',
    clearance: 'L1_TRAINEE',
    requirements: ['Pursuing CS/IT degree', 'Basic web security knowledge', 'Passion for learning', 'Available 30hrs/week'],
    responsibilities: ['Shadow senior testers', 'Run automated scans', 'Document findings', 'Complete OCMP track']
  },
  {
    title: 'GRC Consultant',
    location: 'Remote',
    type: 'Contract',
    clearance: 'L3_COMPLIANCE',
    requirements: ['ISO 27001/SOC 2 experience', 'Policy development', 'Audit coordination', 'Risk assessment frameworks'],
    responsibilities: ['Client compliance assessments', 'Policy documentation', 'Audit support', 'Gap analysis']
  }
]

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    github: '',
    portfolio: '',
    coverLetter: '',
    resume: null as File | null
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        linkedin: '',
        github: '',
        portfolio: '',
        coverLetter: '',
        resume: null
      })
      setSelectedJob(null)
    }, 3000)
  }

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
              RECRUITMENT
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            JOIN THE <span className="text-red-500">CYBER SPACE</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono">
            We're building the future of security. Join the team defending the digital frontier.
          </p>
        </motion.div>

        {/* Culture Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 p-8 bg-gradient-to-br from-red-950/20 to-black border-2 border-red-500"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-mono">
            WHY <span className="text-red-500">BLACK BYT3</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-black/50 border border-red-900/50">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Real Impact</h3>
              <p className="text-gray-400 text-sm">
                Work on critical infrastructure, Fortune 500s, and startups changing the world.
              </p>
            </div>
            <div className="p-6 bg-black/50 border border-red-900/50">
              <div className="text-4xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Growth Path</h3>
              <p className="text-gray-400 text-sm">
                From L1 trainee to L5 admin. Clear progression, continuous learning, cert sponsorship.
              </p>
            </div>
            <div className="p-6 bg-black/50 border border-red-900/50">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Bleeding Edge</h3>
              <p className="text-gray-400 text-sm">
                Access Black Labs hardware, AI research projects, and 0-day research.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            OPEN <span className="text-red-500">POSITIONS</span>
          </h2>

          <div className="space-y-4">
            {OPEN_POSITIONS.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="border-2 border-red-900/50 hover:border-red-500 transition-all"
              >
                <button
                  onClick={() => setSelectedJob(selectedJob === i ? null : i)}
                  className="w-full p-6 text-left bg-gradient-to-r from-gray-900 to-black hover:from-gray-800 hover:to-black transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-2xl font-bold text-white font-mono">
                          {job.title}
                        </h3>
                        <span className={`px-3 py-1 text-xs font-mono border ${
                          job.type === 'Full-time'
                            ? 'bg-green-900/50 text-green-400 border-green-500'
                            : job.type === 'Internship'
                            ? 'bg-blue-900/50 text-blue-400 border-blue-500'
                            : 'bg-yellow-900/50 text-yellow-400 border-yellow-500'
                        }`}>
                          {job.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                        <span>📍 {job.location}</span>
                        <span className="text-red-400">🔒 {job.clearance}</span>
                      </div>
                    </div>
                    <span className="text-red-500 text-2xl flex-shrink-0">
                      {selectedJob === i ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {selectedJob === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-black"
                  >
                    <div className="p-6 pt-0 space-y-4">
                      <div>
                        <div className="text-red-400 text-sm font-mono mb-2">&gt; REQUIREMENTS:</div>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-red-500">▸</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-red-400 text-sm font-mono mb-2">&gt; RESPONSIBILITIES:</div>
                        <ul className="space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-red-500">▸</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        onClick={() => {
                          setFormData({ ...formData, position: job.title })
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="mt-4 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-sm transition-all"
                      >
                        APPLY NOW →
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          id="application-form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="p-8 bg-black border-2 border-red-500"
        >
          <h2 className="text-3xl font-bold text-white mb-6 font-mono">
            SUBMIT <span className="text-red-500">APPLICATION</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  POSITION APPLYING FOR *
                </label>
                <select
                  required
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                >
                  <option value="">Select position...</option>
                  {OPEN_POSITIONS.map(job => (
                    <option key={job.title} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  LINKEDIN
                </label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/..."
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  GITHUB
                </label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  placeholder="https://github.com/..."
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-red-400 font-mono text-sm mb-2">
                  PORTFOLIO
                </label>
                <input
                  type="url"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  placeholder="https://..."
                  className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-red-400 font-mono text-sm mb-2">
                COVER LETTER *
              </label>
              <textarea
                required
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                rows={6}
                placeholder="Tell us why you want to join Black Byt3..."
                className="w-full p-3 bg-gray-900 border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-red-400 font-mono text-sm mb-2">
                RESUME / CV *
              </label>
              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                className="w-full p-3 bg-gray-900 border border-red-900/50 text-gray-400 font-mono focus:border-red-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-mono text-lg transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"
            >
              SUBMIT APPLICATION →
            </button>
          </form>
        </motion.div>

        {/* Success Alert */}
        {showAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-red-600/20 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="p-12 bg-black border-4 border-green-500 text-center max-w-md"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
                className="text-8xl mb-4"
              >
                ✓
              </motion.div>
              <h2 className="text-3xl font-bold text-green-400 mb-4 font-mono">
                APPLICATION RECEIVED
              </h2>
              <p className="text-gray-300">
                Your application has been transmitted to the Command Center.
                We'll review and respond within 5-7 business days.
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

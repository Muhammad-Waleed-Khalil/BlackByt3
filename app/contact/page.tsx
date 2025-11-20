'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    time: '',
    file: null as File | null
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Trigger RED ALERT animation
    setShowAlert(true)

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowAlert(false)
      alert('Message received. We\'ll be in touch.')
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-20 relative">
      {/* RED ALERT Overlay */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-red-600/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-8xl text-red-500 mb-4"
            >
              ⚠
            </motion.div>
            <h2 className="text-4xl font-bold text-red-500 mb-2 font-mono">
              INTRUSION DETECTED
            </h2>
            <p className="text-white font-mono">
              Just kidding. Message sent. We'll be in touch.
            </p>
          </motion.div>
        </motion.div>
      )}

      <div className="max-w-5xl mx-auto">
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
              SECURE CHANNEL
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            ESTABLISH <span className="text-red-500">UPLINK</span>
          </h1>

          <p className="text-gray-400 text-xl font-mono">
            Let's secure your next move.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/50"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Name & Company */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  NAME <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  COMPANY <span className="text-gray-600">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  EMAIL <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  PHONE <span className="text-gray-600">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Service Interested */}
            <div>
              <label className="block text-red-400 text-sm font-mono mb-2">
                SERVICE INTERESTED <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
              >
                <option value="">Select a service...</option>
                <option value="penetration-testing">Penetration Testing</option>
                <option value="red-teaming">Red Teaming</option>
                <option value="threat-intel">Threat Intelligence</option>
                <option value="incident-response">Incident Response</option>
                <option value="managed-security">Managed Security</option>
                <option value="ai-solutions">AI & ML Solutions</option>
                <option value="hardware-tools">Hardware Security</option>
                <option value="training">Training & Academy</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-red-400 text-sm font-mono mb-2">
                MESSAGE / PROJECT BRIEF <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors resize-none"
                placeholder="Describe your security needs..."
              />
            </div>

            {/* Row 3: Budget & Preferred Time */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  BUDGET <span className="text-gray-600">(Optional)</span>
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range...</option>
                  <option value="<5k">&lt; $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-red-400 text-sm font-mono mb-2">
                  PREFERRED CONTACT TIME <span className="text-gray-600">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="e.g., 9AM-5PM EST"
                />
              </div>
            </div>

            {/* File Attachment */}
            <div>
              <label className="block text-red-400 text-sm font-mono mb-2">
                ATTACH FILE <span className="text-gray-600">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full px-4 py-3 bg-black border border-red-900/50 text-white font-mono focus:border-red-500 focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-red-600 file:text-white file:font-mono file:text-sm file:cursor-pointer hover:file:bg-red-700"
                />
              </div>
              <p className="text-gray-600 text-xs mt-2 font-mono">
                Max 10MB. Accepted: PDF, DOC, DOCX, ZIP
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-mono text-lg transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE →'}
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 bg-black/50 border border-red-900/30">
            <h3 className="text-red-400 font-mono text-sm mb-2">EMAIL</h3>
            <a href="mailto:contact@blackbyt3.com" className="text-white font-mono hover:text-red-500 transition-colors">
              contact@blackbyt3.com
            </a>
          </div>

          <div className="p-6 bg-black/50 border border-red-900/30">
            <h3 className="text-red-400 font-mono text-sm mb-2">PHONE</h3>
            <a href="tel:+1234567890" className="text-white font-mono hover:text-red-500 transition-colors">
              +1 (234) 567-890
            </a>
          </div>

          <div className="p-6 bg-black/50 border border-red-900/30">
            <h3 className="text-red-400 font-mono text-sm mb-2">SOCIAL</h3>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-red-500 transition-colors">Twitter</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">LinkedIn</a>
              <a href="#" className="text-white hover:text-red-500 transition-colors">GitHub</a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

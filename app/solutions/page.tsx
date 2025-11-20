'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SOLUTIONS_INDUSTRIES } from '@/constants'

const INDUSTRIES_DETAILS = [
  {
    name: 'Enterprise Security',
    description: 'Fortune 500 companies need enterprise-grade security posture assessments, compliance audits, and continuous threat monitoring.',
    services: ['Red Team Exercises', 'SOC-as-a-Service', 'GRC Consulting', 'Executive Risk Briefings'],
    icon: '🏢'
  },
  {
    name: 'Startups & SaaS',
    description: 'Fast-moving startups building SaaS products need rapid security validation before Series A, compliance for SOC 2, and secure SDLC integration.',
    services: ['Pre-funding Security Audits', 'SOC 2 Compliance', 'Secure CI/CD Pipeline', 'API Security Testing'],
    icon: '🚀'
  },
  {
    name: 'Educational Institutions',
    description: 'Universities and K-12 schools face constant threats from ransomware, data breaches, and insider threats while managing thousands of devices.',
    services: ['Campus Network Pentesting', 'Student Data Protection', 'Faculty Training', 'Incident Response Planning'],
    icon: '🎓'
  },
  {
    name: 'IoT & Embedded Systems',
    description: 'Connected devices in manufacturing, healthcare, and smart homes are prime targets. We break firmware, find backdoors, and harden systems.',
    services: ['Firmware Reverse Engineering', 'Hardware Exploitation', 'RF Security Testing', 'Secure Boot Implementation'],
    icon: '📡'
  },
  {
    name: 'Gov & Critical Infrastructure',
    description: 'Government agencies and critical infrastructure operators (power, water, telecom) require top-tier security clearances and specialized expertise.',
    services: ['ICS/SCADA Security', 'Classified Network Testing', 'Supply Chain Risk Assessment', 'APT Detection'],
    icon: '🏛️'
  }
]

export default function SolutionsPage() {
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
              TARGET SECTORS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SOLUTIONS / <span className="text-red-500">INDUSTRIES</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-mono">
            Tailored security operations for every sector. From <span className="text-red-500">enterprise boardrooms</span> to <span className="text-red-500">embedded firmware</span>.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="space-y-8">
          {INDUSTRIES_DETAILS.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-red-900/30 hover:border-red-500 transition-all"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-6xl">{industry.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-3 font-mono">
                    {industry.name}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Services */}
                  <div>
                    <div className="text-red-400 text-sm font-mono mb-3">&gt; KEY SERVICES:</div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {industry.services.map((service, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-400">
                          <span className="text-red-500">▸</span>
                          <span className="text-sm">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            DON'T SEE YOUR INDUSTRY?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We adapt our methodology to any sector. Custom threat modeling and bespoke security assessments available.
          </p>
          <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]">
            DISCUSS YOUR NEEDS →
          </button>
        </motion.div>
      </div>
    </div>
  )
}

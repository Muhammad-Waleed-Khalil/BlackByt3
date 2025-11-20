'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ShurikenCard from '@/components/ShurikenCard'

const COURSES = [
  {
    title: 'Cyber Security Mastery',
    description: 'Complete offensive security training from reconnaissance to post-exploitation. Master the MITRE ATT&CK framework.',
    duration: '12 weeks',
    level: 'ADVANCED' as const,
    price: '$2,499',
    skills: ['Penetration Testing', 'Red Teaming', 'Exploit Development', 'Network Hacking', 'Web App Security', 'Active Directory']
  },
  {
    title: 'Practical AWS Certified',
    description: 'Hands-on AWS security hardening, cloud pentesting, and exploitation. Includes AWS certification voucher.',
    duration: '8 weeks',
    level: 'INTERMEDIATE' as const,
    price: '$1,799',
    skills: ['Cloud Security', 'AWS IAM', 'Container Escapes', 'S3 Exploitation', 'Lambda Security', 'CloudTrail Forensics']
  },
  {
    title: 'ML Security - Hacker Way',
    description: 'Adversarial machine learning, model poisoning, evasion attacks, and securing AI systems from a red team perspective.',
    duration: '10 weeks',
    level: 'EXPERT' as const,
    price: '$2,999',
    skills: ['Adversarial ML', 'Model Poisoning', 'Evasion Attacks', 'Data Poisoning', 'AI Red Teaming', 'Secure ML Pipelines']
  },
  {
    title: 'Web App Hacking 101',
    description: 'From SQL injection to blind XXE. Practical OWASP Top 10 exploitation with real-world labs.',
    duration: '6 weeks',
    level: 'BEGINNER' as const,
    price: '$999',
    skills: ['SQL Injection', 'XSS', 'CSRF', 'SSRF', 'XXE', 'Deserialization']
  },
  {
    title: 'Hardware Hacking Lab',
    description: 'Physical device exploitation, firmware extraction, UART/SPI/JTAG debugging, and IoT security.',
    duration: '8 weeks',
    level: 'ADVANCED' as const,
    price: '$2,199',
    skills: ['Firmware Analysis', 'UART Exploitation', 'Bus Pirate', 'JTAG Debugging', 'RF Hacking', 'Side-channel Attacks']
  },
  {
    title: 'OCMP - 1:1 Mentorship',
    description: 'One-to-One Cyber Mentor Program. Personalized roadmap, live labs, career guidance, and mock interviews.',
    duration: 'Flexible',
    level: 'INTERMEDIATE' as const,
    price: '$499/month',
    skills: ['Career Guidance', 'Custom Labs', 'Resume Review', 'Interview Prep', 'Portfolio Building', 'Job Placement Support']
  }
]

export default function AcademyPage() {
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
              TRAINING GROUNDS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            THE <span className="text-red-500">ACADEMY</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl font-mono">
            Learn by Doing — <span className="text-red-500">Practical Cyber & Cloud Skills</span>
          </p>

          <div className="mt-6 p-4 bg-red-950/20 border border-red-900/50 font-mono text-sm">
            <div className="flex items-start gap-3">
              <span className="text-red-500 mt-1">⚔</span>
              <div className="text-gray-400">
                Each course is a <span className="text-red-500">spinning shuriken</span>. Click to throw and reveal full details. Real-world labs, live machines, and hands-on exploitation.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Shurikens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          {COURSES.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ShurikenCard course={course} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Why Black Byt3 Academy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20 p-8 bg-gradient-to-br from-red-950/30 to-black border border-red-900/50 backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold text-white mb-8 font-mono">
            WHY TRAIN WITH <span className="text-red-500">BLACK BYT3</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-red-500 text-2xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Hands-On Labs</h3>
              <p className="text-gray-400 text-sm">
                No theory lectures. Every lesson is a live exploitation lab. Break real vulnerable machines.
              </p>
            </div>

            <div>
              <div className="text-red-500 text-2xl mb-3">🎯</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Industry Experts</h3>
              <p className="text-gray-400 text-sm">
                Taught by active penetration testers and red teamers. Learn the exact TTPs used in real engagements.
              </p>
            </div>

            <div>
              <div className="text-red-500 text-2xl mb-3">🏆</div>
              <h3 className="text-xl font-bold text-white mb-2 font-mono">Certification</h3>
              <p className="text-gray-400 text-sm">
                Black Byt3 Certified credentials recognized by security firms. AWS vouchers included.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Enrollment CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="text-center p-12 bg-black border-2 border-red-500"
        >
          <h3 className="text-3xl font-bold text-white mb-4 font-mono">
            READY TO BREACH?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto font-mono text-sm">
            Limited seats available. Enrollments open quarterly. Early bird discounts for the next cohort.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-mono transition-all hover:shadow-[0_0_20px_rgba(255,0,0,0.5)] text-sm">
              ENROLL NOW →
            </button>
            <button className="px-8 py-3 border border-red-600 text-red-400 hover:bg-red-600/20 font-mono transition-all text-sm">
              DOWNLOAD SYLLABUS
            </button>
            <button className="px-8 py-3 border border-gray-700 text-gray-400 hover:bg-gray-800 font-mono transition-all text-sm">
              SCHEDULE DEMO
            </button>
          </div>
        </motion.div>

        {/* Student Testimonials (Coming Soon) */}
        <div className="mt-12 p-6 bg-black/30 border border-gray-800">
          <div className="font-mono text-xs text-gray-600">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-red-500">█</span>
              <span>STUDENT TESTIMONIALS MODULE</span>
              <span className="text-red-500">█</span>
            </div>
            <div className="text-gray-700">
              [Loading testimonials from previous cohorts... Authenticated via blockchain signatures]
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

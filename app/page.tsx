'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Target, Zap, Cpu, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { HERO_CONTENT, WHY_CHOOSE_CARDS } from '@/constants'

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white glitch-hover">
              {HERO_CONTENT.title}
            </h1>
            <p className="text-2xl md:text-4xl text-blood-red font-mono tracking-wider">
              {HERO_CONTENT.tagline}
            </p>
            <p className="text-xl md:text-2xl text-gray-400">
              {HERO_CONTENT.subtagline}
            </p>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed mt-6">
              {HERO_CONTENT.description}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blood-red text-white font-bold rounded-none border-2 border-blood-red red-glow-intense hover:bg-transparent transition-all"
                >
                  {HERO_CONTENT.ctaPrimary} <ChevronRight className="inline ml-2" />
                </motion.button>
              </Link>
              <Link href="/academy">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-blood-red font-bold rounded-none border-2 border-blood-red hover:bg-blood-red hover:text-white transition-all"
                >
                  {HERO_CONTENT.ctaSecondary} <ChevronRight className="inline ml-2" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Black Byt3 */}
      <section className="relative py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center glitch-hover"
          >
            WHY CHOOSE <span className="text-blood-red">BLACK BYT3</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_CARDS.map((card, index) => (
              <FeatureCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-black to-dark-red/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-16 text-center glitch-hover"
          >
            FEATURED <span className="text-blood-red">SERVICES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServicePreview
              icon={<Shield className="w-12 h-12" />}
              title="Penetration Testing"
              description="Real attack simulations, clear remediation."
              href="/services/penetration-testing"
            />
            <ServicePreview
              icon={<Target className="w-12 h-12" />}
              title="Red Teaming"
              description="Full-scope adversary emulation."
              href="/services/red-teaming"
            />
            <ServicePreview
              icon={<Cpu className="w-12 h-12" />}
              title="AI Solutions"
              description="Custom ML & automation for security operations."
              href="/services/ai-solutions"
            />
            <ServicePreview
              icon={<Zap className="w-12 h-12" />}
              title="Hardware Tools"
              description="Offensive hardware toolkits and firmware analysis."
              href="/services/hardware-security"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent text-blood-red font-bold rounded-none border-2 border-blood-red hover:bg-blood-red hover:text-white transition-all"
              >
                VIEW ALL SERVICES <ChevronRight className="inline ml-2" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ card, index }: { card: { title: string; desc: string }, index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-black/40 border border-red-900/30 p-6 backdrop-blur-sm hover:border-blood-red transition-all vhs-enter overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blood-red/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 glitch-hover">{card.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blood-red to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform" />
    </motion.div>
  )
}

function ServicePreview({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        className="group relative bg-black/60 border border-red-900/30 p-8 backdrop-blur-sm hover:border-blood-red transition-all cursor-pointer overflow-hidden"
      >
        <div className="absolute inset-0 bg-blood-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
          <div className="text-blood-red group-hover:text-white transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white glitch-hover">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blood-red to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform" />
      </motion.div>
    </Link>
  )
}

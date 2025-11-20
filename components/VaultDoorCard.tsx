'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import VaultDoor3D from './VaultDoor3D'
import VaultDoorParticles from './VaultDoorParticles'
import { ServiceItem } from '@/types'

interface VaultDoorCardProps {
  service: ServiceItem
}

const VaultDoorCard: React.FC<VaultDoorCardProps> = ({ service }) => {
  const [isLocked, setIsLocked] = useState(true)
  const [isExploding, setIsExploding] = useState(false)
  const [explosionProgress, setExplosionProgress] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const explosionStartRef = useRef<number>(0)
  const animationFrameRef = useRef<number>()

  const handleUnlock = () => {
    if (!isLocked) {
      // Close vault
      setShowContent(false)
      setIsExploding(false)
      setExplosionProgress(0)
      setIsLocked(true)
      return
    }

    // Trigger explosion
    setIsLocked(false)
    setIsExploding(true)
    explosionStartRef.current = Date.now()

    const animate = () => {
      const elapsed = Date.now() - explosionStartRef.current
      setExplosionProgress(elapsed)

      if (elapsed < 1000) {
        animationFrameRef.current = requestAnimationFrame(animate)
      } else {
        setShowContent(true)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className="relative group">
      {/* 3D Vault Door Container */}
      <div
        className={`relative h-96 bg-gradient-to-br from-black via-gray-900 to-black border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
          isLocked
            ? 'border-red-900/50 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]'
            : 'border-red-500/30'
        }`}
        onClick={handleUnlock}
      >
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent animate-pulse pointer-events-none" />

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="absolute inset-0"
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#ff0000" />
          <pointLight position={[-10, -10, 5]} intensity={0.3} color="#ff0000" />

          <VaultDoor3D
            isExploded={isExploding}
            explosionProgress={explosionProgress}
          />

          <VaultDoorParticles
            isExploding={isExploding}
            explosionProgress={explosionProgress}
          />
        </Canvas>

        {/* Lock Status Overlay */}
        {isLocked && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className="text-red-500 font-mono text-sm mb-2 tracking-widest">
                [ CLASSIFIED ]
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <div className="text-red-400 font-mono text-xs tracking-wider">
                {service.category.toUpperCase()}
              </div>
              <div className="mt-6 text-gray-500 font-mono text-xs animate-pulse">
                &gt; CLICK TO BREACH &lt;
              </div>
            </motion.div>
          </div>
        )}

        {/* Red warning lights */}
        {isLocked && (
          <>
            <div className="absolute top-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" />
            <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_#ff0000]" style={{ animationDelay: '1.5s' }} />
          </>
        )}
      </div>

      {/* Content Chamber (revealed after explosion) */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 p-6 bg-black/90 border border-red-900/50 backdrop-blur-sm"
          >
            {/* Terminal-style content */}
            <div className="font-mono text-sm">
              <div className="text-red-500 mb-4 flex items-center gap-2">
                <span className="animate-pulse">█</span>
                <span>VAULT BREACHED — CONTENTS DECLASSIFIED</span>
                <span className="animate-pulse">█</span>
              </div>

              <div className="space-y-4 text-gray-300">
                <div>
                  <div className="text-red-400 text-xs mb-1">&gt; DESCRIPTION:</div>
                  <div className="pl-4 text-white">{service.description}</div>
                </div>

                {service.fullDetails && (
                  <>
                    <div>
                      <div className="text-red-400 text-xs mb-1">&gt; WHAT:</div>
                      <div className="pl-4">{service.fullDetails.what}</div>
                    </div>

                    <div>
                      <div className="text-red-400 text-xs mb-1">&gt; HOW:</div>
                      <div className="pl-4">{service.fullDetails.how}</div>
                    </div>

                    <div>
                      <div className="text-red-400 text-xs mb-1">&gt; DELIVERABLE:</div>
                      <div className="pl-4">{service.fullDetails.deliverable}</div>
                    </div>
                  </>
                )}

                {service.details && (
                  <div>
                    <div className="text-red-400 text-xs mb-1">&gt; CAPABILITIES:</div>
                    <ul className="pl-4 space-y-1">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">▸</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-red-900/30">
                  <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-mono text-xs transition-colors">
                    REQUEST ENGAGEMENT →
                  </button>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-600 flex items-center gap-2">
                <span className="text-red-500 animate-pulse">█</span>
                <span>Click vault to re-seal</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default VaultDoorCard

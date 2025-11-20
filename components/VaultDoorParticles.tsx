'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface VaultDoorParticlesProps {
  isExploding: boolean
  explosionProgress: number
}

const VaultDoorParticles: React.FC<VaultDoorParticlesProps> = ({ isExploding, explosionProgress }) => {
  const particlesRef = useRef<THREE.Points>(null)

  const particleCount = 200
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = []

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2
      positions[i * 3 + 2] = 0

      velocities.push({
        x: (Math.random() - 0.5) * 20,
        y: (Math.random() - 0.5) * 20,
        z: Math.random() * 15 + 5
      })
    }

    return { positions, velocities }
  }, [])

  useFrame(() => {
    if (!particlesRef.current || !isExploding) return

    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    const progress = Math.min(explosionProgress / 1000, 1)

    for (let i = 0; i < particleCount; i++) {
      const velocity = particles.velocities[i]

      positions[i * 3] = particles.positions[i * 3] + velocity.x * progress
      positions[i * 3 + 1] = particles.positions[i * 3 + 1] + velocity.y * progress - 9.8 * progress * progress
      positions[i * 3 + 2] = particles.positions[i * 3 + 2] + velocity.z * progress
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true

    // Fade out
    if (particlesRef.current.material && 'opacity' in particlesRef.current.material) {
      particlesRef.current.material.opacity = Math.max(0, 1 - progress * 1.5)
    }
  })

  if (!isExploding) return null

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ff0000"
        transparent
        opacity={1}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

export default VaultDoorParticles

'use client'

import React, { useEffect, useRef } from 'react'

interface ParticleSystemProps {
  intensity?: 'low' | 'medium' | 'high'
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ intensity = 'medium' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []
    const maxParticles = intensity === 'low' ? 20 : intensity === 'medium' ? 40 : 80

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.5 + 0.2,
        life: 0,
        maxLife: Math.random() * 100 + 50,
        size: Math.random() * 2 + 1,
      }
    }

    // Initialize particles
    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, index) => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        // Reset particle if dead or out of bounds
        if (particle.life > particle.maxLife || particle.y > canvas.height || particle.x < 0 || particle.x > canvas.width) {
          particles[index] = createParticle()
          return
        }

        // Draw particle
        const opacity = 1 - (particle.life / particle.maxLife)
        ctx.fillStyle = `rgba(255, ${Math.floor(Math.random() * 50)}, 0, ${opacity * 0.6})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Draw faint trail
        ctx.strokeStyle = `rgba(255, 0, 0, ${opacity * 0.2})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(particle.x - particle.vx * 5, particle.y - particle.vy * 5)
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [intensity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9994]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

export default ParticleSystem

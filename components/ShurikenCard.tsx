'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Course {
  title: string
  description: string
  duration: string
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT'
  price: string
  skills: string[]
}

interface ShurikenCardProps {
  course: Course
  index: number
}

const ShurikenCard: React.FC<ShurikenCardProps> = ({ course, index }) => {
  const [isThrown, setIsThrown] = useState(false)
  const [impactPosition, setImpactPosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleThrow = () => {
    if (isThrown) {
      // Reset
      setIsThrown(false)
      return
    }

    // Calculate throw direction (always throws to the right)
    const rect = cardRef.current?.getBoundingClientRect()
    if (rect) {
      setImpactPosition({
        x: window.innerWidth - rect.right + 100,
        y: (Math.random() - 0.5) * 200
      })
    }

    setIsThrown(true)
  }

  const levelColors = {
    BEGINNER: 'text-green-500',
    INTERMEDIATE: 'text-yellow-500',
    ADVANCED: 'text-orange-500',
    EXPERT: 'text-red-500'
  }

  return (
    <div ref={cardRef} className="relative group perspective-1000">
      <AnimatePresence mode="wait">
        {!isThrown ? (
          // Spinning Shuriken (idle state)
          <motion.div
            key="shuriken"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            exit={{
              opacity: 0,
              x: impactPosition.x,
              y: impactPosition.y,
              rotate: 1080,
              scale: 0.3
            }}
            transition={{
              opacity: { duration: 0.3 },
              rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
              exit: { duration: 0.8, ease: 'easeInOut' }
            }}
            onClick={handleThrow}
            className="relative w-full h-96 cursor-pointer"
          >
            {/* Shuriken Design */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-black border-4 border-red-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.6)]">
                    <div className="w-8 h-8 bg-red-600 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Shuriken blades (8 points) */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 origin-left"
                    style={{
                      transform: `rotate(${angle}deg) translateX(-50%)`,
                      width: '100px',
                      height: '2px'
                    }}
                  >
                    <div className="absolute right-0 w-0 h-0 border-l-[40px] border-l-red-500 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                  </div>
                ))}

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
            </div>

            {/* Course Title Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center mt-64">
                <div className={`text-xs font-mono tracking-widest mb-1 ${levelColors[course.level]}`}>
                  [{course.level}]
                </div>
                <h3 className="text-white font-bold text-xl mb-1 font-mono">
                  {course.title}
                </h3>
                <div className="text-red-500 font-mono text-sm">
                  {course.duration}
                </div>
              </div>
            </div>

            {/* Throw Instruction */}
            <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-xs font-mono text-gray-500 bg-black/80 px-3 py-1 border border-red-900/50">
                &gt; CLICK TO THROW &lt;
              </span>
            </div>
          </motion.div>
        ) : (
          // Course Details (after throw impact)
          <motion.div
            key="details"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            onClick={handleThrow}
            className="relative p-8 bg-gradient-to-br from-gray-900 to-black border-2 border-red-500 cursor-pointer min-h-96"
          >
            {/* Impact cracks effect */}
            <div className="absolute top-4 right-4">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-red-500 text-2xl"
              >
                ✸
              </motion.div>
            </div>

            {/* Stuck shuriken indicator */}
            <div className="absolute -top-3 -right-3 w-12 h-12">
              {[0, 90, 180, 270].map((angle, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{
                    transform: `rotate(${angle}deg) translateX(-50%)`,
                    width: '25px',
                    height: '1px'
                  }}
                >
                  <div className="absolute right-0 w-0 h-0 border-l-[15px] border-l-red-500 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                </div>
              ))}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-600 rounded-full" />
            </div>

            {/* Course Content */}
            <div className="font-mono">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-red-500" />
                <div>
                  <div className={`text-xs tracking-widest mb-1 ${levelColors[course.level]}`}>
                    LEVEL: {course.level}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {course.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="text-red-400 text-xs mb-1">&gt; DESCRIPTION:</div>
                  <div className="pl-4 text-gray-300">{course.description}</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-400 text-xs mb-1">&gt; DURATION:</div>
                    <div className="pl-4 text-gray-300">{course.duration}</div>
                  </div>
                  <div>
                    <div className="text-red-400 text-xs mb-1">&gt; PRICE:</div>
                    <div className="pl-4 text-green-400 font-bold">{course.price}</div>
                  </div>
                </div>

                <div>
                  <div className="text-red-400 text-xs mb-1">&gt; SKILLS COVERED:</div>
                  <div className="pl-4 grid grid-cols-2 gap-2 mt-2">
                    {course.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <span className="text-red-500">▸</span>
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-red-900/30 flex gap-3">
                  <button className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs transition-all hover:shadow-[0_0_15px_rgba(255,0,0,0.5)]">
                    ENROLL NOW →
                  </button>
                  <button className="px-4 py-2 border border-red-600 text-red-400 hover:bg-red-600/20 text-xs transition-all">
                    SYLLABUS
                  </button>
                </div>
              </div>

              {/* Red scanning line animation */}
              <motion.div
                className="absolute left-0 right-0 h-px bg-red-500"
                initial={{ top: 0, opacity: 0.7 }}
                animate={{ top: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Click to retrieve hint */}
            <div className="absolute bottom-3 right-3 text-xs text-gray-600 font-mono">
              Click to retrieve shuriken
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Red trail particles (only visible during throw) */}
      {isThrown && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-red-500 rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              initial={{ x: 0, y: 0, scale: 1 }}
              animate={{
                x: (impactPosition.x / 10) * (i + 1),
                y: (impactPosition.y / 10) * (i + 1) + (Math.random() - 0.5) * 50,
                scale: 0,
              }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
              }}
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default ShurikenCard

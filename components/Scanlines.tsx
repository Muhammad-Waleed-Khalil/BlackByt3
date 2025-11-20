'use client'

import React from 'react'

interface ScanlinesProps {
  aggressive?: boolean
}

const Scanlines: React.FC<ScanlinesProps> = ({ aggressive = false }) => {
  return (
    <>
      {/* Horizontal Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[9995]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.03) 2px, rgba(255, 0, 0, 0.03) 4px)',
          opacity: aggressive ? 0.3 : 0.1,
        }}
      />

      {/* Animated Scanline */}
      <div className={`scanline ${aggressive ? 'scanline-fast' : ''}`} />
    </>
  )
}

export default Scanlines

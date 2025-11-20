'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Scene3D from '@/components/Scene3D'
import Terminal from '@/components/Terminal'
import CustomCursor from '@/components/CustomCursor'
import Navigation from '@/components/Navigation'
import LoadingSequence from '@/components/LoadingSequence'
import Scanlines from '@/components/Scanlines'
import ParticleSystem from '@/components/ParticleSystem'

interface GlobalState {
  isRedpill: boolean
  audioEnabled: boolean
  isRootAccess: boolean
  nuclearMode: boolean
  screenShake: boolean
}

interface GlobalContext extends GlobalState {
  toggleRedpill: () => void
  toggleAudio: () => void
  setRootAccess: (value: boolean) => void
  setNuclearMode: (value: boolean) => void
  triggerScreenShake: () => void
}

const GlobalStateContext = createContext<GlobalContext | undefined>(undefined)

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext)
  if (!context) {
    throw new Error('useGlobalState must be used within GlobalStateProvider')
  }
  return context
}

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const [isBooting, setIsBooting] = useState(true)
  const [state, setState] = useState<GlobalState>({
    isRedpill: false,
    audioEnabled: true,
    isRootAccess: false,
    nuclearMode: false,
    screenShake: false,
  })

  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    // Boot sequence timer
    const timer = setTimeout(() => {
      setIsBooting(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const toggleRedpill = () => {
    setState(prev => ({ ...prev, isRedpill: !prev.isRedpill }))
  }

  const toggleAudio = () => {
    setState(prev => ({ ...prev, audioEnabled: !prev.audioEnabled }))
  }

  const setRootAccess = (value: boolean) => {
    setState(prev => ({ ...prev, isRootAccess: value }))
  }

  const setNuclearMode = (value: boolean) => {
    setState(prev => ({ ...prev, nuclearMode: value }))
  }

  const triggerScreenShake = () => {
    setState(prev => ({ ...prev, screenShake: true }))
    setTimeout(() => {
      setState(prev => ({ ...prev, screenShake: false }))
    }, 500)
  }

  const handleNavigate = (section: string) => {
    router.push(`/${section === 'home' ? '' : section}`)
  }

  const contextValue: GlobalContext = {
    ...state,
    toggleRedpill,
    toggleAudio,
    setRootAccess,
    setNuclearMode,
    triggerScreenShake,
  }

  if (isBooting) {
    return <LoadingSequence />
  }

  return (
    <GlobalStateContext.Provider value={contextValue}>
      <div className={state.screenShake ? 'screen-shake' : ''}>
        {/* Custom Cursor */}
        <CustomCursor isRootAccess={state.isRootAccess} />

        {/* 3D Background Scene */}
        <Scene3D isRedpill={state.isRedpill} />

        {/* Scanlines */}
        <Scanlines aggressive={state.isRedpill} />

        {/* Particle System */}
        <ParticleSystem intensity={state.isRedpill ? 'high' : 'medium'} />

        {/* Nuclear Mode Overlay */}
        {state.nuclearMode && <div className="nuclear-alert" />}

        {/* Navigation */}
        <Navigation currentPath={pathname || '/'} />

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Terminal */}
        <Terminal
          onNavigate={handleNavigate}
          onToggleRedpill={toggleRedpill}
          onSetRootAccess={setRootAccess}
          onSetNuclearMode={setNuclearMode}
          onTriggerScreenShake={triggerScreenShake}
          playSfx={(type) => {
            if (!state.audioEnabled) return
            // SFX logic moved to Terminal component
          }}
        />
      </div>
    </GlobalStateContext.Provider>
  )
}

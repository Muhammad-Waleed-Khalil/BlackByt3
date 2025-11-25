import { useEffect, useState, useCallback, useRef } from 'react';
import { AppProps } from 'next/app';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

import '../styles/globals.css';

// Components
import Scene3D from '../components/Scene3D';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
import LegalTerminal from '../components/LegalTerminal';
import Terminal from '../components/Terminal';
import ScrollToTop from '../components/ScrollToTop';
import { ModalType } from '../types';

// Simple Audio Synth for SFX
const AudioEngine = () => {
  const [ctx, setCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    setCtx(new (window.AudioContext || (window as any).webkitAudioContext)());
  }, []);

  const playTone = useCallback((freq: number, type: 'sine' | 'square' | 'sawtooth', duration: number) => {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  }, [ctx]);

  return {
    playTyping: () => playTone(800 + Math.random() * 200, 'square', 0.05),
    playError: () => {
      playTone(150, 'sawtooth', 0.3);
      setTimeout(() => playTone(100, 'sawtooth', 0.3), 150);
    },
    playSuccess: () => {
      playTone(1000, 'sine', 0.1);
      setTimeout(() => playTone(2000, 'sine', 0.2), 100);
    }
  };
};

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => {
  const [appState, setAppState] = useState({
    isRedpill: false,
    audioEnabled: true,
    activeModal: null as ModalType,
    isBooting: true,
    bootText: [] as string[],
  });

  const lenisRef = useRef<Lenis | null>(null);
  const { playTyping, playError, playSuccess } = AudioEngine();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Boot sequence
  useEffect(() => {
    const hasBooted = sessionStorage.getItem('blackbt3_booted');
    if (hasBooted === 'true') {
      setAppState(prev => ({ ...prev, isBooting: false }));
      return;
    }

    sessionStorage.setItem('blackbt3_booted', 'true');

    const lines = [
      "INITIALIZING BLACK_BYT3 KERNEL...",
      "LOADING NEURAL SHADERS...",
      "DECRYPTING CONTENT PACKS...",
      "BYPASSING SECURITY LAYER 9...",
      "ESTABLISHING SECURE UPLINK...",
      "ACCESS GRANTED."
    ];

    let delay = 0;
    lines.forEach((line, index) => {
      setTimeout(() => {
        setAppState(prev => ({ ...prev, bootText: [...prev.bootText, line] }));
        playTyping();
        if (index === lines.length - 1) {
          setTimeout(() => {
            setAppState(prev => ({ ...prev, isBooting: false }));
            playSuccess();
          }, 800);
        }
      }, delay);
      delay += Math.random() * 400 + 200;
    });
  }, [playTyping, playSuccess]);

  // Initialize Lenis after boot
  useEffect(() => {
    if (appState.isBooting) return;

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      lerp: 0.08,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false
    });

    const raf = (time: number) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, [appState.isBooting]);

  const handlePlaySfx = (type: 'type' | 'error' | 'success') => {
    if (type === 'type') playTyping();
    if (type === 'error') playError();
    if (type === 'success') playSuccess();
  };

  const openModal = (type: ModalType) => {
    setAppState(prev => ({ ...prev, activeModal: type }));
  };

  const closeModal = () => {
    setAppState(prev => ({ ...prev, activeModal: null }));
  };

  const handleNavigate = (section: string) => {
    router.push(section.startsWith('/') ? section : `/${section}`);
  };

  // Disable Scene3D on contact page
  const isContactPage = router.pathname === '/contact';

  if (appState.isBooting) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center font-mono text-red-600 p-8 z-[100]">
        <div className="w-full max-w-md">
          {appState.bootText.map((line, i) => (
            <div key={i} className="mb-2 border-l-2 border-red-600 pl-2 animate-pulse">
              {'>'} {line}
            </div>
          ))}
          <div className="h-1 w-32 bg-red-600 mt-4 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-900 selection:text-white ${appState.isRedpill ? 'contrast-125 brightness-125' : ''}`}>
      {!isContactPage && <Scene3D isRedpill={appState.isRedpill} />}
      <Navigation />

      {!isContactPage && (
        <>
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 origin-left"
            style={{ scaleX }}
          />
          <div className="fixed top-2 right-4 z-50 text-[10px] font-mono text-red-600 bg-black px-2 border border-red-900">
            BREACH_PROGRESS
          </div>
        </>
      )}

      <LoginModal isOpen={appState.activeModal === 'LOGIN'} onClose={closeModal} />
      <LegalTerminal
        isOpen={appState.activeModal === 'LEGAL_PRIVACY' || appState.activeModal === 'LEGAL_TERMS'}
        type={appState.activeModal === 'LEGAL_PRIVACY' ? 'PRIVACY' : 'TERMS'}
        onClose={closeModal}
      />

      <main className="relative z-10 pt-24 pointer-events-auto">
        <Component {...pageProps} onNavigate={handleNavigate} />
      </main>

      <Footer />

      <Terminal
        onNavigate={handleNavigate}
        onToggleRedpill={() => setAppState(prev => ({ ...prev, isRedpill: !prev.isRedpill }))}
        playSfx={handlePlaySfx}
      />

      <ScrollToTop />
    </div>
  );
};

export default MyApp;

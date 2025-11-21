import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Scene3D from './components/Scene3D';
import Terminal from './components/Terminal';
import Navigation from './components/Navigation';
import LoginModal from './components/LoginModal';
import LegalTerminal from './components/LegalTerminal';
import PageTransition from './components/PageTransition';
import { ModalType } from './types';
import { Globe, Shield, Users } from 'lucide-react';

// Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AcademyPage from './pages/AcademyPage';
import ArenaPage from './pages/ArenaPage';
import ProjectsPage from './pages/ProjectsPage';
import ResourcesPage from './pages/ResourcesPage';
import ShopPage from './pages/ShopPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PartnershipsPage from './pages/PartnershipsPage';
import CareersPage from './pages/CareersPage';
import SupportPortalPage from './pages/SupportPortalPage';
import LegalPage from './pages/LegalPage';

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

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);
  const [appState, setAppState] = useState({
    isRedpill: false,
    audioEnabled: true,
    activeModal: null as ModalType
  });
  
  const { playTyping, playError, playSuccess } = AudioEngine();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handlePlaySfx = (type: 'type' | 'error' | 'success') => {
    if (type === 'type') playTyping();
    if (type === 'error') playError();
    if (type === 'success') playSuccess();
  };

  useEffect(() => {
    // Check if user has already seen the boot sequence this session
    const hasBooted = sessionStorage.getItem('blackbt3_booted');

    if (hasBooted === 'true') {
      // Skip boot sequence for returning visitors
      setIsBooting(false);
      return;
    }

    // Mark that user has seen the boot sequence
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
        setBootText(prev => [...prev, line]);
        playTyping();
        if (index === lines.length - 1) {
          setTimeout(() => {
            setIsBooting(false);
            playSuccess();
          }, 800);
        }
      }, delay);
      delay += Math.random() * 400 + 200;
    });
  }, [playTyping, playSuccess]);

  const openModal = (type: ModalType) => {
    setAppState(prev => ({ ...prev, activeModal: type }));
  };

  const closeModal = () => {
    setAppState(prev => ({ ...prev, activeModal: null }));
  };

  if (isBooting) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center font-mono text-red-600 p-8 z-[100]">
        <div className="w-full max-w-md">
          {bootText.map((line, i) => (
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
    <Router>
      <div className={`bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-900 selection:text-white ${appState.isRedpill ? 'contrast-125 brightness-125' : ''}`}>
        <Scene3D isRedpill={appState.isRedpill} />
        <Navigation />
        
        {/* Global Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-50 origin-left"
          style={{ scaleX }}
        />
        <div className="fixed top-2 right-4 z-50 text-[10px] font-mono text-red-600 bg-black px-2 border border-red-900">
          BREACH_PROGRESS
        </div>

        {/* Modals */}
        <LoginModal isOpen={appState.activeModal === 'LOGIN'} onClose={closeModal} />
        <LegalTerminal 
          isOpen={appState.activeModal === 'LEGAL_PRIVACY' || appState.activeModal === 'LEGAL_TERMS'} 
          type={appState.activeModal === 'LEGAL_PRIVACY' ? 'PRIVACY' : 'TERMS'} 
          onClose={closeModal} 
        />

        <main className="relative z-10 pt-24">
          <Routes>
            <Route path="/" element={<PageTransition><HomePage onNavigate={(section) => window.location.href = `/${section}`} /></PageTransition>} />
            <Route path="/home" element={<PageTransition><HomePage onNavigate={(section) => window.location.href = `/${section}`} /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            <Route path="/solutions" element={<PageTransition><SolutionsPage /></PageTransition>} />
            <Route path="/academy" element={<PageTransition><AcademyPage /></PageTransition>} />
            <Route path="/arena" element={<PageTransition><ArenaPage /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><ProjectsPage /></PageTransition>} />
            <Route path="/resources" element={<PageTransition><ResourcesPage /></PageTransition>} />
            <Route path="/shop" element={<PageTransition><ShopPage /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
            <Route path="/partnerships" element={<PageTransition><PartnershipsPage /></PageTransition>} />
            <Route path="/careers" element={<PageTransition><CareersPage /></PageTransition>} />
            <Route path="/support" element={<PageTransition><SupportPortalPage /></PageTransition>} />
            <Route path="/legal" element={<PageTransition><LegalPage /></PageTransition>} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="py-16 border-t border-red-900/30 bg-black text-center relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-['Unica_One'] text-4xl text-gray-800 mb-8 tracking-widest">BLACK BYT3</h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12 font-mono text-xs text-gray-500">
              <button onClick={() => openModal('LEGAL_PRIVACY')} className="hover:text-red-600 transition-colors uppercase">[Privacy Policy]</button>
              <button onClick={() => openModal('LEGAL_TERMS')} className="hover:text-red-600 transition-colors uppercase">[Terms of Service]</button>
              <button className="hover:text-red-600 transition-colors uppercase">[Cookie Policy]</button>
              <button onClick={() => openModal('LOGIN')} className="hover:text-red-600 transition-colors uppercase">[Client Portal]</button>
            </div>
            
            <div className="flex justify-center gap-8 text-gray-700 mb-8">
              <Globe className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
              <Shield className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
              <Users className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
            </div>
            
            <p className="text-[10px] font-mono text-gray-800">
              SYSTEM ID: BB-2025-SECURE // UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE
            </p>
          </div>
        </footer>

        <Terminal 
          onNavigate={(section) => window.location.href = `/${section}`}
          onToggleRedpill={() => setAppState(prev => ({ ...prev, isRedpill: !prev.isRedpill }))} 
          playSfx={handlePlaySfx}
        />
      </div>
    </Router>
  );
};

export default App;

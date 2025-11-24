import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Scene3D from './components/Scene3D';
import Terminal from './components/Terminal';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import LegalTerminal from './components/LegalTerminal';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import { ModalType } from './types';

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

// Inner component that uses navigation
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const openModal = (type: ModalType) => {
    setAppState(prev => ({ ...prev, activeModal: type }));
  };

  const closeModal = () => {
    setAppState(prev => ({ ...prev, activeModal: null }));
  };

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  // Disable Scene3D on contact page for better input performance
  const isContactPage = location.pathname === '/contact';

  return (
    <div className={`bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-900 selection:text-white ${appState.isRedpill ? 'contrast-125 brightness-125' : ''}`}>
      {!isContactPage && <Scene3D isRedpill={appState.isRedpill} />}
      <Navigation />

      {/* Global Progress Bar - Disabled on contact page for performance */}
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

      {/* Modals */}
      <LoginModal isOpen={appState.activeModal === 'LOGIN'} onClose={closeModal} />
      <LegalTerminal
        isOpen={appState.activeModal === 'LEGAL_PRIVACY' || appState.activeModal === 'LEGAL_TERMS'}
        type={appState.activeModal === 'LEGAL_PRIVACY' ? 'PRIVACY' : 'TERMS'}
        onClose={closeModal}
      />

      <main className="relative z-10 pt-24 pointer-events-auto">
        <Routes>
          <Route path="/" element={<PageTransition><HomePage onNavigate={handleNavigate} /></PageTransition>} />
          <Route path="/home" element={<PageTransition><HomePage onNavigate={handleNavigate} /></PageTransition>} />
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
      <Footer />

      <Terminal
        onNavigate={handleNavigate}
        onToggleRedpill={() => setAppState(prev => ({ ...prev, isRedpill: !prev.isRedpill }))}
        playSfx={handlePlaySfx}
      />
    </div>
  );
};

// Main App component with boot sequence
const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);
  const { playTyping, playSuccess } = AudioEngine();

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
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;

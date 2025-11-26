import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';
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

// Inner component that uses navigation
const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleNavigate = (section: string) => {
    navigate(`/${section}`);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden selection:bg-red-900 selection:text-white">
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
      <LoginModal isOpen={activeModal === 'LOGIN'} onClose={closeModal} />
      <LegalTerminal
        isOpen={activeModal === 'LEGAL_PRIVACY' || activeModal === 'LEGAL_TERMS'}
        type={activeModal === 'LEGAL_PRIVACY' ? 'PRIVACY' : 'TERMS'}
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
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;

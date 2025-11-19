import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LegalTerminalProps {
  isOpen: boolean;
  type: 'PRIVACY' | 'TERMS' | null;
  onClose: () => void;
}

const LegalTerminal: React.FC<LegalTerminalProps> = ({ isOpen, type, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="w-full max-w-3xl bg-black border border-red-800 h-[80vh] flex flex-col shadow-[0_0_30px_rgba(255,0,0,0.1)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-red-900/20 border-b border-red-800">
              <span className="font-mono text-red-500 text-sm">LEGAL_DOC_{type}.txt</span>
              <button onClick={onClose} className="text-red-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 font-mono text-xs md:text-sm text-gray-400 space-y-4 selection:bg-red-900 selection:text-white scrollbar-thin scrollbar-thumb-red-900 scrollbar-track-black">
              <p className="text-red-600">LAST UPDATED: [REDACTED]</p>
              
              {type === 'PRIVACY' ? (
                <>
                  <p>1. DATA COLLECTION PROTOCOLS</p>
                  <p>Black Byt3 collects minimal telemetry data to ensure system integrity. We do not track user movements outside this domain. Any attempt to intercept transmissions will be met with countermeasures.</p>
                  <p>2. CLIENT CONFIDENTIALITY</p>
                  <p>All client data is stored in air-gapped servers encrypted with [REDACTED] algorithms. We do not sell data. We protect it.</p>
                </>
              ) : (
                <>
                  <p>1. TERMS OF ENGAGEMENT</p>
                  <p>By accessing this Cyber Space, you agree to not deploy automated scanning tools against our infrastructure. Offensive actions will be logged and reported to [REDACTED].</p>
                  <p>2. LIABILITY</p>
                  <p>The tools provided in Black Labs are for educational and authorized testing purposes only. Black Byt3 accepts no responsibility for misuse.</p>
                </>
              )}
              
              <p className="animate-pulse">_END OF FILE</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LegalTerminal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Fingerprint, ScanLine } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'denied' | 'granted'>('idle');

  useEffect(() => {
    if (isOpen) setScanStatus('idle');
  }, [isOpen]);

  const handleScan = () => {
    setScanStatus('scanning');
    setTimeout(() => {
      setScanStatus('denied');
      // Play error sound if we had audio
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="w-full max-w-md bg-black border border-red-600 p-8 relative shadow-[0_0_50px_rgba(255,0,0,0.3)]"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-red-600 hover:text-white">
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-['Unica_One'] text-white mb-6 text-center tracking-widest">SECURE PORTAL ACCESS</h2>

            <div className="flex flex-col items-center justify-center py-8 space-y-6">
               <div 
                 className={`relative w-32 h-32 border-2 rounded-full flex items-center justify-center cursor-pointer transition-all
                    ${scanStatus === 'idle' ? 'border-gray-700 text-gray-700 hover:border-red-500 hover:text-red-500' : ''}
                    ${scanStatus === 'scanning' ? 'border-red-500 text-red-500 animate-pulse' : ''}
                    ${scanStatus === 'denied' ? 'border-red-600 text-red-600 bg-red-900/20' : ''}
                 `}
                 onClick={scanStatus === 'idle' ? handleScan : undefined}
               >
                 {scanStatus === 'scanning' ? (
                   <ScanLine className="w-16 h-16 animate-bounce" />
                 ) : (
                   <Fingerprint className="w-16 h-16" />
                 )}
               </div>

               <div className="font-mono text-center min-h-[3rem]">
                 {scanStatus === 'idle' && <p className="text-gray-500 text-sm">CLICK TO SCAN BIOMETRICS</p>}
                 {scanStatus === 'scanning' && <p className="text-red-500 text-sm animate-pulse">VERIFYING IDENTITY...</p>}
                 {scanStatus === 'denied' && (
                   <div className="text-red-600">
                     <p className="text-lg font-bold">ACCESS DENIED</p>
                     <p className="text-xs mt-1">UNAUTHORIZED GENETIC SIGNATURE</p>
                   </div>
                 )}
               </div>
            </div>

            <div className="space-y-4">
               <input type="text" placeholder="AGENT ID" className="w-full bg-black border border-gray-800 p-3 font-mono text-white focus:border-red-600 outline-none text-sm uppercase" />
               <input type="password" placeholder="ACCESS KEY" className="w-full bg-black border border-gray-800 p-3 font-mono text-white focus:border-red-600 outline-none text-sm uppercase" />
               <button className="w-full bg-red-900/30 border border-red-600 text-red-500 py-3 font-mono uppercase hover:bg-red-600 hover:text-black transition-colors">
                 Manual Override
               </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;

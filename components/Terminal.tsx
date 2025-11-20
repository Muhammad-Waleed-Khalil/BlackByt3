'use client'

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Command, SectionId } from '../types';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: SectionId) => void;
  onToggleRedpill: () => void;
  onSetRootAccess?: (value: boolean) => void;
  onSetNuclearMode?: (value: boolean) => void;
  onTriggerScreenShake?: () => void;
  playSfx: (type: 'type' | 'error' | 'success') => void;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate, onToggleRedpill, onSetRootAccess, onSetNuclearMode, onTriggerScreenShake, playSfx }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    { type: 'system', input: '', output: 'Black Byt3 Terminal [Version 2.0.5]' },
    { type: 'system', input: '', output: 'Encrypted Uplink Established.' },
    { type: 'success', input: '', output: 'Welcome to the Command Center. Type "help" for manifest.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragCurrentY, setDragCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen, isMinimized]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    setDragStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isMobile || !isDragging) return;
    setDragCurrentY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    const dragDistance = dragCurrentY - dragStartY;

    // Swipe down to minimize
    if (dragDistance > 100 && !isMinimized) {
      setIsMinimized(true);
    }
    // Swipe up to maximize
    else if (dragDistance < -100 && isMinimized) {
      setIsMinimized(false);
    }

    setIsDragging(false);
    setDragStartY(0);
    setDragCurrentY(0);
  };

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response: Command = { input: cmd, output: '', type: 'user' };
    let systemResponse: Command | null = null;

    switch (cleanCmd) {
      case 'help':
        playSfx('success');
        systemResponse = {
          input: '',
          output: (
            <div className="grid grid-cols-2 gap-2 text-red-400">
              <span>help</span><span>Show manifest</span>
              <span>clear</span><span>Clear screen</span>
              <span>redpill</span><span>Reality distortion</span>
              <span>root</span><span>█ CLASSIFIED █</span>
              <span>admin</span><span>█ C2 INTERFACE █</span>
              <span>konami</span><span>█ NUCLEAR █</span>
              <span>scan</span><span>Breach target</span>
              <span>whoami</span><span>Identity check</span>
              <span>home</span><span>Navigate home</span>
              <span>about</span><span>Navigate about</span>
              <span>services</span><span>Navigate services</span>
              <span>academy</span><span>Navigate academy</span>
              <span>contact</span><span>Establish uplink</span>
            </div>
          ),
          type: 'system'
        };
        break;
      case 'clear':
        setHistory([]);
        return;
      case 'whoami':
        playSfx('success');
        systemResponse = { input: '', output: 'root@blackbyt3:~# [GUEST_ACCESS_LEVEL_4]', type: 'success' };
        break;
      case 'redpill':
        playSfx('error');
        onToggleRedpill();
        systemResponse = { input: '', output: 'REALITY DISTORTION ACTIVATED. WELCOME TO THE DESERT OF THE REAL.', type: 'error' };
        break;
      case 'konami code':
      case 'up up down down left right left right b a':
      case 'konami':
        playSfx('error');
        onTriggerScreenShake?.();
        onSetNuclearMode?.(true);
        setTimeout(() => {
          let countdown = 10;
          const countdownInterval = setInterval(() => {
            setHistory(prev => [...prev, { input: '', output: `█ NUCLEAR COUNTDOWN: ${countdown} █`, type: 'error' }]);
            countdown--;
            if (countdown < 0) {
              clearInterval(countdownInterval);
              setHistory(prev => [...prev, {
                input: '',
                output: '💀 JUST KIDDING. WELCOME, HACKER. YOU UNLOCKED RED MODE. 💀',
                type: 'success'
              }]);
              onSetNuclearMode?.(false);
            }
          }, 500);
        }, 500);
        systemResponse = { input: '', output: '⚠️ NUCLEAR LAUNCH SEQUENCE INITIATED ⚠️', type: 'error' };
        break;
      case 'sudo':
        playSfx('error');
        systemResponse = { input: '', output: 'User is not in the sudoers file. This incident will be reported.', type: 'error' };
        break;
      case 'scan':
        playSfx('error');
        onTriggerScreenShake?.();
        systemResponse = { input: '', output: '█ BREACH INITIATED. TARGET LOCKED. █ VULNERABILITIES FOUND: 0. SYSTEM SECURE.', type: 'error' };
        break;
      case 'root':
        playSfx('error');
        onTriggerScreenShake?.();
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { input: '', output: 'ACCESS DENIED... Escalation detected...', type: 'error' },
            { input: '', output: 'Psychic breach in progress...', type: 'error' },
            { input: '', output: '█████ BACKDOOR ACTIVATED █████', type: 'error' },
            { input: '', output: 'root@blackbyt3 GRANTED. Welcome, ADMIN.', type: 'success' },
            { input: '', output: '[CREDENTIAL_LEAK] Password: blackbyt3', type: 'error' }
          ])
          onSetRootAccess?.(true);
        }, 1500);
        systemResponse = { input: '', output: 'Attempting privilege escalation...', type: 'error' };
        break;
      case 'admin':
        playSfx('error');
        onTriggerScreenShake?.();
        setTimeout(() => {
          router.push('/admin-panel-1337');
        }, 500);
        systemResponse = { input: '', output: '█ REROUTING TO C2 INTERFACE... █', type: 'error' };
        break;
      case 'home':
      case 'about':
      case 'services':
      case 'solutions':
      case 'academy':
      case 'arena':
      case 'projects':
      case 'resources':
      case 'shop':
      case 'faq':
      case 'contact':
        playSfx('success');
        onNavigate(cleanCmd as SectionId);
        systemResponse = { input: '', output: `Navigating to section: [${cleanCmd.toUpperCase()}]...`, type: 'success' };
        break;
      default:
        if (cleanCmd !== '') {
          playSfx('error');
          systemResponse = { input: '', output: `Command not found: ${cleanCmd}`, type: 'error' };
        }
    }

    setHistory(prev => systemResponse ? [...prev, response, systemResponse] : [...prev, response]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    playSfx('type');
  }

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-black border border-red-600 p-3 rounded-full shadow-[0_0_15px_rgba(255,0,0,0.5)] hover:bg-red-900/20 transition-all z-50"
      >
        <TerminalIcon className="text-red-500 w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-0 bottom-0 md:right-6 md:bottom-6 w-full md:w-[400px] bg-black/90 border border-red-800 rounded-t-lg md:rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.2)] transition-all duration-300 z-50 ${isMinimized ? 'h-12 md:h-12' : 'h-[60vh] md:h-[400px]'}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Mobile Drag Handle */}
      {isMobile && (
        <div className="flex justify-center py-2 cursor-grab active:cursor-grabbing">
          <div className="w-12 h-1 bg-red-600/50 rounded-full" />
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-red-900/50 bg-red-950/10 rounded-t-lg cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
        <div className="flex items-center gap-2 text-red-500 font-mono text-xs">
          <TerminalIcon className="w-4 h-4" />
          <span>root@blackbyt3:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="text-red-500 hover:text-red-300">
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="text-red-500 hover:text-red-300">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      {!isMinimized && (
        <div className="p-4 h-[calc(100%-48px)] overflow-y-auto no-scrollbar font-mono text-sm text-red-500/80" onClick={() => document.getElementById('terminal-input')?.focus()}>
          {history.map((cmd, i) => (
            <div key={i} className="mb-2 break-words">
              {cmd.type === 'user' && (
                <div className="text-white/50 flex gap-2">
                  <span className="text-red-600">➜</span>
                  <span>{cmd.input}</span>
                </div>
              )}
              <div className={`${cmd.type === 'error' ? 'text-red-400 font-bold glitch-text' : cmd.type === 'success' ? 'text-green-500' : 'text-red-500/80'}`}>
                {cmd.output}
              </div>
            </div>
          ))}
          <div className="flex gap-2 items-center mt-2">
            <span className="text-red-500">root@blackbyt3:~#</span>
            <input
              id="terminal-input"
              type="text"
              value={input}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none text-red-500 w-full placeholder-red-900/50"
              autoFocus
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      )}
    </div>
  );
};

export default Terminal;

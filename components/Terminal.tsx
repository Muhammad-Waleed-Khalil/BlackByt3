import React, { useState, useEffect, useRef } from 'react';
import { Command, SectionId } from '../types';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: SectionId) => void;
  onToggleRedpill: () => void;
  playSfx: (type: 'type' | 'error' | 'success') => void;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate, onToggleRedpill, playSfx }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    { type: 'system', input: '', output: 'Black Byt3 Terminal [Version 2.0.5]' },
    { type: 'system', input: '', output: 'Encrypted Uplink Established.' },
    { type: 'success', input: '', output: 'Welcome to the Command Center. Type "help" for manifest.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    if (!isMinimized && isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isMinimized, isOpen]);

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
              <span>redpill</span><span>???</span>
              <span>home</span><span>/root</span>
              <span>about</span><span>/about</span>
              <span>services</span><span>/services</span>
              <span>solutions</span><span>/industries</span>
              <span>academy</span><span>/academy</span>
              <span>arena</span><span>/ctf-arena</span>
              <span>projects</span><span>/portfolio</span>
              <span>resources</span><span>/intel</span>
              <span>contact</span><span>/uplink</span>
              <span>scan</span><span>Run Vulnerability Scan</span>
              <span>whoami</span><span>User Identity</span>
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
        playSfx('error');
        systemResponse = { input: '', output: 'NUCLEAR LAUNCH DETECTED... JUST KIDDING. WELCOME HACKER.', type: 'error' };
        break;
      case 'sudo':
        playSfx('error');
        systemResponse = { input: '', output: 'User is not in the sudoers file. This incident will be reported.', type: 'error' };
        break;
      case 'scan':
        playSfx('success');
        systemResponse = { input: '', output: 'INITIATING DEEP SCAN... VULNERABILITIES FOUND: 0. SYSTEM SECURE.', type: 'error' };
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    if (newValue.length > input.length) {
      playSfx('type');
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-black border-2 border-red-600 p-4 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-900/20 transition-all z-50 touch-manipulation"
        aria-label="Open terminal"
      >
        <TerminalIcon className="text-red-500 w-6 h-6" />
      </button>
    );
  }

  return (
    <div
      className={`fixed right-0 bottom-0 md:right-6 md:bottom-6 w-full md:w-[550px] bg-black/95 border-2 border-red-700 rounded-t-lg md:rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 z-50 ${
        isMinimized ? 'h-14' : 'h-[500px]'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b-2 border-red-700/50 bg-red-950/10">
        <div className="flex items-center gap-2 text-red-500 font-mono text-xs select-none">
          <TerminalIcon className="w-4 h-4" />
          <span>root@blackbyt3:~</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-red-500 hover:text-red-300 transition-colors touch-manipulation p-1"
            aria-label={isMinimized ? "Maximize" : "Minimize"}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-red-500 hover:text-red-300 transition-colors touch-manipulation p-1"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      {!isMinimized && (
        <div className="h-[calc(100%-56px)] flex flex-col">
          {/* History */}
          <div
            className="flex-1 overflow-y-auto p-4 font-mono text-sm text-red-500/80 no-scrollbar"
            onClick={focusInput}
          >
            {history.map((cmd, i) => (
              <div key={i} className="mb-3 break-words">
                {cmd.type === 'user' && (
                  <div className="text-white/50 flex gap-2 mb-1">
                    <span className="text-red-600">➜</span>
                    <span className="break-all">{cmd.input}</span>
                  </div>
                )}
                <div className={`${
                  cmd.type === 'error' ? 'text-red-400 font-bold' :
                  cmd.type === 'success' ? 'text-green-500' :
                  'text-red-500/80'
                }`}>
                  {cmd.output}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input Line */}
          <div className="border-t-2 border-red-700/30 bg-black/60 p-4">
            <div className="flex gap-2 items-center">
              <span className="text-red-500 font-mono text-sm select-none whitespace-nowrap">
                root@blackbyt3:~#
              </span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none text-red-500 w-full font-mono text-sm focus:outline-none focus:ring-0 caret-red-500"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="type 'help' for commands..."
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Terminal;

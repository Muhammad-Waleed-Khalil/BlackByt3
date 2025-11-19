import React, { useState, useEffect, useRef } from 'react';
import { Command, SectionId } from '../types';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: SectionId) => void;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([
    { type: 'system', input: '', output: 'Black Byt3 Terminal [Version 2.0.5]' },
    { type: 'system', input: '', output: 'Encrypted Uplink Established.' },
    { type: 'success', input: '', output: 'Welcome to the Command Center. Type "help" for manifest.' },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isOpen, isMinimized]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let response: Command = { input: cmd, output: '', type: 'user' };
    let systemResponse: Command | null = null;

    switch (cleanCmd) {
      case 'help':
        systemResponse = {
          input: '',
          output: (
            <div className="grid grid-cols-2 gap-2 text-red-400">
              <span>help</span><span>Show manifest</span>
              <span>clear</span><span>Clear screen</span>
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
        systemResponse = { input: '', output: 'root@blackbyt3:~# [GUEST_ACCESS_LEVEL_4]', type: 'success' };
        break;
      case 'konami code':
      case 'up up down down left right left right b a':
        systemResponse = { input: '', output: 'NUCLEAR LAUNCH DETECTED... JUST KIDDING. WELCOME HACKER.', type: 'error' };
        break;
      case 'sudo':
        systemResponse = { input: '', output: 'User is not in the sudoers file. This incident will be reported.', type: 'error' };
        break;
      case 'scan':
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
      case 'contact':
        onNavigate(cleanCmd as SectionId);
        systemResponse = { input: '', output: `Navigating to section: [${cleanCmd.toUpperCase()}]...`, type: 'success' };
        break;
      default:
        if (cleanCmd !== '') {
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
    <div className={`fixed right-0 bottom-0 md:right-6 md:bottom-6 w-full md:w-[400px] bg-black/90 border border-red-800 rounded-t-lg md:rounded-lg backdrop-blur-md shadow-[0_0_30px_rgba(255,0,0,0.2)] transition-all duration-300 z-50 ${isMinimized ? 'h-12' : 'h-[400px]'}`}>
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
              onChange={(e) => setInput(e.target.value)}
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

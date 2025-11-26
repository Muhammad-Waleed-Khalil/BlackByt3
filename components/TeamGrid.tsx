import React from 'react';
import { TeamMember } from '../types';
import { User, ShieldCheck, Terminal, Cpu, Linkedin, Github } from 'lucide-react';

interface TeamGridProps {
  members: TeamMember[];
}

const TeamGrid: React.FC<TeamGridProps> = ({ members }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {members.map((member, i) => (
        <div key={i} className="group relative bg-black border border-gray-800 hover:border-red-600 transition-colors overflow-hidden min-h-[200px] flex flex-col">
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Header */}
          <div className="relative p-4 border-b border-gray-800 flex justify-between items-start z-10">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-red-500 transition-colors">
               {member.clearance.includes("ADMIN") ? <ShieldCheck className="w-5 h-5 text-red-500" /> :
                member.clearance.includes("HARDWARE") ? <Cpu className="w-5 h-5 text-red-500" /> :
                <User className="w-5 h-5 text-gray-500 group-hover:text-red-500" />}
            </div>
            <span className={`text-[10px] font-mono border px-1 ${member.clearance.includes("L5") ? 'border-red-500 text-red-500' : 'border-gray-600 text-gray-500'}`}>
              {member.clearance}
            </span>
          </div>
          
          {/* Content */}
          <div className="relative p-4 flex-1 flex flex-col justify-end z-10">
             <h3 className="text-white font-mono font-bold text-sm mb-1 group-hover:text-red-500 transition-colors">{member.name}</h3>
             <p className="text-red-800 text-xs uppercase tracking-wider mb-2 font-mono">{member.role}</p>
             
             {/* Glitch reveal description */}
             <div className="relative overflow-hidden h-0 group-hover:h-auto transition-all duration-300">
                <p className="text-gray-400 text-xs font-mono leading-relaxed pt-2 border-t border-red-900/30">
                  {member.description}
                </p>
                {(member.linkedin || member.github) && (
                  <div className="flex gap-2 mt-2">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
             </div>
             
             <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
                <Terminal className="w-12 h-12 text-red-900" />
             </div>
          </div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      ))}
    </div>
  );
};

export default TeamGrid;

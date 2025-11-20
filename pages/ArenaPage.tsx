import React from 'react';
import { ARENA_CONTENT } from '../constants';
import { Target, Clock, Users, Trophy } from 'lucide-react';

const ArenaPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Pakistan Cyber Security Challenge 2025",
      date: "December 15-17, 2025",
      location: "Islamabad & Remote",
      type: "CTF Competition",
      participants: "500+",
      status: "Registration Open"
    },
    {
      title: "Industrial IoT Security CTF",
      date: "January 20-22, 2026", 
      location: "Karachi & Virtual",
      type: "Specialized CTF",
      participants: "200+",
      status: "Coming Soon"
    }
  ];

  const teamMembers = [
    "Muhammad Waqar (Team Lead)",
    "Shamir Khan (Web Exploitation)",
    "Ammar Hanif (Red Team)",
    "Saad Khan (AI/ML)",
    "Jafar Ali (Hardware)",
    "Hisbullah (Forensics)"
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            06_ARENA
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            {ARENA_CONTENT.headline}
          </h1>
          <p className="font-mono text-gray-400 text-lg max-w-3xl">
            {ARENA_CONTENT.description}
          </p>
        </div>

        {/* Arena Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/60 border border-gray-800 p-6 text-center">
            <Target className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">15+</div>
            <p className="text-gray-400 font-mono text-sm">CTF Events Hosted</p>
          </div>
          <div className="bg-black/60 border border-gray-800 p-6 text-center">
            <Users className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">2000+</div>
            <p className="text-gray-400 font-mono text-sm">Participants</p>
          </div>
          <div className="bg-black/60 border border-gray-800 p-6 text-center">
            <Trophy className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">8</div>
            <p className="text-gray-400 font-mono text-sm">Team Championships</p>
          </div>
          <div className="bg-black/60 border border-gray-800 p-6 text-center">
            <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">72h</div>
            <p className="text-gray-400 font-mono text-sm">Longest CTF</p>
          </div>
        </div>

        {/* Live Feed Style */}
        <div className="relative bg-black border border-gray-800 p-8 md:p-12 mb-16">
           <div className="absolute inset-0 bg-[linear-gradient(rgba(50,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(50,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" />
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-12">
             <div className="flex-1">
               <div className="flex items-center gap-2 text-red-500 mb-4 font-mono text-xs">
                 <span className="animate-ping w-2 h-2 bg-red-500 rounded-full"></span>
                 LIVE_FEED
               </div>
               <p className="font-mono text-lg text-gray-300 mb-8">
                 {ARENA_CONTENT.description}
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {ARENA_CONTENT.features.map((feat, i) => (
                   <div key={i} className="bg-gray-900/30 p-3 border-l-2 border-red-900 text-sm font-mono text-gray-400 hover:text-white hover:border-red-500 transition-colors">
                     {feat}
                   </div>
                 ))}
               </div>
             </div>
             
             {/* CTF Countdown */}
             <div className="w-full lg:w-80 bg-black border border-red-600/30 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,0,0,0.1)]">
               <h4 className="text-red-600 font-['Unica_One'] text-3xl mb-2">NEXT CTF</h4>
               <div className="text-5xl text-white font-mono font-bold mb-2 tracking-tighter">15:04:23</div>
               <div className="text-xs text-gray-500 font-mono uppercase mb-6">Time Remaining</div>
               <button className="w-full bg-red-600/10 border border-red-600 text-red-500 font-mono py-2 hover:bg-red-600 hover:text-black transition-colors uppercase text-xs tracking-widest">
                 Register Team
               </button>
             </div>
           </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Upcoming Events & CTFs
          </h3>
          <div className="space-y-6">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-800 p-6 hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-['Unica_One'] text-white mb-2">{event.title}</h4>
                    <p className="text-gray-400 font-mono text-sm">{event.type}</p>
                  </div>
                  <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-red-500 uppercase bg-black/50">
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Date</span>
                    <span className="text-gray-400 font-mono">{event.date}</span>
                  </div>
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Location</span>
                    <span className="text-gray-400 font-mono">{event.location}</span>
                  </div>
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Participants</span>
                    <span className="text-gray-400 font-mono">{event.participants}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Black Byt3 CTF Team */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Black Byt3 CTF Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-800 p-4 text-center">
                <div className="w-12 h-12 bg-red-600/20 border border-red-600/50 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
                <p className="text-white font-mono text-sm">{member}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Host an Event */}
        <div className="text-center">
          <div className="bg-red-900/5 border border-red-900/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">Host an Event</h3>
            <p className="text-gray-400 font-mono text-sm mb-6">
              Want to host your own cybersecurity competition or training event? 
              We provide full event management and technical infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-black font-mono font-bold text-xs px-6 py-3 hover:bg-white transition-colors">
                Event Sponsorship
              </button>
              <button className="bg-white text-black font-mono font-bold text-xs px-6 py-3 hover:bg-red-600 hover:text-white transition-colors">
                Technical Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaPage;
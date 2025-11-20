import React from 'react';
import { ABOUT_CONTENT, TEAM_LIST } from '../constants';
import TeamGrid from '../components/TeamGrid';
import { Target } from 'lucide-react';

interface AboutPageProps {
  // No props needed for now
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            02_ABOUT
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            {ABOUT_CONTENT.headline}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black/50 border-t border-red-600/50 pt-6">
            <p className="font-mono text-gray-300 leading-relaxed text-sm mb-6">
              {ABOUT_CONTENT.story}
            </p>
            <p className="font-mono text-white leading-relaxed text-lg border-l-4 border-red-600 pl-4 italic">
              "{ABOUT_CONTENT.mission}"
            </p>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-4">Core Values</h4>
              <div className="grid grid-cols-2 gap-3">
                {ABOUT_CONTENT.values.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Target className="w-3 h-3 text-red-600" />
                    <span className="text-gray-300 font-mono text-xs">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Grid */}
        <div>
          <h4 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">Active Operators</h4>
          <TeamGrid members={TEAM_LIST} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { PARTNERSHIPS_CONTENT } from '../constants';
import { Users, Handshake, Globe } from 'lucide-react';

const PartnershipsPage: React.FC = () => {
  const strategicPartners = [
   
    {
      name: "TechBiz",
      description: "Regional business development and market expansion partner.",
      type: "Strategic Alliance",
      status: "Active"
    },
    {
      name: "Cyber Pashto",
      description: "Local cybersecurity community and talent development partner.",
      type: "Community Partner",
      status: "Active"
    },
    {
      name: "AQEDA",
      description: "Education and certification accreditation partner.",
      type: "Educational Partner",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            12_PARTNERSHIPS
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Strategic Alliances & Partnerships
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Building a robust ecosystem of strategic partnerships to deliver comprehensive cybersecurity solutions and expand our reach across industries and regions.
          </p>
        </div>

        {/* Strategic Partners Grid */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xl tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Strategic Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strategicPartners.map((partner, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <Handshake className="w-5 h-5 text-red-600 group-hover:text-red-500 transition-colors" />
                    <h4 className="text-xl font-['Unica_One'] text-white group-hover:text-red-500 transition-colors">
                      {partner.name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-gray-400 uppercase bg-black/50">
                    {partner.status}
                  </span>
                </div>
                <p className="text-sm font-mono text-gray-300 mb-4">
                  {partner.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-red-900 uppercase border border-red-900/30 px-2 py-1 rounded">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-900/5 border border-red-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-['Unica_One'] text-white">Partnership Opportunities</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Technology Integration Partners</h4>
                <p className="text-gray-300 text-sm font-mono">
                  Integrate security solutions with your platform or service offerings.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Reseller Partners</h4>
                <p className="text-gray-300 text-sm font-mono">
                  Become an authorized reseller of Black Byt3 cybersecurity services.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Training Partners</h4>
                <p className="text-gray-300 text-sm font-mono">
                  Co-develop and deliver cybersecurity training programs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/60 border border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-['Unica_One'] text-white">Partner Benefits</h3>
            </div>
            <ul className="space-y-3 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Technical training and certification
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Marketing and sales support
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Joint solution development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Revenue sharing opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Access to exclusive resources
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Priority support and escalation
              </li>
            </ul>
          </div>
        </div>

        {/* Contact for Partnership */}
        <div className="mt-16 text-center">
          <div className="bg-red-900/5 border border-red-900/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">Ready to Partner?</h3>
            <p className="text-gray-300 font-mono text-sm mb-6">
              Join our ecosystem of strategic partners and help build a more secure digital future.
            </p>
            <button className="bg-red-600 text-black font-mono font-bold uppercase text-xs px-6 py-3 hover:bg-white transition-colors">
              Partnership Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipsPage;

import React from 'react';
import { RESOURCES_CONTENT, PARTNERSHIPS_CONTENT } from '../constants';
import { BookOpen, FileText, Users, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const researchPapers = [
    {
      title: "Zero-Day Analysis: Log4Shell Revisited",
      type: "Research Paper",
      date: "2025-11-15",
      downloads: "1.2K"
    },
    {
      title: "The State of AI in Offensive Cyber",
      type: "Whitepaper", 
      date: "2025-11-10",
      downloads: "856"
    },
    {
      title: "Hardware Hacking 101: Bus Pirate Guide",
      type: "Tutorial",
      date: "2025-11-05",
      downloads: "2.1K"
    }
  ];

  const tools = [
    {
      name: "Network Scanner Pro",
      description: "Advanced network discovery and vulnerability assessment",
      type: "Tool",
      downloads: "5.2K"
    },
    {
      name: "WiFi Pentesting Suite", 
      description: "Comprehensive WiFi security testing toolkit",
      type: "Tool",
      downloads: "3.8K"
    },
    {
      name: "Password Cracker Toolkit",
      description: "Multi-algorithm password cracking utilities",
      type: "Tool", 
      downloads: "2.9K"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            09_INTEL
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Knowledge Base
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Access our research, whitepapers, tools, and educational resources to stay ahead of emerging threats and security trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-2">
            <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-4 border-b border-red-900/50 pb-2">
              Latest Transmissions
            </h3>
            {researchPapers.map((paper, i) => (
              <div key={i} className="flex items-center justify-between py-3 hover:bg-red-900/5 transition-colors cursor-pointer group border-b border-gray-700/50">
                <div className="flex-1">
                  <span className="text-gray-300 font-mono text-sm group-hover:text-white">{paper.title}</span>
                  <div className="flex items-center gap-4 mt-1">
                    <span className="text-xs text-red-900 uppercase border border-red-900/30 px-2 py-1 rounded">{paper.type}</span>
                    <span className="text-xs text-gray-500">{paper.date}</span>
                    <span className="text-xs text-gray-500">{paper.downloads} downloads</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-red-500" />
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-4 border-b border-red-900/50 pb-2">
                Tools & Demos
              </h3>
              <div className="space-y-4">
                {tools.map((tool, i) => (
                  <div key={i} className="bg-black/60 border border-gray-700 p-4 hover:border-red-600 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-white font-mono text-sm">{tool.name}</h4>
                      <span className="text-xs text-gray-400 font-mono">{tool.downloads}</span>
                    </div>
                    <p className="text-gray-300 font-mono text-xs mb-2">{tool.description}</p>
                    <span className="text-xs text-red-900 uppercase border border-red-900/30 px-2 py-1 rounded">{tool.type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-4 border-b border-red-900/50 pb-2">
                Strategic Alliance
              </h3>
              <div className="flex flex-wrap gap-2">
                {PARTNERSHIPS_CONTENT.strategic.map((partner, i) => (
                  <span key={i} className="text-gray-400 font-mono text-sm border border-gray-700 px-3 py-1 hover:text-red-500 hover:border-red-500 cursor-pointer transition-colors">
                    {partner}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Research & Whitepapers Section */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Research & Whitepapers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-gray-700 p-6">
              <BookOpen className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-white font-['Unica_One'] text-lg mb-2">Latest Research</h4>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Cutting-edge security research covering emerging threats, vulnerabilities, and defense strategies.
              </p>
              <ul className="space-y-1 text-xs font-mono text-gray-400">
                <li>• Zero-day analysis reports</li>
                <li>• Threat intelligence briefs</li>
                <li>• Security trend analysis</li>
              </ul>
            </div>

            <div className="bg-black/60 border border-gray-700 p-6">
              <FileText className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-white font-['Unica_One'] text-lg mb-2">Whitepapers</h4>
              <p className="text-gray-300 font-mono text-sm mb-4">
                In-depth technical documentation on cybersecurity best practices and methodologies.
              </p>
              <ul className="space-y-1 text-xs font-mono text-gray-400">
                <li>• Industry compliance guides</li>
                <li>• Security architecture docs</li>
                <li>• Risk assessment frameworks</li>
              </ul>
            </div>

            <div className="bg-black/60 border border-gray-700 p-6">
              <Users className="w-8 h-8 text-red-600 mb-4" />
              <h4 className="text-white font-['Unica_One'] text-lg mb-2">Press & Media</h4>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Media coverage, conference presentations, and expert commentary on cybersecurity topics.
              </p>
              <ul className="space-y-1 text-xs font-mono text-gray-400">
                <li>• Conference presentations</li>
                <li>• Expert interviews</li>
                <li>• Industry commentary</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-900/5 border border-red-900/30 p-8">
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">For Researchers</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Access our comprehensive research database, vulnerability disclosures, and security advisories.
            </p>
            <button className="bg-red-600 text-black font-mono font-bold text-xs px-6 py-3 hover:bg-white transition-colors">
              Access Research Database
            </button>
          </div>

          <div className="bg-black/60 border border-gray-700 p-8">
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">For Developers</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Download security tools, code libraries, and development frameworks for secure application development.
            </p>
            <button className="bg-white text-black font-mono font-bold text-xs px-6 py-3 hover:bg-red-600 hover:text-white transition-colors">
              Download Tools
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;

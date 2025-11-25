import React from 'react';
import { SOLUTIONS_INDUSTRIES } from '../constants';
import { Hexagon } from 'lucide-react';

const SolutionsPage: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            04_SOLUTIONS
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Target Industries
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SOLUTIONS_INDUSTRIES.map((ind, i) => (
            <div key={i} className="aspect-square border border-gray-700 flex flex-col items-center justify-center p-4 text-center hover:border-red-500 hover:bg-red-900/5 transition-all group">
              <Hexagon className="w-8 h-8 text-gray-500 mb-4 group-hover:text-red-500 transition-colors" />
              <span className="font-mono text-sm text-gray-300 group-hover:text-white">{ind}</span>
            </div>
          ))}
        </div>

        {/* Industry Details */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Enterprise Security</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Comprehensive cybersecurity solutions for large organizations, including compliance, risk assessment, and incident response.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>• SOC-as-a-Service</li>
              <li>• Compliance Audits</li>
              <li>• Threat Hunting</li>
            </ul>
          </div>

          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Startups & SaaS</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Scalable security solutions designed for growing tech companies and SaaS platforms.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>• DevSecOps Integration</li>
              <li>• API Security Testing</li>
              <li>• Cloud Security</li>
            </ul>
          </div>

          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">IoT & Embedded</h3>
            <p className="text-gray-300 font-mono text-sm mb-4">
              Specialized security assessments for IoT devices, embedded systems, and industrial control systems.
            </p>
            <ul className="space-y-2 text-xs font-mono text-gray-400">
              <li>• Hardware Security</li>
              <li>• Firmware Analysis</li>
              <li>• Device Hardening</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;

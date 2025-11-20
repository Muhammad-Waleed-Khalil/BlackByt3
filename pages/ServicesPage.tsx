import React from 'react';
import { SERVICES_DATA } from '../constants';
import DetailedService from '../components/DetailedService';

interface ServicesPageProps {
  // No props needed for now
}

const ServicesPage: React.FC<ServicesPageProps> = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            03_SERVICES
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            Offensive & Defensive Capabilities
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <DetailedService key={idx} service={service} index={idx} />
          ))}
        </div>

        {/* Enhanced Service Categories */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Cybersecurity Services</h3>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li>• Penetration Testing</li>
              <li>• GRC (Governance, Risk & Compliance)</li>
              <li>• Red Teaming</li>
              <li>• Threat Intelligence</li>
              <li>• Incident Response</li>
              <li>• Managed Security</li>
            </ul>
          </div>

          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">AI & ML Solutions</h3>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li>• Custom ML Models</li>
              <li>• Automation & Orchestration</li>
              <li>• AI-integrated Web & App Solutions</li>
            </ul>
          </div>

          <div className="bg-black/50 border border-red-900/30 p-6">
            <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Hardware Security Tools</h3>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li>• Wi-Fi pentesting</li>
              <li>• HID attacks</li>
              <li>• RFID/NFC tools</li>
              <li>• Firmware extraction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
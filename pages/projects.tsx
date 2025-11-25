import React from 'react';
import { PROJECTS_DATA } from '../constants';
import { FolderOpen, ExternalLink } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const additionalProjects = [
    {
      id: "004",
      title: "E-commerce Security Audit",
      client: "Regional Online Retailer",
      problem: "Payment gateway vulnerabilities and customer data protection concerns.",
      scope: "Web application and mobile app security testing",
      approach: "SSL analysis, OWASP testing, PCI DSS compliance check, mobile reverse engineering.",
      outcome: "Identified 23 vulnerabilities, achieved PCI DSS compliance, implemented secure payment flow.",
      artifacts: "Compliance Report, Remediation Plan"
    },
    {
      id: "005",
      title: "Government Infrastructure Assessment",
      client: "Municipal Government",
      problem: "Legacy systems with potential nation-state threat vectors.",
      scope: "Network infrastructure and critical system security",
      approach: "Network mapping, vulnerability scanning, social engineering, physical security assessment.",
      outcome: "Hardened critical infrastructure, established monitoring protocols.",
      artifacts: "Security Blueprint, Threat Model"
    }
  ];

  const allProjects = [...PROJECTS_DATA, ...additionalProjects];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            07_PROJECTS
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Declassified Files
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Real-world security assessments and red team engagements that showcase our expertise in identifying and mitigating complex security threats.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <FolderOpen className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">{allProjects.length}</div>
            <p className="text-gray-300 font-mono text-sm">Total Projects</p>
          </div>
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <ExternalLink className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-mono font-bold text-white mb-2">100%</div>
            <p className="text-gray-300 font-mono text-sm">Success Rate</p>
          </div>
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <div className="text-2xl font-mono font-bold text-white mb-2">45+</div>
            <p className="text-gray-300 font-mono text-sm">Critical Findings</p>
          </div>
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <div className="text-2xl font-mono font-bold text-white mb-2">24/7</div>
            <p className="text-gray-300 font-mono text-sm">Response Time</p>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {allProjects.map((project, i) => (
            <div key={project.id} className="group relative pl-8 border-l border-gray-700 hover:border-red-600 transition-colors cursor-pointer py-2">
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-black border border-gray-700 group-hover:bg-red-600 group-hover:border-red-600 transition-colors" />
              
              <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-red-500 transition-colors font-['Unica_One'] uppercase tracking-wider">
                CASE_STUDY_{project.id}: {project.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs text-gray-300">
                <div>
                  <span className="text-red-900 block mb-1 uppercase font-bold">Client</span>
                  <span className="bg-white text-black px-1 inline-block font-bold">{project.client}</span>
                </div>
                <div>
                  <span className="text-red-900 block mb-1 uppercase font-bold">Problem</span>
                  {project.problem}
                </div>
                <div>
                  <span className="text-red-900 block mb-1 uppercase font-bold">Approach</span>
                  {project.approach}
                </div>
                <div>
                  <span className="text-red-900 block mb-1 uppercase font-bold">Outcome</span>
                  {project.outcome}
                </div>
                <div className="md:col-span-2 lg:col-span-2">
                   <span className="text-red-900 block mb-1 uppercase font-bold">Artifacts</span>
                   <div className="flex gap-2 mt-1">
                     {project.artifacts.split(',').map((art, i) => (
                       <span key={i} className="border border-gray-700 px-2 py-0.5 text-[10px] hover:bg-red-900/20 hover:border-red-600 transition-colors">
                          {art.trim()}
                       </span>
                     ))}
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Black Labs - Open Source */}
        <div className="mt-20">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Black Labs - Open Source Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "WiFi-Pentesting-Toolkit",
                description: "Comprehensive WiFi security assessment toolkit",
                status: "Active",
                downloads: "1.2K"
              },
              {
                name: "RFID-Cloner-Pro",
                description: "Advanced RFID/NFC card cloning and analysis",
                status: "Beta",
                downloads: "850"
              },
              {
                name: "Firmware-Extractor",
                description: "Automated firmware extraction and analysis tool",
                status: "Active",
                downloads: "650"
              }
            ].map((tool, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-colors">
                <h4 className="text-white font-['Unica_One'] text-lg mb-2">{tool.name}</h4>
                <p className="text-gray-300 font-mono text-sm mb-4">{tool.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-mono border px-2 py-1 uppercase ${
                    tool.status === 'Active' 
                      ? 'border-green-600 text-green-500' 
                      : 'border-yellow-600 text-yellow-500'
                  }`}>
                    {tool.status}
                  </span>
                  <span className="text-gray-400 font-mono text-xs">{tool.downloads} downloads</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

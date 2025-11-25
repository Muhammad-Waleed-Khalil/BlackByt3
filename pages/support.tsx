import React, { useState } from 'react';
import { Shield, FileText, MessageSquare, Download, Eye, Clock, User, Settings } from 'lucide-react';

const SupportPortalPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock authentication
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
              14_SUPPORT
            </h2>
            <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
              Client Portal Access
            </h1>
            <p className="font-mono text-gray-300 text-lg max-w-3xl">
              Secure access to your project data, support tickets, and documentation.
            </p>
          </div>

          <div className="bg-black/80 p-8 border border-gray-700 max-w-md mx-auto">
            <div className="text-center mb-8">
              <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-white font-['Unica_One'] text-xl">Secure Login</h3>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Client ID</label>
                <input 
                  type="text" 
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  placeholder="BB-CLIENT-001"
                />
              </div>
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Password</label>
                <input 
                  type="password" 
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  placeholder="••••••••"
                />
              </div>
              <button 
                onClick={() => setIsAuthenticated(true)}
                className="w-full bg-red-600 text-black font-mono font-bold py-3 hover:bg-white transition-colors text-xs"
              >
                ACCESS PORTAL
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400 font-mono text-xs">
                Demo credentials: BB-CLIENT-001 / demo123
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const mockProjects = [
    {
      id: 'PRJ-001',
      name: 'Financial Sector Penetration Test',
      status: 'In Progress',
      progress: 65,
      dueDate: '2025-12-15',
      lastUpdate: '2025-11-18',
      reports: 3
    },
    {
      id: 'PRJ-002', 
      name: 'AWS Security Assessment',
      status: 'Completed',
      progress: 100,
      dueDate: '2025-11-10',
      lastUpdate: '2025-11-10',
      reports: 5
    },
    {
      id: 'PRJ-003',
      name: 'Red Team Engagement',
      status: 'Planning',
      progress: 15,
      dueDate: '2025-12-30',
      lastUpdate: '2025-11-15',
      reports: 1
    }
  ];

  const mockTickets = [
    {
      id: 'TKT-001',
      title: 'VPN Connection Issues',
      status: 'Open',
      priority: 'High',
      created: '2025-11-19',
      assigned: 'Shamir Khan'
    },
    {
      id: 'TKT-002',
      title: 'Report Access Request',
      status: 'In Progress',
      priority: 'Medium',
      created: '2025-11-18',
      assigned: 'Support Team'
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] animate-pulse uppercase">
              14_SUPPORT
            </h2>
            <button 
              onClick={() => setIsAuthenticated(false)}
              className="text-gray-300 hover:text-red-600 font-mono text-sm"
            >
              Logout
            </button>
          </div>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-4 text-white">
            Client Portal
          </h1>
          <p className="font-mono text-gray-300">
            Welcome back, Muhammad. Here's your project overview and support dashboard.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-black/60 p-1 border border-gray-700 mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: User },
            { id: 'projects', label: 'Projects', icon: FileText },
            { id: 'tickets', label: 'Support', icon: MessageSquare },
            { id: 'documents', label: 'Documents', icon: Download }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs transition-colors ${
                activeTab === tab.id 
                  ? 'bg-red-600 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/60 border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-white font-['Unica_One']">Active Projects</h3>
              </div>
              <div className="text-3xl font-mono font-bold text-red-500 mb-2">3</div>
              <p className="text-gray-300 font-mono text-sm">2 in progress, 1 planning</p>
            </div>

            <div className="bg-black/60 border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-5 h-5 text-red-600" />
                <h3 className="text-white font-['Unica_One']">Open Tickets</h3>
              </div>
              <div className="text-3xl font-mono font-bold text-red-500 mb-2">2</div>
              <p className="text-gray-300 font-mono text-sm">1 high priority</p>
            </div>

            <div className="bg-black/60 border border-gray-700 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Download className="w-5 h-5 text-red-600" />
                <h3 className="text-white font-['Unica_One']">Documents</h3>
              </div>
              <div className="text-3xl font-mono font-bold text-red-500 mb-2">9</div>
              <p className="text-gray-300 font-mono text-sm">Reports & deliverables</p>
            </div>
          </div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {mockProjects.map((project) => (
              <div key={project.id} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-['Unica_One'] text-xl mb-2">{project.name}</h4>
                    <p className="text-gray-300 font-mono text-sm">ID: {project.id}</p>
                  </div>
                  <span className={`text-xs font-mono border px-2 py-1 uppercase ${
                    project.status === 'Completed' 
                      ? 'border-green-600 text-green-500' 
                      : project.status === 'In Progress'
                      ? 'border-yellow-600 text-yellow-500'
                      : 'border-blue-600 text-blue-500'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm font-mono mb-2">
                    <span className="text-gray-300">Progress</span>
                    <span className="text-red-500">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2">
                    <div 
                      className="bg-red-600 h-2 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Due Date</span>
                    <span className="text-gray-300 font-mono">{project.dueDate}</span>
                  </div>
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Last Update</span>
                    <span className="text-gray-300 font-mono">{project.lastUpdate}</span>
                  </div>
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Reports</span>
                    <span className="text-gray-300 font-mono">{project.reports} files</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest">Support Tickets</h3>
              <button className="bg-red-600 text-black font-mono font-bold text-xs px-4 py-2 hover:bg-white transition-colors">
                New Ticket
              </button>
            </div>
            
            {mockTickets.map((ticket) => (
              <div key={ticket.id} className="bg-black/60 border border-gray-700 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white font-mono text-lg mb-1">{ticket.title}</h4>
                    <p className="text-gray-300 font-mono text-sm">ID: {ticket.id}</p>
                  </div>
                  <div className="text-right">
                    <span className={`text-xs font-mono border px-2 py-1 uppercase block mb-1 ${
                      ticket.priority === 'High' 
                        ? 'border-red-600 text-red-500' 
                        : 'border-yellow-600 text-yellow-500'
                    }`}>
                      {ticket.priority}
                    </span>
                    <span className={`text-xs font-mono border px-2 py-1 uppercase ${
                      ticket.status === 'Open' 
                        ? 'border-blue-600 text-blue-500' 
                        : 'border-green-600 text-green-500'
                    }`}>
                      {ticket.status}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Created</span>
                    <span className="text-gray-300 font-mono">{ticket.created}</span>
                  </div>
                  <div>
                    <span className="text-red-900 font-mono uppercase block mb-1">Assigned</span>
                    <span className="text-gray-300 font-mono">{ticket.assigned}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Documents Tab */}
        {activeTab === 'documents' && (
          <div className="space-y-4">
            <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest">Available Documents</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: 'PenTest Report - Executive Summary', type: 'PDF', date: '2025-11-18', size: '2.1 MB' },
                { name: 'Technical Findings - PRJ-001', type: 'PDF', date: '2025-11-18', size: '8.7 MB' },
                { name: 'Remediation Guide', type: 'PDF', date: '2025-11-17', size: '1.3 MB' },
                { name: 'AWS Assessment Results', type: 'PDF', date: '2025-11-10', size: '5.2 MB' }
              ].map((doc, idx) => (
                <div key={idx} className="bg-black/60 border border-gray-700 p-4 flex items-center justify-between hover:border-red-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-red-600" />
                    <div>
                      <h4 className="text-white font-mono text-sm">{doc.name}</h4>
                      <p className="text-gray-300 font-mono text-xs">{doc.type} • {doc.size} • {doc.date}</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-500 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportPortalPage;

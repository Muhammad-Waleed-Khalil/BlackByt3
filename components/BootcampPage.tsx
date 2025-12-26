import React, { useState, useEffect } from 'react';
import { ChevronDown, Target, GraduationCap, Code, Shield, Cpu } from 'lucide-react';

const BootcampPage: React.FC = () => {
  const [openWeek1Bug, setOpenWeek1Bug] = useState(false);
  const [openWeek2Bug, setOpenWeek2Bug] = useState(false);
  const [openWeek3Bug, setOpenWeek3Bug] = useState(false);
  const [openWeek1Browser, setOpenWeek1Browser] = useState(false);
  const [openWeek2Browser, setOpenWeek2Browser] = useState(false);
  const [openWeek3Browser, setOpenWeek3Browser] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [enrolledBootcamp, setEnrolledBootcamp] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEnroll = (bootcampName: string) => {
    setEnrolledBootcamp(bootcampName);
    // Show success message and redirect to Discord
    setTimeout(() => {
      window.open('https://discord.gg/blackbyt3', '_blank');
      // Reset after a delay
      setTimeout(() => setEnrolledBootcamp(null), 2000);
    }, 500);
  };

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-green-600/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <section className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="font-mono text-red-400 text-sm uppercase tracking-wider font-bold">
                LIVE BROADCASTING
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none text-green-400">
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
                BLACK BYT3 January Bootcamps 2026
              </span>
            </h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-mono text-gray-300 mb-8 transform hover:scale-105 transition-transform duration-300">
            Hands-On Cybersecurity Training for Real-World Skills
          </h2>
          <p className="text-lg font-mono text-gray-400 max-w-3xl hover:text-gray-300 transition-colors duration-300">
            Live, practical bootcamps focused on understanding systems, not just tools.
          </p>
        </section>

        {/* Bootcamp Overview */}
        <section className="mb-16">
          <p className="text-lg font-mono text-gray-300 max-w-4xl">
            BLACK BYT3 bootcamps focus on real-world security skills suitable for bug bounty, web security, and secure development.
          </p>
        </section>

        {/* Common Bootcamp Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Unica_One'] text-green-400 mb-8 drop-shadow-lg">Common Bootcamp Structure</h2>
          <div className="bg-gray-900/80 backdrop-blur-sm border border-green-900/50 p-8 rounded-xl shadow-2xl hover:shadow-green-400/10 transition-all duration-500 hover:border-green-400/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-green-400/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Start Date</h3>
                <p className="font-mono text-white">2nd January 2026</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Duration</h3>
                <p className="font-mono text-white">3 Weeks</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Days</h3>
                <p className="font-mono text-white">Friday, Saturday, Sunday</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Total Sessions</h3>
                <p className="font-mono text-white">9 Live Sessions</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Session Duration</h3>
                <p className="font-mono text-white">2–2.5 hours</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Mode</h3>
                <p className="font-mono text-white">Live + Practical</p>
              </div>
              <div className="text-center bg-gray-800/50 p-4 rounded-lg border border-green-900/20 hover:border-green-400/40 hover:bg-gray-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 transform hover:-translate-y-1 col-span-full md:col-span-2 lg:col-span-1">
                <h3 className="font-mono text-green-400 text-sm uppercase mb-2 font-semibold">Certificate</h3>
                <p className="font-mono text-white">BLACK BYT3 Certificate of Completion</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bootcamp 1 */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Unica_One'] text-green-400 mb-4">Bootcamp 1 – The Art of Bug Bounty</h2>
          <p className="text-xl font-mono text-gray-300 mb-4 italic">"Find Real Bugs. Write Real Reports."</p>
          <p className="text-lg font-mono text-gray-400 mb-8">
            Master the complete bug bounty workflow from discovering vulnerabilities in real applications to writing professional reports that lead to bounties.
          </p>
          <h3 className="text-xl font-mono text-green-400 mb-4">What You'll Learn</h3>
          <ul className="list-disc list-inside font-mono text-gray-300 mb-8 space-y-2">
            <li>Bug bounty programs & ethics</li>
            <li>Recon & attack surface mapping</li>
            <li>Exploitation & vulnerability discovery</li>
            <li>Professional reporting</li>
          </ul>
          <h3 className="text-xl font-mono text-green-400 mb-4">Curriculum</h3>
          <div className="space-y-4">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek1Bug(!openWeek1Bug)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 1 – Foundations & Recon</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek1Bug ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek1Bug && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">Bug bounty mindset & ethics</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Environment & tools</li>
                    <li className="hover:text-green-300 transition-colors duration-200">OSINT & reconnaissance</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek2Bug(!openWeek2Bug)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 2 – Vulnerabilities & Exploitation</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek2Bug ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek2Bug && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">Authentication & access control flaws</li>
                    <li className="hover:text-green-300 transition-colors duration-200">SQL / NoSQL injection</li>
                    <li className="hover:text-green-300 transition-colors duration-200">IDOR</li>
                    <li className="hover:text-green-300 transition-colors duration-200">XSS, CSRF, file uploads</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek3Bug(!openWeek3Bug)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 3 – Real Hunting & Reporting</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek3Bug ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek3Bug && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">WAF bypass</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Logic flaws & bug chaining</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Writing impactful reports</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Live end-to-end bug hunt</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bootcamp 2 */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Unica_One'] text-green-400 mb-4">Bootcamp 2 – Inside the Browser for Hackers</h2>
          <p className="text-xl font-mono text-gray-300 mb-4 italic">"Understand the Browser. Break the Assumptions."</p>
          <p className="text-lg font-mono text-gray-400 mb-8">
            Gain deep insights into browser internals and security mechanisms, learning how to identify and exploit web application vulnerabilities effectively.
          </p>
          <h3 className="text-xl font-mono text-green-400 mb-4">What You'll Learn</h3>
          <ul className="list-disc list-inside font-mono text-gray-300 mb-8 space-y-2">
            <li>Browser networking & rendering</li>
            <li>JavaScript execution</li>
            <li>Browser security model</li>
            <li>Practical DevTools analysis</li>
          </ul>
          <h3 className="text-xl font-mono text-green-400 mb-4">Curriculum</h3>
          <div className="space-y-4">
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek1Browser(!openWeek1Browser)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 1 – Network & Rendering Core</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek1Browser ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek1Browser && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">DNS, TCP, TLS, HTTP</li>
                    <li className="hover:text-green-300 transition-colors duration-200">DOM, CSSOM, rendering pipeline</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Script execution behavior</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek2Browser(!openWeek2Browser)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 2 – Browser Security Model</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek2Browser ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek2Browser && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">Same-Origin Policy</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Cookies & sessions</li>
                    <li className="hover:text-green-300 transition-colors duration-200">SameSite & CSRF</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Security headers (CSP, HSTS)</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="bg-gray-900/60 backdrop-blur-sm border border-green-900/40 rounded-xl shadow-lg hover:shadow-green-400/10 transition-all duration-300 overflow-hidden group">
              <button
                onClick={() => setOpenWeek3Browser(!openWeek3Browser)}
                className="w-full p-6 text-left font-mono text-white flex justify-between items-center hover:bg-gradient-to-r hover:from-green-900/20 hover:to-green-800/20 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-400/5"
              >
                <span className="font-semibold">Week 3 – Practical Observation</span>
                <ChevronDown className={`w-6 h-6 transition-all duration-300 ${openWeek3Browser ? 'rotate-180 text-green-400' : 'group-hover:text-green-300'}`} />
              </button>
              {openWeek3Browser && (
                <div className="p-6 border-t border-green-900/40 font-mono text-gray-300 bg-gray-800/30 animate-in slide-in-from-top-2 duration-300">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li className="hover:text-green-300 transition-colors duration-200">DevTools (network, storage, DOM)</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Browser security mistakes</li>
                    <li className="hover:text-green-300 transition-colors duration-200">Observing real protections</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Who This Bootcamp Is For */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Unica_One'] text-green-400 mb-8">Who This Bootcamp Is For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900/80 backdrop-blur-sm border border-green-900/40 p-6 rounded-xl text-center shadow-lg hover:shadow-green-400/10 transition-all duration-300 hover:border-green-400/50 hover:bg-gray-800/60 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                <Target className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <p className="font-mono text-white font-semibold group-hover:text-green-300 transition-colors duration-300">Aspiring bug bounty hunters</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-green-900/40 p-6 rounded-xl text-center shadow-lg hover:shadow-green-400/10 transition-all duration-300 hover:border-green-400/50 hover:bg-gray-800/60 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                <GraduationCap className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <p className="font-mono text-white font-semibold group-hover:text-green-300 transition-colors duration-300">Cybersecurity students</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-green-900/40 p-6 rounded-xl text-center shadow-lg hover:shadow-green-400/10 transition-all duration-300 hover:border-green-400/50 hover:bg-gray-800/60 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                <Code className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <p className="font-mono text-white font-semibold group-hover:text-green-300 transition-colors duration-300">Web developers</p>
            </div>
            <div className="bg-gray-900/80 backdrop-blur-sm border border-green-900/40 p-6 rounded-xl text-center shadow-lg hover:shadow-green-400/10 transition-all duration-300 hover:border-green-400/50 hover:bg-gray-800/60 transform hover:-translate-y-2 hover:scale-105 group">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
                <Shield className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
              </div>
              <p className="font-mono text-white font-semibold group-hover:text-green-300 transition-colors duration-300">Security professionals</p>
            </div>
          </div>
        </section>

        {/* Registration */}
        <section className="mb-16">
          <h2 className="text-3xl font-['Unica_One'] text-green-400 mb-8">Registration</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <button
              onClick={() => handleEnroll('The Art of Bug Bounty')}
              disabled={enrolledBootcamp !== null}
              className={`bg-green-600 text-black font-mono font-bold px-6 py-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                enrolledBootcamp === 'The Art of Bug Bounty' ? 'ring-2 ring-green-400 animate-pulse' : ''
              }`}
            >
              {enrolledBootcamp === 'The Art of Bug Bounty' ? '✓ Enrolled!' : 'Enroll in The Art of Bug Bounty'}
            </button>
            <button
              onClick={() => handleEnroll('Inside the Browser for Hackers')}
              disabled={enrolledBootcamp !== null}
              className={`bg-green-600 text-black font-mono font-bold px-6 py-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                enrolledBootcamp === 'Inside the Browser for Hackers' ? 'ring-2 ring-green-400 animate-pulse' : ''
              }`}
            >
              {enrolledBootcamp === 'Inside the Browser for Hackers' ? '✓ Enrolled!' : 'Enroll in Inside the Browser for Hackers '}
            </button>
            <button
              onClick={() => handleEnroll('Both (Bundle Discount)')}
              disabled={enrolledBootcamp !== null}
              className={`bg-green-700 text-black font-mono font-bold px-6 py-3 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed ring-2 ring-green-400/30 ${
                enrolledBootcamp === 'Both (Bundle Discount)' ? 'ring-2 ring-green-500 animate-pulse' : ''
              }`}
            >
              {enrolledBootcamp === 'Both (Bundle Discount)' ? '✓ Enrolled!' : 'Enroll in Both (Bundle Discount )'}
            </button>
          </div>
        </section>

        {/* Final Brand Statement */}
        <section className="bg-gradient-to-r from-green-900/30 via-gray-900/40 to-green-900/30 backdrop-blur-sm border border-green-400/50 p-12 rounded-2xl text-center shadow-2xl hover:shadow-green-400/20 transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:from-green-400/30 group-hover:to-green-600/30 transition-all duration-300">
              <Cpu className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors duration-300" />
            </div>
            <p className="text-xl font-mono text-white font-semibold group-hover:text-green-300 transition-colors duration-300 leading-relaxed">
              BLACK BYT3 bootcamps are built for people who want to understand systems deeply — not just follow tools.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BootcampPage;

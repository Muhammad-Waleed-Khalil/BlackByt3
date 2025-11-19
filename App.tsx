import React, { useEffect, useState } from 'react';
import Scene3D from './components/Scene3D';
import Terminal from './components/Terminal';
import Section from './components/Section';
import Navigation from './components/Navigation';
import DetailedService from './components/DetailedService';
import { SectionId } from './types';
import { 
  HERO_CONTENT, 
  WHY_CHOOSE_CARDS,
  ABOUT_CONTENT, 
  TEAM_LIST,
  SERVICES_DATA, 
  SOLUTIONS_INDUSTRIES,
  ACADEMY_CONTENT, 
  ARENA_CONTENT, 
  PROJECTS_DATA,
  SHOP_CONTENT,
  FAQ_CONTENT,
  PARTNERSHIPS_CONTENT,
  RESOURCES_CONTENT,
  CONTACT_FIELDS
} from './constants';
import { Globe, Shield, Target, Hexagon, ChevronRight, Lock, Users, User, ShoppingBag, HelpCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isBooting, setIsBooting] = useState(true);
  const [bootText, setBootText] = useState<string[]>([]);

  useEffect(() => {
    const lines = [
      "INITIALIZING BLACK_BYT3 KERNEL...",
      "LOADING NEURAL SHADERS...",
      "DECRYPTING CONTENT PACKS...",
      "BYPASSING SECURITY LAYER 9...",
      "ESTABLISHING SECURE UPLINK...",
      "ACCESS GRANTED."
    ];
    
    let delay = 0;
    lines.forEach((line, index) => {
      setTimeout(() => {
        setBootText(prev => [...prev, line]);
        if (index === lines.length - 1) {
          setTimeout(() => setIsBooting(false), 800);
        }
      }, delay);
      delay += Math.random() * 400 + 200;
    });
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isBooting) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center font-mono text-red-600 p-8 z-[100]">
        <div className="w-full max-w-md">
          {bootText.map((line, i) => (
            <div key={i} className="mb-2 border-l-2 border-red-600 pl-2 animate-pulse">
              {'>'} {line}
            </div>
          ))}
          <div className="h-1 w-32 bg-red-600 mt-4 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden cursor-crosshair selection:bg-red-900 selection:text-white">
      <Scene3D />
      <Navigation onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        
        {/* 01. HOME */}
        <section id={SectionId.HOME} className="h-screen w-full flex flex-col items-center justify-center relative pointer-events-none px-4">
          <div className="absolute bottom-12 w-full max-w-5xl pointer-events-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
               <div>
                 <h1 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
                   {HERO_CONTENT.tagline}
                 </h1>
                 <h2 className="text-4xl md:text-6xl font-['Unica_One'] leading-none mb-6">
                   {HERO_CONTENT.subtagline}
                 </h2>
                 <p className="font-mono text-gray-400 text-sm leading-relaxed mb-8 border-l border-red-600 pl-4 max-w-md bg-black/50 backdrop-blur-sm p-4">
                   {HERO_CONTENT.description}
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <button onClick={() => scrollToSection(SectionId.CONTACT)} className="bg-red-600 text-black px-6 py-3 font-mono font-bold uppercase tracking-widest hover:bg-white transition-colors text-xs">
                     {HERO_CONTENT.ctaPrimary}
                   </button>
                   <button onClick={() => scrollToSection(SectionId.ACADEMY)} className="border border-red-600 text-red-600 px-6 py-3 font-mono font-bold uppercase tracking-widest hover:bg-red-600 hover:text-black transition-colors text-xs">
                     {HERO_CONTENT.ctaSecondary}
                   </button>
                 </div>
               </div>

               {/* Why Choose Cards - Glassmorphism style */}
               <div className="hidden md:grid grid-cols-1 gap-4">
                  {WHY_CHOOSE_CARDS.map((card, idx) => (
                    <div key={idx} className="bg-black/60 border border-gray-800 p-4 backdrop-blur-sm hover:border-red-600 transition-colors">
                      <h3 className="text-white font-mono font-bold text-sm mb-1 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600"></span>
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-xs font-mono pl-4">{card.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </section>

        {/* 02. ABOUT */}
        <Section id={SectionId.ABOUT} title="02_ABOUT" subtitle={ABOUT_CONTENT.headline}>
          <div className="space-y-16">
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
                         <span className="text-gray-400 font-mono text-xs">{val}</span>
                       </div>
                     ))}
                   </div>
                 </div>
                 
                 <div>
                    <h4 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-4 mt-8">Classified Personnel</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {TEAM_LIST.map((member, i) => (
                        <div key={i} className="border border-gray-800 p-2 text-center hover:bg-red-900/10 transition-colors cursor-help">
                           <div className="w-8 h-8 bg-gray-900 mx-auto mb-2 rounded-full flex items-center justify-center text-gray-600">
                             <User className="w-4 h-4" />
                           </div>
                           <div className="text-xs font-mono text-gray-300">{member.name}</div>
                        </div>
                      ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </Section>

        {/* 03. SERVICES */}
        <Section id={SectionId.SERVICES} title="03_SERVICES" subtitle="Offensive & Defensive Capabilities">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <DetailedService key={idx} service={service} index={idx} />
            ))}
          </div>
        </Section>

        {/* 04. SOLUTIONS */}
        <Section id={SectionId.SOLUTIONS} title="04_SECTORS" subtitle="Target Industries">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {SOLUTIONS_INDUSTRIES.map((ind, i) => (
              <div key={i} className="aspect-square border border-gray-800 flex flex-col items-center justify-center p-4 text-center hover:border-red-500 hover:bg-red-900/5 transition-all group">
                <Hexagon className="w-8 h-8 text-gray-600 mb-4 group-hover:text-red-500 transition-colors" />
                <span className="font-mono text-sm text-gray-300 group-hover:text-white">{ind}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 05. ACADEMY */}
        <Section id={SectionId.ACADEMY} title="05_ACADEMY" subtitle={ACADEMY_CONTENT.headline}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {ACADEMY_CONTENT.offerings.map((offer, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-gray-800 pb-4 group cursor-pointer hover:border-red-600">
                  <div className="flex items-center gap-4">
                    <div className="text-red-900 group-hover:text-red-500 transition-colors">
                       <Lock className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-gray-400 group-hover:text-white transition-colors text-sm uppercase">{offer}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
                </div>
              ))}
            </div>
            
            {/* Featured Course - Practical AWS */}
            <div className="bg-red-900/5 border border-red-900/30 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-red-950/10 transition-all">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
               <h3 className="text-2xl font-['Unica_One'] text-white mb-2 z-10 group-hover:text-red-500 transition-colors">PRACTICAL AWS CERTIFIED</h3>
               <p className="text-gray-400 font-mono text-xs mb-6 z-10">
                  Deployment-ready cloud security skills. No theory, just war stories. 
                  Learn to secure EC2, S3, IAM, and Lambda in hostile environments.
               </p>
               <button className="bg-red-600 text-black font-mono font-bold uppercase text-xs px-6 py-3 hover:bg-white transition-colors z-10">
                 View Curriculum
               </button>
            </div>
          </div>
        </Section>

        {/* 06. ARENA */}
        <Section id={SectionId.ARENA} title="06_ARENA" subtitle={ARENA_CONTENT.headline}>
          <div className="relative bg-black border border-gray-800 p-8 md:p-12">
             {/* Background Tech Grid */}
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
               
               {/* CTF Countdown Widget */}
               <div className="w-full lg:w-80 bg-black border border-red-600/30 p-6 flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(255,0,0,0.1)]">
                 <h4 className="text-red-600 font-['Unica_One'] text-3xl mb-2">NEXT CTF</h4>
                 <div className="text-5xl text-white font-mono font-bold mb-2 tracking-tighter">24:00:00</div>
                 <div className="text-xs text-gray-500 font-mono uppercase mb-6">System Time: UTC</div>
                 <button className="w-full bg-red-600/10 border border-red-600 text-red-500 font-mono py-2 hover:bg-red-600 hover:text-black transition-colors uppercase text-xs tracking-widest">
                   Register Team
                 </button>
               </div>
             </div>
          </div>
        </Section>

        {/* 07. PROJECTS */}
        <Section id={SectionId.PROJECTS} title="07_PROJECTS" subtitle="Declassified Files">
          <div className="space-y-12">
             {PROJECTS_DATA.map((project, i) => (
               <div key={project.id} className="group relative pl-8 border-l border-gray-800 hover:border-red-600 transition-colors cursor-pointer py-2">
                 <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-black border border-gray-800 group-hover:bg-red-600 group-hover:border-red-600 transition-colors" />
                 
                 <h3 className="text-2xl text-white font-bold mb-4 group-hover:text-red-500 transition-colors font-['Unica_One'] uppercase tracking-wider">
                   CASE_STUDY_{project.id}: {project.title}
                 </h3>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs text-gray-400">
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
        </Section>

        {/* 08. SHOP / BOOKINGS */}
        <Section id={SectionId.SHOP} title="08_SHOP" subtitle="Acquire Assets">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SHOP_CONTENT.map((item, i) => (
                <div key={i} className="bg-black border border-gray-800 p-6 hover:border-red-600 transition-all group flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                       <ShoppingBag className="text-red-900 group-hover:text-red-500 transition-colors w-6 h-6" />
                       <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-gray-500 uppercase">{item.type}</span>
                    </div>
                    <h4 className="text-xl font-['Unica_One'] text-white mb-2">{item.title}</h4>
                    <p className="text-sm font-mono text-gray-400 mb-6">{item.description}</p>
                  </div>
                  <button className="w-full border border-gray-700 text-white py-2 font-mono text-xs uppercase hover:bg-red-600 hover:border-red-600 hover:text-black transition-colors">
                    {item.price}
                  </button>
                </div>
              ))}
           </div>
        </Section>

        {/* 09. RESOURCES / INTEL */}
        <Section id={SectionId.RESOURCES} title="09_INTEL" subtitle="Knowledge Base">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h4 className="text-white font-['Unica_One'] text-xl mb-4 border-b border-gray-800 pb-2">LATEST TRANSMISSIONS</h4>
              {RESOURCES_CONTENT.map((res, i) => (
                <div key={i} className="flex items-center justify-between py-3 hover:bg-red-900/5 transition-colors cursor-pointer group">
                  <span className="text-gray-400 font-mono text-sm group-hover:text-white">{res.title}</span>
                  <span className="text-xs text-red-900 uppercase border border-red-900/30 px-2 py-1 rounded">{res.category}</span>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
               <div>
                 <h4 className="text-white font-['Unica_One'] text-xl mb-4 border-b border-gray-800 pb-2">STRATEGIC ALLIANCE</h4>
                 <div className="flex flex-wrap gap-4">
                   {PARTNERSHIPS_CONTENT.strategic.map((partner, i) => (
                     <span key={i} className="text-gray-500 font-mono text-sm border border-gray-800 px-3 py-1 hover:text-red-500 hover:border-red-500 cursor-pointer transition-colors">
                       {partner}
                     </span>
                   ))}
                 </div>
               </div>
               
               <div>
                 <h4 className="text-white font-['Unica_One'] text-xl mb-4 border-b border-gray-800 pb-2">CAREERS</h4>
                 <div className="bg-gray-900/20 p-4 border border-gray-800">
                   <p className="text-xs font-mono text-gray-400 mb-4">
                     We are always looking for anomalies. If you fit the description, submit your packet.
                   </p>
                   <button className="text-red-500 text-xs font-mono uppercase underline hover:text-white">
                     Open Application Form
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </Section>

        {/* 10. FAQ */}
        <Section id={SectionId.FAQ} title="10_FAQ" subtitle="Frequently Intercepted Questions">
           <div className="space-y-4 max-w-3xl">
              {FAQ_CONTENT.map((faq, i) => (
                <div key={i} className="border border-gray-800 p-4 hover:bg-red-900/5 transition-colors">
                   <h5 className="text-red-500 font-mono text-sm mb-2 flex items-center gap-2">
                     <HelpCircle className="w-4 h-4" />
                     {faq.question}
                   </h5>
                   <p className="text-gray-400 text-sm font-mono pl-6">
                     {faq.answer}
                   </p>
                </div>
              ))}
           </div>
        </Section>

        {/* 11. CONTACT */}
        <Section id={SectionId.CONTACT} title="11_UPLINK" subtitle="Secure Channel Open">
          <form className="max-w-2xl w-full space-y-6 bg-black/80 p-8 border border-gray-800" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {CONTACT_FIELDS.slice(0, 4).map((field, i) => (
                 <div key={i} className="space-y-1">
                   <label className="text-xs text-red-900 font-mono uppercase">{field}</label>
                   <input 
                     type="text" 
                     className="w-full bg-black border-b border-gray-800 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm placeholder-gray-900" 
                     placeholder="INPUT_DATA..."
                   />
                 </div>
               ))}
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-red-900 font-mono uppercase">Service Interested</label>
              <select className="w-full bg-black border-b border-gray-800 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm">
                <option>Select Protocol...</option>
                {SERVICES_DATA.map((s, i) => <option key={i}>{s.title}</option>)}
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs text-red-900 font-mono uppercase">Message Payload</label>
              <textarea className="w-full bg-black border-b border-gray-800 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors h-32 resize-none text-sm" placeholder="ENCRYPTED MESSAGE..." />
            </div>
            
            <button className="w-full bg-white text-black font-bold font-mono py-4 uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group">
              <span>Transmit Data</span>
              <div className="w-2 h-2 bg-red-600 group-hover:bg-white rounded-full animate-pulse" />
            </button>
          </form>
        </Section>

        {/* FOOTER */}
        <footer className="py-16 border-t border-red-900/30 bg-black text-center relative z-10">
          <div className="max-w-4xl mx-auto px-6">
             <h2 className="font-['Unica_One'] text-4xl text-gray-800 mb-8 tracking-widest">BLACK BYT3</h2>
             
             <div className="flex flex-wrap justify-center gap-8 mb-12 font-mono text-xs text-gray-500">
               {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Client Portal'].map((link, i) => (
                 <a key={i} href="#" className="hover:text-red-600 transition-colors uppercase">[{link}]</a>
               ))}
             </div>
             
             <div className="flex justify-center gap-8 text-gray-700 mb-8">
               <Globe className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
               <Shield className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
               <Users className="w-6 h-6 hover:text-red-600 cursor-pointer transition-colors" />
             </div>
             
             <p className="text-[10px] font-mono text-gray-800">
               SYSTEM ID: BB-2025-SECURE // UNAUTHORIZED ACCESS IS A FEDERAL OFFENSE
             </p>
          </div>
        </footer>
      </main>

      <Terminal onNavigate={scrollToSection} />
    </div>
  );
};

export default App;
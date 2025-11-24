import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  HERO_CONTENT,
  WHY_CHOOSE_CARDS,
  SERVICES_DATA,
  TEAM_LIST,
  PROJECTS_DATA,
} from '../constants';
import {
  Shield,
  Skull,
  Eye,
  AlertTriangle,
  Lock,
  Brain,
  Cpu,
  BookOpen,
  User,
  ArrowRight,
  Terminal,
  ChevronRight,
  Activity,
  Code2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const serviceIcons = {
    shield: Shield,
    skull: Skull,
    eye: Eye,
    alert: AlertTriangle,
    lock: Lock,
    brain: Brain,
    chip: Cpu,
    book: BookOpen,
    user: User
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 py-20">
        <div className="relative z-10 max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column */}
            <div
              className="lg:col-span-7 space-y-8 relative z-20"
            >
              {/* Title */}
              <div>
                <h1 className="text-[120px] lg:text-[190px] font-['Unica_One'] leading-none tracking-tighter">
                  <span className="text-white block">BLACK</span>
                  <span className="text-red-600 block -mt-6">BYT3</span>
                </h1>
              </div>

              {/* Content */}
              <div className="border-l-2 border-red-600 pl-6 space-y-4">
                <p className="text-red-500 font-mono text-xl tracking-[0.2em] uppercase">
                  {HERO_CONTENT.tagline}
                </p>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-200 leading-tight">
                  {HERO_CONTENT.subtagline}
                </h2>

                <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                  {HERO_CONTENT.description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="group bg-red-600 text-black px-8 py-4 font-mono font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => onNavigate('academy')}
                  className="group border border-red-600 text-red-400 px-8 py-4 font-mono font-bold uppercase tracking-wider hover:bg-red-600/10 transition-colors"
                >
                  Explore Academy
                </button>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div
              className="lg:col-span-5 flex items-center justify-center relative z-10"
            >
              <div className="w-full relative flex justify-center">
                <div className="absolute -inset-20 bg-red-600/20 blur-3xl rounded-full opacity-20"></div>
                <img
                  src="/HeroSection.png"
                  alt="Hero Section Stats"
                  className="relative w-[200%] max-w-none h-auto object-contain -ml-[50%] translate-x-1 transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl lg:text-7xl font-['Unica_One'] text-white mb-2">
              WHY <span className="text-red-600">BLACK BYT3</span>
            </h2>
            <div className="h-px w-32 bg-red-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_CARDS.map((card, idx) => (
              <div
                key={idx}
                className="border border-gray-700 p-6 hover:border-red-600 transition-colors"
              >
                <div className="text-red-600/40 font-['Unica_One'] text-6xl mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white font-mono font-bold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl lg:text-7xl font-['Unica_One'] text-white mb-2">
              OUR <span className="text-red-600">SERVICES</span>
            </h2>
            <div className="h-px w-32 bg-red-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Shield;
              const isActive = activeService === idx;

              return (
                <div
                  key={idx}
                  className={`border-2 p-6 cursor-pointer transition-all ${isActive ? 'border-red-600 bg-red-600/5' : 'border-gray-700 hover:border-red-600/50'
                    }`}
                  onClick={() => {
                    setActiveService(idx);
                    onNavigate('services');
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 border flex items-center justify-center ${isActive ? 'border-red-600 bg-red-600/10' : 'border-gray-700'
                      }`}>
                      <IconComponent className={`w-7 h-7 ${isActive ? 'text-red-500' : 'text-gray-500'}`} />
                    </div>
                    <span className={`font-mono text-xs ${isActive ? 'text-red-400' : 'text-gray-500'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={`font-mono font-bold text-lg mb-3 ${isActive ? 'text-red-400' : 'text-white'}`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className={`flex items-center gap-2 font-mono text-xs ${isActive ? 'text-red-500' : 'text-gray-400'}`}>
                    <span>EXPLORE</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="border border-red-600 text-red-400 px-10 py-3 font-mono font-bold uppercase tracking-wider hover:bg-red-600/10 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl lg:text-7xl font-['Unica_One'] text-white mb-2">
              ELITE <span className="text-red-600">TEAM</span>
            </h2>
            <div className="h-px w-32 bg-red-600 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_LIST.slice(0, 8).map((member, idx) => (
              <div
                key={idx}
                className="border border-gray-700 p-5 hover:border-red-600 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                    <span className="text-white font-mono font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="text-red-400 font-mono text-[10px] bg-red-600/10 border border-red-600/30 px-2 py-1">
                    {member.clearance}
                  </span>
                </div>

                <h3 className="text-white font-mono font-bold text-sm mb-1">
                  {member.name}
                </h3>

                <p className="text-red-400 font-mono text-xs mb-3">
                  {member.role}
                </p>

                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('about')}
              className="border border-red-600 text-red-400 px-10 py-3 font-mono font-bold uppercase tracking-wider hover:bg-red-600/10 transition-colors"
            >
              View Full Team
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 border-t border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl lg:text-7xl font-['Unica_One'] text-white mb-2">
              MISSION <span className="text-red-600">ARCHIVES</span>
            </h2>
            <div className="h-px w-32 bg-red-600 mt-4"></div>
          </div>

          <div className="space-y-8">
            {PROJECTS_DATA.map((project, idx) => (
              <div
                key={project.id}
                className="border border-gray-700 p-6 hover:border-red-600 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 border border-red-600/50 bg-red-600/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="w-5 h-5 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-mono font-bold text-lg mb-1">
                      {project.title}
                    </h3>
                    <p className="text-red-400 text-sm font-mono">{project.client}</p>
                  </div>
                  <span className="text-gray-500 font-mono text-xs">
                    {project.id}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-red-400 font-mono text-xs block mb-1">CHALLENGE</span>
                    <p className="text-gray-300">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-red-400 font-mono text-xs block mb-1">OUTCOME</span>
                    <p className="text-gray-300">{project.outcome}</p>
                  </div>
                </div>

                <button
                  onClick={() => onNavigate('projects')}
                  className="flex items-center gap-2 text-red-500 text-sm font-mono mt-4 hover:gap-3 transition-all"
                >
                  <span>View Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-7xl font-['Unica_One'] text-white mb-6 leading-tight">
            READY TO SECURE YOUR
            <br />
            <span className="text-red-600">DIGITAL FUTURE?</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Don't wait for a breach. Let Black Byt3 be your trusted partner in digital defense.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-red-600 text-black px-10 py-4 font-mono font-bold uppercase tracking-wider hover:bg-red-500 transition-colors"
            >
              <span className="flex items-center gap-2 justify-center">
                Get Security Assessment
                <ArrowRight className="w-5 h-5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('about')}
              className="border border-red-600 text-red-400 px-10 py-4 font-mono font-bold uppercase tracking-wider hover:bg-red-600/10 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

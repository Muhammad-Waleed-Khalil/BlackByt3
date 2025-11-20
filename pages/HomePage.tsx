import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { 
  HERO_CONTENT, 
  WHY_CHOOSE_CARDS, 
  SERVICES_DATA, 
  TEAM_LIST, 
  PROJECTS_DATA,
  ABOUT_CONTENT 
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
  Play,
  Users,
  Award,
  Target,
  CheckCircle,
  Globe,
  Zap,
  TrendingUp,
  Eye as EyeIcon,
  Code,
  Terminal
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate stats counter
  const [statsCounter, setStatsCounter] = useState({
    projects: 0,
    clients: 0,
    threats: 0,
    uptime: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStatsCounter(prev => ({
        projects: Math.min(prev.projects + 1, 150),
        clients: Math.min(prev.clients + 1, 45),
        threats: Math.min(prev.threats + 1, 1200),
        uptime: Math.min(prev.uptime + 1, 99)
      }));
    }, 50);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 h-full">
              {Array.from({ length: 64 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-red-600/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Status Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/50 rounded-full px-4 py-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-red-400 font-mono text-sm tracking-wider">SYSTEMS ACTIVE</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                className="text-6xl lg:text-8xl font-['Unica_One'] leading-none mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <span className="text-white">BLACK</span>
                <br />
                <span className="text-red-600">BYT3</span>
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                className="text-red-500 font-mono text-lg tracking-[0.3em] mb-4 uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {HERO_CONTENT.tagline}
              </motion.p>

              {/* Subtitle */}
              <motion.h2 
                className="text-2xl lg:text-4xl font-bold text-gray-300 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {HERO_CONTENT.subtagline}
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {HERO_CONTENT.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <button 
                  onClick={() => onNavigate('contact')} 
                  className="group bg-red-600 text-black px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <Terminal className="w-4 h-4" />
                  {HERO_CONTENT.ctaPrimary}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => onNavigate('academy')} 
                  className="group border-2 border-red-600 text-red-400 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-red-600 hover:text-black transition-all duration-300 text-sm flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  {HERO_CONTENT.ctaSecondary}
                </button>
              </motion.div>
            </motion.div>

            {/* Right Content - Live Dashboard */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Dashboard Frame */}
              <div className="bg-black/80 border border-red-600/50 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-400 font-mono text-sm">CYBER_SPACE_DASHBOARD</span>
                </div>

                {/* Live Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-900/50 p-4 rounded border border-red-600/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-red-500" />
                      <span className="text-red-400 font-mono text-xs">ACTIVE THREATS</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{statsCounter.threats}</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded border border-green-600/30">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-400 font-mono text-xs">UPTIME</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{statsCounter.uptime}%</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded border border-blue-600/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-blue-400 font-mono text-xs">CLIENTS</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{statsCounter.clients}</div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded border border-purple-600/30">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-purple-500" />
                      <span className="text-purple-400 font-mono text-xs">PROJECTS</span>
                    </div>
                    <div className="text-2xl font-bold text-white">{statsCounter.projects}</div>
                  </div>
                </div>

                {/* Live Feed */}
                <div className="space-y-2">
                  <div className="text-gray-400 font-mono text-xs mb-3">LIVE THREAT FEED</div>
                  {[
                    { time: "14:32:01", event: "PENETRATION TEST INITIATED", severity: "HIGH" },
                    { time: "14:31:45", event: "VULNERABILITY SCAN COMPLETE", severity: "MEDIUM" },
                    { time: "14:31:20", event: "RED TEAM EXERCISE ACTIVE", severity: "CRITICAL" },
                    { time: "14:30:58", event: "INCIDENT RESPONSE STANDING BY", severity: "LOW" }
                  ].map((feed, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-mono">
                      <span className="text-gray-500">{feed.time}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        feed.severity === 'CRITICAL' ? 'bg-red-600/20 text-red-400' :
                        feed.severity === 'HIGH' ? 'bg-orange-600/20 text-orange-400' :
                        feed.severity === 'MEDIUM' ? 'bg-yellow-600/20 text-yellow-400' :
                        'bg-green-600/20 text-green-400'
                      }`}>
                        {feed.severity}
                      </span>
                      <span className="text-gray-300">{feed.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-['Unica_One'] text-white mb-4">
              WHY CHOOSE <span className="text-red-600">BLACK BYT3</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We're not just another cybersecurity company. We're your partners in digital defense, 
              combining cutting-edge technology with human expertise.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {WHY_CHOOSE_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                className="group bg-black/60 border border-gray-800 p-6 backdrop-blur-sm hover:border-red-600 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                  <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-white font-mono font-bold text-lg mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-['Unica_One'] text-white mb-4">
              OUR <span className="text-red-600">EXPERTISE</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From ethical hacking to AI-driven security solutions, we provide comprehensive 
              cybersecurity services that protect your digital assets.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {SERVICES_DATA.slice(0, 6).map((service, idx) => {
              const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || Shield;
              return (
                <motion.div
                  key={idx}
                  className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 backdrop-blur-sm hover:border-red-600 transition-all duration-300 cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -5, scale: 1.02 }}
                  onClick={() => onNavigate('services')}
                >
                  <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="text-white font-mono font-bold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-red-500 text-sm font-mono group-hover:gap-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-['Unica_One'] text-white mb-4">
              ELITE <span className="text-red-600">OPERATIVES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Meet the talented individuals who make Black Byt3 a force to be reckoned with in the cybersecurity landscape.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {TEAM_LIST.slice(0, 8).map((member, idx) => (
              <motion.div
                key={idx}
                className="group bg-black/60 border border-gray-800 p-6 backdrop-blur-sm hover:border-red-600 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-white font-mono font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-white font-mono font-bold text-center text-lg mb-2">
                  {member.name}
                </h3>
                <p className="text-red-400 font-mono text-sm text-center mb-3">
                  {member.role}
                </p>
                <p className="text-gray-400 text-xs text-center leading-relaxed">
                  {member.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-mono">
                    {member.clearance}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button 
              onClick={() => onNavigate('about')} 
              className="group border-2 border-red-600 text-red-400 px-8 py-3 font-mono font-bold uppercase tracking-widest hover:bg-red-600 hover:text-black transition-all duration-300 text-sm flex items-center gap-2 mx-auto"
            >
              <Users className="w-4 h-4" />
              View Full Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-['Unica_One'] text-white mb-4">
              SUCCESS <span className="text-red-600">STORIES</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Real-world security challenges, innovative solutions, and measurable results. 
              See how we've helped organizations strengthen their security posture.
            </p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {PROJECTS_DATA.map((project, idx) => (
              <motion.div
                key={project.id}
                className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 backdrop-blur-sm hover:border-red-600 transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-mono font-bold text-lg">
                      {project.title}
                    </h3>
                    <p className="text-red-400 text-sm font-mono">
                      {project.client}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-red-400 font-mono text-sm mb-2">CHALLENGE</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-red-400 font-mono text-sm mb-2">APPROACH</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.approach}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-red-400 font-mono text-sm mb-2">OUTCOME</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => onNavigate('projects')}
                  className="group/btn flex items-center gap-2 text-red-500 hover:text-red-400 text-sm font-mono transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-6xl font-['Unica_One'] text-white mb-6">
              READY TO SECURE YOUR 
              <br />
              <span className="text-red-600">DIGITAL FUTURE?</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait for a security incident to realize the importance of cybersecurity. 
              Let Black Byt3 be your trusted partner in building a resilient digital defense.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')} 
                className="group bg-red-600 text-black px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 text-sm flex items-center gap-2 justify-center"
              >
                <Zap className="w-5 h-5" />
                Start Your Security Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => onNavigate('about')} 
                className="group border-2 border-red-600 text-red-400 px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-red-600 hover:text-black transition-all duration-300 text-sm flex items-center gap-2 justify-center"
              >
                <Globe className="w-5 h-5" />
                Learn More About Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
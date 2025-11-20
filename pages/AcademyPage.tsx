import React from 'react';
import { ACADEMY_CONTENT } from '../constants';
import { Lock, ChevronRight, BookOpen, Award, Users } from 'lucide-react';

const AcademyPage: React.FC = () => {
  const courses = [
    {
      title: "Practical AWS Certified",
      description: "Deployment-ready cloud security skills. No theory, just war stories.",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$299",
      highlights: ["Real-world AWS scenarios", "Hands-on labs", "Industry certifications"]
    },
    {
      title: "Machine Learning Certified - A Hacker Way",
      description: "AI/ML security from an offensive perspective.",
      duration: "8 weeks", 
      level: "Advanced",
      price: "$399",
      highlights: ["Adversarial ML", "Custom models", "Security applications"]
    },
    {
      title: "Cyber Security Mastery (OCMP)",
      description: "One-to-One personalized cybersecurity mentorship program.",
      duration: "12 weeks",
      level: "All Levels",
      price: "$599",
      highlights: ["1:1 mentorship", "Personalized curriculum", "Career guidance"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            05_ACADEMY
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            {ACADEMY_CONTENT.headline}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            {ACADEMY_CONTENT.offerings.map((offer, idx) => (
              <div key={idx} className="flex items-center justify-between border-b border-gray-700 pb-4 group cursor-pointer hover:border-red-600">
                <div className="flex items-center gap-4">
                  <div className="text-red-900 group-hover:text-red-500 transition-colors">
                     <Lock className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-gray-300 group-hover:text-white transition-colors text-sm uppercase">{offer}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
          
          {/* Featured Course */}
          <div className="bg-red-900/5 border border-red-900/30 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:bg-red-950/10 transition-all">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <h3 className="text-2xl font-['Unica_One'] text-white mb-2 z-10 group-hover:text-red-500 transition-colors">PRACTICAL AWS CERTIFIED</h3>
             <p className="text-gray-300 font-mono text-xs mb-6 z-10">
                Deployment-ready cloud security skills. No theory, just war stories. 
                Learn to secure EC2, S3, IAM, and Lambda in hostile environments.
             </p>
             <button className="bg-red-600 text-black font-mono font-bold uppercase text-xs px-6 py-3 hover:bg-white transition-colors z-10">
               View Curriculum
             </button>
          </div>
        </div>

        {/* Course Catalog */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Course Catalog
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-all group">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-red-600 group-hover:text-red-500" />
                  <h4 className="text-white font-['Unica_One'] text-lg group-hover:text-red-500 transition-colors">
                    {course.title}
                  </h4>
                </div>
                <p className="text-gray-300 font-mono text-sm mb-4">{course.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white">{course.duration}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-white">{course.level}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-red-500 font-bold">{course.price}</span>
                  </div>
                </div>
                <ul className="space-y-1 mb-4">
                  {course.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs font-mono text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-600"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-red-600/10 border border-red-600 text-red-500 font-mono py-2 hover:bg-red-600 hover:text-black transition-colors uppercase text-xs tracking-widest">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/60 border border-gray-700 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-['Unica_One'] text-white">Black Byt3 Certifications</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Practical AWS Certified</h4>
                <p className="text-gray-300 text-sm font-mono">
                  Hands-on AWS security assessment and hardening skills.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Machine Learning Certified</h4>
                <p className="text-gray-300 text-sm font-mono">
                  AI/ML security applications and adversarial techniques.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-4">
                <h4 className="text-red-500 font-mono text-sm mb-2">Cyber Security Mastery</h4>
                <p className="text-gray-300 text-sm font-mono">
                  Comprehensive cybersecurity skill validation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-900/5 border border-red-900/30 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-red-600" />
              <h3 className="text-2xl font-['Unica_One'] text-white">OCMP Program</h3>
            </div>
            <p className="text-gray-300 font-mono text-sm mb-4">
              One-to-One Cyber Mentor Program provides personalized cybersecurity education, 
              hands-on experience, and career guidance tailored to individual goals.
            </p>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Personalized learning roadmap
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Live hands-on labs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Industry expert mentorship
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                Career development support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademyPage;
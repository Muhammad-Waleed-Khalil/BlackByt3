import React, { useState } from 'react';
import { User, MapPin, Clock, DollarSign, Send, Upload } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null as File | null,
    coverLetter: ''
  });

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Penetration Tester",
      department: "Offensive Security",
      location: "Remote / Islamabad",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$60K - $90K",
      description: "Lead penetration testing engagements, develop custom exploits, and mentor junior team members.",
      requirements: [
        "OSCP, CEH, or equivalent certification",
        "5+ years of penetration testing experience",
        "Strong programming skills (Python, Go, Bash)",
        "Experience with web application testing",
        "Network and infrastructure testing expertise"
      ]
    },
    {
      id: 2,
      title: "Red Team Operator",
      department: "Adversary Simulation",
      location: "Remote / Karachi",
      type: "Full-time",
      experience: "2-4 years",
      salary: "$50K - $75K",
      description: "Execute red team engagements, develop attack scenarios, and simulate advanced persistent threats.",
      requirements: [
        "CEH or equivalent certification",
        "3+ years of red team experience",
        "Knowledge of C2 frameworks (Cobalt Strike, Empire)",
        "Social engineering and physical security testing",
        "Incident response and forensics background"
      ]
    },
    {
      id: 3,
      title: "AI Security Researcher",
      department: "Research & Development",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      salary: "$70K - $100K",
      description: "Research AI/ML security vulnerabilities, develop defensive models, and contribute to academic publications.",
      requirements: [
        "MS/PhD in Computer Science or related field",
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Knowledge of adversarial ML attacks",
        "Strong research and writing skills",
        "Publications in security conferences preferred"
      ]
    },
    {
      id: 4,
      title: "Security Engineer",
      department: "DevSecOps",
      location: "Remote / Lahore",
      type: "Full-time",
      experience: "1-3 years",
      salary: "$40K - $60K",
      description: "Implement security controls in CI/CD pipelines, automate security testing, and build secure infrastructure.",
      requirements: [
        "Bachelor's degree in Computer Science",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of container security (Docker, Kubernetes)",
        "Scripting skills (Python, Bash, PowerShell)",
        "DevOps and Infrastructure as Code experience"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData({
      ...applicationData,
      resume: file
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', applicationData);
    // Here you would typically send the data to your backend
    alert('Application submitted successfully! We will review your submission and get back to you soon.');
    setShowApplicationForm(false);
  };

  if (showApplicationForm) {
    return (
      <div className="min-h-screen py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button 
              onClick={() => setShowApplicationForm(false)}
              className="text-red-600 hover:text-red-500 font-mono text-sm mb-4"
            >
              ← Back to Careers
            </button>
            <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
              13_APPLICATION
            </h2>
            <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
              Career Application Form
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-black/80 p-8 border border-gray-700 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={applicationData.name}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  required
                />
              </div>
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={applicationData.email}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  required
                />
              </div>
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Phone</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                />
              </div>
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Position Applied For</label>
                <select 
                  name="position"
                  value={applicationData.position}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  required
                >
                  <option value="">Select Position...</option>
                  {jobOpenings.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="text-xs text-red-900 font-mono uppercase">Years of Experience</label>
              <input 
                type="text" 
                name="experience"
                value={applicationData.experience}
                onChange={handleInputChange}
                className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                placeholder="e.g., 5 years"
                required
              />
            </div>

            <div>
              <label className="text-xs text-red-900 font-mono uppercase">Resume (PDF)</label>
              <div className="border border-gray-700 p-4 bg-black/50">
                <input 
                  type="file" 
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="w-full bg-black text-gray-300 font-mono text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:bg-red-600 file:text-black file:font-mono hover:file:bg-white transition-colors"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="text-xs text-red-900 font-mono uppercase">Cover Letter</label>
              <textarea 
                name="coverLetter"
                value={applicationData.coverLetter}
                onChange={handleInputChange}
                className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors h-32 resize-none text-sm" 
                placeholder="Tell us why you're interested in joining Black Byt3..."
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-white text-black font-bold font-mono py-4 uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group"
            >
              <Send className="w-4 h-4" />
              <span>Submit Application</span>
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            13_CAREERS
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Join the Cyber Resistance
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            We're always looking for anomalies — skilled hackers, security researchers, and innovative minds who can help us build a more secure digital world. If you fit the description, submit your packet.
          </p>
        </div>

        {/* Why Join Black Byt3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <User className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-white font-['Unica_One'] text-xl mb-2">Work with Experts</h3>
            <p className="text-gray-300 font-mono text-sm">Collaborate with top-tier security professionals and industry leaders.</p>
          </div>
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <Clock className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-white font-['Unica_One'] text-xl mb-2">Flexible Environment</h3>
            <p className="text-gray-300 font-mono text-sm">Remote-first culture with flexible hours and work-life balance.</p>
          </div>
          <div className="bg-black/60 border border-gray-700 p-6 text-center">
            <DollarSign className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-white font-['Unica_One'] text-xl mb-2">Competitive Package</h3>
            <p className="text-gray-300 font-mono text-sm">Industry-leading compensation, benefits, and professional development.</p>
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Active Job Openings
          </h3>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="mb-4 lg:mb-0">
                    <h4 className="text-xl font-['Unica_One'] text-white mb-2">{job.title}</h4>
                    <p className="text-gray-300 font-mono text-sm">{job.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-gray-400 uppercase">
                      {job.department}
                    </span>
                    <span className="text-xs font-mono border border-red-900/30 px-2 py-1 text-gray-400 uppercase">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="font-mono text-gray-300">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span className="font-mono text-gray-300">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-red-600" />
                    <span className="font-mono text-gray-300">{job.salary}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-red-500 font-mono text-sm mb-3 uppercase">Requirements:</h5>
                  <ul className="space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="text-gray-300 font-mono text-xs flex items-center gap-2">
                        <span className="w-1 h-1 bg-red-600"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => setShowApplicationForm(true)}
                  className="bg-red-600 text-black font-mono font-bold text-xs px-6 py-2 hover:bg-white transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* General Application */}
        <div className="text-center">
          <div className="bg-red-900/5 border border-red-900/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">Don't See Your Perfect Role?</h3>
            <p className="text-gray-300 font-mono text-sm mb-6">
              We're always interested in hearing from talented security professionals. Send us your resume and tell us how you'd like to contribute.
            </p>
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="bg-white text-black font-mono font-bold text-xs px-6 py-3 hover:bg-red-600 hover:text-white transition-colors"
            >
              General Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

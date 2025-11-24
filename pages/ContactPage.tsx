import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import { Send, Upload, Clock, DollarSign } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    contactTime: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({
      ...formData,
      file: file
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Message transmitted successfully! We will respond within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      contactTime: '',
      message: '',
      file: null
    });
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            11_UPLINK
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Secure Channel Open
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Ready to strengthen your cybersecurity posture? Our team is standing by to discuss your security needs and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/80 p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                    placeholder="INPUT_DATA..."
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                    placeholder="INPUT_DATA..."
                  />
                </div>
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                    placeholder="INPUT_DATA..."
                    required
                  />
                </div>
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                    placeholder="INPUT_DATA..."
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Service Interested *</label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  required
                >
                  <option value="">Select Protocol...</option>
                  {SERVICES_DATA.map((service, i) => (
                    <option key={i} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Budget (Optional)</label>
                  <select 
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  >
                    <option value="">Select Range...</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-red-900 font-mono uppercase">Preferred Contact Time</label>
                  <select 
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={handleInputChange}
                    className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors text-sm" 
                  >
                    <option value="">Select Time...</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Message Payload *</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-black border-b border-gray-700 focus:border-red-600 outline-none text-white py-2 font-mono transition-colors h-32 resize-none text-sm" 
                  placeholder="ENCRYPTED_MESSAGE..."
                  required
                />
              </div>

              <div>
                <label className="text-xs text-red-900 font-mono uppercase">Attach File (Optional)</label>
                <div className="border border-gray-700 p-4 bg-black/50">
                  <input 
                    type="file" 
                    onChange={handleFileUpload}
                    className="w-full bg-black text-gray-300 font-mono text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-xs file:bg-red-600 file:text-black file:font-mono hover:file:bg-white transition-colors"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  {formData.file && (
                    <p className="text-green-400 font-mono text-xs mt-2">
                      ✓ {formData.file.name} selected
                    </p>
                  )}
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-black font-bold font-mono py-4 uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-4 group"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Data</span>
                <div className="w-2 h-2 bg-red-600 group-hover:bg-white rounded-full animate-pulse" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-black/60 border border-gray-700 p-6">
              <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Communication Channels</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-red-900 font-mono uppercase text-xs block mb-1">Secure Email</span>
                  <div className="text-white font-mono text-sm">
                    <div>info@blackbyt3.net</div>
                    <div>contact@blackbyt3.net</div>
                  </div>
                </div>
                <div>
                  <span className="text-red-900 font-mono uppercase text-xs block mb-1">Emergency Response</span>
                  <div className="text-white font-mono text-sm">
                    <div>+92 3149607607</div>
                    <div>+12393564959</div>
                  </div>
                </div>
                <div>
                  <span className="text-red-900 font-mono uppercase text-xs block mb-1">Office Location</span>
                  <span className="text-white font-mono text-sm">7901 4th St N, STE 300, St. Petersburg, FL 33702, USA</span>
                </div>
              </div>
            </div>

            <div className="bg-black/60 border border-gray-700 p-6">
              <h3 className="text-red-500 font-['Unica_One'] text-xl mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-red-600" />
                  <div>
                    <span className="text-white font-mono text-sm">General Inquiries</span>
                    <p className="text-gray-300 font-mono text-xs">Within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-4 h-4 text-red-600" />
                  <div>
                    <span className="text-white font-mono text-sm">Sales & Partnerships</span>
                    <p className="text-gray-300 font-mono text-xs">Within 4 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-900/5 border border-red-900/30 p-6">
              <h3 className="text-white font-['Unica_One'] text-xl mb-4">Why Choose Black Byt3?</h3>
              <ul className="space-y-2 text-sm font-mono text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600"></span>
                  Expert team with proven track record
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600"></span>
                  24/7 emergency response capability
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600"></span>
                  Industry-leading methodologies
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600"></span>
                  Comprehensive reporting and documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

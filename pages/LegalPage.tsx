import React, { useState } from 'react';
import { Shield, FileText, Cookie, AlertTriangle } from 'lucide-react';

const LegalPage: React.FC = () => {
  const [activePolicy, setActivePolicy] = useState('privacy');

  const policies = {
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      content: `
        <h3>Last Updated: November 20, 2025</h3>
        
        <h4>1. Information We Collect</h4>
        <p>Black Byt3 collects information you provide directly to us, such as when you:</p>
        <ul>
          <li>Contact us through our website or forms</li>
          <li>Apply for employment or partnerships</li>
          <li>Register for services or courses</li>
          <li>Access our client portal</li>
          <li>Subscribe to our communications</li>
        </ul>

        <h4>2. How We Use Your Information</h4>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send technical notices, updates, and support messages</li>
          <li>Respond to your comments and questions</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h4>3. Information Sharing and Disclosure</h4>
        <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal requirements</li>
          <li>To protect our rights and prevent fraud</li>
          <li>With service providers who assist in our operations</li>
        </ul>

        <h4>4. Data Security</h4>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h4>5. Contact Us</h4>
        <p>If you have questions about this Privacy Policy, please contact us at legal@blackbyt3.com</p>
      `
    },
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      content: `
        <h3>Last Updated: November 20, 2025</h3>
        
        <h4>1. Acceptance of Terms</h4>
        <p>By accessing and using Black Byt3's services, you accept and agree to be bound by these terms and conditions.</p>

        <h4>2. Service Description</h4>
        <p>Black Byt3 provides cybersecurity services including penetration testing, red teaming, threat intelligence, and training programs.</p>

        <h4>3. User Responsibilities</h4>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Use our services only for lawful purposes</li>
          <li>Respect intellectual property rights</li>
        </ul>

        <h4>4. Service Limitations</h4>
        <p>Our services are provided "as is" and we disclaim all warranties. We are not liable for indirect, incidental, or consequential damages.</p>

        <h4>5. Payment Terms</h4>
        <p>Payment terms and fees will be specified in individual service agreements. Late payments may result in service suspension.</p>

        <h4>6. Termination</h4>
        <p>Either party may terminate services with appropriate notice as specified in our service agreements.</p>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      content: `
        <h3>Last Updated: November 20, 2025</h3>
        
        <h4>1. What Are Cookies</h4>
        <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.</p>

        <h4>2. How We Use Cookies</h4>
        <p>We use cookies for:</p>
        <ul>
          <li>Essential website functionality</li>
          <li>Analytics and performance monitoring</li>
          <li>Personalizing your experience</li>
          <li>Security and authentication</li>
        </ul>

        <h4>3. Types of Cookies We Use</h4>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
        </ul>

        <h4>4. Managing Cookies</h4>
        <p>You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>

        <h4>5. Third-Party Cookies</h4>
        <p>We may use third-party services that set cookies to provide analytics and improve user experience.</p>
      `
    }
  };

  const currentPolicy = policies[activePolicy as keyof typeof policies];

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            15_LEGAL
          </h2>
          <h1 className="text-4xl md:text-5xl font-['Unica_One'] leading-none mb-8 text-white">
            Legal Information
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Our commitment to transparency and legal compliance in all our operations and services.
          </p>
        </div>

        {/* Policy Navigation */}
        <div className="flex space-x-1 bg-black/60 p-1 border border-gray-700 mb-8">
          {Object.entries(policies).map(([key, policy]) => (
            <button
              key={key}
              onClick={() => setActivePolicy(key)}
              className={`flex items-center gap-2 px-4 py-2 font-mono text-xs transition-colors ${
                activePolicy === key 
                  ? 'bg-red-600 text-black' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <policy.icon className="w-4 h-4" />
              {policy.title}
            </button>
          ))}
        </div>

        {/* Policy Content */}
        <div className="bg-black/60 border border-gray-700 p-8">
          <div className="flex items-center gap-3 mb-6">
            <currentPolicy.icon className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-['Unica_One'] text-white">{currentPolicy.title}</h2>
          </div>
          
          <div 
            className="prose prose-invert max-w-none font-mono text-sm text-gray-300"
            dangerouslySetInnerHTML={{ 
              __html: currentPolicy.content
                .replace(/<h3>/g, '<h3 class="text-red-500 text-xl font-[\'Unica_One\'] mb-4 mt-6">')
                .replace(/<h4>/g, '<h4 class="text-white text-lg font-bold mb-3 mt-4">')
                .replace(/<p>/g, '<p class="mb-4 text-gray-300 leading-relaxed">')
                .replace(/<ul>/g, '<ul class="mb-4 ml-4">')
                .replace(/<li>/g, '<li class="mb-2 text-gray-300">') 
                .replace(/<strong>/g, '<strong class="text-white font-bold">')
            }}
          />
        </div>

        {/* Legal Notice */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-900/5 border border-red-900/30 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <h3 className="text-white font-['Unica_One'] text-xl">Important Notice</h3>
            </div>
            <p className="text-gray-300 font-mono text-sm mb-4">
              By using our services, you acknowledge that you have read and understood our legal policies. 
              These policies may be updated from time to time.
            </p>
            <p className="text-gray-300 font-mono text-sm">
              For questions about our legal policies, please contact our legal team.
            </p>
          </div>

          <div className="bg-black/60 border border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-red-600" />
              <h3 className="text-white font-['Unica_One'] text-xl">Compliance</h3>
            </div>
            <ul className="space-y-2 text-sm font-mono text-gray-300">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                GDPR Compliant
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                SOC 2 Type II Certified
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                ISO 27001 Aligned
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red-600"></span>
                PCI DSS Compliant
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-black/60 border border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-['Unica_One'] text-2xl mb-4">Legal Inquiries</h3>
            <p className="text-gray-300 font-mono text-sm mb-6">
              For legal matters, compliance questions, or policy clarifications.
            </p>
            <div className="space-y-2 text-sm font-mono text-gray-300">
              <p><span className="text-red-500">Email:</span> legal@blackbyt3.com</p>
              <p><span className="text-red-500">Address:</span> Islamabad, Pakistan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
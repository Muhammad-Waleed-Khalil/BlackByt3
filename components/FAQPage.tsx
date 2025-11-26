import React, { useEffect } from 'react';
import { FAQ_CONTENT, SERVICES_DATA } from '../constants';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

const FAQPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const additionalFaqs = [
    {
      question: "What industries do you specialize in?",
      answer: "We work across multiple sectors including financial services, healthcare, government, IoT/embedded systems, SaaS platforms, and critical infrastructure. Our team has deep expertise in each industry's unique security challenges."
    },
    {
      question: "How do you ensure ethical hacking practices?",
      answer: "All our operations follow strict ethical guidelines. We obtain proper authorization before any testing, respect client confidentiality, and never exploit discovered vulnerabilities beyond the scope of agreed testing."
    },
    {
      question: "What certifications do your team members hold?",
      answer: "Our team holds industry-standard certifications including OSCP, CEH, CISSP, AWS Certified, and specialized certifications in red teaming, incident response, and security architecture."
    },
    {
      question: "Do you provide training for our in-house team?",
      answer: "Yes, we offer customized training programs including workshops, seminars, and hands-on labs. Our training can be tailored to your team's skill level and specific security needs."
    }
  ];

  const allFaqs = [...FAQ_CONTENT, ...additionalFaqs];

  // Add FAQ Schema
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": allFaqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let script = document.getElementById('faq-schema') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = 'faq-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(faqSchema);
  }, [allFaqs]);

  return (
    <>
      <SEO
        title="FAQ - Cybersecurity Questions Answered | Black Byt3"
        description="Frequently asked questions about Black Byt3's cybersecurity services, penetration testing, training programs, pricing, certifications, and methodologies. Get answers from our security experts."
        keywords="cybersecurity FAQ pakistan, penetration testing questions, ethical hacking FAQ, security audit questions, cybersecurity training FAQ, OSCP FAQ, CEH FAQ, Black Hol3 questions, security consulting FAQ pakistan"
        url="https://www.blackbyt3.com/faq"
        image="https://www.blackbyt3.com/Logo.webp"
      />
      <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-red-600 font-mono text-sm tracking-[0.3em] mb-4 animate-pulse uppercase">
            10_FAQ
          </h2>
          <h1 className="text-5xl md:text-6xl font-['Unica_One'] leading-none mb-8 text-white">
            Frequently Intercepted Questions
          </h1>
          <p className="font-mono text-gray-300 text-lg max-w-3xl">
            Get answers to common questions about our cybersecurity services, training programs, and methodologies.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {allFaqs.map((faq, i) => (
            <div key={i} className="border border-gray-700 hover:bg-red-900/5 transition-colors">
              <button
                onClick={() => toggleFaq(i)}
                className="w-full p-4 text-left flex items-center justify-between hover:bg-red-900/10 transition-colors"
              >
                <h5 className="text-red-500 font-mono text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  {faq.question}
                </h5>
                {openFaq === i ? (
                  <ChevronUp className="w-4 h-4 text-red-600" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                )}
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300 text-sm font-mono pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Service Categories FAQ */}
        <div className="mt-20">
          <h3 className="text-red-500 font-mono uppercase text-xs tracking-widest mb-8 border-b border-red-900/50 pb-2">
            Service-Specific Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <div key={idx} className="bg-black/60 border border-gray-700 p-6 hover:border-red-600 transition-colors">
                <h4 className="text-white font-['Unica_One'] text-lg mb-3">{service.title}</h4>
                <p className="text-gray-300 font-mono text-sm mb-4">{service.description}</p>
                <button className="text-red-500 text-xs font-mono uppercase underline hover:text-white">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <div className="bg-red-900/5 border border-red-900/30 p-8 max-w-2xl mx-auto">
            <HelpCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-['Unica_One'] text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 font-mono text-sm mb-6">
              Can't find the answer you're looking for? Our team is here to help. 
              Contact us through our secure communication channels.
            </p>
            <button className="bg-red-600 text-black font-mono font-bold text-xs px-6 py-3 hover:bg-white transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQPage;

import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Black Byt3 - Elite Cybersecurity & Penetration Testing Services in Pakistan | Ethical Hacking Experts',
  description = 'Black Byt3 is Pakistan\'s leading cybersecurity firm offering penetration testing, red team operations, security audits, AI/ML security, cloud security, and cybersecurity training. ISO certified ethical hackers protecting businesses since 2020.',
  keywords = 'cybersecurity pakistan, penetration testing services, ethical hacking pakistan, red team operations, security audit pakistan, vulnerability assessment, AI security, machine learning security, cyber defense pakistan, OSCP training, CEH certification, security training pakistan, BlackByt3, Black Byt3, penetration tester pakistan, cybersecurity consultancy, cloud security pakistan, AWS security, information security, network security, web application security, mobile app security, IoT security, hardware hacking, VAPT services, cyber security courses pakistan, security researcher pakistan, bug bounty, CTF pakistan, cybersecurity bootcamp, offensive security, defensive security',
  image = 'https://www.blackbyt3.com/Logo.webp',
  url = 'https://www.blackbyt3.com',
  type = 'website',
  author = 'Black Byt3 Security Team',
  publishedTime,
  modifiedTime,
  noindex = false
}) => {
  const siteName = 'Black Byt3';
  const fullTitle = title.includes('Black Byt3') || title.includes('BLACK BYT3') ? title : `${title} | Black Byt3`;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Helper function to set or update meta tags
    const setMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.split('"')[1]);
        } else if (selector.includes('name=')) {
          element.setAttribute('name', selector.split('"')[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, content);
    };

    // Helper function to set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic Meta Tags
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);
    setMetaTag('meta[name="author"]', 'content', author);

    // Canonical URL
    setLinkTag('canonical', url);

    // Robots
    if (noindex) {
      setMetaTag('meta[name="robots"]', 'content', 'noindex, nofollow');
    } else {
      setMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    }

    // Open Graph / Facebook
    setMetaTag('meta[property="og:type"]', 'content', type);
    setMetaTag('meta[property="og:url"]', 'content', url);
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', image);
    setMetaTag('meta[property="og:site_name"]', 'content', siteName);
    setMetaTag('meta[property="og:locale"]', 'content', 'en_US');

    // Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:url"]', 'content', url);
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', image);
    setMetaTag('meta[name="twitter:creator"]', 'content', '@BlackByt3');

    // Article specific
    if (type === 'article' && publishedTime) {
      setMetaTag('meta[property="article:published_time"]', 'content', publishedTime);
      if (modifiedTime) {
        setMetaTag('meta[property="article:modified_time"]', 'content', modifiedTime);
      }
      setMetaTag('meta[property="article:author"]', 'content', author);
    }

    // Additional SEO Meta Tags
    setMetaTag('meta[name="viewport"]', 'content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    setMetaTag('meta[name="theme-color"]', 'content', '#DC2626');
    setMetaTag('meta[name="msapplication-TileColor"]', 'content', '#000000');

    // Helper function to add or update JSON-LD script
    const setJsonLd = (id: string, data: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // Structured Data - Organization
    setJsonLd('schema-organization', {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Black Byt3",
      "alternateName": ["BLACK BYT3", "BlackByt3", "Black Byte 3"],
      "url": "https://www.blackbyt3.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.blackbyt3.com/Logo.webp",
        "width": "512",
        "height": "512"
      },
      "image": "https://www.blackbyt3.com/Logo.webp",
      "description": "Pakistan's premier cybersecurity firm specializing in penetration testing, red team operations, security audits, AI/ML security solutions, and comprehensive cybersecurity training programs.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK",
        "addressRegion": "Pakistan"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "email": "contact@blackbyt3.com",
          "availableLanguage": ["English", "Urdu"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "email": "sales@blackbyt3.com",
          "availableLanguage": ["English", "Urdu"]
        }
      ],
      "sameAs": [
        "https://twitter.com/BlackByt3",
        "https://linkedin.com/company/blackbyt3",
        "https://github.com/blackbyt3",
        "https://www.facebook.com/blackbyt3",
        "https://www.instagram.com/blackbyt3"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "knowsAbout": [
        "Cybersecurity",
        "Penetration Testing",
        "Ethical Hacking",
        "Red Team Operations",
        "Security Audits",
        "Vulnerability Assessment",
        "AI Security",
        "Cloud Security",
        "IoT Security",
        "Hardware Security",
        "Cybersecurity Training"
      ],
      "slogan": "Silent. Swift. Secure."
    });

    // Structured Data - Website
    setJsonLd('schema-website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": siteName,
      "alternateName": "Black Byt3 Cyber Space",
      "url": "https://www.blackbyt3.com",
      "description": "Premier cybersecurity services including penetration testing, red team operations, security training, and AI/ML security solutions in Pakistan.",
      "publisher": {
        "@type": "Organization",
        "name": "Black Byt3"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.blackbyt3.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "inLanguage": "en-US"
    });

    // Structured Data - Professional Service
    setJsonLd('schema-professional-service', {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Black Byt3",
          "image": "https://www.blackbyt3.com/Logo.webp",
          "url": "https://www.blackbyt3.com",
          "telephone": "+92-XXX-XXXXXXX",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PK"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "addressCountry": "PK"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
          },
          "sameAs": [
            "https://twitter.com/BlackByt3",
            "https://linkedin.com/company/blackbyt3"
          ],
          "serviceType": [
            "Cybersecurity Services",
            "Penetration Testing",
            "Security Consulting",
            "Cybersecurity Training"
          ]
    });

  }, [fullTitle, description, keywords, author, url, image, type, publishedTime, modifiedTime, noindex, siteName]);

  return null;
};

export default SEO;

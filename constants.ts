import { SectionId, ServiceItem, TeamMember, ProjectCaseStudy, ShopItem, FaqItem } from './types';

// Mega Menu Navigation Structure
export const MEGA_MENU_CATEGORIES = [
  {
    id: 'company',
    label: 'COMPANY',
    icon: 'Building',
    subcategories: [
      {
        title: 'MAIN',
        items: [
          { id: SectionId.HOME, label: 'Home', description: 'Black Byt3 Main' },
          { id: SectionId.ABOUT, label: 'About', description: 'Our story and mission' }
        ]
      },
      {
        title: 'BUSINESS',
        items: [
          { id: SectionId.PARTNERSHIPS, label: 'Partnerships', description: 'Strategic alliances' },
          { id: SectionId.CAREERS, label: 'Careers', description: 'Join our team' },
          { id: SectionId.SUPPORT, label: 'Support', description: 'Client portal and help' }
        ]
      },
      {
        title: 'INFO',
        items: [
          { id: SectionId.FAQ, label: 'FAQ', description: 'Common questions' },
          { id: SectionId.CONTACT, label: 'Contact', description: 'Get in touch' },
          { id: SectionId.LEGAL, label: 'Legal', description: 'Privacy, Terms, Legal' }
        ]
      }
    ]
  },
  {
    id: 'solutions',
    label: 'SOLUTIONS',
    icon: 'Briefcase',
    subcategories: [
      {
        title: 'SERVICES',
        items: [
          { id: SectionId.SERVICES, label: 'Services', description: 'Cybersecurity, AI/ML, Hardware Tools' }
        ]
      },
      {
        title: 'ACADEMY',
        items: [
          { id: SectionId.ACADEMY, label: 'Academy', description: 'Courses, Certifications, Black Hol3' }
        ]
      },
      {
        title: 'SOLUTIONS',
        items: [
          { id: SectionId.SOLUTIONS, label: 'Solutions', description: 'Industry-specific solutions' }
        ]
      },
      {
        title: 'PROJECTS',
        items: [
          { id: SectionId.PROJECTS, label: 'Portfolio', description: 'Case studies and success stories' }
        ]
      }
    ]
  },
  {
    id: 'events-resources',
    label: 'EVENTS & RESOURCES',
    icon: 'Target',
    subcategories: [
      {
        title: 'EVENTS & BOOKINGS',
        items: [
          { id: SectionId.ARENA, label: 'Arena', description: 'Events, CTFs, Competitions' },
          { id: SectionId.SHOP, label: 'Shop', description: 'Training sessions, Merchandise' }
        ]
      },
      {
        title: 'ACADEMY',
        items: [
          { id: SectionId.BOOTCAMP, label: 'Bootcamp', description: 'January Bootcamps 2026' }
        ]
      }
    ]
  }
];

export const NAV_ITEMS = [
  { id: SectionId.HOME, label: '01_HOME' },
  { id: SectionId.ABOUT, label: '02_ABOUT' },
  { id: SectionId.SERVICES, label: '03_SERVICES' },
  { id: SectionId.SOLUTIONS, label: '04_SOLUTIONS' },
  { id: SectionId.ACADEMY, label: '05_ACADEMY' },
  { id: SectionId.ARENA, label: '06_ARENA' },
  { id: SectionId.PROJECTS, label: '07_PROJECTS' },
  { id: SectionId.SHOP, label: '08_SHOP' },
  { id: SectionId.FAQ, label: '10_FAQ' },
  { id: SectionId.CONTACT, label: '11_UPLINK' },
  { id: SectionId.PARTNERSHIPS, label: '12_PARTNERSHIPS' },
  { id: SectionId.CAREERS, label: '13_CAREERS' },
  { id: SectionId.SUPPORT, label: '14_SUPPORT' },
  { id: SectionId.LEGAL, label: '15_LEGAL' },
];

export const HERO_CONTENT = {
  title: "BLACK BYT3",
  tagline: "Silent. Swift. Secure.",
  subtagline: "Empowering Secure Innovation in the Digital Age",
  description: "Black Byt3 is a cyber space a living digital sentinel combining ethical hackers, AI engineers, and practical R&D. We deliver penetration testing, red teaming, threat intelligence, and AI-driven solutions so enterprises, startups, and students can innovate without fear.",
  ctaPrimary: "Request a Free Security Assessment",
  ctaSecondary: "Explore Courses"
};

export const WHY_CHOOSE_CARDS = [
  {
    title: "Talented & Verified Team",
    desc: "Ethical hackers, security engineers, and AI developers with hands-on deliverables."
  },
  {
    title: "Hands-on Development",
    desc: "From exploit prototyping to production-ready remediation and automation."
  },
  {
    title: "Educational Outreach",
    desc: "Academy, Black Hol3 mentorship, FYP support  building future talent."
  },
  {
    title: "Innovation",
    desc: "Building and creating our own IoT tools and ML Models."
  }
];

export const ABOUT_CONTENT = {
  headline: "We make the digital world safer.",
  story: "Founded to bridge the gap between academic theory and real-world security, Black Byt3 grew into a Cyber Space: Command Center for operations, Black Labs for R&D, The Academy for learning, and The Arena for community competitions and events.",
  vision: "To lead the future of secure and intelligent technology by delivering cutting-edge cybersecurity and AI solutions, empowering businesses and individuals to innovate fearlessly in the digital age.",
  mission: "To build a living Cyber Space that unites hackers, developers, researchers, and learners under one secure digital realm  enabling innovation, collaboration, and defense at every level.",
  values: ["Empower Clients", "Innovation", "Support Emerging Talent", "Innovate Relentlessly", "Promote Digital Literacy", "Build a Trusted Cyber Space"]
};

export const TEAM_LIST: TeamMember[] = [
  { name: "Muhammad Waqar", role: "Founder / CEO", description: "The architect of the Cyber Space. Orchestrating offensive operations and strategic defense.", clearance: "L5_ADMIN", specialty: "ARCHITECT", linkedin: "https://linkedin.com/in/muhammad-waqar", github: "https://github.com/muhammad-waqar" },
  { name: "Muhammad Jawad", role: "CTO / Chief Technology Officer", description: "Ensuring swift execution of all tactical engagements. Master of logistics.", clearance: "L4_COMMAND", specialty: "OPS_LEAD", linkedin: "https://linkedin.com/in/muhammad-jawad", github: "https://github.com/muhammad-jawad" },
  { name: "Shahmir Khan", role: "Machine Learning Engineer", description: "Breaching secure perimeters before breakfast. Network infrastructure exploitation.", clearance: "L4_OFFENSIVE", specialty: "BREACHER", linkedin: "https://www.linkedin.com/in/shahmir-khan-b35834254/", github: "https://github.com/Shahmir675" },
  { name: "Muhammad Waleed Khalil", role: "Web Developer", description: "Frontend sorcerer. Backend demon. Deploys code that hacks itself for fun.", clearance: "LΩ_OMNISCIENT", specialty: "REALITY_BENDER", linkedin: "https://www.linkedin.com/in/mwaleedkhalil/", github: "https://github.com/Muhammad-Waleed-Khalil" },
  { name: "Arbab Ammar Hanif", role: "AI Engineer & IoT Expert", description: "Adversary emulation specialist. Simulates APT threats to test organizational resilience.", clearance: "L4_OFFENSIVE", specialty: "RED_TEAM", linkedin: "https://linkedin.com/in/arbab-ammar-hanif", github: "https://github.com/arbab-ammar-hanif" },
  { name: "Jafar Ali", role: "Red Teamer & Penetration Tester", description: "Black Labs Director. If it has a circuit board, he can hack it.", clearance: "L4_HARDWARE", specialty: "HARDWARE", linkedin: "https://linkedin.com/in/jafar-ali", github: "https://github.com/jafar-ali" },
  { name: "Muhammad Zeeshan", role: "Penetration Tester & Security Analyst", description: "Securing the ethereal. Specialist in AWS/Azure hardening and container escapes.", clearance: "L3_CLOUD", specialty: "CLOUD_SEC", linkedin: "https://linkedin.com/in/muhammad-zeeshan", github: "https://github.com/muhammad-zeeshan" },
  { name: "Hisbullah", role: "Penetration Tester & Security Analyst", description: "The rising shadow. Specializing in web application vulnerabilities.", clearance: "L2_OPERATOR", specialty: "WEB_SEC", linkedin: "https://linkedin.com/in/hisbullah", github: "https://github.com/hisbullah" },
  { name: "Aqsa Wadood", role: "Communications & Community Manager", description: "Monitoring the dark web wires. Tracking threat actors and TTPs.", clearance: "L3_INTEL", specialty: "INTEL", linkedin: "https://linkedin.com/in/aqsa-wadood", github: "https://github.com/aqsa-wadood" },
  { name: "Sanan Ali Shah", role: "Public Relations Manager", description: "Builder of secure pipelines. Automating defense mechanisms.", clearance: "L2_ENGINEER", specialty: "DEVSECOPS", linkedin: "https://linkedin.com/in/sanan-ali-shah", github: "https://github.com/sanan-ali-shah" },

];

export const CTF_LIST: TeamMember[] = [
  { name: "Mian Hisbullah", role: "CTF Captain", description: "Leading the charge with strategic brilliance and tactical mastery in cybersecurity competitions.", clearance: "L3_CTF_LEAD", specialty: "CTF_CAPTAIN", linkedin: "https://linkedin.com/in/mian-hisbullah" },
  { name: "Raza Ellahi", role: "CTF Player", description: "Elite CTF competitor with exceptional problem-solving skills and technical expertise.", clearance: "L2_CTF", specialty: "CTF_CONTESTANT", linkedin: "https://linkedin.com/in/raza-ellahi" },
  { name: "Asees Shah", role: "CTF Player", description: "Versatile cyber warrior excelling in capture the flag competitions.", clearance: "L2_CTF", specialty: "CTF_CONTESTANT", linkedin: "https://linkedin.com/in/asees-shah" },
  { name: "Samia Sultan", role: "CTF Player", description: "Rising CTF star demonstrating exceptional cybersecurity prowess and dedication.", clearance: "L2_CTF", specialty: "CTF_CONTESTANT", linkedin: "https://linkedin.com/in/samia-sultan" },
  { name: "Asfandyar Javid", role: "CTF Player", description: "Skilled cybersecurity specialist bringing innovative approaches to CTF challenges.", clearance: "L2_CTF", specialty: "CTF_CONTESTANT", linkedin: "https://linkedin.com/in/asfandyar-javid" }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Penetration Testing",
    category: "Cybersecurity",
    description: "Real attack simulations, clear remediation.",
    fullDetails: {
      what: "Network, application, wireless, cloud pen tests.",
      how: "Manual + automated testing, proof-of-concept exploits, prioritized remediation.",
      deliverable: "Executive summary, technical report, replayable test cases, mitigation roadmap."
    },
    icon: "shield"
  },
  {
    title: "Red Teaming",
    category: "Cybersecurity",
    description: "Full-scope adversary emulation.",
    fullDetails: {
      what: "Real-world adversary emulation with physical/social/technical vectors.",
      how: "Scenario planning, covert ops, C2 frameworks, post-engagement debrief.",
      deliverable: "Tactical report, risk ranking, recommended controls."
    },
    icon: "skull"
  },
  {
    title: "Threat Intelligence",
    category: "Cybersecurity",
    description: "OSINT collection, monitoring, IOCs, TTPs mapping, threat actor tracking.",
    icon: "eye"
  },
  {
    title: "Incident Response",
    category: "Cybersecurity",
    description: "Triage, containment, forensic data collection, eradication, and recovery guidance.",
    icon: "alert"
  },
  {
    title: "Managed Security",
    category: "Cybersecurity",
    description: "SOC-as-a-Service, 24/7 monitoring, patch management, playbook creation.",
    icon: "lock"
  },
  {
    title: "AI & ML Solutions",
    category: "AI_Solutions",
    description: "Custom ML & automation for security operations.",
    details: ["Custom ML Models", "Automation & Orchestration", "AI-integrated Web & App Solutions"],
    icon: "brain"
  },
  {
    title: "Hardware-based Security",
    category: "Hardware",
    description: "Offensive hardware toolkits (Black Labs).",
    details: ["Wi-Fi pentesting rigs", "HID attack devices", "USB exfil tools", "RFID/NFC cloning kits", "RF analyzers", "Firmware extractors"],
    icon: "chip"
  },
  {
    title: "FYP & Project Support",
    category: "Education",
    description: "Mentorship, architecture review, code review, deployment assistance.",
    icon: "book"
  },
  {
    title: "Black Hol3 (Cyber Mentor)",
    category: "Education",
    description: "Personalized mentorship with hands-on training, project guidance, and career planning sessions.",
    details: ["Cyber Security Mastery", "BlackByt3 Practical AWS Certified", "Machine Learning Certificate - A Hacker Way"],
    icon: "user"
  }
];

export const SOLUTIONS_INDUSTRIES = [
  "Enterprise Security",
  "Startups & SaaS",
  "Educational Institutions",
  "IoT & Embedded Systems",
  "Gov & Critical Infrastructure"
];

export const ACADEMY_CONTENT = {
  headline: "Learn by Doing  Practical Cyber & Cloud Skills",
  offerings: [
    "Course Catalog (Bootcamps)",
    "BCOP & BCAP, & MLCert",
    "Black Hol3 (1:1 Mentorship)",
    "BCOP - Black Byt3 Certified Offensive Practitioner",
    "BCAP - Black Byt3 Certified AWS Practitioner",
    "MLCert - The Hacker's Approach to Machine Learning"
  ]
};

export const ARENA_CONTENT = {
  headline: "Gather. Compete. Learn.",
  description: "The proving grounds. We run city-wide and cross-province CTFs, DEF-CON-style gatherings, and corporate war games.",
  features: ["Upcoming CTFs", "Black Byt3 Team", "Past Highlights", "Host an Event"]
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "001",
    title: "FinTech Fortress Breach",
    client: "Regional Banking App",
    problem: "Suspected API vulnerabilities leading to potential PII leakage.",
    scope: "Full-stack penetration test (Mobile + API)",
    approach: "Reverse engineering APK, fuzzing API endpoints, MITM attacks.",
    outcome: "Identified critical IDOR allowing full account takeover. Patched in 48hrs.",
    artifacts: "Sanitized Report, PoC Video"
  },
  {
    id: "002",
    title: "IoT Smart Grid Hardening",
    client: "Energy Sector Provider",
    problem: "Legacy hardware with unverified firmware security.",
    scope: "Hardware hacking & Firmware extraction",
    approach: "UART interfacing, SPI dump, firmware reverse engineering.",
    outcome: "Found hardcoded root credentials. Developed custom firmware patch.",
    artifacts: "Hardware Mod Guide, Whitepaper"
  },
  {
    id: "003",
    title: "Red Team: Project Chimera",
    client: "SaaS Unicorn",
    problem: "Testing SOC response to advanced ransomware simulation.",
    scope: "Assumed breach, lateral movement goal.",
    approach: "Phishing entry, Kerberoasting, AD escalation.",
    outcome: "Achieved Domain Admin undetected for 3 days. SOC playbooks updated.",
    artifacts: "Attack Path Graph, Executive Brief"
  }
];

export const SHOP_CONTENT: ShopItem[] = [
  { title: "Training Session Booking", description: "Reserve a slot for dedicated training or consultation.", type: "booking", price: "BOOK_NOW" },
  { title: "Black Byt3 Swag Pack", description: "Hoodie, stickers, and physical challenge coin.", type: "product", price: "$49.99" },
  { title: "Certification Voucher", description: "Exam voucher for Practical AWS Certified.", type: "product", price: "$199.00" }
];

export const RESOURCES_CONTENT = [
  { title: "Zero-Day Analysis: Log4Shell Revisited", category: "Article" },
  { title: "Hardware Hacking 101: Bus Pirate Guide", category: "Tutorial" },
  { title: "The State of AI in Offensive Cyber", category: "Whitepaper" }
];

export const PARTNERSHIPS_CONTENT = {
  strategic: ["TechBiz", "Cyber Pashto", "AQEDA"]
};

export const FAQ_CONTENT: FaqItem[] = [
  { question: "What is Black Hol3?", answer: "Black Hol3: Personalized mentorship with hands-on training, project guidance, and career planning sessions." },
  { question: "Do you offer student discounts?", answer: "Yes. Verify your academic status via the contact form for special FYP rates." },
  { question: "Is Black Labs hardware legal?", answer: "All tools are sold for educational and research purposes only. Ethics agreement required." }
];

export const CONTACT_FIELDS = ["Name", "Company (Optional)", "Email", "Phone (Optional)"];

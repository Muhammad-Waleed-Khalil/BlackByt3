import { SectionId, ServiceItem, TeamMember, ProjectCaseStudy, ShopItem, FaqItem } from './types';

export const NAV_ITEMS = [
  { id: SectionId.HOME, label: '01_HOME' },
  { id: SectionId.ABOUT, label: '02_ABOUT' },
  { id: SectionId.SERVICES, label: '03_SERVICES' },
  { id: SectionId.SOLUTIONS, label: '04_SOLUTIONS' },
  { id: SectionId.ACADEMY, label: '05_ACADEMY' },
  { id: SectionId.ARENA, label: '06_ARENA' },
  { id: SectionId.PROJECTS, label: '07_PROJECTS' },
  { id: SectionId.SHOP, label: '08_SHOP' },
  { id: SectionId.RESOURCES, label: '09_INTEL' },
  { id: SectionId.FAQ, label: '10_FAQ' },
  { id: SectionId.CONTACT, label: '11_UPLINK' },
];

export const HERO_CONTENT = {
  title: "BLACK BYT3",
  tagline: "Silent. Swift. Secure.",
  subtagline: "Empowering Secure Innovation in the Digital Age",
  description: "Black Byt3 is a cyber space — a living digital sentinel combining ethical hackers, AI engineers, and practical R&D. We deliver penetration testing, red teaming, threat intelligence, and AI-driven solutions so enterprises, startups, and students can innovate without fear.",
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
    desc: "Academy, OCMP mentorship, FYP support — building future talent."
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
  mission: "To build a living Cyber Space that unites hackers, developers, researchers, and learners under one secure digital realm — enabling innovation, collaboration, and defense at every level.",
  values: ["Empower Clients", "Innovation", "Support Emerging Talent", "Innovate Relentlessly", "Promote Digital Literacy", "Build a Trusted Cyber Space"]
};

export const TEAM_LIST: TeamMember[] = [
  { name: "Muhammad Waqar", role: "Founder / Lead Architect", description: "The architect of the Cyber Space. Orchestrating offensive operations and strategic defense.", clearance: "L5_ADMIN", specialty: "ARCHITECT" },
  { name: "Muhammad Jawad", role: "Head of Operations", description: "Ensuring swift execution of all tactical engagements. Master of logistics.", clearance: "L4_COMMAND", specialty: "OPS_LEAD" },
  { name: "Shamir Khan", role: "Lead Penetration Tester", description: "Breaching secure perimeters before breakfast. Network infrastructure exploitation.", clearance: "L4_OFFENSIVE", specialty: "BREACHER" },
  { name: "Ammar Hanif", role: "Red Team Lead", description: "Adversary emulation specialist. Simulates APT threats to test organizational resilience.", clearance: "L4_OFFENSIVE", specialty: "RED_TEAM" },
  { name: "Saad Khan", role: "AI Security Researcher", description: "Developing autonomous defense models and adversarial ML attacks.", clearance: "L3_R&D", specialty: "AI_SEC" },
  { name: "Jafar Ali", role: "Hardware Security Lead", description: "Black Labs Director. If it has a circuit board, he can hack it.", clearance: "L4_HARDWARE", specialty: "HARDWARE" },
  { name: "Zeeshan Ali", role: "Cloud Security Architect", description: "Securing the ethereal. Specialist in AWS/Azure hardening and container escapes.", clearance: "L3_CLOUD", specialty: "CLOUD_SEC" },
  { name: "Maham", role: "GRC Specialist", description: "Navigating the labyrinth of compliance. Ensuring security meets policy.", clearance: "L3_COMPLIANCE", specialty: "POLICY" },
  { name: "Aqsa", role: "Threat Intel Analyst", description: "Monitoring the dark web wires. Tracking threat actors and TTPs.", clearance: "L3_INTEL", specialty: "INTEL" },
  { name: "Sanan Ali Shah", role: "Security Engineer", description: "Builder of secure pipelines. Automating defense mechanisms.", clearance: "L2_ENGINEER", specialty: "DEVSECOPS" },
  { name: "Hisbullah", role: "Junior Pentester", description: "The rising shadow. Specializing in web application vulnerabilities.", clearance: "L2_OPERATOR", specialty: "WEB_SEC" },
  { name: "Waleed", role: "Wildcard", description: "Jo kay tum khud hoo. The unexpected variable in every equation.", clearance: "L?_UNKNOWN", specialty: "ANOMALY" }
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
    title: "OCMP (Cyber Mentor)",
    category: "Education",
    description: "One-to-One Cyber Mentor Program.",
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
  headline: "Learn by Doing — Practical Cyber & Cloud Skills",
  offerings: [
    "Course Catalog (Bootcamps)",
    "Black Byt3 Certifications",
    "OCMP (1:1 Mentorship)",
    "Practical AWS Certified",
    "Machine Learning Certified"
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
  strategic: ["Rayonix", "TechBiz", "Cyber Pashto", "AQEDA"]
};

export const FAQ_CONTENT: FaqItem[] = [
  { question: "What is OCMP?", answer: "One-to-One Cyber Mentor Program. Personalized roadmap, live labs, and career guidance." },
  { question: "Do you offer student discounts?", answer: "Yes. Verify your academic status via the contact form for special FYP rates." },
  { question: "Is Black Labs hardware legal?", answer: "All tools are sold for educational and research purposes only. Ethics agreement required." }
];

export const CONTACT_FIELDS = ["Name", "Company (Optional)", "Email", "Phone (Optional)"];

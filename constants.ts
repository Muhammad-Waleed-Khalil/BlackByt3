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
  { name: "Muhammad Waqar" },
  { name: "Muhammad Jawad" },
  { name: "Shamir Khan" },
  { name: "Ammar Hanif" },
  { name: "Saad Khan" },
  { name: "Jafar Ali" },
  { name: "Zeeshan Ali" },
  { name: "Maham" },
  { name: "Aqsa" },
  { name: "Sanan Ali Shah" },
  { name: "Hisbullah" },
  { name: "Waleed" }
];

export const SERVICES_DATA: ServiceItem[] = [
  // Cybersecurity Services
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
  // AI & ML
  {
    title: "AI & ML Solutions",
    category: "AI_Solutions",
    description: "Custom ML & automation for security operations.",
    details: ["Custom ML Models", "Automation & Orchestration", "AI-integrated Web & App Solutions"],
    icon: "brain"
  },
  // Hardware
  {
    title: "Hardware-based Security",
    category: "Hardware",
    description: "Offensive hardware toolkits (Black Labs).",
    details: ["Wi-Fi pentesting rigs", "HID attack devices", "USB exfil tools", "RFID/NFC cloning kits", "RF analyzers", "Firmware extractors"],
    icon: "chip"
  },
  // Education Support
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
  "Government & Critical Infrastructure"
];

export const ACADEMY_CONTENT = {
  headline: "Learn by Doing — Practical Cyber & Cloud Skills",
  offerings: [
    "Course Catalog (Bootcamps, Short Courses)",
    "Certifications (Black Byt3 Certifications)",
    "OCMP - One to One Session Program",
    "Practical AWS Certified (Course Landing)",
    "Machine Learning Certified - Full Details"
  ]
};

export const ARENA_CONTENT = {
  headline: "Gather. Compete. Learn.",
  description: "City-wide and cross-province CTFs, DEF-CON-style community gatherings, workshops, and custom corporate war games.",
  features: ["Upcoming Events & CTFs", "Black Byt3 CTF Team", "Past Events & Highlights", "Host an Event / Sponsorships"]
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "001",
    title: "FINTECH_ZERO_DAY",
    client: "Regional Banking Enterprise",
    problem: "Suspected APT persistence in legacy payment gateway infrastructure.",
    scope: "Internal Network, Core Banking API, Cloud AWS Environment.",
    approach: "Hybrid Red Teaming + Automated Fuzzing. Deployed custom C2 beacons to map internal trust relationships.",
    outcome: "Identified 2 Critical RCEs and 4 High-Risk Misconfigurations. $10M+ Potential fraud prevented.",
    artifacts: "Executive Report, Sanitized PoC Exploit Chain, Remediation Playbook."
  },
  {
    id: "002",
    title: "IOT_FIRMWARE_BREACH",
    client: "Smart Home Manufacturer",
    problem: "Unverified bootloader vulnerability reports surfacing on dark web forums.",
    scope: "Firmware Analysis, Hardware Interface Inspection (UART/JTAG), RF Protocol Analysis.",
    approach: "Black Labs hardware extraction. Dumped flash memory, reverse engineered binary, identified hardcoded root keys.",
    outcome: "Patched 50,000+ deployed units via OTA update before widespread exploitation.",
    artifacts: "Technical Advisory, Firmware Patch Diff, Hardware Hardening Guide."
  },
  {
    id: "003",
    title: "CLOUD_INFRA_HARDENING",
    client: "SaaS Unicorn (Healthcare)",
    problem: "Compliance audit failure (HIPAA) due to excessive IAM permissions.",
    scope: "AWS/Azure Multi-cloud Environment, CI/CD Pipelines.",
    approach: "Deployed custom AI-driven policy analyzer (Black Byt3 ML). Mapped 5,000+ roles.",
    outcome: "Achieved 100% Compliance. Reduced attack surface by 65%. Automated future IAM audits.",
    artifacts: "Compliance Certification Support, Automated Policy Scripts, Terraform State Analysis."
  }
];

export const PARTNERSHIPS_CONTENT = {
  strategic: ["Rayonix", "TechBiz", "Cyber Pashto", "AQEDA"],
  opportunities: ["Partnership Opportunities", "Reseller & Technology Partners"]
};

export const RESOURCES_CONTENT = [
  { title: "Technical Explainers & How-tos", category: "Guide" },
  { title: "Vulnerability Writeups", category: "Report" },
  { title: "Hardware Tool Walkthroughs", category: "Black Labs" },
  { title: "Career & Mentorship Posts", category: "OCMP" },
  { title: "Event Recaps & Recordings", category: "Events" }
];

export const SHOP_CONTENT: ShopItem[] = [
  {
    title: "1-on-1 Security Consultation",
    description: "Direct line to our lead architects for architecture review or breach triage.",
    price: "Book Now",
    type: "booking"
  },
  {
    title: "Black Byt3 Swag Pack",
    description: "Official operator hoodies, stickers, and physical challenge coins.",
    price: "Incoming",
    type: "product"
  },
  {
    title: "Certification Voucher",
    description: "Pre-purchase exam attempts for Black Byt3 Practical Certifications.",
    price: "$200",
    type: "product"
  }
];

export const FAQ_CONTENT: FaqItem[] = [
  {
    question: "What is the 'Black Labs' hardware division?",
    answer: "Black Labs is our dedicated R&D unit focused on offensive hardware. We build custom rigs for Wi-Fi pentesting, RFID cloning, and firmware extraction."
  },
  {
    question: "How does the OCMP Mentorship work?",
    answer: "It is a 1-to-1 program. You get paired with a senior security engineer who guides your career, reviews your code, and conducts mock interviews."
  },
  {
    question: "Are your CTFs open to the public?",
    answer: "Yes, The Arena hosts both public community events and private corporate war games. Check the Arena section for upcoming dates."
  }
];

export const CONTACT_FIELDS = ["Name", "Company (Optional)", "Email", "Phone (Optional)", "Service Interested", "Message", "Budget"];
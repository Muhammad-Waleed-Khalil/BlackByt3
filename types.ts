import React from 'react';

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  SOLUTIONS = 'solutions',
  ACADEMY = 'academy',
  ARENA = 'arena',
  PROJECTS = 'projects',
  RESOURCES = 'resources',
  SHOP = 'shop',
  FAQ = 'faq',
  CONTACT = 'contact'
}

export interface Command {
  input: string;
  output: React.ReactNode;
  type: 'user' | 'system' | 'error' | 'success';
}

export interface ServiceDetail {
  what: string;
  how: string;
  deliverable: string;
}

export interface ServiceItem {
  title: string;
  description?: string;
  details?: string[];
  fullDetails?: ServiceDetail; // For Pen Testing & Red Teaming
  icon: string;
  category?: string; // To group them
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface TeamMember {
  name: string;
  role?: string;
}

export interface BlogPost {
  title: string;
  category: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  problem: string;
  scope: string;
  approach: string;
  outcome: string;
  artifacts: string;
}

export interface ShopItem {
  title: string;
  description: string;
  price?: string;
  type: 'booking' | 'product';
}

export interface FaqItem {
  question: string;
  answer: string;
}
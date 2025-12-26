import React from 'react';

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  SOLUTIONS = 'solutions',
  BOOTCAMP = 'bootcamp',
  ACADEMY = 'academy',
  ARENA = 'arena',
  PROJECTS = 'projects',
  RESOURCES = 'resources',
  SHOP = 'shop',
  FAQ = 'faq',
  CONTACT = 'contact',
  PARTNERSHIPS = 'partnerships',
  CAREERS = 'careers',
  SUPPORT = 'support',
  LEGAL = 'legal'
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
  fullDetails?: ServiceDetail;
  icon: string;
  category?: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image?: string;
  clearance: string;
  specialty: string;
  linkedin?: string;
  github?: string;
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

export type ModalType = 'LOGIN' | 'LEGAL_PRIVACY' | 'LEGAL_TERMS' | null;

export interface AppState {
  isRedpill: boolean;
  audioEnabled: boolean;
  activeModal: ModalType;
}

import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Sector {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

export interface Stat {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}
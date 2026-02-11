import { 
  Building2, 
  ShoppingBag, 
  Truck, 
  Wrench, 
  Banknote, 
  Factory 
} from 'lucide-react';
import { NavItem, Sector, Stat, NewsItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Business', href: '#business' },
  { label: 'Invest In Us', href: '#investors' },
  { label: 'Careers', href: '#careers' },
  { label: 'BuyAbans', href: 'https://buyabans.com', isExternal: true },
  { label: 'Hire Purchase', href: '#hire-purchase' },
  { label: 'Contact', href: '#contact' },
];

export const BUSINESS_SECTORS: Sector[] = [
  {
    title: 'Retail',
    description: 'Sri Lanka’s leading network of electronics and home appliance showrooms.',
    image: 'https://picsum.photos/800/600?random=1',
    icon: ShoppingBag,
  },
  {
    title: 'Services',
    description: 'Unmatched after-sales support and technical expertise across the island.',
    image: 'https://picsum.photos/800/600?random=2',
    icon: Wrench,
  },
  {
    title: 'Logistics',
    description: 'Efficient supply chain solutions driving national commerce.',
    image: 'https://picsum.photos/800/600?random=3',
    icon: Truck,
  },
  {
    title: 'Manufacturing',
    description: 'Local assembly and production of world-class appliances.',
    image: 'https://picsum.photos/800/600?random=4',
    icon: Factory,
  },
  {
    title: 'Real Estate',
    description: 'Developing iconic landmarks and sustainable living spaces.',
    image: 'https://picsum.photos/800/600?random=5',
    icon: Building2,
  },
  {
    title: 'Finance',
    description: 'Empowering dreams through flexible financial solutions.',
    image: 'https://picsum.photos/800/600?random=6',
    icon: Banknote,
  },
];

export const KEY_STATS: Stat[] = [
  { label: 'Years of Excellence', value: '50', suffix: '+' },
  { label: 'Showrooms Islandwide', value: '400', suffix: '+' },
  { label: 'Global Brands', value: '50', suffix: '+' },
  { label: 'Employees', value: '10', suffix: 'k+' },
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: 1,
    title: "Abans PLC Reports Record Growth in Q3",
    date: "October 12, 2023",
    category: "Financials",
    image: "https://picsum.photos/600/400?random=10",
    excerpt: "The group demonstrates resilience and strength with unprecedented quarterly performance amidst market challenges."
  },
  {
    id: 2,
    title: "Launch of New Green Initiative: 'Sustainable Tomorrow'",
    date: "September 28, 2023",
    category: "CSR",
    image: "https://picsum.photos/600/400?random=11",
    excerpt: "Abans commits to reducing carbon footprint by 30% over the next five years through renewable energy adoption."
  },
  {
    id: 3,
    title: "Abans Service Center Awarded ISO 9001 Certification",
    date: "September 15, 2023",
    category: "Awards",
    image: "https://picsum.photos/600/400?random=12",
    excerpt: "Recognizing world-class standards in customer service and technical support operations."
  }
];
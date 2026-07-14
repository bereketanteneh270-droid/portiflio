export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  thumbnail: string;
  coverImage: string;
  tags: string[];
  featured: boolean;
  color: string;
  overview: string;
  challenge: string;
  solution: string;
  research: string;
  concept: string;
  colors: { name: string; hex: string }[];
  typography: { name: string; usage: string; weight: string }[];
  mockups: string[];
  deliverables: string[];
  link?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  startingPrice: number;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  logo?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: number;
  publishedAt: string;
  tags: string[];
}

export interface Award {
  id: string;
  platform: string;
  title: string;
  year: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  budget: string;
  projectType: string;
  message: string;
}

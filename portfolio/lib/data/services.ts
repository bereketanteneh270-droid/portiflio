import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'logo-design',
    icon: 'Pen',
    title: 'Logo Design',
    description:
      'A powerful logo is the foundation of your brand. I craft marks that are distinctive, versatile, and built to last — from sketch to final vector files.',
    features: [
      '3 initial concepts',
      'Unlimited revisions',
      'All file formats (AI, EPS, PNG, SVG)',
      'Color + monochrome versions',
      'Brand usage guidelines',
    ],
    startingPrice: 500,
  },
  {
    id: 'brand-identity',
    icon: 'Layers',
    title: 'Brand Identity',
    description:
      'Full visual identity systems that tell a consistent, compelling story across every touchpoint — from business cards to billboards.',
    features: [
      'Logo design',
      'Color palette system',
      'Typography selection',
      'Brand pattern/texture',
      'Stationery design',
      'Brand guidelines document',
    ],
    startingPrice: 1500,
    popular: true,
  },
  {
    id: 'packaging',
    icon: 'Package',
    title: 'Packaging Design',
    description:
      'Packaging that stops the scroll and commands the shelf. Structural design, print-ready artwork, and supplier-ready specifications.',
    features: [
      'Structural dieline creation',
      'Print-ready artwork',
      '3D mockup rendering',
      'Supplier specifications',
      'Multiple size variants',
    ],
    startingPrice: 800,
  },
  {
    id: 'social-media',
    icon: 'Share2',
    title: 'Social Media Design',
    description:
      'Scroll-stopping social content that builds brand recognition. Cohesive templates, story designs, and campaign visuals.',
    features: [
      '30 custom post templates',
      'Story & Reel templates',
      'Profile optimization',
      'Campaign visual sets',
      'Editable Canva files',
    ],
    startingPrice: 400,
  },
  {
    id: 'business-cards',
    icon: 'CreditCard',
    title: 'Business Cards',
    description:
      'Make the right first impression. Premium business card design with print-ready files and supplier recommendations.',
    features: [
      'Double-sided design',
      'Multiple variants',
      'Print-ready files (CMYK)',
      'Bleed & safe zone setup',
      'Supplier recommendations',
    ],
    startingPrice: 150,
  },
  {
    id: 'brand-guidelines',
    icon: 'BookOpen',
    title: 'Brand Guidelines',
    description:
      'A comprehensive brand standards document ensuring your identity is used correctly by every team member, agency, and partner.',
    features: [
      'Logo usage rules',
      'Color specifications',
      'Typography system',
      'Photography style',
      "Do's & Don'ts",
      'Digital-first PDF',
    ],
    startingPrice: 600,
  },
  {
    id: 'presentation',
    icon: 'Monitor',
    title: 'Presentation Design',
    description:
      'Pitch decks and slide templates that communicate your vision with clarity and visual impact. Investor-ready, board-ready.',
    features: [
      'Custom slide design',
      'Up to 30 slides',
      'PowerPoint & Keynote formats',
      'Editable templates',
      'Icon & illustration set',
    ],
    startingPrice: 700,
  },
  {
    id: 'ui-design',
    icon: 'Layout',
    title: 'UI Design',
    description:
      'Beautiful, functional user interface design for web and mobile products. Figma-based, developer-handoff ready.',
    features: [
      'Wireframes & prototypes',
      'Full UI design',
      'Design system creation',
      'Component library',
      'Figma developer handoff',
    ],
    startingPrice: 1200,
  },
  {
    id: 'creative-direction',
    icon: 'Compass',
    title: 'Creative Direction',
    description:
      'Strategic creative leadership for campaigns, brand launches, and ongoing visual management. Think, guide, execute.',
    features: [
      'Brand strategy sessions',
      'Creative brief development',
      'Art direction',
      'Team/agency coordination',
      'Monthly retainer available',
    ],
    startingPrice: 2000,
  },
  {
    id: 'brand-strategy',
    icon: 'Target',
    title: 'Brand Strategy',
    description:
      'Before design comes strategy. Brand positioning, audience definition, competitive analysis, and messaging frameworks.',
    features: [
      'Brand audit',
      'Competitor analysis',
      'Positioning statement',
      'Brand voice & tone',
      'Strategy document',
    ],
    startingPrice: 1000,
  },
];

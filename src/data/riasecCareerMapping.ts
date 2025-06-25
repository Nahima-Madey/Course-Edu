import { RiasecType } from '../types/quiz';

export const riasecDescriptions: Record<RiasecType, string> = {
  Realistic: "You're practical, hands-on, and enjoy working with tools, machines, or in outdoor environments. You prefer concrete results and tangible outcomes.",
  Investigative: "You're analytical, curious, and love solving complex problems through research and systematic thinking. You thrive on discovering new knowledge.",
  Artistic: "You're creative, expressive, and drawn to beauty and innovation. You enjoy working in unstructured environments where you can use your imagination.",
  Social: "You're empathetic, helpful, and energized by working with people. You find fulfillment in teaching, counseling, or supporting others' growth.",
  Enterprising: "You're ambitious, persuasive, and enjoy leading others toward goals. You thrive in competitive environments and business challenges.",
  Conventional: "You're organized, detail-oriented, and prefer structured work with clear procedures. You excel at managing data and administrative tasks."
};

export const riasecCareerMapping: Record<RiasecType, string[]> = {
  Realistic: [
    'sustainable-architecture-specialist',
    'bioprinting-specialist',
    'marine-conservation-technologist',
    'urban-vertical-farming-specialist',
    'biomimicry-design-engineer',
    'environmental-restoration-specialist',
    'alternative-energy-systems-researcher',
    'smart-materials-engineer',
    'precision-agriculture-specialist',
    'renewable-energy-engineer'
  ],
  Investigative: [
    'space-archaeologist',
    'synthetic-biology-engineer',
    'quantum-computing-specialist',
    'microbiome-researcher',
    'ai-ethics-specialist',
    'climate-data-scientist',
    'bioprinting-specialist',
    'computational-linguist',
    'robotics-research-engineer',
    'environmental-data-scientist'
  ],
  Artistic: [
    'automotive-material-designer',
    'vr-sound-designer',
    'digital-heritage-preservationist',
    'experience-designer',
    'sustainable-fashion-materials-engineer',
    'food-science-innovation-specialist',
    'museum-technology-specialist',
    'digital-art-conservator',
    'creative-technologist',
    'narrative-designer'
  ],
  Social: [
    'pediatric-anesthesiologist',
    'genetic-counselor',
    'neurologic-music-therapist',
    'healthcare-ux-designer',
    'community-health-advocate',
    'educational-technology-specialist',
    'accessibility-consultant',
    'cultural-liaison-specialist',
    'patient-experience-coordinator',
    'wellness-program-designer'
  ],
  Enterprising: [
    'circular-economy-consultant',
    'green-finance-analyst',
    'sustainable-business-strategist',
    'innovation-consultant',
    'social-impact-entrepreneur',
    'sustainability-program-manager',
    'clean-tech-business-developer',
    'environmental-policy-advisor',
    'impact-investment-analyst',
    'corporate-sustainability-director'
  ],
  Conventional: [
    'environmental-compliance-specialist',
    'sustainability-reporting-analyst',
    'carbon-accounting-specialist',
    'regulatory-affairs-specialist',
    'quality-assurance-coordinator',
    'data-governance-specialist',
    'compliance-auditor',
    'environmental-documentation-specialist',
    'sustainability-metrics-analyst',
    'process-improvement-specialist'
  ]
};

export const generatePersonalityCode = (top3: RiasecType[]): string => {
  return top3.map(type => type.charAt(0)).join('');
};

export const generateDescription = (top3: RiasecType[]): string => {
  const primary = top3[0];
  const secondary = top3[1];
  const tertiary = top3[2];

  const combinations: Record<string, string> = {
    'RIA': "You're a practical innovator who combines hands-on skills with creative problem-solving and analytical thinking.",
    'RIS': "You're a helpful builder who enjoys creating tangible solutions that benefit others and solve real-world problems.",
    'RIE': "You're an entrepreneurial problem-solver who combines practical skills with research abilities and business acumen.",
    'RIC': "You're a systematic builder who enjoys structured, hands-on work with attention to detail and quality.",
    'RAS': "You're a creative craftsperson who combines artistic vision with practical skills and people-centered values.",
    'RAE': "You're an innovative entrepreneur who turns creative ideas into practical, marketable solutions.",
    'RAC': "You're a detail-oriented creator who combines artistic skills with systematic approaches and quality focus.",
    'RSE': "You're a people-focused leader who combines practical skills with social awareness and business drive.",
    'RSC': "You're a service-oriented organizer who combines hands-on abilities with helping others in structured ways.",
    'REC': "You're a business-minded organizer who combines practical skills with leadership and systematic approaches.",
    'IAS': "You're a creative researcher who combines analytical thinking with artistic expression and social consciousness.",
    'IAE': "You're an innovative entrepreneur who combines research skills with creative vision and business strategy.",
    'IAC': "You're a systematic innovator who combines analytical thinking with creative problem-solving and attention to detail.",
    'ISE': "You're a socially-conscious leader who combines research abilities with people skills and business acumen.",
    'ISC': "You're a helpful analyst who combines investigative skills with social awareness and systematic approaches.",
    'IEC': "You're a strategic organizer who combines analytical thinking with leadership skills and systematic execution.",
    'ASE': "You're a creative leader who combines artistic vision with social impact and entrepreneurial drive.",
    'ASC': "You're a people-centered creator who combines artistic skills with social consciousness and organized approaches.",
    'AEC': "You're an innovative organizer who combines creative thinking with business strategy and systematic execution.",
    'SEC': "You're a people-focused leader who combines social skills with business acumen and organizational excellence."
  };

  const code = generatePersonalityCode(top3);
  return combinations[code] || `You're a unique blend of ${primary.toLowerCase()}, ${secondary.toLowerCase()}, and ${tertiary.toLowerCase()} traits, making you well-suited for interdisciplinary careers.`;
};
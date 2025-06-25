import { Career, Category } from '../types/career';

export const categories: Category[] = [
  {
    id: 'creative-design',
    name: 'Creative & Design',
    description: 'Innovative design roles shaping the future of aesthetics and functionality',
    icon: 'Palette',
    count: 10
  },
  {
    id: 'biological-sciences',
    name: 'Biological Sciences',
    description: 'Cutting-edge roles in life sciences and biotechnology',
    icon: 'Microscope',
    count: 10
  },
  {
    id: 'environmental',
    name: 'Environmental',
    description: 'Careers focused on environmental protection and sustainability',
    icon: 'Leaf',
    count: 10
  },
  {
    id: 'technology-innovation',
    name: 'Technology & Innovation',
    description: 'Emerging tech roles and digital innovation careers',
    icon: 'Cpu',
    count: 10
  },
  {
    id: 'healthcare-wellness',
    name: 'Healthcare & Wellness',
    description: 'Specialized medical and wellness career paths',
    icon: 'Heart',
    count: 10
  },
  {
    id: 'research-development',
    name: 'Research & Development',
    description: 'Advanced research roles pushing the boundaries of knowledge',
    icon: 'FlaskConical',
    count: 10
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    description: 'Careers dedicated to sustainable development and green innovation',
    icon: 'Recycle',
    count: 10
  },
  {
    id: 'cultural-heritage',
    name: 'Cultural Heritage',
    description: 'Preserving and interpreting cultural and historical assets',
    icon: 'Landmark',
    count: 10
  },
  {
    id: 'engineering-materials',
    name: 'Engineering & Materials',
    description: 'Advanced engineering and materials science specializations',
    icon: 'Wrench',
    count: 10
  },
  {
    id: 'psychology-behavior',
    name: 'Psychology & Human Behavior',
    description: 'Understanding and improving human behavior and mental health',
    icon: 'Brain',
    count: 10
  }
];

export const careers: Career[] = [
  // Creative & Design (10 careers)
  {
    id: 'automotive-material-designer',
    title: 'Automotive Material Designer',
    category: 'creative-design',
    shortDescription: 'Design sustainable interior materials for next-generation vehicles.',
    description: 'Automotive Material Designers specialize in creating innovative, sustainable materials for vehicle interiors. They work at the intersection of design, chemistry, and environmental science to develop materials that are both aesthetically pleasing and environmentally responsible.',
    skills: ['Materials Science', 'Sustainable Design', 'CAD Software', 'Chemistry Knowledge', 'Automotive Industry Standards', 'Prototyping'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$60,000 - $150,000'
    },
    educationPath: ['Materials Science or Industrial Design degree', 'Automotive industry experience', 'Sustainability certification'],
    futureOutlook: 'Excellent growth as automotive industry shifts toward sustainability and electric vehicles',
    tags: ['Sustainable', 'Creative', 'Emerging Field', 'High Impact'],
    links: {
      courses: ['Sustainable Materials Design', 'Automotive Engineering Fundamentals'],
      communities: ['Materials Research Society', 'Sustainable Automotive Network'],
      videos: ['Future of Automotive Materials', 'Sustainable Design in Transportation']
    },
    featured: true
  },
  {
    id: 'vr-sound-designer',
    title: 'Sound Designer for Virtual Reality',
    category: 'creative-design',
    shortDescription: 'Create immersive audio experiences for virtual and augmented reality.',
    description: 'VR Sound Designers create spatial audio experiences that enhance immersion in virtual and augmented reality environments. They work with cutting-edge audio technology to create realistic soundscapes.',
    skills: ['Audio Engineering', 'Spatial Audio', 'VR/AR Technology', 'Sound Design Software', 'Acoustics', 'Creative Storytelling'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $130,000'
    },
    educationPath: ['Audio Engineering or Music Technology degree', 'VR/AR specialization', 'Portfolio of immersive audio projects'],
    futureOutlook: 'Growing rapidly with expansion of VR/AR markets and metaverse development',
    tags: ['Creative', 'Technology', 'Immersive', 'Growing Field'],
    links: {
      courses: ['Spatial Audio Design', 'VR Audio Implementation'],
      communities: ['VR Audio Community', 'Immersive Audio Alliance'],
      videos: ['VR Sound Design Techniques', 'Future of Spatial Audio']
    }
  },
  {
    id: 'experience-designer',
    title: 'Experience Designer',
    category: 'creative-design',
    shortDescription: 'Design holistic user experiences across multiple touchpoints and platforms.',
    description: 'Experience Designers create comprehensive user journeys that span digital and physical touchpoints, focusing on emotional connections and meaningful interactions.',
    skills: ['Design Thinking', 'User Research', 'Journey Mapping', 'Prototyping', 'Psychology', 'Service Design'],
    salaryRange: {
      local: '$80,000 - $130,000',
      global: '$70,000 - $150,000'
    },
    educationPath: ['Design or Psychology degree', 'UX/Service Design specialization', 'Portfolio of experience projects'],
    futureOutlook: 'High demand as companies focus on holistic customer experiences',
    tags: ['Design', 'User Experience', 'Strategic', 'Growing Field'],
    links: {
      courses: ['Experience Design Fundamentals', 'Service Design Methods'],
      communities: ['Experience Design Network', 'Service Design Community'],
      videos: ['Future of Experience Design', 'Designing Meaningful Experiences']
    }
  },
  {
    id: 'motion-graphics-designer',
    title: 'Motion Graphics Designer',
    category: 'creative-design',
    shortDescription: 'Create animated visual content for digital media and entertainment.',
    description: 'Motion Graphics Designers combine graphic design with animation to create engaging visual content for films, advertisements, websites, and digital platforms.',
    skills: ['Animation Software', 'Graphic Design', 'Storytelling', 'Typography', 'Color Theory', 'Video Production'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Graphic Design or Animation degree', 'Motion graphics portfolio', 'Software proficiency certification'],
    futureOutlook: 'Strong growth with increasing demand for video content and digital media',
    tags: ['Creative', 'Animation', 'Digital Media', 'Visual'],
    links: {
      courses: ['Motion Graphics Fundamentals', 'Advanced Animation Techniques'],
      communities: ['Motion Graphics Society', 'Animation Network'],
      videos: ['Motion Graphics Trends', 'Animation Career Paths']
    }
  },
  {
    id: 'packaging-designer',
    title: 'Sustainable Packaging Designer',
    category: 'creative-design',
    shortDescription: 'Design eco-friendly packaging solutions that minimize environmental impact.',
    description: 'Sustainable Packaging Designers create innovative packaging solutions that protect products while minimizing environmental impact through biodegradable materials and efficient design.',
    skills: ['Package Design', 'Sustainability Principles', 'Materials Knowledge', 'Manufacturing Processes', 'Brand Design', 'Environmental Impact Assessment'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Industrial Design or Packaging degree', 'Sustainability certification', 'Materials science knowledge'],
    futureOutlook: 'Excellent growth as companies prioritize sustainable packaging solutions',
    tags: ['Sustainable', 'Design', 'Environmental', 'Innovation'],
    links: {
      courses: ['Sustainable Packaging Design', 'Eco-friendly Materials'],
      communities: ['Sustainable Packaging Coalition', 'Green Design Network'],
      videos: ['Future of Packaging Design', 'Sustainable Materials Innovation']
    }
  },
  {
    id: 'game-narrative-designer',
    title: 'Game Narrative Designer',
    category: 'creative-design',
    shortDescription: 'Create compelling stories and dialogue systems for video games.',
    description: 'Game Narrative Designers craft interactive stories, develop character arcs, and create branching dialogue systems that enhance player engagement and emotional connection.',
    skills: ['Creative Writing', 'Game Design', 'Interactive Storytelling', 'Character Development', 'Dialogue Systems', 'Player Psychology'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Creative Writing or Game Design degree', 'Portfolio of interactive narratives', 'Game development experience'],
    futureOutlook: 'Growing field as games become more story-driven and narrative-focused',
    tags: ['Creative', 'Gaming', 'Storytelling', 'Interactive'],
    links: {
      courses: ['Interactive Storytelling', 'Game Writing Fundamentals'],
      communities: ['Game Writers Guild', 'Interactive Narrative Network'],
      videos: ['Game Narrative Design', 'Interactive Storytelling Techniques']
    }
  },
  {
    id: 'brand-strategist',
    title: 'Brand Strategist',
    category: 'creative-design',
    shortDescription: 'Develop comprehensive brand strategies and positioning for organizations.',
    description: 'Brand Strategists analyze market trends, consumer behavior, and competitive landscapes to develop compelling brand positioning and strategic direction for companies.',
    skills: ['Market Research', 'Brand Development', 'Strategic Thinking', 'Consumer Psychology', 'Competitive Analysis', 'Communication Strategy'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Marketing or Business degree', 'Brand strategy specialization', 'Portfolio of brand projects'],
    futureOutlook: 'Strong demand as companies focus on brand differentiation and customer loyalty',
    tags: ['Strategy', 'Marketing', 'Brand', 'Business'],
    links: {
      courses: ['Brand Strategy Fundamentals', 'Consumer Behavior Analysis'],
      communities: ['Brand Strategy Network', 'Marketing Strategy Alliance'],
      videos: ['Brand Strategy Essentials', 'Future of Branding']
    }
  },
  {
    id: 'color-consultant',
    title: 'Color Consultant',
    category: 'creative-design',
    shortDescription: 'Provide expert color advice for architecture, interior design, and product development.',
    description: 'Color Consultants use color theory and psychology to advise on color schemes for buildings, interiors, products, and brands, considering cultural, psychological, and aesthetic factors.',
    skills: ['Color Theory', 'Psychology of Color', 'Design Principles', 'Cultural Awareness', 'Trend Analysis', 'Client Consultation'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $100,000'
    },
    educationPath: ['Art or Design degree', 'Color theory specialization', 'Certification in color consulting'],
    futureOutlook: 'Steady growth as color becomes increasingly important in design and marketing',
    tags: ['Design', 'Consulting', 'Psychology', 'Specialized'],
    links: {
      courses: ['Color Theory Advanced', 'Psychology of Color'],
      communities: ['Color Marketing Group', 'International Color Consultants'],
      videos: ['Color in Design', 'Psychology of Color Choices']
    }
  },
  {
    id: 'typography-designer',
    title: 'Typography Designer',
    category: 'creative-design',
    shortDescription: 'Create custom typefaces and typography systems for brands and publications.',
    description: 'Typography Designers specialize in creating custom fonts, typefaces, and comprehensive typography systems that enhance readability and brand identity.',
    skills: ['Typography', 'Font Design Software', 'Calligraphy', 'Brand Identity', 'Readability Principles', 'Digital Typography'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Graphic Design degree', 'Typography specialization', 'Portfolio of typeface designs'],
    futureOutlook: 'Growing demand for custom typography in digital and brand applications',
    tags: ['Typography', 'Design', 'Brand', 'Digital'],
    links: {
      courses: ['Typography Design', 'Font Creation Techniques'],
      communities: ['Typography Society', 'Type Design Network'],
      videos: ['Typography Trends', 'Font Design Process']
    }
  },
  {
    id: 'lighting-designer',
    title: 'Architectural Lighting Designer',
    category: 'creative-design',
    shortDescription: 'Design lighting systems that enhance architectural spaces and user experiences.',
    description: 'Architectural Lighting Designers create lighting schemes that enhance the functionality, aesthetics, and energy efficiency of buildings and outdoor spaces.',
    skills: ['Lighting Design', 'Electrical Systems', 'Architecture Knowledge', 'Energy Efficiency', 'Light Psychology', 'CAD Software'],
    salaryRange: {
      local: '$60,000 - $105,000',
      global: '$50,000 - $120,000'
    },
    educationPath: ['Architecture or Lighting Design degree', 'Electrical systems training', 'Professional certification'],
    futureOutlook: 'Strong growth with focus on energy-efficient and smart lighting systems',
    tags: ['Architecture', 'Design', 'Energy Efficiency', 'Technical'],
    links: {
      courses: ['Architectural Lighting Design', 'Smart Lighting Systems'],
      communities: ['Illuminating Engineering Society', 'Lighting Design Alliance'],
      videos: ['Lighting Design Principles', 'Future of Architectural Lighting']
    }
  },

  // Biological Sciences (10 careers)
  {
    id: 'bioprinting-specialist',
    title: 'Bioprinting Specialist',
    category: 'biological-sciences',
    shortDescription: 'Engineer living tissues and organs using 3D bioprinting technology.',
    description: 'Bioprinting Specialists work at the cutting edge of regenerative medicine, using 3D printing technology to create living tissues and potentially entire organs. This field combines biology, engineering, and medicine.',
    skills: ['Bioengineering', '3D Printing Technology', 'Cell Biology', 'Tissue Engineering', 'Laboratory Techniques', 'Research Methods'],
    salaryRange: {
      local: '$90,000 - $150,000',
      global: '$75,000 - $180,000'
    },
    educationPath: ['Bioengineering or Biology degree', 'Advanced degree in tissue engineering', 'Research experience'],
    futureOutlook: 'Revolutionary field with enormous potential as technology advances',
    tags: ['Cutting-edge', 'Research', 'High Impact', 'Emerging'],
    links: {
      courses: ['Bioprinting Fundamentals', 'Tissue Engineering Principles'],
      communities: ['International Society for Biofabrication', 'Bioprinting Research Network'],
      videos: ['Future of Bioprinting', '3D Printing Living Tissues']
    },
    featured: true
  },
  {
    id: 'synthetic-biology-engineer',
    title: 'Synthetic Biology Engineer',
    category: 'biological-sciences',
    shortDescription: 'Engineer biological systems to create new materials and medicines.',
    description: 'Synthetic Biology Engineers design and construct new biological parts, devices, and systems, or redesign existing natural biological systems for useful purposes.',
    skills: ['Molecular Biology', 'Genetic Engineering', 'Bioengineering', 'Programming', 'Laboratory Skills', 'Systems Thinking'],
    salaryRange: {
      local: '$85,000 - $140,000',
      global: '$75,000 - $160,000'
    },
    educationPath: ['Bioengineering or Biology degree', 'Synthetic biology training', 'Research experience'],
    futureOutlook: 'Rapidly expanding field with applications in medicine, materials, and energy',
    tags: ['Cutting-edge', 'Bioengineering', 'Innovation', 'High Impact'],
    links: {
      courses: ['Synthetic Biology Fundamentals', 'Genetic Circuit Design'],
      communities: ['Synthetic Biology Community', 'Bioengineering Society'],
      videos: ['Engineering Biology', 'Synthetic Biology Applications']
    }
  },
  {
    id: 'food-science-innovator',
    title: 'Food Science Innovation Specialist',
    category: 'biological-sciences',
    shortDescription: 'Develop next-generation food products and sustainable nutrition solutions.',
    description: 'Food Science Innovation Specialists work on developing alternative proteins, functional foods, and sustainable nutrition solutions to address global food challenges and changing dietary needs.',
    skills: ['Food Science', 'Nutrition Knowledge', 'Product Development', 'Sustainability', 'Regulatory Knowledge', 'Innovation'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Food Science or Chemistry degree', 'Product development experience', 'Innovation training'],
    futureOutlook: 'High growth as food industry transforms for sustainability and health',
    tags: ['Innovation', 'Sustainability', 'Health', 'Growing Field'],
    links: {
      courses: ['Food Innovation', 'Sustainable Food Systems'],
      communities: ['Institute of Food Technologists', 'Food Innovation Network'],
      videos: ['Future of Food Science', 'Sustainable Nutrition Innovation']
    }
  },
  {
    id: 'bioinformatics-specialist',
    title: 'Bioinformatics Specialist',
    category: 'biological-sciences',
    shortDescription: 'Analyze biological data using computational methods and algorithms.',
    description: 'Bioinformatics Specialists use computational tools and statistical methods to analyze and interpret biological data, particularly in genomics, proteomics, and drug discovery.',
    skills: ['Programming', 'Statistics', 'Biology Knowledge', 'Database Management', 'Machine Learning', 'Data Visualization'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Biology or Computer Science degree', 'Bioinformatics specialization', 'Programming skills'],
    futureOutlook: 'Excellent growth with increasing biological data generation and analysis needs',
    tags: ['Data Science', 'Biology', 'Technology', 'Research'],
    links: {
      courses: ['Bioinformatics Fundamentals', 'Computational Biology'],
      communities: ['International Society for Computational Biology', 'Bioinformatics Network'],
      videos: ['Bioinformatics Career Paths', 'Computational Biology Applications']
    }
  },
  {
    id: 'marine-biologist',
    title: 'Marine Biotechnology Researcher',
    category: 'biological-sciences',
    shortDescription: 'Research marine organisms for biotechnology and pharmaceutical applications.',
    description: 'Marine Biotechnology Researchers study marine organisms to discover new compounds for pharmaceuticals, develop sustainable materials, and understand ocean ecosystems.',
    skills: ['Marine Biology', 'Biotechnology', 'Research Methods', 'Laboratory Techniques', 'Diving Certification', 'Data Analysis'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Marine Biology degree', 'Biotechnology specialization', 'Research experience'],
    futureOutlook: 'Growing field as ocean resources become increasingly important for biotechnology',
    tags: ['Marine', 'Biotechnology', 'Research', 'Environmental'],
    links: {
      courses: ['Marine Biotechnology', 'Ocean Research Methods'],
      communities: ['Marine Biotechnology Society', 'Ocean Research Network'],
      videos: ['Marine Biotechnology Applications', 'Ocean Research Careers']
    }
  },
  {
    id: 'plant-pathologist',
    title: 'Plant Pathologist',
    category: 'biological-sciences',
    shortDescription: 'Study plant diseases and develop sustainable crop protection strategies.',
    description: 'Plant Pathologists research plant diseases caused by pathogens and develop integrated pest management strategies to protect crops and natural ecosystems.',
    skills: ['Plant Biology', 'Microbiology', 'Disease Diagnosis', 'Field Research', 'Laboratory Techniques', 'Sustainable Agriculture'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Plant Science or Biology degree', 'Plant pathology specialization', 'Field research experience'],
    futureOutlook: 'Important field for food security and sustainable agriculture',
    tags: ['Agriculture', 'Plant Science', 'Sustainability', 'Research'],
    links: {
      courses: ['Plant Pathology', 'Sustainable Crop Protection'],
      communities: ['American Phytopathological Society', 'Plant Health Network'],
      videos: ['Plant Disease Research', 'Sustainable Agriculture Practices']
    }
  },
  {
    id: 'conservation-geneticist',
    title: 'Conservation Geneticist',
    category: 'biological-sciences',
    shortDescription: 'Use genetic analysis to support wildlife conservation and biodiversity preservation.',
    description: 'Conservation Geneticists apply genetic techniques to understand population dynamics, genetic diversity, and evolutionary processes to inform conservation strategies.',
    skills: ['Genetics', 'Conservation Biology', 'Population Genetics', 'Laboratory Techniques', 'Statistical Analysis', 'Field Work'],
    salaryRange: {
      local: '$60,000 - $105,000',
      global: '$50,000 - $120,000'
    },
    educationPath: ['Biology degree', 'Genetics specialization', 'Conservation experience'],
    futureOutlook: 'Critical field for biodiversity conservation and species protection',
    tags: ['Conservation', 'Genetics', 'Wildlife', 'Research'],
    links: {
      courses: ['Conservation Genetics', 'Population Biology'],
      communities: ['Society for Conservation Biology', 'Conservation Genetics Network'],
      videos: ['Genetics in Conservation', 'Wildlife Protection Strategies']
    }
  },
  {
    id: 'microbiome-researcher',
    title: 'Microbiome Researcher',
    category: 'biological-sciences',
    shortDescription: 'Study microbial communities and their impact on health and environment.',
    description: 'Microbiome Researchers investigate the complex communities of microorganisms that live in and on humans, animals, plants, and environments to understand their roles in health and disease.',
    skills: ['Microbiology', 'Molecular Biology', 'Bioinformatics', 'Statistical Analysis', 'Laboratory Techniques', 'Research Design'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Microbiology or Biology degree', 'Microbiome research experience', 'Bioinformatics training'],
    futureOutlook: 'Rapidly growing field with applications in medicine, agriculture, and environmental science',
    tags: ['Microbiology', 'Health', 'Research', 'Emerging'],
    links: {
      courses: ['Microbiome Science', 'Microbial Ecology'],
      communities: ['International Human Microbiome Consortium', 'Microbiome Research Network'],
      videos: ['Microbiome Research', 'Microbial Communities in Health']
    }
  },
  {
    id: 'stem-cell-researcher',
    title: 'Stem Cell Researcher',
    category: 'biological-sciences',
    shortDescription: 'Research stem cell applications for regenerative medicine and disease treatment.',
    description: 'Stem Cell Researchers study the properties and potential applications of stem cells in treating diseases, understanding development, and advancing regenerative medicine.',
    skills: ['Cell Biology', 'Molecular Biology', 'Laboratory Techniques', 'Research Methods', 'Tissue Culture', 'Regulatory Knowledge'],
    salaryRange: {
      local: '$75,000 - $130,000',
      global: '$65,000 - $150,000'
    },
    educationPath: ['Biology or Biomedical Science degree', 'Stem cell research experience', 'Advanced laboratory training'],
    futureOutlook: 'High potential field for breakthrough medical treatments',
    tags: ['Regenerative Medicine', 'Research', 'Medical', 'Cutting-edge'],
    links: {
      courses: ['Stem Cell Biology', 'Regenerative Medicine'],
      communities: ['International Society for Stem Cell Research', 'Regenerative Medicine Network'],
      videos: ['Stem Cell Research Applications', 'Future of Regenerative Medicine']
    }
  },
  {
    id: 'evolutionary-biologist',
    title: 'Evolutionary Biologist',
    category: 'biological-sciences',
    shortDescription: 'Study evolutionary processes and their applications in modern biology.',
    description: 'Evolutionary Biologists research how species evolve over time and apply evolutionary principles to understand biodiversity, disease resistance, and adaptation.',
    skills: ['Evolutionary Theory', 'Phylogenetics', 'Statistical Analysis', 'Field Research', 'Molecular Biology', 'Comparative Biology'],
    salaryRange: {
      local: '$55,000 - $100,000',
      global: '$45,000 - $115,000'
    },
    educationPath: ['Biology degree', 'Evolutionary biology specialization', 'Research experience'],
    futureOutlook: 'Important for understanding biodiversity and developing evolutionary applications',
    tags: ['Evolution', 'Research', 'Biodiversity', 'Academic'],
    links: {
      courses: ['Evolutionary Biology', 'Phylogenetic Analysis'],
      communities: ['Society for the Study of Evolution', 'Evolutionary Biology Network'],
      videos: ['Evolution in Action', 'Modern Evolutionary Research']
    }
  },

  // Environmental (10 careers)
  {
    id: 'marine-conservation-technologist',
    title: 'Marine Conservation Technologist',
    category: 'environmental',
    shortDescription: 'Use technology to monitor and protect marine ecosystems.',
    description: 'Marine Conservation Technologists combine marine biology knowledge with cutting-edge technology to monitor ocean health, track marine life, and develop conservation strategies using drones, sensors, and AI.',
    skills: ['Marine Biology', 'Technology Integration', 'Data Analysis', 'Drone Operation', 'Environmental Monitoring', 'Conservation Strategy'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Marine Biology or Environmental Science degree', 'Technology training', 'Conservation experience'],
    futureOutlook: 'Critical field as ocean conservation becomes increasingly urgent',
    tags: ['Environmental', 'Technology', 'Conservation', 'Purpose-driven'],
    links: {
      courses: ['Marine Conservation Technology', 'Ocean Monitoring Systems'],
      communities: ['Marine Technology Society', 'Ocean Conservation Network'],
      videos: ['Technology in Ocean Conservation', 'Marine Ecosystem Monitoring']
    }
  },
  {
    id: 'environmental-restoration-specialist',
    title: 'Environmental Restoration Specialist',
    category: 'environmental',
    shortDescription: 'Restore damaged ecosystems and rehabilitate contaminated environments.',
    description: 'Environmental Restoration Specialists work to repair damaged ecosystems, clean up contaminated sites, and restore natural habitats using scientific methods and innovative technologies.',
    skills: ['Environmental Science', 'Ecology', 'Soil Science', 'Project Management', 'Regulatory Knowledge', 'Field Work'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Environmental Science degree', 'Restoration ecology training', 'Field experience'],
    futureOutlook: 'Strong growth as environmental remediation becomes priority',
    tags: ['Environmental', 'Restoration', 'Fieldwork', 'Purpose-driven'],
    links: {
      courses: ['Ecosystem Restoration', 'Environmental Remediation'],
      communities: ['Society for Ecological Restoration', 'Environmental Restoration Network'],
      videos: ['Ecosystem Restoration Techniques', 'Environmental Cleanup Methods']
    }
  },
  {
    id: 'climate-adaptation-planner',
    title: 'Climate Adaptation Planner',
    category: 'environmental',
    shortDescription: 'Develop strategies to help communities adapt to climate change impacts.',
    description: 'Climate Adaptation Planners work with communities, governments, and organizations to develop strategies and infrastructure adaptations to cope with the impacts of climate change.',
    skills: ['Climate Science', 'Urban Planning', 'Risk Assessment', 'Community Engagement', 'Policy Analysis', 'Project Management'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Environmental Science or Urban Planning degree', 'Climate adaptation training', 'Planning experience'],
    futureOutlook: 'Critical and growing field as climate impacts intensify',
    tags: ['Climate', 'Planning', 'Community', 'High Impact'],
    links: {
      courses: ['Climate Adaptation Planning', 'Resilient Communities'],
      communities: ['Climate Adaptation Network', 'Resilience Planning Alliance'],
      videos: ['Climate Adaptation Strategies', 'Building Resilient Communities']
    }
  },
  {
    id: 'environmental-data-scientist',
    title: 'Environmental Data Scientist',
    category: 'environmental',
    shortDescription: 'Analyze environmental data to inform conservation and policy decisions.',
    description: 'Environmental Data Scientists use big data analytics, machine learning, and statistical methods to analyze environmental datasets and provide insights for conservation and policy making.',
    skills: ['Data Science', 'Environmental Science', 'Machine Learning', 'Statistical Analysis', 'Programming', 'Data Visualization'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Environmental Science or Data Science degree', 'Programming skills', 'Environmental data experience'],
    futureOutlook: 'High growth as environmental monitoring generates massive datasets',
    tags: ['Data Science', 'Environmental', 'Technology', 'Analytics'],
    links: {
      courses: ['Environmental Data Analysis', 'Machine Learning for Environment'],
      communities: ['Environmental Data Science Network', 'Climate Data Alliance'],
      videos: ['Environmental Data Science', 'Big Data in Conservation']
    }
  },
  {
    id: 'renewable-energy-consultant',
    title: 'Renewable Energy Consultant',
    category: 'environmental',
    shortDescription: 'Advise organizations on renewable energy solutions and implementation.',
    description: 'Renewable Energy Consultants assess energy needs, evaluate renewable energy options, and develop implementation strategies for businesses and communities transitioning to clean energy.',
    skills: ['Renewable Energy Systems', 'Energy Analysis', 'Project Management', 'Financial Analysis', 'Regulatory Knowledge', 'Client Relations'],
    salaryRange: {
      local: '$65,000 - $115,000',
      global: '$55,000 - $130,000'
    },
    educationPath: ['Engineering or Environmental Science degree', 'Renewable energy certification', 'Consulting experience'],
    futureOutlook: 'Excellent growth as renewable energy adoption accelerates',
    tags: ['Renewable Energy', 'Consulting', 'Sustainability', 'Growing Field'],
    links: {
      courses: ['Renewable Energy Systems', 'Energy Consulting'],
      communities: ['Renewable Energy Association', 'Clean Energy Network'],
      videos: ['Renewable Energy Consulting', 'Clean Energy Transition']
    }
  },
  {
    id: 'water-resource-specialist',
    title: 'Water Resource Specialist',
    category: 'environmental',
    shortDescription: 'Manage and protect water resources through sustainable practices.',
    description: 'Water Resource Specialists develop strategies for water conservation, quality management, and sustainable use of water resources in various environments and applications.',
    skills: ['Hydrology', 'Water Quality Analysis', 'Environmental Regulations', 'Project Management', 'GIS Mapping', 'Sustainability Planning'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Environmental Engineering or Hydrology degree', 'Water management certification', 'Field experience'],
    futureOutlook: 'Critical field as water scarcity and quality issues increase globally',
    tags: ['Water Management', 'Sustainability', 'Environmental', 'Critical'],
    links: {
      courses: ['Water Resource Management', 'Hydrology Fundamentals'],
      communities: ['Water Resources Association', 'Hydrology Network'],
      videos: ['Water Resource Management', 'Sustainable Water Practices']
    }
  },
  {
    id: 'carbon-footprint-analyst',
    title: 'Carbon Footprint Analyst',
    category: 'environmental',
    shortDescription: 'Measure and develop strategies to reduce organizational carbon emissions.',
    description: 'Carbon Footprint Analysts assess greenhouse gas emissions, develop reduction strategies, and help organizations achieve carbon neutrality through data analysis and sustainability planning.',
    skills: ['Carbon Accounting', 'Life Cycle Assessment', 'Data Analysis', 'Sustainability Planning', 'Regulatory Knowledge', 'Report Writing'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Environmental Science degree', 'Carbon accounting certification', 'Sustainability experience'],
    futureOutlook: 'High demand as organizations commit to carbon reduction goals',
    tags: ['Carbon Management', 'Sustainability', 'Analytics', 'Growing Field'],
    links: {
      courses: ['Carbon Footprint Analysis', 'Greenhouse Gas Accounting'],
      communities: ['Carbon Management Network', 'Sustainability Professionals'],
      videos: ['Carbon Footprint Assessment', 'Corporate Sustainability']
    }
  },
  {
    id: 'wildlife-corridor-designer',
    title: 'Wildlife Corridor Designer',
    category: 'environmental',
    shortDescription: 'Design pathways that connect fragmented habitats for wildlife movement.',
    description: 'Wildlife Corridor Designers create connected pathways between fragmented habitats to allow wildlife movement, genetic exchange, and ecosystem connectivity.',
    skills: ['Landscape Ecology', 'GIS Mapping', 'Wildlife Biology', 'Habitat Assessment', 'Conservation Planning', 'Stakeholder Engagement'],
    salaryRange: {
      local: '$55,000 - $90,000',
      global: '$45,000 - $105,000'
    },
    educationPath: ['Wildlife Biology or Landscape Architecture degree', 'Conservation planning experience', 'GIS certification'],
    futureOutlook: 'Important field for biodiversity conservation and habitat connectivity',
    tags: ['Wildlife Conservation', 'Landscape Design', 'Biodiversity', 'Planning'],
    links: {
      courses: ['Landscape Ecology', 'Wildlife Corridor Design'],
      communities: ['Wildlife Corridor Network', 'Conservation Planning Alliance'],
      videos: ['Wildlife Corridor Design', 'Habitat Connectivity']
    }
  },
  {
    id: 'green-building-consultant',
    title: 'Green Building Consultant',
    category: 'environmental',
    shortDescription: 'Advise on sustainable building design and green certification processes.',
    description: 'Green Building Consultants help architects, developers, and building owners design and construct environmentally sustainable buildings that meet green certification standards.',
    skills: ['Sustainable Design', 'Building Systems', 'LEED Certification', 'Energy Efficiency', 'Environmental Assessment', 'Project Management'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Architecture or Engineering degree', 'Green building certification', 'Sustainable design experience'],
    futureOutlook: 'Strong growth as green building standards become mainstream',
    tags: ['Green Building', 'Sustainability', 'Consulting', 'Architecture'],
    links: {
      courses: ['Green Building Design', 'LEED Certification'],
      communities: ['Green Building Council', 'Sustainable Architecture Network'],
      videos: ['Green Building Practices', 'Sustainable Architecture']
    }
  },
  {
    id: 'environmental-educator',
    title: 'Environmental Educator',
    category: 'environmental',
    shortDescription: 'Develop and deliver environmental education programs for diverse audiences.',
    description: 'Environmental Educators create and implement educational programs that increase environmental awareness and promote sustainable behaviors in schools, communities, and organizations.',
    skills: ['Environmental Science', 'Education Methods', 'Program Development', 'Public Speaking', 'Curriculum Design', 'Community Outreach'],
    salaryRange: {
      local: '$45,000 - $75,000',
      global: '$35,000 - $85,000'
    },
    educationPath: ['Environmental Science or Education degree', 'Teaching certification', 'Environmental education experience'],
    futureOutlook: 'Important field for building environmental awareness and action',
    tags: ['Education', 'Environmental', 'Community', 'Outreach'],
    links: {
      courses: ['Environmental Education', 'Science Communication'],
      communities: ['Environmental Education Association', 'Nature Education Network'],
      videos: ['Environmental Education Methods', 'Science Communication']
    }
  },

  // Technology & Innovation (10 careers)
  {
    id: 'healthcare-ux-designer',
    title: 'Healthcare UX Designer',
    category: 'technology-innovation',
    shortDescription: 'Design user experiences for medical devices and healthcare applications.',
    description: 'Healthcare UX Designers specialize in creating intuitive, accessible user experiences for medical devices, healthcare apps, and clinical systems. They must understand both design principles and healthcare workflows.',
    skills: ['UX/UI Design', 'Healthcare Knowledge', 'Accessibility Design', 'User Research', 'Prototyping', 'Regulatory Compliance'],
    salaryRange: {
      local: '$85,000 - $140,000',
      global: '$70,000 - $160,000'
    },
    educationPath: ['Design or Psychology degree', 'Healthcare UX specialization', 'Medical device design experience'],
    futureOutlook: 'Rapidly growing field as healthcare digitization accelerates',
    tags: ['Design', 'Healthcare', 'Growing Field', 'Remote-friendly'],
    links: {
      courses: ['Healthcare UX Design', 'Medical Device Design Principles'],
      communities: ['Healthcare UX Community', 'Medical Design Society'],
      videos: ['Designing for Healthcare', 'UX in Medical Devices']
    },
    featured: true
  },
  {
    id: 'quantum-computing-specialist',
    title: 'Quantum Computing Applications Specialist',
    category: 'technology-innovation',
    shortDescription: 'Develop practical applications for quantum computing technology.',
    description: 'Quantum Computing Applications Specialists work to identify and develop real-world applications for quantum computing technology across industries like finance, healthcare, and logistics.',
    skills: ['Quantum Physics', 'Computer Science', 'Algorithm Development', 'Problem Solving', 'Mathematics', 'Industry Knowledge'],
    salaryRange: {
      local: '$120,000 - $200,000',
      global: '$100,000 - $250,000'
    },
    educationPath: ['Physics or Computer Science degree', 'Quantum computing specialization', 'Research experience'],
    futureOutlook: 'Revolutionary field with enormous potential as quantum computers mature',
    tags: ['Cutting-edge', 'High Salary', 'Technology', 'Research'],
    links: {
      courses: ['Quantum Computing Fundamentals', 'Quantum Algorithms'],
      communities: ['Quantum Computing Community', 'Quantum Information Society'],
      videos: ['Quantum Computing Applications', 'Future of Quantum Technology']
    }
  },
  {
    id: 'precision-agriculture-specialist',
    title: 'Precision Agriculture Technology Specialist',
    category: 'technology-innovation',
    shortDescription: 'Use advanced technology to optimize farming practices and crop yields.',
    description: 'Precision Agriculture Technology Specialists use GPS, sensors, drones, and data analytics to help farmers optimize crop production while minimizing environmental impact.',
    skills: ['Agricultural Science', 'Data Analytics', 'GPS Technology', 'Drone Operation', 'Sensor Systems', 'Farm Management'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Agricultural Engineering or related degree', 'Precision agriculture training', 'Technology experience'],
    futureOutlook: 'Strong growth as agriculture becomes increasingly technology-driven',
    tags: ['Agriculture', 'Technology', 'Data', 'Sustainable'],
    links: {
      courses: ['Precision Agriculture Systems', 'Agricultural Data Analytics'],
      communities: ['Precision Agriculture Association', 'AgTech Network'],
      videos: ['Future of Farming Technology', 'Precision Agriculture Techniques']
    }
  },
  {
    id: 'ai-ethics-specialist',
    title: 'AI Ethics Specialist',
    category: 'technology-innovation',
    shortDescription: 'Ensure ethical development and deployment of artificial intelligence systems.',
    description: 'AI Ethics Specialists work to identify and mitigate ethical risks in AI systems, develop ethical guidelines, and ensure responsible AI development and deployment.',
    skills: ['AI/ML Knowledge', 'Ethics', 'Policy Development', 'Risk Assessment', 'Stakeholder Engagement', 'Technical Communication'],
    salaryRange: {
      local: '$90,000 - $150,000',
      global: '$80,000 - $170,000'
    },
    educationPath: ['Computer Science or Philosophy degree', 'AI ethics specialization', 'Policy experience'],
    futureOutlook: 'Critical and rapidly growing field as AI becomes more prevalent',
    tags: ['AI', 'Ethics', 'Policy', 'Emerging'],
    links: {
      courses: ['AI Ethics', 'Responsible AI Development'],
      communities: ['AI Ethics Network', 'Responsible AI Alliance'],
      videos: ['AI Ethics Principles', 'Responsible AI Development']
    }
  },
  {
    id: 'blockchain-developer',
    title: 'Blockchain Solutions Developer',
    category: 'technology-innovation',
    shortDescription: 'Develop blockchain applications for various industries and use cases.',
    description: 'Blockchain Solutions Developers create decentralized applications, smart contracts, and blockchain-based solutions for industries like finance, supply chain, and healthcare.',
    skills: ['Blockchain Technology', 'Smart Contracts', 'Cryptography', 'Programming', 'Distributed Systems', 'Security'],
    salaryRange: {
      local: '$95,000 - $160,000',
      global: '$85,000 - $180,000'
    },
    educationPath: ['Computer Science degree', 'Blockchain development training', 'Cryptocurrency knowledge'],
    futureOutlook: 'High growth as blockchain adoption expands across industries',
    tags: ['Blockchain', 'Cryptocurrency', 'Development', 'High Demand'],
    links: {
      courses: ['Blockchain Development', 'Smart Contract Programming'],
      communities: ['Blockchain Developer Network', 'Cryptocurrency Community'],
      videos: ['Blockchain Applications', 'Smart Contract Development']
    }
  },
  {
    id: 'iot-solutions-architect',
    title: 'IoT Solutions Architect',
    category: 'technology-innovation',
    shortDescription: 'Design and implement Internet of Things systems for smart environments.',
    description: 'IoT Solutions Architects design comprehensive IoT ecosystems that connect devices, sensors, and systems to create smart homes, cities, and industrial environments.',
    skills: ['IoT Platforms', 'System Architecture', 'Sensor Technology', 'Network Protocols', 'Cloud Computing', 'Data Analytics'],
    salaryRange: {
      local: '$85,000 - $140,000',
      global: '$75,000 - $160,000'
    },
    educationPath: ['Engineering or Computer Science degree', 'IoT specialization', 'System architecture experience'],
    futureOutlook: 'Excellent growth as IoT adoption accelerates across industries',
    tags: ['IoT', 'Architecture', 'Smart Systems', 'Growing Field'],
    links: {
      courses: ['IoT System Design', 'Smart City Technologies'],
      communities: ['IoT Community', 'Smart Systems Network'],
      videos: ['IoT Architecture', 'Smart City Solutions']
    }
  },
  {
    id: 'cybersecurity-analyst',
    title: 'Cybersecurity Threat Analyst',
    category: 'technology-innovation',
    shortDescription: 'Analyze and respond to cybersecurity threats and vulnerabilities.',
    description: 'Cybersecurity Threat Analysts monitor, detect, and respond to cyber threats, analyze security incidents, and develop strategies to protect organizational assets.',
    skills: ['Cybersecurity', 'Threat Analysis', 'Incident Response', 'Security Tools', 'Risk Assessment', 'Forensics'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Computer Science or Cybersecurity degree', 'Security certifications', 'Hands-on security experience'],
    futureOutlook: 'Excellent growth due to increasing cyber threats and security needs',
    tags: ['Cybersecurity', 'Threat Analysis', 'High Demand', 'Critical'],
    links: {
      courses: ['Cybersecurity Fundamentals', 'Threat Intelligence'],
      communities: ['Cybersecurity Community', 'Information Security Network'],
      videos: ['Cybersecurity Careers', 'Threat Analysis Techniques']
    }
  },
  {
    id: 'ar-developer',
    title: 'Augmented Reality Developer',
    category: 'technology-innovation',
    shortDescription: 'Create immersive AR applications for various industries and platforms.',
    description: 'Augmented Reality Developers build AR applications that overlay digital content onto the real world for gaming, education, retail, and industrial applications.',
    skills: ['AR Development', 'Mobile Development', '3D Graphics', 'Computer Vision', 'Unity/Unreal Engine', 'User Experience'],
    salaryRange: {
      local: '$80,000 - $130,000',
      global: '$70,000 - $150,000'
    },
    educationPath: ['Computer Science degree', 'AR/VR development training', 'Portfolio of AR projects'],
    futureOutlook: 'High growth as AR technology becomes mainstream across industries',
    tags: ['AR', 'Mobile Development', 'Immersive', 'Growing Field'],
    links: {
      courses: ['AR Development', 'Mobile AR Applications'],
      communities: ['AR Developer Community', 'Immersive Technology Network'],
      videos: ['AR Development Tutorials', 'Future of Augmented Reality']
    }
  },
  {
    id: 'data-visualization-specialist',
    title: 'Data Visualization Specialist',
    category: 'technology-innovation',
    shortDescription: 'Create compelling visual representations of complex data and analytics.',
    description: 'Data Visualization Specialists transform complex datasets into clear, interactive visualizations that help organizations understand trends, patterns, and insights.',
    skills: ['Data Visualization', 'Statistical Analysis', 'Design Principles', 'Programming', 'Dashboard Development', 'Storytelling'],
    salaryRange: {
      local: '$70,000 - $115,000',
      global: '$60,000 - $130,000'
    },
    educationPath: ['Data Science or Design degree', 'Visualization tools training', 'Portfolio of visualization projects'],
    futureOutlook: 'Strong growth as data-driven decision making becomes essential',
    tags: ['Data Visualization', 'Analytics', 'Design', 'Business Intelligence'],
    links: {
      courses: ['Data Visualization', 'Interactive Dashboard Design'],
      communities: ['Data Visualization Society', 'Analytics Community'],
      videos: ['Data Visualization Techniques', 'Effective Data Storytelling']
    }
  },
  {
    id: 'cloud-solutions-architect',
    title: 'Cloud Solutions Architect',
    category: 'technology-innovation',
    shortDescription: 'Design and implement scalable cloud infrastructure and solutions.',
    description: 'Cloud Solutions Architects design comprehensive cloud strategies, migrate applications to cloud platforms, and optimize cloud infrastructure for performance and cost.',
    skills: ['Cloud Platforms', 'System Architecture', 'DevOps', 'Security', 'Cost Optimization', 'Migration Planning'],
    salaryRange: {
      local: '$100,000 - $160,000',
      global: '$90,000 - $180,000'
    },
    educationPath: ['Computer Science or Engineering degree', 'Cloud certifications', 'Architecture experience'],
    futureOutlook: 'Excellent growth as cloud adoption continues to accelerate',
    tags: ['Cloud Computing', 'Architecture', 'High Demand', 'High Salary'],
    links: {
      courses: ['Cloud Architecture', 'AWS/Azure Solutions'],
      communities: ['Cloud Architecture Network', 'DevOps Community'],
      videos: ['Cloud Architecture Patterns', 'Cloud Migration Strategies']
    }
  },

  // Healthcare & Wellness (10 careers)
  {
    id: 'pediatric-anesthesiologist',
    title: 'Pediatric Anesthesiologist',
    category: 'healthcare-wellness',
    shortDescription: 'Specialized medical professional providing anesthesia care for children.',
    description: 'Pediatric Anesthesiologists are highly specialized physicians who provide anesthesia and perioperative care specifically for infants, children, and adolescents. They require extensive training in both anesthesiology and pediatric medicine.',
    skills: ['Medical Expertise', 'Pediatric Care', 'Anesthesia Techniques', 'Emergency Response', 'Patient Communication', 'Precision Medicine'],
    salaryRange: {
      local: '$350,000 - $500,000',
      global: '$300,000 - $600,000'
    },
    educationPath: ['Medical degree', 'Anesthesiology residency', 'Pediatric anesthesiology fellowship'],
    futureOutlook: 'Strong demand due to specialized nature and growing pediatric surgical needs',
    tags: ['Medical', 'Specialized', 'High Demand', 'High Salary'],
    links: {
      courses: ['Pediatric Anesthesia Fundamentals', 'Advanced Pediatric Life Support'],
      communities: ['Society for Pediatric Anesthesia', 'American Society of Anesthesiologists'],
      videos: ['Pediatric Anesthesia Techniques', 'Career in Pediatric Medicine']
    },
    featured: true
  },
  {
    id: 'genetic-counselor',
    title: 'Genetic Counselor',
    category: 'healthcare-wellness',
    shortDescription: 'Guide patients through genetic testing and hereditary health decisions.',
    description: 'Genetic Counselors help patients understand genetic conditions, assess risks, and make informed decisions about genetic testing and family planning. They bridge the gap between complex genetic science and patient care.',
    skills: ['Genetics Knowledge', 'Counseling Skills', 'Medical Communication', 'Risk Assessment', 'Empathy', 'Continuing Education'],
    salaryRange: {
      local: '$75,000 - $105,000',
      global: '$65,000 - $120,000'
    },
    educationPath: ['Biology or related degree', 'Genetic counseling masters program', 'Clinical experience'],
    futureOutlook: 'Excellent growth as genetic testing becomes more common and accessible',
    tags: ['Healthcare', 'Counseling', 'Growing Field', 'Specialized'],
    links: {
      courses: ['Genetic Counseling Fundamentals', 'Medical Genetics'],
      communities: ['National Society of Genetic Counselors', 'Genetic Counseling Network'],
      videos: ['Career in Genetic Counseling', 'Genetics in Healthcare']
    }
  },
  {
    id: 'telemedicine-coordinator',
    title: 'Telemedicine Coordinator',
    category: 'healthcare-wellness',
    shortDescription: 'Manage and optimize remote healthcare delivery systems and programs.',
    description: 'Telemedicine Coordinators oversee the implementation and operation of remote healthcare services, ensuring quality care delivery through digital platforms.',
    skills: ['Healthcare Administration', 'Technology Management', 'Patient Care Coordination', 'Quality Assurance', 'Regulatory Compliance', 'Communication'],
    salaryRange: {
      local: '$55,000 - $85,000',
      global: '$45,000 - $95,000'
    },
    educationPath: ['Healthcare Administration degree', 'Telemedicine certification', 'Healthcare technology experience'],
    futureOutlook: 'Rapid growth as telemedicine becomes mainstream healthcare delivery method',
    tags: ['Telemedicine', 'Healthcare Technology', 'Growing Field', 'Remote'],
    links: {
      courses: ['Telemedicine Management', 'Healthcare Technology'],
      communities: ['American Telemedicine Association', 'Digital Health Network'],
      videos: ['Telemedicine Implementation', 'Future of Remote Healthcare']
    }
  },
  {
    id: 'clinical-research-coordinator',
    title: 'Clinical Research Coordinator',
    category: 'healthcare-wellness',
    shortDescription: 'Manage clinical trials and research studies for medical breakthroughs.',
    description: 'Clinical Research Coordinators oversee clinical trials, ensure regulatory compliance, recruit participants, and collect data to advance medical knowledge and treatments.',
    skills: ['Clinical Research', 'Regulatory Compliance', 'Data Management', 'Patient Recruitment', 'Protocol Development', 'Medical Writing'],
    salaryRange: {
      local: '$50,000 - $80,000',
      global: '$40,000 - $90,000'
    },
    educationPath: ['Life Sciences degree', 'Clinical research certification', 'Research experience'],
    futureOutlook: 'Strong growth as medical research and drug development expand',
    tags: ['Clinical Research', 'Medical', 'Research', 'Regulatory'],
    links: {
      courses: ['Clinical Research Methods', 'Good Clinical Practice'],
      communities: ['Association of Clinical Research Professionals', 'Clinical Research Network'],
      videos: ['Clinical Research Careers', 'Clinical Trial Management']
    }
  },
  {
    id: 'health-informatics-specialist',
    title: 'Health Informatics Specialist',
    category: 'healthcare-wellness',
    shortDescription: 'Optimize healthcare delivery through data analysis and information systems.',
    description: 'Health Informatics Specialists use data analytics and information systems to improve healthcare quality, efficiency, and patient outcomes through evidence-based insights.',
    skills: ['Health Informatics', 'Data Analysis', 'Healthcare Systems', 'Database Management', 'Quality Improvement', 'Healthcare Regulations'],
    salaryRange: {
      local: '$65,000 - $105,000',
      global: '$55,000 - $120,000'
    },
    educationPath: ['Health Informatics or related degree', 'Healthcare data experience', 'Informatics certification'],
    futureOutlook: 'Excellent growth as healthcare becomes increasingly data-driven',
    tags: ['Health Informatics', 'Data Analysis', 'Healthcare Technology', 'Growing Field'],
    links: {
      courses: ['Health Informatics', 'Healthcare Data Analytics'],
      communities: ['American Medical Informatics Association', 'Health Data Network'],
      videos: ['Health Informatics Careers', 'Healthcare Data Analysis']
    }
  },
  {
    id: 'medical-device-specialist',
    title: 'Medical Device Specialist',
    category: 'healthcare-wellness',
    shortDescription: 'Support healthcare providers in the use of advanced medical technologies.',
    description: 'Medical Device Specialists provide technical support, training, and consultation for complex medical devices and equipment in healthcare settings.',
    skills: ['Medical Device Knowledge', 'Technical Support', 'Training Development', 'Healthcare Regulations', 'Problem Solving', 'Customer Relations'],
    salaryRange: {
      local: '$60,000 - $95,000',
      global: '$50,000 - $110,000'
    },
    educationPath: ['Biomedical Engineering or related degree', 'Medical device training', 'Healthcare experience'],
    futureOutlook: 'Strong growth with advancing medical technology and device complexity',
    tags: ['Medical Devices', 'Technical Support', 'Healthcare Technology', 'Training'],
    links: {
      courses: ['Medical Device Technology', 'Biomedical Equipment'],
      communities: ['Medical Device Network', 'Biomedical Technology Association'],
      videos: ['Medical Device Careers', 'Healthcare Technology Support']
    }
  },
  {
    id: 'wellness-program-coordinator',
    title: 'Corporate Wellness Program Coordinator',
    category: 'healthcare-wellness',
    shortDescription: 'Design and implement employee wellness programs for organizations.',
    description: 'Corporate Wellness Program Coordinators develop and manage comprehensive wellness initiatives that promote employee health, reduce healthcare costs, and improve workplace productivity.',
    skills: ['Program Development', 'Health Promotion', 'Data Analysis', 'Event Planning', 'Communication', 'Behavior Change'],
    salaryRange: {
      local: '$45,000 - $75,000',
      global: '$35,000 - $85,000'
    },
    educationPath: ['Health Promotion or related degree', 'Wellness certification', 'Program management experience'],
    futureOutlook: 'Growing field as employers prioritize employee health and wellness',
    tags: ['Wellness', 'Corporate Health', 'Program Management', 'Prevention'],
    links: {
      courses: ['Corporate Wellness', 'Health Promotion'],
      communities: ['Corporate Wellness Association', 'Workplace Health Network'],
      videos: ['Corporate Wellness Programs', 'Employee Health Initiatives']
    }
  },
  {
    id: 'rehabilitation-counselor',
    title: 'Rehabilitation Counselor',
    category: 'healthcare-wellness',
    shortDescription: 'Help individuals with disabilities achieve personal and career goals.',
    description: 'Rehabilitation Counselors work with people who have physical, mental, developmental, or emotional disabilities to help them live independently and achieve their personal and career goals.',
    skills: ['Counseling', 'Disability Knowledge', 'Case Management', 'Vocational Assessment', 'Advocacy', 'Resource Coordination'],
    salaryRange: {
      local: '$40,000 - $70,000',
      global: '$30,000 - $80,000'
    },
    educationPath: ['Rehabilitation Counseling degree', 'Counseling certification', 'Disability services experience'],
    futureOutlook: 'Steady growth as awareness of disability rights and services increases',
    tags: ['Counseling', 'Disability Services', 'Advocacy', 'Rehabilitation'],
    links: {
      courses: ['Rehabilitation Counseling', 'Disability Services'],
      communities: ['National Rehabilitation Counseling Association', 'Disability Services Network'],
      videos: ['Rehabilitation Counseling Careers', 'Disability Advocacy']
    }
  },
  {
    id: 'public-health-analyst',
    title: 'Public Health Data Analyst',
    category: 'healthcare-wellness',
    shortDescription: 'Analyze population health data to inform public health policies and programs.',
    description: 'Public Health Data Analysts collect, analyze, and interpret health data to identify trends, evaluate programs, and inform public health decision-making and policy development.',
    skills: ['Epidemiology', 'Statistical Analysis', 'Data Visualization', 'Public Health Knowledge', 'Research Methods', 'Policy Analysis'],
    salaryRange: {
      local: '$55,000 - $85,000',
      global: '$45,000 - $95,000'
    },
    educationPath: ['Public Health or Statistics degree', 'Epidemiology training', 'Data analysis experience'],
    futureOutlook: 'Strong growth as data-driven public health approaches become standard',
    tags: ['Public Health', 'Data Analysis', 'Epidemiology', 'Policy'],
    links: {
      courses: ['Public Health Analytics', 'Epidemiological Methods'],
      communities: ['American Public Health Association', 'Public Health Data Network'],
      videos: ['Public Health Analytics', 'Epidemiology Careers']
    }
  },
  {
    id: 'health-coach',
    title: 'Integrative Health Coach',
    category: 'healthcare-wellness',
    shortDescription: 'Guide individuals toward optimal health through personalized wellness strategies.',
    description: 'Integrative Health Coaches work with clients to develop personalized wellness plans that address physical, mental, and emotional health through lifestyle modifications and behavior change.',
    skills: ['Health Coaching', 'Behavior Change', 'Nutrition Knowledge', 'Motivational Interviewing', 'Wellness Planning', 'Communication'],
    salaryRange: {
      local: '$40,000 - $70,000',
      global: '$30,000 - $80,000'
    },
    educationPath: ['Health Coaching certification', 'Nutrition or wellness education', 'Coaching experience'],
    futureOutlook: 'Growing field as preventive and integrative health approaches gain acceptance',
    tags: ['Health Coaching', 'Wellness', 'Behavior Change', 'Preventive Health'],
    links: {
      courses: ['Health Coaching Certification', 'Integrative Wellness'],
      communities: ['International Coach Federation', 'Health Coach Alliance'],
      videos: ['Health Coaching Careers', 'Integrative Wellness Approaches']
    }
  },

  // Research & Development (10 careers)
  {
    id: 'space-archaeologist',
    title: 'Space Archaeologist',
    category: 'research-development',
    shortDescription: 'Study human activity in space and preserve space heritage.',
    description: 'Space Archaeologists study the material culture of human space exploration, from spacecraft design to space stations, preserving the archaeological record of humanity\'s expansion into space.',
    skills: ['Archaeology', 'Space History', 'Research Methods', 'Cultural Analysis', 'Documentation', 'Interdisciplinary Thinking'],
    salaryRange: {
      local: '$55,000 - $90,000',
      global: '$45,000 - $105,000'
    },
    educationPath: ['Archaeology or Anthropology degree', 'Space studies specialization', 'Research experience'],
    futureOutlook: 'Emerging field with growing recognition as space exploration expands',
    tags: ['Research', 'Space', 'Emerging', 'Interdisciplinary'],
    links: {
      courses: ['Space Archaeology', 'Cultural Heritage in Space'],
      communities: ['Space Archaeology Network', 'Astroarchaeology Society'],
      videos: ['Archaeology in Space', 'Preserving Space Heritage']
    }
  },
  {
    id: 'alternative-energy-researcher',
    title: 'Alternative Energy Systems Researcher',
    category: 'research-development',
    shortDescription: 'Research and develop next-generation renewable energy technologies.',
    description: 'Alternative Energy Systems Researchers work on developing innovative renewable energy technologies, from advanced solar cells to novel energy storage systems and emerging energy sources.',
    skills: ['Physics', 'Materials Science', 'Research Methods', 'Energy Systems', 'Data Analysis', 'Innovation'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Physics or Engineering degree', 'Advanced degree in energy systems', 'Research experience'],
    futureOutlook: 'Excellent growth as renewable energy sector expands rapidly',
    tags: ['Research', 'Energy', 'Innovation', 'High Impact'],
    links: {
      courses: ['Renewable Energy Systems', 'Advanced Energy Materials'],
      communities: ['Renewable Energy Research Network', 'Clean Energy Innovation'],
      videos: ['Future Energy Technologies', 'Renewable Energy Research']
    }
  },
  {
    id: 'materials-scientist',
    title: 'Advanced Materials Scientist',
    category: 'research-development',
    shortDescription: 'Develop new materials with enhanced properties for various applications.',
    description: 'Advanced Materials Scientists research and develop new materials with specific properties for applications in electronics, aerospace, medicine, and energy storage.',
    skills: ['Materials Science', 'Chemistry', 'Physics', 'Laboratory Techniques', 'Characterization Methods', 'Innovation'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Materials Science or Chemistry degree', 'Advanced degree preferred', 'Research experience'],
    futureOutlook: 'Strong growth as new materials enable technological advances',
    tags: ['Materials Science', 'Research', 'Innovation', 'Technology'],
    links: {
      courses: ['Advanced Materials', 'Materials Characterization'],
      communities: ['Materials Research Society', 'Advanced Materials Network'],
      videos: ['Materials Science Research', 'Future Materials']
    }
  },
  {
    id: 'pharmaceutical-researcher',
    title: 'Pharmaceutical Research Scientist',
    category: 'research-development',
    shortDescription: 'Discover and develop new medications and therapeutic treatments.',
    description: 'Pharmaceutical Research Scientists work on drug discovery, development, and testing to create new medications and therapeutic treatments for various diseases and conditions.',
    skills: ['Pharmacology', 'Chemistry', 'Biology', 'Drug Development', 'Clinical Research', 'Regulatory Knowledge'],
    salaryRange: {
      local: '$80,000 - $130,000',
      global: '$70,000 - $150,000'
    },
    educationPath: ['Chemistry or Biology degree', 'Advanced degree in pharmacology', 'Research experience'],
    futureOutlook: 'Strong demand for new drug development and personalized medicine',
    tags: ['Pharmaceutical', 'Drug Development', 'Medical Research', 'High Impact'],
    links: {
      courses: ['Drug Discovery', 'Pharmaceutical Sciences'],
      communities: ['American Chemical Society', 'Pharmaceutical Research Network'],
      videos: ['Drug Discovery Process', 'Pharmaceutical Research Careers']
    }
  },
  {
    id: 'robotics-researcher',
    title: 'Robotics Research Engineer',
    category: 'research-development',
    shortDescription: 'Develop advanced robotic systems for various applications and industries.',
    description: 'Robotics Research Engineers design and develop robotic systems for manufacturing, healthcare, exploration, and service applications, advancing the field of robotics.',
    skills: ['Robotics', 'Mechanical Engineering', 'Programming', 'Control Systems', 'AI/ML', 'Sensor Integration'],
    salaryRange: {
      local: '$85,000 - $140,000',
      global: '$75,000 - $160,000'
    },
    educationPath: ['Engineering degree', 'Robotics specialization', 'Research experience'],
    futureOutlook: 'Excellent growth as robotics applications expand across industries',
    tags: ['Robotics', 'Engineering', 'AI', 'Innovation'],
    links: {
      courses: ['Robotics Engineering', 'Advanced Robotics'],
      communities: ['IEEE Robotics Society', 'Robotics Research Network'],
      videos: ['Robotics Research', 'Future of Robotics']
    }
  },
  {
    id: 'neuroscience-researcher',
    title: 'Computational Neuroscience Researcher',
    category: 'research-development',
    shortDescription: 'Study brain function using computational models and data analysis.',
    description: 'Computational Neuroscience Researchers use mathematical models, computer simulations, and data analysis to understand brain function and neurological disorders.',
    skills: ['Neuroscience', 'Mathematics', 'Programming', 'Data Analysis', 'Machine Learning', 'Research Methods'],
    salaryRange: {
      local: '$70,000 - $115,000',
      global: '$60,000 - $130,000'
    },
    educationPath: ['Neuroscience or related degree', 'Computational skills', 'Research experience'],
    futureOutlook: 'Growing field as computational approaches advance neuroscience understanding',
    tags: ['Neuroscience', 'Computational', 'Research', 'Brain Science'],
    links: {
      courses: ['Computational Neuroscience', 'Brain Data Analysis'],
      communities: ['Society for Neuroscience', 'Computational Neuroscience Network'],
      videos: ['Computational Neuroscience', 'Brain Research Methods']
    }
  },
  {
    id: 'climate-researcher',
    title: 'Climate Change Researcher',
    category: 'research-development',
    shortDescription: 'Study climate systems and develop solutions for climate change mitigation.',
    description: 'Climate Change Researchers study climate systems, analyze climate data, and develop strategies for climate change mitigation and adaptation.',
    skills: ['Climate Science', 'Data Analysis', 'Atmospheric Physics', 'Research Methods', 'Modeling', 'Environmental Science'],
    salaryRange: {
      local: '$60,000 - $105,000',
      global: '$50,000 - $120,000'
    },
    educationPath: ['Environmental Science or Physics degree', 'Climate science specialization', 'Research experience'],
    futureOutlook: 'Critical field with high importance for addressing climate change',
    tags: ['Climate Science', 'Environmental Research', 'High Impact', 'Critical'],
    links: {
      courses: ['Climate Science', 'Atmospheric Physics'],
      communities: ['American Geophysical Union', 'Climate Research Network'],
      videos: ['Climate Research Methods', 'Climate Science Careers']
    }
  },
  {
    id: 'biomedical-researcher',
    title: 'Biomedical Research Scientist',
    category: 'research-development',
    shortDescription: 'Conduct research to advance understanding of human health and disease.',
    description: 'Biomedical Research Scientists conduct laboratory and clinical research to understand disease mechanisms, develop new treatments, and advance medical knowledge.',
    skills: ['Biomedical Science', 'Research Methods', 'Laboratory Techniques', 'Data Analysis', 'Grant Writing', 'Scientific Communication'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Biomedical Science degree', 'Advanced degree preferred', 'Research experience'],
    futureOutlook: 'Strong demand for medical research and breakthrough treatments',
    tags: ['Biomedical Research', 'Medical Science', 'Laboratory', 'Health'],
    links: {
      courses: ['Biomedical Research Methods', 'Medical Laboratory Techniques'],
      communities: ['American Association for the Advancement of Science', 'Biomedical Research Network'],
      videos: ['Biomedical Research Careers', 'Medical Research Methods']
    }
  },
  {
    id: 'agricultural-researcher',
    title: 'Agricultural Innovation Researcher',
    category: 'research-development',
    shortDescription: 'Develop sustainable farming practices and crop improvement technologies.',
    description: 'Agricultural Innovation Researchers work on developing sustainable farming practices, improving crop yields, and creating resilient agricultural systems for food security.',
    skills: ['Agricultural Science', 'Plant Biology', 'Research Methods', 'Sustainability', 'Data Analysis', 'Field Research'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Agricultural Science degree', 'Research specialization', 'Field experience'],
    futureOutlook: 'Important field for food security and sustainable agriculture',
    tags: ['Agriculture', 'Sustainability', 'Food Security', 'Research'],
    links: {
      courses: ['Agricultural Research Methods', 'Sustainable Agriculture'],
      communities: ['American Society of Agronomy', 'Agricultural Research Network'],
      videos: ['Agricultural Research', 'Sustainable Farming Innovation']
    }
  },
  {
    id: 'social-science-researcher',
    title: 'Applied Social Science Researcher',
    category: 'research-development',
    shortDescription: 'Study human behavior and social systems to inform policy and programs.',
    description: 'Applied Social Science Researchers study human behavior, social systems, and community dynamics to inform policy development and social programs.',
    skills: ['Social Science Research', 'Statistics', 'Survey Design', 'Data Analysis', 'Policy Analysis', 'Community Engagement'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $95,000'
    },
    educationPath: ['Social Science degree', 'Research methods training', 'Policy experience'],
    futureOutlook: 'Important for evidence-based policy and social program development',
    tags: ['Social Science', 'Policy Research', 'Community', 'Applied Research'],
    links: {
      courses: ['Social Research Methods', 'Policy Analysis'],
      communities: ['American Sociological Association', 'Social Research Network'],
      videos: ['Social Science Research', 'Applied Research Methods']
    }
  },

  // Sustainability (10 careers)
  {
    id: 'vertical-farming-specialist',
    title: 'Urban Vertical Farming Specialist',
    category: 'sustainability',
    shortDescription: 'Design and manage high-tech indoor farming systems for urban environments.',
    description: 'Urban Vertical Farming Specialists develop and operate sophisticated indoor growing systems that maximize food production in minimal space using hydroponics, LED lighting, and automated systems.',
    skills: ['Agricultural Science', 'Hydroponics', 'LED Technology', 'Automation Systems', 'Plant Biology', 'Urban Planning'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Agricultural or Plant Science degree', 'Controlled environment agriculture training', 'Technology systems experience'],
    futureOutlook: 'Rapidly expanding field addressing food security and urban sustainability',
    tags: ['Sustainable', 'Agriculture', 'Technology', 'Urban'],
    links: {
      courses: ['Vertical Farming Systems', 'Controlled Environment Agriculture'],
      communities: ['Vertical Farming Association', 'Urban Agriculture Network'],
      videos: ['Future of Urban Farming', 'Vertical Agriculture Technology']
    }
  },
  {
    id: 'circular-economy-consultant',
    title: 'Circular Economy Consultant',
    category: 'sustainability',
    shortDescription: 'Help organizations transition to circular business models and waste reduction.',
    description: 'Circular Economy Consultants help businesses redesign their operations to minimize waste, maximize resource efficiency, and create closed-loop systems.',
    skills: ['Circular Economy Principles', 'Business Strategy', 'Waste Management', 'Life Cycle Assessment', 'Sustainability Planning', 'Systems Thinking'],
    salaryRange: {
      local: '$65,000 - $115,000',
      global: '$55,000 - $130,000'
    },
    educationPath: ['Environmental Science or Business degree', 'Circular economy training', 'Consulting experience'],
    futureOutlook: 'Growing field as businesses adopt circular economy principles',
    tags: ['Circular Economy', 'Sustainability', 'Consulting', 'Waste Reduction'],
    links: {
      courses: ['Circular Economy Fundamentals', 'Sustainable Business Models'],
      communities: ['Circular Economy Network', 'Sustainability Consultants'],
      videos: ['Circular Economy Principles', 'Sustainable Business Transformation']
    }
  },
  {
    id: 'sustainable-supply-chain-manager',
    title: 'Sustainable Supply Chain Manager',
    category: 'sustainability',
    shortDescription: 'Optimize supply chains for environmental and social sustainability.',
    description: 'Sustainable Supply Chain Managers work to reduce environmental impact and improve social responsibility throughout the supply chain while maintaining efficiency and cost-effectiveness.',
    skills: ['Supply Chain Management', 'Sustainability Principles', 'Vendor Assessment', 'Risk Management', 'Data Analysis', 'Stakeholder Engagement'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Supply Chain or Business degree', 'Sustainability certification', 'Supply chain experience'],
    futureOutlook: 'High demand as companies prioritize sustainable supply chains',
    tags: ['Supply Chain', 'Sustainability', 'Management', 'Corporate Responsibility'],
    links: {
      courses: ['Sustainable Supply Chain Management', 'Green Logistics'],
      communities: ['Supply Chain Sustainability Network', 'Green Business Alliance'],
      videos: ['Sustainable Supply Chains', 'Green Logistics Practices']
    }
  },
  {
    id: 'renewable-energy-project-manager',
    title: 'Renewable Energy Project Manager',
    category: 'sustainability',
    shortDescription: 'Manage the development and implementation of renewable energy projects.',
    description: 'Renewable Energy Project Managers oversee the planning, development, and implementation of solar, wind, and other renewable energy projects from conception to operation.',
    skills: ['Project Management', 'Renewable Energy Systems', 'Financial Analysis', 'Regulatory Knowledge', 'Stakeholder Management', 'Risk Assessment'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Engineering or Project Management degree', 'Renewable energy experience', 'Project management certification'],
    futureOutlook: 'Excellent growth as renewable energy projects expand globally',
    tags: ['Renewable Energy', 'Project Management', 'Clean Energy', 'High Demand'],
    links: {
      courses: ['Renewable Energy Project Management', 'Clean Energy Development'],
      communities: ['Renewable Energy Project Network', 'Clean Energy Alliance'],
      videos: ['Renewable Energy Projects', 'Clean Energy Development']
    }
  },
  {
    id: 'sustainability-data-analyst',
    title: 'Sustainability Data Analyst',
    category: 'sustainability',
    shortDescription: 'Analyze environmental and sustainability data to drive decision-making.',
    description: 'Sustainability Data Analysts collect, analyze, and interpret environmental and sustainability data to help organizations track progress, identify opportunities, and make data-driven decisions.',
    skills: ['Data Analysis', 'Sustainability Metrics', 'Environmental Science', 'Statistical Analysis', 'Data Visualization', 'Report Writing'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Environmental Science or Data Science degree', 'Sustainability training', 'Data analysis experience'],
    futureOutlook: 'Growing demand as organizations need data-driven sustainability insights',
    tags: ['Data Analysis', 'Sustainability', 'Environmental Metrics', 'Analytics'],
    links: {
      courses: ['Sustainability Analytics', 'Environmental Data Analysis'],
      communities: ['Sustainability Data Network', 'Environmental Analytics Alliance'],
      videos: ['Sustainability Data Analysis', 'Environmental Metrics']
    }
  },
  {
    id: 'green-finance-analyst',
    title: 'Green Finance Analyst',
    category: 'sustainability',
    shortDescription: 'Analyze and structure financial products for sustainable investments.',
    description: 'Green Finance Analysts evaluate and structure financial products that support environmental and sustainable projects, including green bonds, ESG investments, and climate finance.',
    skills: ['Financial Analysis', 'ESG Knowledge', 'Investment Analysis', 'Risk Assessment', 'Regulatory Knowledge', 'Sustainability Principles'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Finance or Economics degree', 'ESG/sustainability training', 'Financial analysis experience'],
    futureOutlook: 'Rapidly growing field as sustainable finance becomes mainstream',
    tags: ['Green Finance', 'ESG', 'Sustainable Investment', 'Financial Analysis'],
    links: {
      courses: ['Green Finance', 'ESG Investment Analysis'],
      communities: ['Green Finance Network', 'Sustainable Finance Alliance'],
      videos: ['Green Finance Fundamentals', 'ESG Investment Strategies']
    }
  },
  {
    id: 'waste-to-energy-engineer',
    title: 'Waste-to-Energy Engineer',
    category: 'sustainability',
    shortDescription: 'Design systems that convert waste materials into usable energy.',
    description: 'Waste-to-Energy Engineers design and optimize systems that convert various types of waste into electricity, heat, or fuel, contributing to both waste management and renewable energy.',
    skills: ['Environmental Engineering', 'Energy Systems', 'Waste Management', 'Process Design', 'Thermodynamics', 'Project Management'],
    salaryRange: {
      local: '$70,000 - $115,000',
      global: '$60,000 - $130,000'
    },
    educationPath: ['Environmental or Chemical Engineering degree', 'Waste-to-energy specialization', 'Engineering experience'],
    futureOutlook: 'Growing field as waste-to-energy becomes important for sustainability',
    tags: ['Waste-to-Energy', 'Engineering', 'Renewable Energy', 'Waste Management'],
    links: {
      courses: ['Waste-to-Energy Systems', 'Environmental Engineering'],
      communities: ['Waste-to-Energy Network', 'Environmental Engineers Society'],
      videos: ['Waste-to-Energy Technology', 'Sustainable Waste Management']
    }
  },
  {
    id: 'sustainable-transportation-planner',
    title: 'Sustainable Transportation Planner',
    category: 'sustainability',
    shortDescription: 'Design transportation systems that reduce environmental impact.',
    description: 'Sustainable Transportation Planners develop transportation systems and policies that reduce emissions, promote public transit, and support sustainable mobility options.',
    skills: ['Transportation Planning', 'Urban Planning', 'Environmental Impact Assessment', 'Public Policy', 'Data Analysis', 'Community Engagement'],
    salaryRange: {
      local: '$55,000 - $95,000',
      global: '$45,000 - $110,000'
    },
    educationPath: ['Urban Planning or Transportation degree', 'Sustainability training', 'Planning experience'],
    futureOutlook: 'Important field for reducing transportation emissions and improving mobility',
    tags: ['Transportation Planning', 'Sustainability', 'Urban Planning', 'Mobility'],
    links: {
      courses: ['Sustainable Transportation', 'Urban Mobility Planning'],
      communities: ['Transportation Planning Network', 'Sustainable Mobility Alliance'],
      videos: ['Sustainable Transportation Planning', 'Future of Urban Mobility']
    }
  },
  {
    id: 'biodiversity-conservation-specialist',
    title: 'Biodiversity Conservation Specialist',
    category: 'sustainability',
    shortDescription: 'Develop and implement strategies to protect and restore biodiversity.',
    description: 'Biodiversity Conservation Specialists work to protect endangered species, restore ecosystems, and develop conservation strategies that balance human needs with biodiversity protection.',
    skills: ['Conservation Biology', 'Ecology', 'Species Management', 'Habitat Restoration', 'Policy Development', 'Stakeholder Engagement'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $95,000'
    },
    educationPath: ['Biology or Environmental Science degree', 'Conservation specialization', 'Field experience'],
    futureOutlook: 'Critical field for addressing biodiversity loss and ecosystem protection',
    tags: ['Biodiversity', 'Conservation', 'Ecology', 'Species Protection'],
    links: {
      courses: ['Conservation Biology', 'Biodiversity Management'],
      communities: ['Society for Conservation Biology', 'Biodiversity Network'],
      videos: ['Biodiversity Conservation', 'Species Protection Strategies']
    }
  },
  {
    id: 'sustainable-agriculture-advisor',
    title: 'Sustainable Agriculture Advisor',
    category: 'sustainability',
    shortDescription: 'Help farmers adopt sustainable and regenerative farming practices.',
    description: 'Sustainable Agriculture Advisors work with farmers to implement sustainable farming practices that improve soil health, reduce environmental impact, and maintain profitability.',
    skills: ['Agricultural Science', 'Sustainable Farming Practices', 'Soil Science', 'Crop Management', 'Extension Services', 'Farm Economics'],
    salaryRange: {
      local: '$50,000 - $80,000',
      global: '$40,000 - $90,000'
    },
    educationPath: ['Agricultural Science degree', 'Sustainable agriculture training', 'Extension experience'],
    futureOutlook: 'Important for transitioning agriculture to sustainable practices',
    tags: ['Sustainable Agriculture', 'Farming', 'Soil Health', 'Advisory'],
    links: {
      courses: ['Sustainable Agriculture', 'Regenerative Farming'],
      communities: ['Sustainable Agriculture Network', 'Regenerative Agriculture Alliance'],
      videos: ['Sustainable Farming Practices', 'Regenerative Agriculture']
    }
  },

  // Cultural Heritage (10 careers)
  {
    id: 'digital-heritage-preservationist',
    title: 'Digital Heritage Preservationist',
    category: 'cultural-heritage',
    shortDescription: 'Preserve cultural artifacts and historical sites using digital technology.',
    description: 'Digital Heritage Preservationists use 3D scanning, virtual reality, and digital archiving to preserve cultural artifacts, historical sites, and intangible heritage for future generations.',
    skills: ['Digital Archiving', '3D Scanning', 'Cultural Knowledge', 'Database Management', 'Virtual Reality', 'Historical Research'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $100,000'
    },
    educationPath: ['History, Archaeology, or Library Science degree', 'Digital preservation training', 'Cultural heritage experience'],
    futureOutlook: 'Growing importance as digitization of cultural heritage accelerates',
    tags: ['Cultural', 'Technology', 'Preservation', 'Purpose-driven'],
    links: {
      courses: ['Digital Heritage Preservation', 'Cultural Informatics'],
      communities: ['Digital Heritage Network', 'Cultural Preservation Society'],
      videos: ['Digitizing Cultural Heritage', 'Technology in Archaeology']
    }
  },
  {
    id: 'art-conservator',
    title: 'Digital Art Conservator',
    category: 'cultural-heritage',
    shortDescription: 'Preserve and restore artworks using advanced digital techniques.',
    description: 'Digital Art Conservators combine traditional conservation knowledge with cutting-edge digital technology to preserve, analyze, and restore artworks and cultural artifacts.',
    skills: ['Art History', 'Conservation Techniques', 'Digital Imaging', 'Chemical Analysis', 'Documentation', 'Attention to Detail'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $100,000'
    },
    educationPath: ['Art History or Chemistry degree', 'Conservation training program', 'Museum experience'],
    futureOutlook: 'Steady demand from museums and cultural institutions',
    tags: ['Cultural', 'Art', 'Preservation', 'Specialized'],
    links: {
      courses: ['Art Conservation', 'Digital Preservation Techniques'],
      communities: ['American Institute for Conservation', 'International Conservation Network'],
      videos: ['Art Conservation Techniques', 'Digital Methods in Conservation']
    }
  },
  {
    id: 'museum-technology-specialist',
    title: 'Museum Technology Specialist',
    category: 'cultural-heritage',
    shortDescription: 'Integrate technology into museum exhibitions and educational programs.',
    description: 'Museum Technology Specialists design and implement interactive exhibits, virtual tours, and digital educational programs that enhance visitor engagement with cultural heritage.',
    skills: ['Museum Studies', 'Interactive Technology', 'Exhibition Design', 'Educational Technology', 'Project Management', 'User Experience'],
    salaryRange: {
      local: '$45,000 - $75,000',
      global: '$35,000 - $85,000'
    },
    educationPath: ['Museum Studies or Technology degree', 'Exhibition experience', 'Educational technology training'],
    futureOutlook: 'Growing field as museums embrace digital transformation',
    tags: ['Museums', 'Technology', 'Education', 'Interactive'],
    links: {
      courses: ['Museum Technology', 'Interactive Exhibition Design'],
      communities: ['Museum Technology Network', 'Digital Museums Alliance'],
      videos: ['Museum Technology Trends', 'Interactive Museum Exhibits']
    }
  },
  {
    id: 'cultural-anthropologist',
    title: 'Applied Cultural Anthropologist',
    category: 'cultural-heritage',
    shortDescription: 'Study and document cultural practices for preservation and understanding.',
    description: 'Applied Cultural Anthropologists study living cultures, document traditional practices, and work with communities to preserve and share their cultural heritage.',
    skills: ['Anthropological Methods', 'Ethnographic Research', 'Cultural Analysis', 'Community Engagement', 'Documentation', 'Cross-cultural Communication'],
    salaryRange: {
      local: '$45,000 - $80,000',
      global: '$35,000 - $90,000'
    },
    educationPath: ['Anthropology degree', 'Fieldwork experience', 'Cultural research training'],
    futureOutlook: 'Important for cultural preservation and understanding in globalized world',
    tags: ['Anthropology', 'Cultural Research', 'Community', 'Documentation'],
    links: {
      courses: ['Cultural Anthropology', 'Ethnographic Methods'],
      communities: ['American Anthropological Association', 'Cultural Heritage Network'],
      videos: ['Cultural Anthropology Careers', 'Ethnographic Research Methods']
    }
  },
  {
    id: 'heritage-tourism-developer',
    title: 'Heritage Tourism Developer',
    category: 'cultural-heritage',
    shortDescription: 'Develop sustainable tourism programs that showcase cultural heritage.',
    description: 'Heritage Tourism Developers create tourism experiences that showcase cultural heritage while ensuring sustainable practices and community benefit.',
    skills: ['Tourism Development', 'Cultural Knowledge', 'Marketing', 'Community Engagement', 'Sustainability Planning', 'Event Management'],
    salaryRange: {
      local: '$45,000 - $75,000',
      global: '$35,000 - $85,000'
    },
    educationPath: ['Tourism or Cultural Studies degree', 'Heritage tourism experience', 'Marketing training'],
    futureOutlook: 'Growing field as cultural tourism becomes more popular',
    tags: ['Tourism', 'Cultural Heritage', 'Community Development', 'Marketing'],
    links: {
      courses: ['Heritage Tourism', 'Cultural Tourism Development'],
      communities: ['Heritage Tourism Network', 'Cultural Tourism Alliance'],
      videos: ['Heritage Tourism Development', 'Cultural Tourism Strategies']
    }
  },
  {
    id: 'oral-history-specialist',
    title: 'Oral History Specialist',
    category: 'cultural-heritage',
    shortDescription: 'Collect, preserve, and share oral histories and traditional knowledge.',
    description: 'Oral History Specialists work with communities to collect, document, and preserve oral histories, traditional knowledge, and cultural narratives for future generations.',
    skills: ['Interview Techniques', 'Audio Recording', 'Historical Research', 'Community Relations', 'Digital Archiving', 'Storytelling'],
    salaryRange: {
      local: '$40,000 - $70,000',
      global: '$30,000 - $80,000'
    },
    educationPath: ['History or Anthropology degree', 'Oral history training', 'Community work experience'],
    futureOutlook: 'Important for preserving intangible cultural heritage',
    tags: ['Oral History', 'Cultural Preservation', 'Community', 'Storytelling'],
    links: {
      courses: ['Oral History Methods', 'Community History'],
      communities: ['Oral History Association', 'Community History Network'],
      videos: ['Oral History Techniques', 'Preserving Community Stories']
    }
  },
  {
    id: 'archaeological-illustrator',
    title: 'Archaeological Illustrator',
    category: 'cultural-heritage',
    shortDescription: 'Create detailed illustrations and reconstructions of archaeological findings.',
    description: 'Archaeological Illustrators create detailed drawings, reconstructions, and visual documentation of archaeological artifacts, sites, and findings for research and education.',
    skills: ['Technical Drawing', 'Archaeological Knowledge', 'Digital Illustration', 'Scientific Accuracy', 'Attention to Detail', 'Research Skills'],
    salaryRange: {
      local: '$40,000 - $70,000',
      global: '$30,000 - $80,000'
    },
    educationPath: ['Art or Archaeology degree', 'Technical illustration training', 'Archaeological experience'],
    futureOutlook: 'Specialized field with steady demand from archaeological projects',
    tags: ['Archaeology', 'Illustration', 'Scientific Art', 'Documentation'],
    links: {
      courses: ['Archaeological Illustration', 'Scientific Drawing'],
      communities: ['Archaeological Illustrators Network', 'Scientific Art Society'],
      videos: ['Archaeological Illustration Techniques', 'Scientific Drawing Methods']
    }
  },
  {
    id: 'cultural-resource-manager',
    title: 'Cultural Resource Manager',
    category: 'cultural-heritage',
    shortDescription: 'Manage and protect cultural resources and heritage sites.',
    description: 'Cultural Resource Managers work to identify, evaluate, and protect cultural resources and heritage sites, often in compliance with environmental and development regulations.',
    skills: ['Cultural Resource Management', 'Regulatory Knowledge', 'Site Assessment', 'Project Management', 'Stakeholder Engagement', 'Report Writing'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $95,000'
    },
    educationPath: ['Archaeology or Anthropology degree', 'Cultural resource management training', 'Regulatory experience'],
    futureOutlook: 'Steady demand due to regulatory requirements and development projects',
    tags: ['Cultural Resources', 'Heritage Protection', 'Regulatory', 'Management'],
    links: {
      courses: ['Cultural Resource Management', 'Heritage Site Protection'],
      communities: ['Society for American Archaeology', 'Cultural Resource Network'],
      videos: ['Cultural Resource Management', 'Heritage Site Protection']
    }
  },
  {
    id: 'historic-preservation-specialist',
    title: 'Historic Preservation Specialist',
    category: 'cultural-heritage',
    shortDescription: 'Preserve and restore historic buildings and architectural heritage.',
    description: 'Historic Preservation Specialists work to preserve, restore, and maintain historic buildings and architectural heritage through conservation techniques and planning.',
    skills: ['Historic Preservation', 'Architecture History', 'Conservation Techniques', 'Building Assessment', 'Regulatory Knowledge', 'Project Management'],
    salaryRange: {
      local: '$45,000 - $80,000',
      global: '$35,000 - $90,000'
    },
    educationPath: ['Architecture or History degree', 'Historic preservation training', 'Conservation experience'],
    futureOutlook: 'Important field for maintaining architectural heritage',
    tags: ['Historic Preservation', 'Architecture', 'Conservation', 'Heritage'],
    links: {
      courses: ['Historic Preservation', 'Architectural Conservation'],
      communities: ['National Trust for Historic Preservation', 'Preservation Network'],
      videos: ['Historic Preservation Techniques', 'Architectural Conservation']
    }
  },
  {
    id: 'intangible-heritage-specialist',
    title: 'Intangible Heritage Specialist',
    category: 'cultural-heritage',
    shortDescription: 'Document and preserve traditional practices, crafts, and cultural expressions.',
    description: 'Intangible Heritage Specialists work to document, preserve, and transmit traditional practices, crafts, performing arts, and other forms of intangible cultural heritage.',
    skills: ['Cultural Documentation', 'Traditional Crafts Knowledge', 'Community Engagement', 'Video/Audio Production', 'Cultural Analysis', 'Education'],
    salaryRange: {
      local: '$40,000 - $70,000',
      global: '$30,000 - $80,000'
    },
    educationPath: ['Anthropology or Cultural Studies degree', 'Traditional arts training', 'Community work experience'],
    futureOutlook: 'Growing recognition of importance of intangible heritage preservation',
    tags: ['Intangible Heritage', 'Traditional Crafts', 'Cultural Practices', 'Community'],
    links: {
      courses: ['Intangible Heritage', 'Traditional Arts Documentation'],
      communities: ['UNESCO Intangible Heritage Network', 'Traditional Arts Alliance'],
      videos: ['Intangible Heritage Preservation', 'Traditional Crafts Documentation']
    }
  },

  // Engineering & Materials (10 careers)
  {
    id: 'sustainable-fashion-engineer',
    title: 'Sustainable Fashion Materials Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop eco-friendly materials and processes for the fashion industry.',
    description: 'Sustainable Fashion Materials Engineers work to revolutionize the fashion industry by developing biodegradable fabrics, circular production processes, and innovative sustainable materials from waste products.',
    skills: ['Materials Engineering', 'Textile Science', 'Sustainability Principles', 'Chemical Engineering', 'Fashion Industry Knowledge', 'Innovation'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Materials or Chemical Engineering degree', 'Textile science specialization', 'Sustainability certification'],
    futureOutlook: 'High growth potential as fashion industry faces sustainability pressure',
    tags: ['Sustainable', 'Innovation', 'Materials', 'High Impact'],
    links: {
      courses: ['Sustainable Textile Engineering', 'Fashion Industry Sustainability'],
      communities: ['Sustainable Fashion Network', 'Materials Innovation Initiative'],
      videos: ['Future of Sustainable Fashion', 'Innovative Textile Materials']
    }
  },
  {
    id: 'biomimicry-designer',
    title: 'Biomimicry Design Engineer',
    category: 'engineering-materials',
    shortDescription: 'Create innovative solutions inspired by nature\'s designs and processes.',
    description: 'Biomimicry Design Engineers study natural systems and organisms to develop innovative technologies and materials that solve human challenges by mimicking nature\'s time-tested patterns.',
    skills: ['Biology Knowledge', 'Engineering Design', 'Materials Science', 'Innovation Thinking', 'Research Skills', 'Interdisciplinary Collaboration'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Engineering or Biology degree', 'Biomimicry specialization', 'Innovation experience'],
    futureOutlook: 'Growing field as sustainable innovation becomes priority',
    tags: ['Innovation', 'Nature-inspired', 'Sustainable', 'Interdisciplinary'],
    links: {
      courses: ['Biomimicry Design', 'Nature-Inspired Innovation'],
      communities: ['Biomimicry Institute', 'Nature-Based Solutions Network'],
      videos: ['Learning from Nature', 'Biomimicry in Engineering']
    }
  },
  {
    id: 'neurorehabilitation-engineer',
    title: 'Neurorehabilitation Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop assistive technologies for neurological rehabilitation.',
    description: 'Neurorehabilitation Engineers design and develop assistive devices, brain-computer interfaces, and rehabilitation technologies to help people recover from neurological injuries and conditions.',
    skills: ['Biomedical Engineering', 'Neuroscience', 'Robotics', 'Signal Processing', 'Human Factors', 'Clinical Understanding'],
    salaryRange: {
      local: '$80,000 - $130,000',
      global: '$70,000 - $150,000'
    },
    educationPath: ['Biomedical Engineering degree', 'Neuroscience training', 'Clinical experience'],
    futureOutlook: 'Growing field as population ages and neurological conditions increase',
    tags: ['Engineering', 'Healthcare', 'Assistive Technology', 'High Impact'],
    links: {
      courses: ['Neuroengineering', 'Rehabilitation Technology'],
      communities: ['Biomedical Engineering Society', 'Neurorehabilitation Network'],
      videos: ['Brain-Computer Interfaces', 'Assistive Technology Innovation']
    }
  },
  {
    id: 'smart-materials-engineer',
    title: 'Smart Materials Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop materials that can respond and adapt to environmental changes.',
    description: 'Smart Materials Engineers create materials with properties that can be controlled or changed in response to stimuli such as temperature, pH, electric fields, or stress.',
    skills: ['Materials Science', 'Nanotechnology', 'Chemistry', 'Physics', 'Engineering Design', 'Innovation'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Materials Science or Engineering degree', 'Smart materials specialization', 'Research experience'],
    futureOutlook: 'High growth potential as smart materials enable new technologies',
    tags: ['Smart Materials', 'Nanotechnology', 'Innovation', 'Advanced Materials'],
    links: {
      courses: ['Smart Materials', 'Nanotechnology Applications'],
      communities: ['Materials Research Society', 'Smart Materials Network'],
      videos: ['Smart Materials Applications', 'Future of Adaptive Materials']
    }
  },
  {
    id: 'aerospace-materials-engineer',
    title: 'Aerospace Materials Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop advanced materials for aerospace and space exploration applications.',
    description: 'Aerospace Materials Engineers develop lightweight, high-strength materials for aircraft, spacecraft, and satellites that can withstand extreme conditions.',
    skills: ['Materials Science', 'Aerospace Engineering', 'Composite Materials', 'Testing Methods', 'Quality Control', 'Regulatory Knowledge'],
    salaryRange: {
      local: '$80,000 - $135,000',
      global: '$70,000 - $155,000'
    },
    educationPath: ['Materials Science or Aerospace Engineering degree', 'Aerospace industry experience', 'Materials testing certification'],
    futureOutlook: 'Strong growth with expanding space industry and aviation sector',
    tags: ['Aerospace', 'Advanced Materials', 'Space Technology', 'High-tech'],
    links: {
      courses: ['Aerospace Materials', 'Composite Materials Engineering'],
      communities: ['American Institute of Aeronautics and Astronautics', 'Aerospace Materials Network'],
      videos: ['Aerospace Materials Innovation', 'Space Materials Engineering']
    }
  },
  {
    id: 'energy-storage-engineer',
    title: 'Energy Storage Systems Engineer',
    category: 'engineering-materials',
    shortDescription: 'Design and optimize energy storage systems for renewable energy applications.',
    description: 'Energy Storage Systems Engineers develop battery systems, supercapacitors, and other energy storage technologies to support renewable energy integration and grid stability.',
    skills: ['Electrical Engineering', 'Battery Technology', 'Energy Systems', 'Materials Science', 'System Integration', 'Safety Protocols'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Electrical or Chemical Engineering degree', 'Energy storage specialization', 'Battery technology experience'],
    futureOutlook: 'Excellent growth as energy storage becomes critical for renewable energy',
    tags: ['Energy Storage', 'Battery Technology', 'Renewable Energy', 'Grid Systems'],
    links: {
      courses: ['Energy Storage Systems', 'Battery Technology'],
      communities: ['Energy Storage Association', 'Battery Engineering Network'],
      videos: ['Energy Storage Innovation', 'Battery Technology Advances']
    }
  },
  {
    id: 'structural-health-engineer',
    title: 'Structural Health Monitoring Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop systems to monitor and assess the health of infrastructure.',
    description: 'Structural Health Monitoring Engineers design sensor systems and analysis methods to continuously monitor the condition of bridges, buildings, and other infrastructure.',
    skills: ['Structural Engineering', 'Sensor Technology', 'Data Analysis', 'Signal Processing', 'Infrastructure Assessment', 'Predictive Maintenance'],
    salaryRange: {
      local: '$70,000 - $115,000',
      global: '$60,000 - $130,000'
    },
    educationPath: ['Civil or Structural Engineering degree', 'Sensor technology training', 'Infrastructure experience'],
    futureOutlook: 'Growing field as infrastructure monitoring becomes increasingly important',
    tags: ['Structural Engineering', 'Infrastructure', 'Monitoring Systems', 'Safety'],
    links: {
      courses: ['Structural Health Monitoring', 'Infrastructure Assessment'],
      communities: ['Structural Health Monitoring Network', 'Infrastructure Engineering Society'],
      videos: ['Infrastructure Monitoring', 'Structural Health Assessment']
    }
  },
  {
    id: 'additive-manufacturing-engineer',
    title: 'Additive Manufacturing Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop and optimize 3D printing processes for various applications.',
    description: 'Additive Manufacturing Engineers design and optimize 3D printing processes, develop new printing materials, and create applications across industries from aerospace to healthcare.',
    skills: ['3D Printing Technology', 'Materials Science', 'Process Optimization', 'CAD Design', 'Quality Control', 'Manufacturing Engineering'],
    salaryRange: {
      local: '$70,000 - $115,000',
      global: '$60,000 - $130,000'
    },
    educationPath: ['Mechanical or Materials Engineering degree', '3D printing specialization', 'Manufacturing experience'],
    futureOutlook: 'High growth as 3D printing expands across industries',
    tags: ['3D Printing', 'Additive Manufacturing', 'Innovation', 'Manufacturing'],
    links: {
      courses: ['Additive Manufacturing', '3D Printing Technology'],
      communities: ['Additive Manufacturing Society', '3D Printing Network'],
      videos: ['3D Printing Innovation', 'Additive Manufacturing Applications']
    }
  },
  {
    id: 'corrosion-engineer',
    title: 'Corrosion Engineer',
    category: 'engineering-materials',
    shortDescription: 'Prevent and control material degradation in various environments.',
    description: 'Corrosion Engineers study and prevent material degradation, develop protective coatings, and design systems to extend the life of infrastructure and equipment.',
    skills: ['Materials Science', 'Electrochemistry', 'Coating Technology', 'Failure Analysis', 'Protective Systems', 'Environmental Assessment'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Materials Science or Chemical Engineering degree', 'Corrosion specialization', 'Industry experience'],
    futureOutlook: 'Steady demand for protecting infrastructure and industrial equipment',
    tags: ['Corrosion Prevention', 'Materials Protection', 'Infrastructure', 'Industrial'],
    links: {
      courses: ['Corrosion Engineering', 'Materials Protection'],
      communities: ['NACE International', 'Corrosion Engineering Network'],
      videos: ['Corrosion Prevention', 'Materials Protection Strategies']
    }
  },
  {
    id: 'photonics-engineer',
    title: 'Photonics Engineer',
    category: 'engineering-materials',
    shortDescription: 'Develop optical and laser technologies for various applications.',
    description: 'Photonics Engineers design and develop optical systems, laser technologies, and photonic devices for telecommunications, medical devices, and advanced manufacturing.',
    skills: ['Optics', 'Laser Technology', 'Photonic Devices', 'Optical Design', 'Physics', 'System Integration'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Electrical Engineering or Physics degree', 'Photonics specialization', 'Optical systems experience'],
    futureOutlook: 'Strong growth with expanding applications in telecommunications and technology',
    tags: ['Photonics', 'Laser Technology', 'Optics', 'High-tech'],
    links: {
      courses: ['Photonics Engineering', 'Laser Technology'],
      communities: ['Optical Society of America', 'Photonics Network'],
      videos: ['Photonics Applications', 'Laser Technology Innovation']
    }
  },

  // Psychology & Human Behavior (10 careers)
  {
    id: 'music-therapist',
    title: 'Neurologic Music Therapist',
    category: 'psychology-behavior',
    shortDescription: 'Use music-based interventions to treat neurological conditions.',
    description: 'Neurologic Music Therapists use evidence-based music interventions to address cognitive, sensory, and motor dysfunctions due to neurological disease or injury.',
    skills: ['Music Therapy', 'Neuroscience', 'Clinical Skills', 'Assessment', 'Treatment Planning', 'Empathy'],
    salaryRange: {
      local: '$50,000 - $75,000',
      global: '$40,000 - $85,000'
    },
    educationPath: ['Music Therapy degree', 'Neurologic music therapy certification', 'Clinical experience'],
    futureOutlook: 'Growing recognition of music therapy effectiveness in neurological rehabilitation',
    tags: ['Therapy', 'Music', 'Healthcare', 'Specialized'],
    links: {
      courses: ['Neurologic Music Therapy', 'Music and Brain Function'],
      communities: ['Academy of Neurologic Music Therapists', 'Music Therapy Association'],
      videos: ['Music Therapy in Neurology', 'Healing Power of Music']
    }
  },
  {
    id: 'behavioral-economist',
    title: 'Behavioral Economist',
    category: 'psychology-behavior',
    shortDescription: 'Study how psychological factors influence economic decision-making.',
    description: 'Behavioral Economists combine psychology and economics to understand how people make financial decisions and develop policies that account for human behavior.',
    skills: ['Economics', 'Psychology', 'Statistical Analysis', 'Research Methods', 'Data Analysis', 'Policy Development'],
    salaryRange: {
      local: '$70,000 - $120,000',
      global: '$60,000 - $140,000'
    },
    educationPath: ['Economics or Psychology degree', 'Behavioral economics specialization', 'Research experience'],
    futureOutlook: 'Growing field as behavioral insights become important for policy and business',
    tags: ['Behavioral Economics', 'Psychology', 'Policy', 'Research'],
    links: {
      courses: ['Behavioral Economics', 'Decision Science'],
      communities: ['Behavioral Economics Network', 'Decision Science Society'],
      videos: ['Behavioral Economics Applications', 'Psychology of Decision Making']
    }
  },
  {
    id: 'user-experience-researcher',
    title: 'User Experience Researcher',
    category: 'psychology-behavior',
    shortDescription: 'Study user behavior to improve product design and user experiences.',
    description: 'User Experience Researchers study how people interact with products and services to inform design decisions and improve user satisfaction and usability.',
    skills: ['User Research', 'Psychology', 'Data Analysis', 'Usability Testing', 'Survey Design', 'Behavioral Analysis'],
    salaryRange: {
      local: '$75,000 - $125,000',
      global: '$65,000 - $145,000'
    },
    educationPath: ['Psychology or Design degree', 'UX research specialization', 'Research experience'],
    futureOutlook: 'Excellent growth as user-centered design becomes standard practice',
    tags: ['UX Research', 'User Behavior', 'Design', 'Technology'],
    links: {
      courses: ['UX Research Methods', 'User Behavior Analysis'],
      communities: ['User Experience Professionals Association', 'UX Research Network'],
      videos: ['UX Research Methods', 'User Behavior Studies']
    }
  },
  {
    id: 'organizational-psychologist',
    title: 'Organizational Psychologist',
    category: 'psychology-behavior',
    shortDescription: 'Apply psychological principles to improve workplace performance and well-being.',
    description: 'Organizational Psychologists study workplace behavior and apply psychological principles to improve employee performance, satisfaction, and organizational effectiveness.',
    skills: ['Psychology', 'Organizational Behavior', 'Statistical Analysis', 'Assessment Design', 'Training Development', 'Change Management'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Psychology degree', 'Industrial/Organizational psychology specialization', 'Workplace experience'],
    futureOutlook: 'Strong demand as organizations focus on employee well-being and performance',
    tags: ['Organizational Psychology', 'Workplace', 'Employee Development', 'Performance'],
    links: {
      courses: ['Organizational Psychology', 'Workplace Behavior'],
      communities: ['Society for Industrial and Organizational Psychology', 'Workplace Psychology Network'],
      videos: ['Organizational Psychology Applications', 'Workplace Behavior Analysis']
    }
  },
  {
    id: 'forensic-psychologist',
    title: 'Forensic Psychologist',
    category: 'psychology-behavior',
    shortDescription: 'Apply psychological principles to legal and criminal justice issues.',
    description: 'Forensic Psychologists work at the intersection of psychology and law, providing assessments, expert testimony, and treatment in legal contexts.',
    skills: ['Psychology', 'Legal Knowledge', 'Assessment', 'Report Writing', 'Expert Testimony', 'Criminal Behavior Analysis'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Psychology degree', 'Forensic psychology specialization', 'Legal system experience'],
    futureOutlook: 'Steady demand in criminal justice and legal systems',
    tags: ['Forensic Psychology', 'Legal', 'Criminal Justice', 'Assessment'],
    links: {
      courses: ['Forensic Psychology', 'Psychology and Law'],
      communities: ['American Psychology-Law Society', 'Forensic Psychology Network'],
      videos: ['Forensic Psychology Careers', 'Psychology in Legal Settings']
    }
  },
  {
    id: 'sports-psychologist',
    title: 'Sports Psychologist',
    category: 'psychology-behavior',
    shortDescription: 'Help athletes improve performance through psychological techniques.',
    description: 'Sports Psychologists work with athletes and teams to improve performance, manage stress, and develop mental skills for competition and training.',
    skills: ['Psychology', 'Sports Science', 'Performance Enhancement', 'Stress Management', 'Team Dynamics', 'Mental Training'],
    salaryRange: {
      local: '$50,000 - $85,000',
      global: '$40,000 - $95,000'
    },
    educationPath: ['Psychology degree', 'Sports psychology specialization', 'Athletic experience'],
    futureOutlook: 'Growing field as mental performance becomes recognized as crucial in sports',
    tags: ['Sports Psychology', 'Performance', 'Athletics', 'Mental Training'],
    links: {
      courses: ['Sports Psychology', 'Performance Enhancement'],
      communities: ['Association for Applied Sport Psychology', 'Sports Psychology Network'],
      videos: ['Sports Psychology Techniques', 'Mental Performance Training']
    }
  },
  {
    id: 'consumer-psychologist',
    title: 'Consumer Psychologist',
    category: 'psychology-behavior',
    shortDescription: 'Study consumer behavior to inform marketing and product development.',
    description: 'Consumer Psychologists study how people make purchasing decisions and interact with brands to inform marketing strategies and product development.',
    skills: ['Psychology', 'Consumer Behavior', 'Market Research', 'Statistical Analysis', 'Survey Design', 'Brand Psychology'],
    salaryRange: {
      local: '$65,000 - $110,000',
      global: '$55,000 - $125,000'
    },
    educationPath: ['Psychology degree', 'Consumer psychology specialization', 'Marketing research experience'],
    futureOutlook: 'Strong demand as companies seek to understand consumer behavior',
    tags: ['Consumer Psychology', 'Marketing', 'Consumer Behavior', 'Research'],
    links: {
      courses: ['Consumer Psychology', 'Marketing Psychology'],
      communities: ['Society for Consumer Psychology', 'Marketing Research Association'],
      videos: ['Consumer Behavior Analysis', 'Psychology in Marketing']
    }
  },
  {
    id: 'environmental-psychologist',
    title: 'Environmental Psychologist',
    category: 'psychology-behavior',
    shortDescription: 'Study how physical environments affect human behavior and well-being.',
    description: 'Environmental Psychologists study the relationship between people and their physical environments to inform design and policy decisions that promote well-being.',
    skills: ['Psychology', 'Environmental Science', 'Research Methods', 'Statistical Analysis', 'Design Principles', 'Policy Analysis'],
    salaryRange: {
      local: '$55,000 - $90,000',
      global: '$45,000 - $105,000'
    },
    educationPath: ['Psychology degree', 'Environmental psychology specialization', 'Research experience'],
    futureOutlook: 'Growing field as environmental factors in well-being gain recognition',
    tags: ['Environmental Psychology', 'Well-being', 'Design', 'Research'],
    links: {
      courses: ['Environmental Psychology', 'Psychology of Space'],
      communities: ['Environmental Psychology Network', 'Environmental Design Research Association'],
      videos: ['Environmental Psychology Research', 'Psychology of Built Environments']
    }
  },
  {
    id: 'positive-psychology-coach',
    title: 'Positive Psychology Coach',
    category: 'psychology-behavior',
    shortDescription: 'Help individuals and organizations flourish through positive psychology principles.',
    description: 'Positive Psychology Coaches use evidence-based positive psychology interventions to help people and organizations build strengths, resilience, and well-being.',
    skills: ['Positive Psychology', 'Coaching', 'Well-being Assessment', 'Strength Development', 'Resilience Training', 'Goal Setting'],
    salaryRange: {
      local: '$45,000 - $80,000',
      global: '$35,000 - $90,000'
    },
    educationPath: ['Psychology degree', 'Positive psychology training', 'Coaching certification'],
    futureOutlook: 'Growing field as focus on well-being and flourishing increases',
    tags: ['Positive Psychology', 'Coaching', 'Well-being', 'Strengths'],
    links: {
      courses: ['Positive Psychology', 'Well-being Coaching'],
      communities: ['International Positive Psychology Association', 'Well-being Coaching Network'],
      videos: ['Positive Psychology Applications', 'Well-being Coaching Methods']
    }
  },
  {
    id: 'cyberpsychologist',
    title: 'Cyberpsychologist',
    category: 'psychology-behavior',
    shortDescription: 'Study how technology affects human behavior and mental health.',
    description: 'Cyberpsychologists study the psychological impact of technology use, digital behavior patterns, and the effects of virtual environments on mental health and well-being.',
    skills: ['Psychology', 'Technology Understanding', 'Digital Behavior Analysis', 'Research Methods', 'Mental Health Assessment', 'Data Analysis'],
    salaryRange: {
      local: '$60,000 - $100,000',
      global: '$50,000 - $115,000'
    },
    educationPath: ['Psychology degree', 'Cyberpsychology specialization', 'Technology research experience'],
    futureOutlook: 'Rapidly growing field as digital technology becomes more pervasive',
    tags: ['Cyberpsychology', 'Technology', 'Digital Behavior', 'Mental Health'],
    links: {
      courses: ['Cyberpsychology', 'Digital Behavior Analysis'],
      communities: ['Cyberpsychology Society', 'Digital Psychology Network'],
      videos: ['Cyberpsychology Research', 'Technology and Mental Health']
    }
  }
];
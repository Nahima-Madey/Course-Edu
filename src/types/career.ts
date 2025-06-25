export interface Career {
  id: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  skills: string[];
  salaryRange: {
    local: string;
    global: string;
  };
  educationPath: string[];
  futureOutlook: string;
  tags: string[];
  links: {
    courses: string[];
    communities: string[];
    videos: string[];
  };
  image?: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  count: number;
}
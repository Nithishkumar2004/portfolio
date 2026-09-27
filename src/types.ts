export interface Project {
  id: number;
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  role: string;
  impact: string;
  image: string;
  githubLink?: string;
  demoLink?: string;
  caseStudy?: string;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  issuingOrg: string;
  date: string;
  verificationLink: string;
}

export interface Experience {
  id: number;
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Skill {
  category: string;
  skill: string;
}
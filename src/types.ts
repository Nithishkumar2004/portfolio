export interface Project {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  demoLink: string;
  imageUrl?: string;
}

export interface Achievement {
  title: string;
  year: string;
  description: string;
}

export interface Certification {
  title: string;
  issuingOrg: string;
  date: string;
  verificationLink: string;
}

export interface Experience {
  companyUrl :string;
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  description: string;
}

export interface Skill {
    category:string;
    skill : string;
}
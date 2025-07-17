export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  date: string;
  description: string;
}

export interface Award {
  id: string;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  avatarUrl: string;
  about: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  awards: Award[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  design: {
    themeColor: string;
    font: 'inter' | 'space' | 'system' | 'serif';
    layout: 'classic-top' | 'modern-left' | 'centered-minimal';
  };
}

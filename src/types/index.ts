export interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  link: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  avatarUrl: string;
  about: string;
  skills: string[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
}

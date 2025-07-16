import type { PortfolioData } from '@/types';

export const templates: { name: string; data: PortfolioData }[] = [
  {
    name: 'Modern Minimalist',
    data: {
      name: 'Jane Smith',
      title: 'Frontend Developer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: "A minimalist developer focused on clean code and user-centric design. I build fast, responsive, and accessible web applications.",
      skills: ['React', 'TypeScript', 'CSS-in-JS', 'Vite', 'Testing Library'],
      projects: [
        { id: '1', name: 'Portfolio Website', description: 'A clean, fast, and responsive personal portfolio to showcase my work.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Design System', description: 'A reusable component library for a consistent UI across projects.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: {
        email: 'jane.smith@example.com',
        phone: '',
        linkedin: 'linkedin.com/in/janesmith',
        github: 'github.com/janesmith',
      },
    }
  },
  {
    name: 'Creative Professional',
    data: {
      name: 'Chris Vision',
      title: 'UI/UX Designer & Illustrator',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: "I'm a visual storyteller who translates complex ideas into beautiful, intuitive designs. My work is driven by a passion for creating delightful user experiences.",
      skills: ['Figma', 'Adobe XD', 'Illustrator', 'User Research', 'Prototyping', 'Wireframing'],
      projects: [
        { id: '1', name: 'Mobile App Redesign', description: 'Complete overhaul of a popular lifestyle app, focusing on user engagement.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Branding Identity', description: 'Created a new brand identity for a startup, including logo, color palette, and typography.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: {
        email: 'chris.vision@example.com',
        phone: '+1 987 654 3210',
        linkedin: 'linkedin.com/in/chrisvision',
        github: '',
      },
    }
  },
  {
    name: 'Corporate Consultant',
    data: {
      name: 'Dr. Evelyn Reed',
      title: 'Senior Data Scientist & AI Consultant',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: "Leveraging data to drive business value. I specialize in machine learning, predictive analytics, and developing AI strategies for enterprise-level clients. Proven track record of delivering actionable insights and measurable results.",
      skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Tableau', 'Big Data', 'Machine Learning'],
      projects: [
        { id: '1', name: 'Customer Churn Prediction', description: 'Developed a model that predicts customer churn with 94% accuracy, reducing attrition by 15%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Market Basket Analysis', description: 'Identified key product associations to optimize store layouts and promotional strategies.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: {
        email: 'e.reed@consulting.com',
        phone: '+1 111 222 3333',
        linkedin: 'linkedin.com/in/evelynreedphd',
        github: 'github.com/evelynreed',
      },
    }
  },
];

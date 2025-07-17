
import type { PortfolioData } from '@/types';

const defaultDesign = {
  themeColor: '#0ea5e9',
  font: 'inter' as const,
};

export const templates: { name: string; data: Omit<PortfolioData, 'design'> }[] = [
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
  {
    name: 'Backend Engineer',
    data: {
      name: 'Ben Archer',
      title: 'Backend Software Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Architecting scalable and reliable server-side applications. Expert in microservices, database design, and cloud infrastructure.',
      skills: ['Go', 'Python', 'Docker', 'Kubernetes', 'PostgreSQL', 'AWS'],
      projects: [
        { id: '1', name: 'Distributed Caching System', description: 'Built a high-availability caching layer for a high-traffic application.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Real-time API Gateway', description: 'Developed a secure and performant API gateway using GraphQL.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'ben.archer@email.com', phone: '', linkedin: 'linkedin.com/in/benarcher', github: 'github.com/benarcher' }
    }
  },
  {
    name: 'Digital Marketer',
    data: {
      name: 'Olivia Chen',
      title: 'Digital Marketing Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Data-driven marketing professional specializing in SEO, SEM, and content strategy to drive brand growth and user acquisition.',
      skills: ['SEO', 'Google Analytics', 'Content Marketing', 'PPC', 'Social Media', 'Email Marketing'],
      projects: [
        { id: '1', name: 'Organic Growth Campaign', description: 'Increased organic traffic by 150% in 6 months through targeted content and on-page SEO.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Product Launch Strategy', description: 'Led a multi-channel marketing campaign for a new SaaS product, exceeding lead goals by 40%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'olivia.chen@email.com', phone: '+1 234 567 891', linkedin: 'linkedin.com/in/oliviachen', github: '' }
    }
  },
  {
    name: 'Mobile Developer',
    data: {
      name: 'Leo Maxwell',
      title: 'iOS & Android Developer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Crafting seamless and intuitive mobile experiences for both iOS and Android platforms. Passionate about performance and user-centric design.',
      skills: ['Swift', 'Kotlin', 'React Native', 'Firebase', 'GraphQL', 'CI/CD'],
      projects: [
        { id: '1', name: 'Fitness Tracking App', description: 'Developed a cross-platform fitness app with real-time data sync and social features.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Augmented Reality Game', description: 'Built an interactive AR game for iOS using ARKit and SceneKit.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'leo.maxwell@email.com', phone: '', linkedin: 'linkedin.com/in/leomaxwell', github: 'github.com/leomaxwell' }
    }
  },
  {
    name: 'Product Manager',
    data: {
      name: 'Sophia Cruz',
      title: 'Senior Product Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'I bridge the gap between business goals, user needs, and technology to deliver impactful products. Experienced in agile methodologies and roadmap planning.',
      skills: ['Product Strategy', 'Agile/Scrum', 'User Research', 'Roadmapping', 'JIRA', 'Market Analysis'],
      projects: [
        { id: '1', name: 'AI-Powered Analytics Dashboard', description: 'Led the development of a B2B analytics tool from concept to launch, resulting in a 20% increase in user engagement.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Mobile App Monetization', description: 'Defined and executed a new monetization strategy, increasing ARPU by 35%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'sophia.cruz@email.com', phone: '+1 345 678 901', linkedin: 'linkedin.com/in/sophiacruz', github: '' }
    }
  },
  {
    name: 'Photographer',
    data: {
      name: 'Marco Rossi',
      title: 'Commercial & Portrait Photographer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Capturing moments and telling stories through a lens. My work focuses on creating striking visuals for brands and individuals.',
      skills: ['Lightroom', 'Photoshop', 'Studio Lighting', 'Photo Composition', 'Client Relations'],
      projects: [
        { id: '1', name: 'Fashion Lookbook', description: 'Shot and edited a complete lookbook for a new clothing line, featured in Vogue.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Corporate Headshots', description: 'Provided professional headshots for a Fortune 500 company\'s executive team.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'marco.rossi@email.com', phone: '+1 456 789 012', linkedin: 'linkedin.com/in/marcorossi', github: '' }
    }
  },
  {
    name: 'DevOps Engineer',
    data: {
      name: 'Aisha Khan',
      title: 'DevOps & Cloud Infrastructure Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Automating and streamlining development pipelines to ensure fast, reliable, and secure software delivery. Expertise in CI/CD, IaC, and monitoring.',
      skills: ['Terraform', 'Ansible', 'Jenkins', 'Prometheus', 'Grafana', 'GCP'],
      projects: [
        { id: '1', name: 'CI/CD Pipeline Automation', description: 'Designed and implemented a fully automated CI/CD pipeline, reducing deployment time by 80%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Infrastructure as Code Migration', description: 'Migrated legacy infrastructure to Terraform, improving scalability and reducing costs by 30%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'aisha.khan@email.com', phone: '', linkedin: 'linkedin.com/in/aishakhan', github: 'github.com/aishakhan' }
    }
  },
  {
    name: 'Content Writer',
    data: {
      name: 'Ethan Hunt',
      title: 'Technical Writer & Content Strategist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'I craft clear, concise, and engaging content that simplifies complex topics. Specializing in technical documentation, blog posts, and white papers.',
      skills: ['Technical Writing', 'Content Strategy', 'SEO', 'Markdown', 'Git', 'Copywriting'],
      projects: [
        { id: '1', name: 'Developer Documentation Portal', description: 'Wrote and structured the complete documentation for a public API, improving developer onboarding.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Company Tech Blog', description: 'Managed and wrote for a tech blog, growing readership by 200% over one year.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'ethan.hunt@email.com', phone: '', linkedin: 'linkedin.com/in/ethanhunt', github: '' }
    }
  },
  {
    name: 'Game Developer',
    data: {
      name: 'Zoe Infinity',
      title: 'Indie Game Developer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating immersive worlds and interactive experiences. Passionate about gameplay mechanics, narrative design, and pixel art.',
      skills: ['Unity', 'C#', 'Blender', 'Aseprite', 'Game Design', 'Shader Programming'],
      projects: [
        { id: '1', name: 'Pixel Art RPG', description: 'A retro-style RPG with a modern twist, praised for its engaging story and combat system.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Mobile Puzzle Game', description: 'A minimalist puzzle game that reached 1 million downloads on the App Store.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'zoe.infinity@email.com', phone: '', linkedin: 'linkedin.com/in/zoeinfinity', github: 'github.com/zoeinfinity' }
    }
  },
  {
    name: 'Cybersecurity Analyst',
    data: {
      name: 'Derek Vector',
      title: 'Cybersecurity Analyst',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Protecting digital assets through threat analysis, vulnerability assessment, and incident response. Certified Ethical Hacker.',
      skills: ['Network Security', 'Penetration Testing', 'Wireshark', 'Metasploit', 'SIEM', 'Python'],
      projects: [
        { id: '1', name: 'Enterprise Security Audit', description: 'Conducted a comprehensive security audit for a financial institution, identifying and mitigating critical vulnerabilities.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Incident Response Plan', description: 'Developed and implemented a new incident response plan, reducing response time by 50%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'derek.vector@email.com', phone: '', linkedin: 'linkedin.com/in/derekvector', github: 'github.com/derekvector' }
    }
  },
  {
    name: 'Financial Analyst',
    data: {
      name: 'Chloe Monet',
      title: 'Financial Analyst',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Detail-oriented financial analyst with expertise in financial modeling, forecasting, and investment analysis. CFA charterholder.',
      skills: ['Excel', 'Financial Modeling', 'Valuation', 'Bloomberg Terminal', 'SQL', 'Risk Analysis'],
      projects: [
        { id: '1', name: 'Company Valuation Model', description: 'Built a complex DCF model to value a private tech company, used for a successful acquisition.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Quarterly Earnings Report', description: 'Analyzed and presented quarterly financial results to senior management and investors.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'chloe.monet@email.com', phone: '+1 567 890 123', linkedin: 'linkedin.com/in/chloemonet', github: '' }
    }
  },
  {
    name: 'Architect',
    data: {
      name: 'Liam Structure',
      title: 'Architect & Urban Designer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Designing sustainable and human-centric spaces. My work combines aesthetics with functionality to create buildings that inspire.',
      skills: ['AutoCAD', 'Revit', 'SketchUp', 'Sustainable Design', 'Project Management', 'Building Codes'],
      projects: [
        { id: '1', name: 'Community Arts Center', description: 'Lead architect for an award-winning community center featuring green-roof technology.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Mixed-Use Residential Tower', description: 'Designed a 30-story residential building with a focus on natural light and shared spaces.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'liam.structure@email.com', phone: '+1 678 901 234', linkedin: 'linkedin.com/in/liamstructure', github: '' }
    }
  },
  {
    name: 'HR Manager',
    data: {
      name: 'Nora People',
      title: 'Human Resources Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Fostering a positive and productive work environment by managing talent acquisition, employee relations, and professional development.',
      skills: ['Talent Acquisition', 'Employee Relations', 'Performance Management', 'HRIS', 'Compliance'],
      projects: [
        { id: '1', name: 'Diversity & Inclusion Initiative', description: 'Launched a company-wide D&I program that increased representation by 15%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Performance Review Overhaul', description: 'Redesigned the performance review process to be more fair, transparent, and development-focused.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'nora.people@email.com', phone: '+1 789 012 345', linkedin: 'linkedin.com/in/norapeople', github: '' }
    }
  },
  {
    name: 'Graphic Designer',
    data: {
      name: 'Eva Brandt',
      title: 'Graphic Designer & Brand Strategist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating compelling visual identities for brands. My expertise lies in logo design, typography, and marketing collateral.',
      skills: ['Adobe Illustrator', 'InDesign', 'Photoshop', 'Branding', 'Typography', 'Print Design'],
      projects: [
        { id: '1', name: 'Startup Branding Package', description: 'Developed a complete visual identity for a tech startup, from logo to social media templates.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Event Marketing Materials', description: 'Designed all print and digital materials for a major industry conference.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'eva.brandt@email.com', phone: '', linkedin: 'linkedin.com/in/evabrandt', github: '' }
    }
  },
  {
    name: 'Mechanical Engineer',
    data: {
      name: 'Oscar Stone',
      title: 'Mechanical Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Designing and developing innovative mechanical systems. Experienced in CAD, prototyping, and stress analysis.',
      skills: ['SolidWorks', 'AutoCAD', 'FEA', 'Thermodynamics', '3D Printing', 'Product Design'],
      projects: [
        { id: '1', name: 'Robotic Arm Design', description: 'Designed a lightweight, high-precision robotic arm for automated manufacturing.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Consumer Product Prototype', description: 'Developed and tested a prototype for a new kitchen appliance, optimizing for cost and manufacturability.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'oscar.stone@email.com', phone: '', linkedin: 'linkedin.com/in/oscarstone', github: 'github.com/oscarstone' }
    }
  },
  {
    name: 'Academic Researcher',
    data: {
      name: 'Dr. Aris Thorne',
      title: 'Postdoctoral Researcher in Neuroscience',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Investigating the neural mechanisms of memory and learning. Proficient in data analysis, experimental design, and scientific writing.',
      skills: ['MATLAB', 'Python', 'Statistics', 'Microscopy', 'Grant Writing', 'Public Speaking'],
      projects: [
        { id: '1', name: 'Published Paper in Nature', description: 'First author on a paper detailing a novel neural circuit involved in spatial memory.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Conference Presentation', description: 'Presented findings on synaptic plasticity at the Society for Neuroscience annual meeting.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'aris.thorne@university.edu', phone: '', linkedin: 'linkedin.com/in/aristhorne', github: '' }
    }
  },
  {
    name: 'Video Editor',
    data: {
      name: 'Ruby Frame',
      title: 'Video Editor & Motion Graphics Artist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Weaving footage and graphics into captivating narratives. Expertise in color grading, sound design, and visual effects.',
      skills: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Color Grading', 'Sound Design'],
      projects: [
        { id: '1', name: 'Documentary Film', description: 'Edited a feature-length documentary that was selected for the Sundance Film Festival.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Commercial Advertisement', description: 'Created a high-energy TV commercial for a national sports brand.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'ruby.frame@email.com', phone: '', linkedin: 'linkedin.com/in/rubyframe', github: '' }
    }
  },
  {
    name: 'QA Engineer',
    data: {
      name: 'Quinn Veritas',
      title: 'Quality Assurance Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Ensuring software quality through meticulous testing and automation. I build robust testing frameworks to catch bugs before they reach users.',
      skills: ['Selenium', 'Cypress', 'Jest', 'Postman', 'Test Planning', 'Bug Tracking'],
      projects: [
        { id: '1', name: 'Automated E2E Test Suite', description: 'Developed a comprehensive end-to-end test suite for a complex web app, increasing test coverage by 70%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Performance Testing Framework', description: 'Established a performance testing framework using JMeter to identify and resolve bottlenecks.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'quinn.veritas@email.com', phone: '', linkedin: 'linkedin.com/in/quinnveritas', github: 'github.com/quinnveritas' }
    }
  },
  {
    name: 'Data Analyst',
    data: {
      name: 'Ava Numbers',
      title: 'Data Analyst',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Transforming raw data into actionable insights. Proficient in data visualization, statistical analysis, and dashboard creation.',
      skills: ['SQL', 'Python (Pandas)', 'Tableau', 'Power BI', 'Excel', 'Statistics'],
      projects: [
        { id: '1', name: 'Sales Performance Dashboard', description: 'Created an interactive Tableau dashboard to track sales KPIs, leading to a 10% increase in team efficiency.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Customer Segmentation Analysis', description: 'Analyzed customer data to identify key segments, informing targeted marketing strategies.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'ava.numbers@email.com', phone: '', linkedin: 'linkedin.com/in/avanumbers', github: '' }
    }
  },
  {
    name: 'Electrical Engineer',
    data: {
      name: 'Elias Circuit',
      title: 'Electrical Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Designing and developing electronic circuits and systems for various applications, from consumer electronics to industrial automation.',
      skills: ['PCB Design (Altium)', 'VHDL', 'Microcontrollers', 'Signal Processing', 'Power Electronics'],
      projects: [
        { id: '1', name: 'IoT Weather Station', description: 'Designed the hardware and firmware for a low-power IoT device that collects and transmits environmental data.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Motor Control System', description: 'Developed a high-efficiency motor control circuit for an industrial robotics application.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'elias.circuit@email.com', phone: '', linkedin: 'linkedin.com/in/eliascircuit', github: 'github.com/eliascircuit' }
    }
  },
  {
    name: 'Social Media Manager',
    data: {
      name: 'Maya Trend',
      title: 'Social Media Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Building and engaging online communities. I create and curate content that resonates with audiences and drives brand loyalty.',
      skills: ['Content Creation', 'Community Management', 'Hootsuite', 'Analytics', 'Influencer Marketing'],
      projects: [
        { id: '1', name: 'Viral Marketing Campaign', description: 'Launched a TikTok campaign that garnered over 5 million views and increased follower count by 300%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Brand Ambassador Program', description: 'Developed and managed a successful brand ambassador program with over 50 influencers.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'maya.trend@email.com', phone: '', linkedin: 'linkedin.com/in/mayatrend', github: '' }
    }
  },
  {
    name: 'Chef',
    data: {
      name: 'Julian Flavour',
      title: 'Executive Chef',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'A culinary artist with a passion for seasonal ingredients and innovative techniques. Experienced in menu development and kitchen management.',
      skills: ['Fine Dining', 'Menu Development', 'Food Costing', 'Kitchen Management', 'Pastry'],
      projects: [
        { id: '1', name: 'Michelin Star Restaurant', description: 'Led the kitchen team to earn its first Michelin star through creative menu design and impeccable execution.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Farm-to-Table Concept', description: 'Developed and launched a new restaurant concept focused on local sourcing and sustainability.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'julian.flavour@email.com', phone: '+1 890 123 456', linkedin: 'linkedin.com/in/julianflavour', github: '' }
    }
  },
  {
    name: 'Nurse',
    data: {
      name: 'Clara Hale',
      title: 'Registered Nurse, BSN',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Compassionate and dedicated registered nurse with 8 years of experience in emergency and critical care environments.',
      skills: ['Critical Care', 'Patient Advocacy', 'Wound Care', 'IV Therapy', 'Electronic Health Records (EHR)'],
      projects: [
        { id: '1', name: 'Charge Nurse Leadership', description: 'Served as charge nurse on the night shift, managing patient flow and mentoring junior staff in a high-pressure ICU.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Patient Education Program', description: 'Developed a new patient education initiative for post-operative care, improving patient outcomes and satisfaction scores.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'clara.hale@email.com', phone: '+1 901 234 567', linkedin: 'linkedin.com/in/clarahale', github: '' }
    }
  },
  {
    name: 'Teacher',
    data: {
      name: 'Samuel Teach',
      title: 'High School History Teacher',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Engaging educator dedicated to making history come alive for students. I create inclusive and interactive learning environments.',
      skills: ['Curriculum Development', 'Classroom Management', 'Differentiated Instruction', 'Educational Technology'],
      projects: [
        { id: '1', name: 'Interactive Historical Simulation', description: 'Designed a semester-long project where students simulate historical events, leading to a 25% improvement in test scores.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Oral History Project', description: 'Led a community-based oral history project, connecting students with local elders to preserve their stories.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'samuel.teach@email.com', phone: '', linkedin: 'linkedin.com/in/samuelteach', github: '' }
    }
  },
  {
    name: 'Event Planner',
    data: {
      name: 'Penelope Plan',
      title: 'Corporate Event Planner',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'I orchestrate memorable events, from large-scale conferences to intimate corporate retreats. Meticulous planner with a creative flair.',
      skills: ['Budget Management', 'Vendor Negotiation', 'Logistics', 'Event Marketing', 'Cvent'],
      projects: [
        { id: '1', name: 'Annual Tech Summit', description: 'Managed a 3-day tech summit for 2000+ attendees, overseeing everything from venue selection to speaker coordination.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'International Sales Kick-off', description: 'Organized a week-long sales event in Barcelona for a global team of 300 employees.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'penelope.plan@email.com', phone: '+1 123 456 789', linkedin: 'linkedin.com/in/penelopeplan', github: '' }
    }
  },
  {
    name: 'Machine Learning Engineer',
    data: {
      name: 'Neo Matrix',
      title: 'Machine Learning Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Building and deploying production-level machine learning models. My work focuses on NLP and computer vision.',
      skills: ['Python', 'PyTorch', 'Scikit-learn', 'Docker', 'MLOps', 'Data Pipelines'],
      projects: [
        { id: '1', name: 'Sentiment Analysis API', description: 'Developed and deployed a real-time sentiment analysis API that processes 1M requests per day.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Image Recognition System', description: 'Built an image classification model for an e-commerce platform with 98% accuracy.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'neo.matrix@email.com', phone: '', linkedin: 'linkedin.com/in/neomatrix', github: 'github.com/neomatrix' }
    }
  },
  {
    name: 'Interior Designer',
    data: {
      name: 'Stella Space',
      title: 'Interior Designer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating functional and beautiful interiors that reflect the client\'s personality. Specializing in residential and commercial spaces.',
      skills: ['Space Planning', 'Color Theory', 'Material Sourcing', 'AutoCAD', 'SketchUp', 'Client Presentations'],
      projects: [
        { id: '1', name: 'Downtown Loft Renovation', description: 'Transformed a historic loft into a modern living space, featured in Architectural Digest.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Boutique Hotel Design', description: 'Designed the interiors for a new boutique hotel, from the lobby to the guest rooms.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'stella.space@email.com', phone: '+1 234 567 890', linkedin: 'linkedin.com/in/stellaspace', github: '' }
    }
  },
  {
    name: 'Lawyer',
    data: {
      name: 'Arthur Justice',
      title: 'Corporate Lawyer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Providing legal counsel on corporate governance, mergers & acquisitions, and contract law. Committed to protecting my clients\' interests.',
      skills: ['Contract Negotiation', 'M&A', 'Corporate Governance', 'Legal Research', 'Due Diligence'],
      projects: [
        { id: '1', name: 'Tech Company Acquisition', description: 'Lead counsel on a $500M acquisition of a software company, managing all legal aspects of the deal.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Series B Funding Round', description: 'Represented a startup in its successful $50M Series B funding round.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'arthur.justice@lawfirm.com', phone: '+1 345 678 901', linkedin: 'linkedin.com/in/arthurjustice', github: '' }
    }
  },
  {
    name: 'Sales Representative',
    data: {
      name: 'Rex Closer',
      title: 'Senior Sales Representative',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Top-performing sales professional with a track record of exceeding quotas. I build strong relationships and provide solutions that drive revenue.',
      skills: ['Consultative Selling', 'CRM (Salesforce)', 'Lead Generation', 'Negotiation', 'Account Management'],
      projects: [
        { id: '1', name: 'President\'s Club Winner', description: 'Achieved 180% of my annual sales quota, earning the top spot in the company.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Enterprise Account Growth', description: 'Grew a key enterprise account from $100k to $1.5M in annual recurring revenue in two years.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'rex.closer@email.com', phone: '+1 456 789 012', linkedin: 'linkedin.com/in/rexcloser', github: '' }
    }
  },
  {
    name: 'Copywriter',
    data: {
      name: 'Willow Words',
      title: 'Freelance Copywriter',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Crafting persuasive and conversion-focused copy for websites, ads, and email campaigns. I help brands find their voice.',
      skills: ['Conversion Copywriting', 'Brand Voice', 'SEO', 'A/B Testing', 'Email Marketing', 'Storytelling'],
      projects: [
        { id: '1', name: 'E-commerce Website Copy', description: 'Rewrote all product descriptions for an online retailer, leading to a 20% increase in conversion rate.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'SaaS Email Onboarding Sequence', description: 'Created an automated email sequence that improved user activation rates by 40%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'willow.words@email.com', phone: '', linkedin: 'linkedin.com/in/willowwords', github: '' }
    }
  },
  {
    name: 'Blockchain Developer',
    data: {
      name: 'Cypher Block',
      title: 'Blockchain Developer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Building decentralized applications (dApps) and smart contracts on the Ethereum blockchain. Fascinated by the future of Web3.',
      skills: ['Solidity', 'Hardhat', 'Ethers.js', 'Web3.js', 'IPFS', 'Smart Contracts'],
      projects: [
        { id: '1', name: 'Decentralized Finance (DeFi) Protocol', description: 'Developed the smart contracts for a lending and borrowing protocol on Ethereum.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'NFT Marketplace', description: 'Built a full-stack NFT marketplace with minting, buying, and selling functionalities.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'cypher.block@email.com', phone: '', linkedin: 'linkedin.com/in/cypherblock', github: 'github.com/cypherblock' }
    }
  },
  {
    name: 'Scientist (Biotech)',
    data: {
      name: 'Dr. Lena Gene',
      title: 'Research Scientist, Biotechnology',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Developing novel therapies using CRISPR gene-editing technology. My research aims to cure genetic diseases.',
      skills: ['CRISPR-Cas9', 'Cell Culture', 'Molecular Biology', 'Next-Gen Sequencing (NGS)', 'Bioinformatics'],
      projects: [
        { id: '1', name: 'Gene-Editing Platform Development', description: 'Optimized a CRISPR delivery system, increasing editing efficiency by 50% in target cells.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Preclinical Study Lead', description: 'Led a preclinical study for a new gene therapy, demonstrating its safety and efficacy in animal models.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'lena.gene@biotech.com', phone: '', linkedin: 'linkedin.com/in/lenagene', github: '' }
    }
  },
  {
    name: '3D Artist',
    data: {
      name: 'Axel Mesh',
      title: '3D Modeler & Animator',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Bringing characters and worlds to life in 3D. I specialize in character modeling, rigging, and animation for games and film.',
      skills: ['Maya', 'ZBrush', 'Substance Painter', 'Rigging', 'Animation', 'Unreal Engine'],
      projects: [
        { id: '1', name: 'AAA Game Character', description: 'Modeled and textured a main character for a next-gen video game.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Animated Short Film', description: 'Lead animator for an award-winning animated short, responsible for character performance.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'axel.mesh@email.com', phone: '', linkedin: 'linkedin.com/in/axelmesh', github: '' }
    }
  },
  {
    name: 'IT Support Specialist',
    data: {
      name: 'Chip Reboot',
      title: 'IT Support Specialist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Friendly and effective IT professional dedicated to resolving technical issues and keeping systems running smoothly.',
      skills: ['Help Desk Support', 'Active Directory', 'Network Troubleshooting', 'Hardware Repair', 'Customer Service'],
      projects: [
        { id: '1', name: 'Office 365 Migration', description: 'Assisted in the seamless migration of 500+ users to Office 365, providing training and support.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Knowledge Base Creation', description: 'Created a comprehensive internal knowledge base, reducing recurring support tickets by 30%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'chip.reboot@email.com', phone: '+1 567 890 123', linkedin: 'linkedin.com/in/chipreboot', github: '' }
    }
  },
  {
    name: 'Business Analyst',
    data: {
      name: 'Brooke Process',
      title: 'Business Analyst',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'I translate business needs into technical requirements, optimizing processes and driving efficiency. Certified in business analysis.',
      skills: ['Requirements Gathering', 'Process Modeling (BPMN)', 'Agile', 'SQL', 'User Stories'],
      projects: [
        { id: '1', name: 'CRM Implementation', description: 'Acted as the lead business analyst for a company-wide Salesforce implementation, ensuring stakeholder alignment.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Workflow Automation Project', description: 'Analyzed and redesigned a key business workflow, resulting in a 40% reduction in manual effort.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'brooke.process@email.com', phone: '', linkedin: 'linkedin.com/in/brookeprocess', github: '' }
    }
  },
  {
    name: 'Musician',
    data: {
      name: 'Melody Harmony',
      title: 'Composer & Multi-Instrumentalist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating emotive soundscapes and memorable melodies. I compose music for film, games, and artists.',
      skills: ['Composition', 'Piano', 'Guitar', 'Music Production (Ableton)', 'Orchestration'],
      projects: [
        { id: '1', name: 'Film Score', description: 'Composed the original score for an independent film that won Best Original Score at a film festival.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Solo Album', description: 'Wrote, performed, and produced a full-length instrumental album.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'melody.harmony@email.com', phone: '', linkedin: 'linkedin.com/in/melodyharmony', github: '' }
    }
  },
  {
    name: 'Civil Engineer',
    data: {
      name: 'Bridge Walker',
      title: 'Civil Engineer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Designing and overseeing the construction of public infrastructure, from bridges to water systems. PE licensed.',
      skills: ['Structural Analysis', 'AutoCAD Civil 3D', 'Project Management', 'Construction Materials', 'Hydrology'],
      projects: [
        { id: '1', name: 'Highway Interchange Design', description: 'Lead design engineer for a major highway interchange project, improving traffic flow and safety.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Stormwater Management System', description: 'Designed a sustainable stormwater management system for a new residential development.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'bridge.walker@email.com', phone: '+1 678 901 234', linkedin: 'linkedin.com/in/bridgewalker', github: '' }
    }
  },
  {
    name: 'Recruiter',
    data: {
      name: 'Hunter Talent',
      title: 'Technical Recruiter',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Connecting top tech talent with innovative companies. I build relationships and help grow high-performing engineering teams.',
      skills: ['Sourcing', 'Interviewing', 'Candidate Experience', 'LinkedIn Recruiter', 'Applicant Tracking Systems (ATS)'],
      projects: [
        { id: '1', name: 'Senior Engineering Hires', description: 'Successfully sourced and hired 15 senior software engineers in one quarter, meeting critical team growth goals.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'University Recruiting Program', description: 'Established a new university recruiting program, creating a pipeline of early-career talent.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'hunter.talent@email.com', phone: '+1 789 012 345', linkedin: 'linkedin.com/in/huntertalent', github: '' }
    }
  },
  {
    name: 'Illustrator',
    data: {
      name: 'Lina Sketch',
      title: 'Freelance Illustrator',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating whimsical and narrative illustrations for books, magazines, and branding. My style is colorful and character-driven.',
      skills: ['Procreate', 'Adobe Illustrator', 'Character Design', 'Storyboarding', 'Editorial Illustration'],
      projects: [
        { id: '1', name: 'Children\'s Book', description: 'Illustrated a best-selling children\'s book, published by a major publishing house.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Magazine Cover', description: 'Created the cover illustration for an issue of The New Yorker.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'lina.sketch@email.com', phone: '', linkedin: 'linkedin.com/in/linasketch', github: '' }
    }
  },
  {
    name: 'Cloud Architect',
    data: {
      name: 'Sky Stratus',
      title: 'Cloud Solutions Architect',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Designing secure, scalable, and cost-effective cloud solutions on AWS and Azure. AWS Certified Solutions Architect Professional.',
      skills: ['AWS', 'Azure', 'Solution Design', 'Cloud Security', 'Serverless', 'Cost Optimization'],
      projects: [
        { id: '1', name: 'Enterprise Cloud Migration', description: 'Architected the migration of a large enterprise from on-premise data centers to AWS, resulting in 40% cost savings.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Serverless Data Processing Pipeline', description: 'Designed a serverless pipeline using AWS Lambda and Kinesis for real-time data processing.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'sky.stratus@email.com', phone: '', linkedin: 'linkedin.com/in/skystratus', github: 'github.com/skystratus' }
    }
  },
  {
    name: 'Journalist',
    data: {
      name: 'Piper Report',
      title: 'Investigative Journalist',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Uncovering stories that matter. I have a passion for long-form investigative journalism and data-driven reporting.',
      skills: ['Investigative Reporting', 'Interviewing', 'Fact-Checking', 'Data Journalism', 'Ethics'],
      projects: [
        { id: '1', name: 'Award-Winning Feature Story', description: 'Wrote an exposé on corporate corruption that won a national journalism award.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Documentary Podcast Series', description: 'Hosted and produced an 8-part podcast series on a historical cold case.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'piper.report@email.com', phone: '', linkedin: 'linkedin.com/in/piperreport', github: '' }
    }
  },
  {
    name: 'UX Researcher',
    data: {
      name: 'Riley Insight',
      title: 'UX Researcher',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'I am the voice of the user. I conduct qualitative and quantitative research to inform product strategy and design decisions.',
      skills: ['User Interviews', 'Surveys', 'Usability Testing', 'Persona Development', 'Journey Mapping'],
      projects: [
        { id: '1', name: 'Generative Research Study', description: 'Conducted a foundational research study to identify unmet user needs, leading to a new product line.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'A/B Testing Program', description: 'Established and ran an A/B testing program that led to a 15% improvement in user conversion.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'riley.insight@email.com', phone: '', linkedin: 'linkedin.com/in/rileyinsight', github: '' }
    }
  },
  {
    name: 'Customer Success Manager',
    data: {
      name: 'Carter Client',
      title: 'Customer Success Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Ensuring clients achieve their goals with our product. I build strong relationships, drive adoption, and reduce churn.',
      skills: ['Account Management', 'Onboarding', 'Customer Advocacy', 'CRM', 'Problem-Solving'],
      projects: [
        { id: '1', name: 'Churn Reduction Initiative', description: 'Developed a proactive outreach program that reduced customer churn by 25% in six months.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Quarterly Business Reviews (QBRs)', description: 'Implemented a new QBR process for key accounts, increasing customer satisfaction and identifying expansion opportunities.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'carter.client@email.com', phone: '+1 890 123 456', linkedin: 'linkedin.com/in/carterclient', github: '' }
    }
  },
  {
    name: 'Animator (2D)',
    data: {
      name: 'Frank Motion',
      title: '2D Animator & Motion Designer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Bringing characters and graphics to life with fluid motion. I specialize in character animation and explainer videos.',
      skills: ['Adobe Animate', 'After Effects', 'Toon Boom Harmony', 'Character Animation', 'Motion Graphics'],
      projects: [
        { id: '1', name: 'Animated TV Series', description: 'Lead character animator for a popular animated series on a major streaming platform.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'SaaS Explainer Video', description: 'Created an animated explainer video for a software company that increased website conversions by 30%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'frank.motion@email.com', phone: '', linkedin: 'linkedin.com/in/frankmotion', github: '' }
    }
  },
  {
    name: 'Database Administrator',
    data: {
      name: 'Tabitha Index',
      title: 'Database Administrator (DBA)',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Managing and maintaining the performance, integrity, and security of databases. Expert in SQL and NoSQL databases.',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Performance Tuning', 'Backup & Recovery', 'Database Security'],
      projects: [
        { id: '1', name: 'Database Performance Optimization', description: 'Optimized database queries and indexing for a high-traffic application, reducing average query time by 75%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Disaster Recovery Plan', description: 'Designed and implemented a comprehensive disaster recovery plan, ensuring business continuity.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'tabitha.index@email.com', phone: '', linkedin: 'linkedin.com/in/tabithaindex', github: 'github.com/tabithaindex' }
    }
  },
  {
    name: 'Fashion Designer',
    data: {
      name: 'Vera Vogue',
      title: 'Fashion Designer',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Creating innovative and wearable fashion. My work has been featured in New York Fashion Week.',
      skills: ['Pattern Making', 'Draping', 'Textile Knowledge', 'Fashion Illustration', 'Trend Forecasting'],
      projects: [
        { id: '1', name: 'Runway Collection', description: 'Designed and produced a 20-piece collection for New York Fashion Week, receiving positive reviews.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Sustainable Clothing Line', description: 'Launched a small, sustainable clothing line using upcycled materials.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'vera.vogue@email.com', phone: '', linkedin: 'linkedin.com/in/veravogue', github: '' }
    }
  },
  {
    name: 'Operations Manager',
    data: {
      name: 'Ron Systems',
      title: 'Operations Manager',
      avatarUrl: 'https://placehold.co/128x128.png',
      about: 'Optimizing business processes to improve efficiency, reduce costs, and ensure quality. Six Sigma Green Belt certified.',
      skills: ['Process Improvement', 'Supply Chain Management', 'Logistics', 'Budgeting', 'Lean Six Sigma'],
      projects: [
        { id: '1', name: 'Warehouse Optimization Project', description: 'Redesigned the warehouse layout and inventory management system, increasing order fulfillment speed by 25%.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
        { id: '2', name: 'Cost Reduction Initiative', description: 'Led a cross-functional team to identify and implement cost-saving measures, resulting in $2M in annual savings.', imageUrl: 'https://placehold.co/400x300.png', link: '#' },
      ],
      contact: { email: 'ron.systems@email.com', phone: '+1 901 234 567', linkedin: 'linkedin.com/in/ronsystems', github: '' }
    }
  }
];

export const templatesWithDesign = templates.map(t => ({ ...t, data: { ...t.data, design: defaultDesign }}));

export interface PersonalInfo {
    name: string;
    title: string;
    about: string;
    skills: {
      frontend: string[];
      backend: string[];
      devops: string[];
    };
    contacts: {
      email: string;
      github: string;
      linkedin: string;
      twitter?: string;
    };
  }
  
  export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    demo: string;
    github: string;
    highlights: string[];
  }
  
  export interface BlogPost {
    title: string;
    excerpt: string;
    date: string;
    url: string;
  }
  
  export interface NavbarProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
    personalInfo: PersonalInfo;
  }
  
  export interface HeroProps {
    personalInfo: PersonalInfo;
  }
  
  export interface AboutProps {
    personalInfo: PersonalInfo;
  }
  
  export interface ProjectsProps {
    projects: Project[];
  }
  
  export interface BlogProps {
    posts: BlogPost[];
  }
  
  export interface ContactProps {
    personalInfo: PersonalInfo;
  }
  
  export interface FooterProps {
    personalInfo: PersonalInfo;
  }
export const personalInfo = {
    name: "Nitish Kumar",
    title: "Full Stack Developer",
    about: `I'm a passionate Full Stack Developer with 5+ years of experience crafting robust web applications. 
    My expertise spans across modern frontend frameworks, scalable backend architectures, and cloud technologies.
    I have a strong focus on creating performant, user-friendly applications that solve real-world problems.`,
    skills: {
      frontend: [
        "React", 
        "Next.js", 
        "TypeScript", 
        "Tailwind CSS",
        "Redux",
        "GraphQL",
        "Jest",
        "Cypress"
      ],
      backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "RESTful APIs",
        "GraphQL",
        "Microservices"
      ],
      devops: [
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
        "GitHub Actions",
        "Jenkins",
        "Monitoring & Logging"
      ]
    },
    contacts: {
      email: "jane.smith@example.com",
      github: "https://github.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      twitter: "https://twitter.com/janesmith"
    }
  }
  
  export const projects = [
    {
      title: "E-commerce Platform",
      description: `A full-stack e-commerce platform featuring real-time inventory management, 
      secure payment processing, and an intuitive admin dashboard. Implemented features like 
      cart management, order tracking, and product recommendations.`,
      tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "AWS"],
      image: "/projects/ecommerce.jpg",
      demo: "https://ecommerce.example.com",
      github: "https://github.com/janesmith/ecommerce",
      highlights: [
        "Implemented real-time inventory tracking using WebSocket",
        "Integrated Stripe payment processing",
        "Built responsive UI with server-side rendering",
        "Achieved 98% test coverage with Jest and Cypress"
      ]
    },
    {
      title: "Task Management System",
      description: `A collaborative task management platform with real-time updates, 
      file sharing, and team communication features. The system includes project timeline 
      visualization, resource allocation, and automated reporting.`,
      tech: ["React", "Express", "MongoDB", "Socket.io", "Docker"],
      image: "/projects/task-manager.jpg",
      demo: "https://taskmanager.example.com",
      github: "https://github.com/janesmith/task-manager",
      highlights: [
        "Built real-time collaboration using Socket.io",
        "Implemented drag-and-drop task management",
        "Designed microservices architecture",
        "Containerized application using Docker"
      ]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: `A sophisticated analytics platform that leverages machine learning 
      for data visualization and predictive analytics. Features include customizable 
      dashboards, automated report generation, and trend analysis.`,
      tech: ["React", "Python", "TensorFlow", "FastAPI", "PostgreSQL"],
      image: "/projects/analytics.jpg",
      demo: "https://analytics.example.com",
      github: "https://github.com/janesmith/analytics",
      highlights: [
        "Integrated machine learning models for prediction",
        "Built interactive data visualizations",
        "Implemented real-time data processing",
        "Optimized performance for large datasets"
      ]
    }
  ]
  
  export const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement scalable microservices architecture using Node.js and Docker.",
      date: "2024-01-15",
      url: "/blog/scalable-microservices"
    },
    {
      title: "Advanced React Patterns for Enterprise Applications",
      excerpt: "Explore advanced React patterns and best practices for building maintainable enterprise applications.",
      date: "2024-02-01",
      url: "/blog/react-patterns"
    },
    {
      title: "Optimizing PostgreSQL for High-Traffic Applications",
      excerpt: "Tips and techniques for optimizing PostgreSQL performance in high-traffic web applications.",
      date: "2024-02-15",
      url: "/blog/postgresql-optimization"
    }
  ]